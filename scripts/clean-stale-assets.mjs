/**
 * Remove obsolete generated assets after the complete kitchen image set has
 * been created. The script validates every required replacement first.
 */
import {
  existsSync,
  readdirSync,
  rmSync,
  statSync,
} from "node:fs";
import { dirname, join, relative } from "node:path";
import { fileURLToPath } from "node:url";

const ROOT = join(dirname(fileURLToPath(import.meta.url)), "..");
const serviceSlugs = [
  "custom-kitchen-remodeling",
  "cabinet-installation",
  "countertop-replacement",
  "kitchen-design",
  "kitchen-backsplash-tile",
  "kitchen-lighting-upgrades",
  "kitchen-flooring",
  "kitchen-island-installation",
  "kitchen-appliance-layout",
  "partial-kitchen-refresh",
];
const galleryFiles = [
  "kitchen-gallery--modern-white-shaker.png",
  "kitchen-gallery--navy-gold-remodel.png",
  "kitchen-gallery--cabinet-install-progress.png",
  "kitchen-gallery--countertop-template.png",
  "kitchen-gallery--subway-backsplash.png",
  "kitchen-gallery--open-concept.png",
  "kitchen-gallery--butcher-block-island.png",
  "kitchen-gallery--lighting-upgrade.png",
  "kitchen-gallery--luxury-vinyl-floor.png",
  "kitchen-gallery--compact-galley.png",
  "kitchen-gallery--farmhouse-sink.png",
  "kitchen-gallery--pantry-wall.png",
  "kitchen-gallery--two-tone-cabinets.png",
  "kitchen-gallery--before-after-staging.png",
];
const blogSlugs = [
  "kitchen-remodel-planning-metro-detroit",
  "cabinet-installation-vs-refacing",
  "countertop-materials-michigan-homes",
  "hire-kitchen-remodeling-contractor-michigan",
  "kitchen-design-layout-tips",
  "kitchen-remodel-timeline-budget",
];
const quoteFiles = [
  ...serviceSlugs.map((slug) => `${slug}.png`),
  "property-home.png",
  "property-business.png",
  "property-multifamily.png",
  "property-other.png",
];

const keep = new Set([
  "public/logo.png",
  "public/logo-256.png",
  "public/logo-512.png",
  "public/about/about-hero.png",
  "public/about/about-workshop.png",
  "public/photos/branding-generated--hero-kitchen-metro-detroit.png",
  "public/photos/branding-generated--metro-detroit-map.png",
  ...serviceSlugs.map((slug) => `public/photos/service-hero-${slug}.png`),
  ...galleryFiles.map((file) => `public/photos/${file}`),
  ...quoteFiles.map((file) => `public/photos/quote/${file}`),
  ...blogSlugs.flatMap((slug) => [
    `public/blog/${slug}-hero.png`,
    `public/blog/${slug}-secondary.png`,
  ]),
]);

const missing = [...keep].filter(
  (path) => !existsSync(join(ROOT, ...path.split("/")))
);
if (missing.length) {
  throw new Error(
    `Refusing cleanup; ${missing.length} kitchen assets are missing:\n${missing.join("\n")}`
  );
}

function walk(directory) {
  if (!existsSync(directory)) return [];
  return readdirSync(directory).flatMap((name) => {
    const path = join(directory, name);
    return statSync(path).isDirectory() ? walk(path) : [path];
  });
}

const generatedRoots = [
  join(ROOT, "public/photos"),
  join(ROOT, "public/blog"),
  join(ROOT, "public/about"),
  join(ROOT, "public/faq"),
  join(ROOT, "public/video"),
];
let removed = 0;

for (const file of generatedRoots.flatMap(walk)) {
  const key = relative(ROOT, file).replaceAll("\\", "/");
  if (!keep.has(key)) {
    rmSync(file, { force: true });
    removed += 1;
  }
}

for (const stale of [
  "public/favicon.ico",
  "public/icon.png",
  "public/apple-icon.png",
  "public/opengraph-image.png",
]) {
  const path = join(ROOT, ...stale.split("/"));
  if (existsSync(path)) {
    rmSync(path, { force: true });
    removed += 1;
  }
}

console.log(`Removed ${removed} obsolete generated assets`);
