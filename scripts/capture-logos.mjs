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
    const info = await sharp(raw).trim({ threshold: 6 }).extend({ top: 8, bottom: 8, left: 12, right: 12, background: "#00000000" }).webp({ quality: 90 }).toFile(join(out, "logo.webp"));
    rmSync(raw, { force: true });
    sizes[slug] = [info.width, info.height];
    console.log(slug, info.width, info.height);
    await context.close();
  }
} finally {
  await browser.close();
}
writeFileSync(join("src", "data", "logo-sizes.json"), `${JSON.stringify(sizes, null, 2)}\n`);
