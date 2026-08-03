/**
 * Finalize the kitchen asset set without additional API calls:
 * - build logo derivatives from the kitchen vector master
 * - replace legacy property cards with current kitchen imagery
 * - rebuild the photo catalog
 */
import {
  copyFileSync,
  existsSync,
  mkdirSync,
  readFileSync,
  renameSync,
  rmSync,
} from "node:fs";
import { dirname, join } from "node:path";
import { execFileSync } from "node:child_process";
import { fileURLToPath } from "node:url";
import sharp from "sharp";

const ROOT = join(dirname(fileURLToPath(import.meta.url)), "..");
const at = (path) => join(ROOT, ...path.split("/"));

const logoSvgPath = at("assets/logo-kitchen.svg");
if (!existsSync(logoSvgPath)) {
  throw new Error("Missing assets/logo-kitchen.svg");
}
const logoInput = readFileSync(logoSvgPath);

for (const size of [1024, 512, 256]) {
  const name = size === 1024 ? "logo.png" : `logo-${size}.png`;
  await sharp(logoInput, { density: 320 })
    .resize(size, size)
    .png({ compressionLevel: 9 })
    .toFile(at(`public/${name}.new`));
}

await sharp(logoInput, { density: 320 })
  .resize(1024, 1024)
  .png({ compressionLevel: 9 })
  .toFile(at("assets/logo-master.png"));

for (const size of [1024, 512, 256]) {
  const name = size === 1024 ? "logo.png" : `logo-${size}.png`;
  const target = at(`public/${name}`);
  const source = at(`public/${name}.new`);
  rmSync(target, { force: true });
  renameSync(source, target);
}

await sharp(logoInput, { density: 320 })
  .resize(256, 256)
  .png({ compressionLevel: 9 })
  .toFile(at("app/icon.png"));
await sharp(logoInput, { density: 320 })
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
