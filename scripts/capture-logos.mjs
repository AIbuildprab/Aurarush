// Captures each client's header logo from its live site, for the home page ticker.
// Usage: node scripts/capture-logos.mjs [slug ...]
import { mkdirSync, rmSync, writeFileSync } from "node:fs";
import { join } from "node:path";
import { chromium } from "playwright-core";
import sharp from "sharp";

const sites = {
  "stpt-coaching": "https://www.stptcoaching.com/",
  "mindfull-food-fitness": "https://www.mindfullfoodfitness.com/",
  "ninh-studio": "https://www.ninhstudio.ca/",
  "green-lotus-landscape": "https://www.greenlotuslandscapes.ca/",
  "raindrops-beauty-salon": "https://www.raindropsbeautysalonltd.com/",
};


/**
 * Makes the logo's background transparent. The background colour is the average of the four corners;
 * pixels close to it become transparent, with a soft ramp so edges stay smooth.
 */
function removeBackground(data, width, height) {
  const corner = (x, y) => {
    const i = (y * width + x) * 4;
    return [data[i], data[i + 1], data[i + 2]];
  };
  const corners = [corner(0, 0), corner(width - 1, 0), corner(0, height - 1), corner(width - 1, height - 1)];
  const bg = [0, 1, 2].map((c) => corners.reduce((sum, px) => sum + px[c], 0) / 4);
  const LOW = 38; // fully transparent within this colour distance
  const HIGH = 96; // fully opaque beyond this
  const out = Buffer.from(data);
  for (let i = 0; i < out.length; i += 4) {
    const d = Math.hypot(out[i] - bg[0], out[i + 1] - bg[1], out[i + 2] - bg[2]);
    const alpha = d <= LOW ? 0 : d >= HIGH ? 1 : (d - LOW) / (HIGH - LOW);
    out[i + 3] = Math.round(out[i + 3] * alpha);
  }
  return out;
}

const wanted = process.argv.slice(2);
const targets = Object.entries(sites).filter(([slug]) => wanted.length === 0 || wanted.includes(slug));
const sizes = {};

const browser = await chromium.launch({ channel: "msedge", headless: true });
try {
  for (const [slug, url] of targets) {
    const context = await browser.newContext({ viewport: { width: 1440, height: 900 }, deviceScaleFactor: 2 });
    const page = await context.newPage();
    await page.goto(url, { waitUntil: "domcontentloaded", timeout: 45000 });
    await page.waitForLoadState("networkidle", { timeout: 30000 }).catch(() => {});
    await page.waitForTimeout(4000);

    // The brand link in the header: the first link to the home page.
    const brand = page
      .locator('header a[href="/"], header a[href="./"], header a[href$="/"][aria-label], nav a[href="/"], a[aria-label*="home" i]')
      .first();
    const out = join("public", "work", slug);
    mkdirSync(out, { recursive: true });
    const raw = join(out, "logo.png");
    await brand.screenshot({ path: raw });
    const trimmed = await sharp(raw).trim({ threshold: 6 }).ensureAlpha().raw().toBuffer({ resolveWithObject: true });
    const clear = removeBackground(trimmed.data, trimmed.info.width, trimmed.info.height);
    const info = await sharp(clear, { raw: { width: trimmed.info.width, height: trimmed.info.height, channels: 4 } })
      .extend({ top: 8, bottom: 8, left: 12, right: 12, background: { r: 0, g: 0, b: 0, alpha: 0 } })
      .webp({ quality: 92, alphaQuality: 100 })
      .toFile(join(out, "logo.webp"));
    rmSync(raw, { force: true });
    sizes[slug] = [info.width, info.height];
    console.log(slug, info.width, info.height);
    await context.close();
  }
} finally {
  await browser.close();
}
writeFileSync(join("src", "data", "logo-sizes.json"), `${JSON.stringify(sizes, null, 2)}\n`);
