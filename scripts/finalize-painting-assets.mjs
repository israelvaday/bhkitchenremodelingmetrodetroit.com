/**
 * Finalize the kitchen asset set without additional API calls:
 * - build logo derivatives from the approved master (with vector fallback)
 * - replace legacy property cards with current kitchen imagery
 * - fill any missing gallery/service variant from a current kitchen asset
 * - rebuild the photo catalog
 */
import {
  copyFileSync,
  existsSync,
  mkdirSync,
  renameSync,
  rmSync,
} from "node:fs";
import { dirname, join } from "node:path";
import { execFileSync } from "node:child_process";
import { fileURLToPath } from "node:url";
import sharp from "sharp";

const ROOT = join(dirname(fileURLToPath(import.meta.url)), "..");
const at = (path) => join(ROOT, ...path.split("/"));

const logoSvg = Buffer.from(`
<svg xmlns="http://www.w3.org/2000/svg" width="1024" height="1024" viewBox="0 0 1024 1024">
  <rect x="54" y="54" width="916" height="916" rx="220" fill="#0B1F3A"/>
  <rect x="72" y="72" width="880" height="880" rx="202" fill="none" stroke="#D4A24C" stroke-width="28"/>
  <rect x="180" y="680" width="664" height="48" rx="12" fill="#D4A24C"/>
  <rect x="220" y="260" width="584" height="360" rx="24" fill="none" stroke="#D4A24C" stroke-width="36"/>
  <rect x="260" y="300" width="200" height="280" rx="8" fill="#D4A24C" opacity="0.85"/>
  <rect x="480" y="300" width="200" height="280" rx="8" fill="#D4A24C" opacity="0.85"/>
  <rect x="700" y="300" width="64" height="280" rx="8" fill="#FFF6DF" opacity="0.5"/>
  <text x="212" y="620" fill="#FFF6DF" font-family="Arial, Helvetica, sans-serif" font-size="256" font-weight="900" letter-spacing="-24">BH</text>
</svg>
`);
const approvedLogo = at("assets/logo-master.png");
const logoInput = existsSync(approvedLogo) ? approvedLogo : logoSvg;

for (const size of [1024, 512, 256]) {
  const name = size === 1024 ? "logo.png" : `logo-${size}.png`;
  await sharp(logoInput).resize(size, size).png({ compressionLevel: 9 }).toFile(at(`public/${name}.new`));
}

for (const size of [1024, 512, 256]) {
  const name = size === 1024 ? "logo.png" : `logo-${size}.png`;
  const target = at(`public/${name}`);
  const source = at(`public/${name}.new`);
  rmSync(target, { force: true });
  renameSync(source, target);
}

await sharp(logoInput)
  .resize(256, 256)
  .png({ compressionLevel: 9 })
  .toFile(at("app/icon.png"));
await sharp(logoInput)
  .resize(180, 180)
  .png({ compressionLevel: 9 })
  .toFile(at("app/apple-icon.png"));

function copy(source, target) {
  const from = at(source);
  const to = at(target);
  if (!existsSync(from)) throw new Error(`Missing kitchen source asset: ${source}`);
  mkdirSync(dirname(to), { recursive: true });
  copyFileSync(from, to);
  console.log(`Wrote ${target} from ${source}`);
}

copy(
  "public/photos/quote/custom-kitchen-remodeling.png",
  "public/photos/quote/property-home.png"
);
copy(
  "public/photos/quote/kitchen-appliance-layout.png",
  "public/photos/quote/property-business.png"
);
copy(
  "public/photos/quote/partial-kitchen-refresh.png",
  "public/photos/quote/property-multifamily.png"
);
copy(
  "public/photos/quote/kitchen-island-installation.png",
  "public/photos/quote/property-other.png"
);

execFileSync(
  process.execPath,
  [at("scripts/rebuild-photos-gallery.mjs")],
  { cwd: ROOT, stdio: "inherit" }
);

console.log("Kitchen asset finalization complete");
