// Captures desktop and phone screenshots of the live client sites for the case studies.
// Drives the Microsoft Edge that ships with Windows (no browser download), then converts to WebP.
// Usage: node scripts/capture-work.mjs [slug ...]
import { existsSync, mkdirSync, readFileSync, readdirSync, rmSync, writeFileSync } from "node:fs";
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

const DESKTOP = { width: 1440, height: 900 };
const PHONE = { width: 390, height: 844 };
const TOUR = {
  desktop: { width: 1100, maxSourceHeight: 7000 },
  phone: { width: 480, maxSourceHeight: 10000 },
};
const MANIFEST = join("src", "data", "tour-sizes.json");
const manifest = existsSync(MANIFEST) ? JSON.parse(readFileSync(MANIFEST, "utf8")) : {};

async function settle(page) {
  await page.waitForLoadState("networkidle", { timeout: 30000 }).catch(() => {});
  await page.evaluate(() => document.fonts.ready);
  // Scroll the whole page so lazy images and reveal-on-scroll content load, then return to the top.
  await page.evaluate(async () => {
    const step = window.innerHeight * 0.8;
    for (let y = 0; y < document.documentElement.scrollHeight; y += step) {
      window.scrollTo(0, y);
      await new Promise((resolve) => setTimeout(resolve, 150));
    }
    window.scrollTo(0, 0);
  });
  await page.waitForTimeout(4500); // let intro animations finish
}

async function hideNoise(page) {
  await page.addStyleTag({
    content: `[id*="cookie" i], [class*="cookie" i], [class*="consent" i], [aria-label*="cookie" i] { display: none !important; }`,
  });
  // Remove fixed "install this app" prompts.
  await page.evaluate(() => {
    document.querySelectorAll("div, aside, section").forEach((el) => {
      const text = el.textContent ?? "";
      if (text.length < 240 && /to your home screen/i.test(text) && getComputedStyle(el).position === "fixed") el.remove();
    });
  });
}

async function shoot(page, file, y) {
  await page.evaluate((top) => window.scrollTo(0, top), y);
  await page.waitForTimeout(1600);
  const raw = file.replace(".webp", ".png");
  await page.screenshot({ path: raw });
  return raw;
}

const browser = await chromium.launch({ channel: "msedge", headless: true });

try {
  for (const [slug, url] of targets) {
    const out = join("public", "work", slug);
    mkdirSync(out, { recursive: true });
    for (const file of readdirSync(out)) rmSync(join(out, file), { force: true });
    console.log(`Capturing ${slug}`);

    for (const mode of ["desktop", "phone"]) {
      const phone = mode === "phone";
      const context = await browser.newContext({
        viewport: phone ? PHONE : DESKTOP,
        deviceScaleFactor: phone ? 2 : 1,
        isMobile: phone,
        hasTouch: phone,
        userAgent: phone
          ? "Mozilla/5.0 (iPhone; CPU iPhone OS 17_0 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/17.0 Mobile/15E148 Safari/604.1"
          : undefined,
        reducedMotion: "no-preference",
      });
      const page = await context.newPage();
      await page.goto(url, { waitUntil: "domcontentloaded", timeout: 45000 });
      await settle(page);
      await hideNoise(page);

      // Hero shot, taken from the top of the page.
      const name = phone ? "mobile" : "desktop";
      const hero = await shoot(page, join(out, `${name}.webp`), 0);
      const [w, h] = phone ? [640, 1386] : [1600, 1000];
      await sharp(hero).resize(w, h, { fit: "cover", position: "top" }).webp({ quality: 82 }).toFile(hero.replace(".png", ".webp"));
      rmSync(hero, { force: true });

      // Whole page, for the scrolling walkthrough on the case study.
      await page.evaluate(() => window.scrollTo(0, 0));
      await page.waitForTimeout(800);
      const cfg = phone ? TOUR.phone : TOUR.desktop;
      const viewportWidth = phone ? PHONE.width : DESKTOP.width;
      const total = await page.evaluate(() => document.documentElement.scrollHeight);
      const height = Math.min(total, cfg.maxSourceHeight);
      const full = join(out, `tour-${mode}.png`);
      await page.screenshot({ path: full, fullPage: true, clip: { x: 0, y: 0, width: viewportWidth, height } });
      const info = await sharp(full).resize({ width: cfg.width }).webp({ quality: 72 }).toFile(full.replace(".png", ".webp"));
      rmSync(full, { force: true });
      manifest[slug] = { ...manifest[slug], [mode]: [info.width, info.height] };
      
      await context.close();
    }
  }
} finally {
  await browser.close();
}
mkdirSync("src/data", { recursive: true });
writeFileSync(MANIFEST, `${JSON.stringify(manifest, null, 2)}
`);
console.log("Done. Open the images in public/work and check none is blank or mid-animation.");
