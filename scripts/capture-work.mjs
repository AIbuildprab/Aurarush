// Captures desktop and mobile screenshots of the live client sites for the case studies.
// Uses the Microsoft Edge that ships with Windows in headless mode, then sharp for WebP.
// Usage: node scripts/capture-work.mjs [slug ...]
import { spawnSync } from "node:child_process";
import { existsSync, mkdirSync, rmSync } from "node:fs";
import { tmpdir } from "node:os";
import { join } from "node:path";
import sharp from "sharp";

const EDGE = [
  "C:/Program Files (x86)/Microsoft/Edge/Application/msedge.exe",
  "C:/Program Files/Microsoft/Edge/Application/msedge.exe",
  "C:/Program Files/Google/Chrome/Application/chrome.exe",
].find(existsSync);

if (!EDGE) {
  console.error("No Edge or Chrome found.");
  process.exit(1);
}

const sites = {
  "stpt-coaching": "https://www.stptcoaching.com/",
  "mindfull-food-fitness": "https://www.mindfullfoodfitness.com/",
  "ninh-studio": "https://www.ninhstudio.ca/",
  "green-lotus-landscape": "https://www.greenlotuslandscapes.ca/",
  "raindrops-beauty-salon": "https://www.raindropsbeautysalonltd.com/",
};

const wanted = process.argv.slice(2);
const targets = Object.entries(sites).filter(([slug]) => wanted.length === 0 || wanted.includes(slug));
const scratch = join(tmpdir(), "aurarush-capture");
mkdirSync(scratch, { recursive: true });

const MOBILE_UA =
  "Mozilla/5.0 (iPhone; CPU iPhone OS 17_0 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/17.0 Mobile/15E148 Safari/604.1";

function shoot(url, file, width, height, mobile) {
  const args = [
    "--headless=new",
    "--disable-gpu",
    "--hide-scrollbars",
    "--no-first-run",
    "--force-device-scale-factor=1",
    `--window-size=${width},${height}`,
    "--virtual-time-budget=30000",
    `--screenshot=${file}`,
    ...(mobile ? [`--user-agent=${MOBILE_UA}`] : []),
    url,
  ];
  const result = spawnSync(EDGE, args, { stdio: "ignore", timeout: 60000 });
  if (!existsSync(file)) throw new Error(`No screenshot for ${url} (status ${result.status})`);
}

for (const [slug, url] of targets) {
  const out = join("public", "work", slug);
  mkdirSync(out, { recursive: true });
  const desktopRaw = join(scratch, `${slug}-desktop.png`);
  const mobileRaw = join(scratch, `${slug}-mobile.png`);
  console.log(`Capturing ${slug}`);
  shoot(url, desktopRaw, 1440, 900, false);
  shoot(url, mobileRaw, 500, 1083, true);
  await sharp(desktopRaw).resize(1600, 1000, { fit: "cover", position: "top" }).webp({ quality: 82 }).toFile(join(out, "desktop.webp"));
  await sharp(mobileRaw).resize(640, 1386, { fit: "cover", position: "top" }).webp({ quality: 82 }).toFile(join(out, "mobile.webp"));
  rmSync(desktopRaw, { force: true });
  rmSync(mobileRaw, { force: true });
}
console.log("Done. Check each image: a blank or black hero means the page needs a longer wait.");
