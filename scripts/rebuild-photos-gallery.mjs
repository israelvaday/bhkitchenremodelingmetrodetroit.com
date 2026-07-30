/**
 * Rebuild content/photos.json from the current kitchen remodeling asset set only.
 */
import { existsSync, readFileSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const ROOT = join(dirname(fileURLToPath(import.meta.url)), "..");
const OUTPUT = join(ROOT, "content/photos.json");
const BUSINESS_NAME = "BH Kitchen Remodeling Metro Detroit";
const REGION = "Metro Detroit, MI";

const SERVICES = [
  { slug: "custom-kitchen-remodeling", label: "Custom kitchen remodeling" },
  { slug: "cabinet-installation", label: "Cabinet installation" },
  { slug: "countertop-replacement", label: "Countertop replacement" },
  { slug: "kitchen-design", label: "Kitchen design" },
  { slug: "kitchen-backsplash-tile", label: "Kitchen backsplash and tile" },
  { slug: "kitchen-lighting-upgrades", label: "Kitchen lighting upgrades" },
  { slug: "kitchen-flooring", label: "Kitchen flooring" },
  { slug: "kitchen-island-installation", label: "Kitchen island installation" },
  { slug: "kitchen-appliance-layout", label: "Kitchen appliance layout" },
  { slug: "partial-kitchen-refresh", label: "Partial kitchen refresh" },
];

const GALLERY = [
  {
    file: "kitchen-gallery--modern-white-shaker.png",
    category: "full-remodel",
    services: ["custom-kitchen-remodeling", "cabinet-installation"],
    alt: "Completed modern white shaker kitchen with quartz island in Metro Detroit",
  },
  {
    file: "kitchen-gallery--navy-gold-remodel.png",
    category: "full-remodel",
    services: ["custom-kitchen-remodeling", "kitchen-design"],
    alt: "Navy and brass kitchen remodel with marble-look quartz counters",
  },
  {
    file: "kitchen-gallery--cabinet-install-progress.png",
    category: "cabinets",
    services: ["cabinet-installation"],
    alt: "Professional contractors installing kitchen wall cabinets",
  },
  {
    file: "kitchen-gallery--countertop-template.png",
    category: "countertops",
    services: ["countertop-replacement"],
    alt: "Countertop templating for a kitchen island quartz install",
  },
  {
    file: "kitchen-gallery--subway-backsplash.png",
    category: "backsplash",
    services: ["kitchen-backsplash-tile"],
    alt: "White subway tile backsplash behind a stainless range",
  },
  {
    file: "kitchen-gallery--open-concept.png",
    category: "full-remodel",
    services: ["custom-kitchen-remodeling", "kitchen-design"],
    alt: "Open-concept kitchen remodel with large island seating",
  },
  {
    file: "kitchen-gallery--butcher-block-island.png",
    category: "islands",
    services: ["kitchen-island-installation", "countertop-replacement"],
    alt: "Kitchen island with butcher block top and pendant lights",
  },
  {
    file: "kitchen-gallery--lighting-upgrade.png",
    category: "lighting",
    services: ["kitchen-lighting-upgrades"],
    alt: "Layered kitchen lighting with under-cabinet LEDs and pendants",
  },
  {
    file: "kitchen-gallery--luxury-vinyl-floor.png",
    category: "flooring",
    services: ["kitchen-flooring"],
    alt: "Luxury vinyl plank flooring installed in a remodeled kitchen",
  },
  {
    file: "kitchen-gallery--compact-galley.png",
    category: "full-remodel",
    services: ["custom-kitchen-remodeling", "kitchen-design"],
    alt: "Smart galley kitchen remodel maximizing storage",
  },
  {
    file: "kitchen-gallery--farmhouse-sink.png",
    category: "countertops",
    services: ["countertop-replacement", "custom-kitchen-remodeling"],
    alt: "Farmhouse sink with quartz counters and bridge faucet",
  },
  {
    file: "kitchen-gallery--pantry-wall.png",
    category: "cabinets",
    services: ["cabinet-installation", "custom-kitchen-remodeling"],
    alt: "Floor-to-ceiling pantry wall with tall cabinet storage",
  },
  {
    file: "kitchen-gallery--two-tone-cabinets.png",
    category: "cabinets",
    services: ["cabinet-installation", "kitchen-design"],
    alt: "Two-tone kitchen with white perimeter cabinets and navy island",
  },
  {
    file: "kitchen-gallery--before-after-staging.png",
    category: "full-remodel",
    services: ["custom-kitchen-remodeling", "partial-kitchen-refresh"],
    alt: "Freshly completed kitchen remodel staged and ready to use",
  },
];

function diskPath(src) {
  return join(ROOT, "public", ...src.replace(/^\/+/, "").split("/"));
}

function imageMeta(src) {
  const path = diskPath(src);
  const buffer = readFileSync(path);
  let width = 1600;
  let height = 900;

  if (
    buffer.length >= 24 &&
    buffer[0] === 0x89 &&
    buffer.toString("ascii", 1, 4) === "PNG"
  ) {
    width = buffer.readUInt32BE(16);
    height = buffer.readUInt32BE(20);
  }

  return {
    width,
    height,
    ratio: Number((width / height).toFixed(3)),
    orientation:
      width === height ? "square" : width > height ? "landscape" : "portrait",
    bytes: buffer.length,
    source: "openrouter-generated",
  };
}

function catalogAsset(asset) {
  const path = diskPath(asset.src);
  if (!existsSync(path)) {
    console.warn("Missing asset, not catalogued:", asset.src);
    return null;
  }
  return {
    ...asset,
    ...imageMeta(asset.src),
  };
}

const expectedAssets = [
  {
    id: "logo-master-on-navy",
    src: "/logo.png",
    alt: `${BUSINESS_NAME} navy and gold kitchen remodeling logo`,
    category: "brand",
    kind: "brand",
    services: ["brand"],
  },
  {
    id: "logo-icon-square",
    src: "/logo-256.png",
    alt: `${BUSINESS_NAME} BH logo icon`,
    category: "brand",
    kind: "brand",
    services: ["brand"],
  },
  {
    id: "logo-large-square",
    src: "/logo-512.png",
    alt: `${BUSINESS_NAME} large BH logo`,
    category: "brand",
    kind: "brand",
    services: ["brand"],
  },
  {
    id: "branding-hero-metro",
    src: "/photos/branding-generated--hero-kitchen-metro-detroit.png",
    alt: `${BUSINESS_NAME} completed modern kitchen remodel in a Metro Detroit home`,
    category: "branding-generated",
    kind: "hero",
    services: SERVICES.map(({ slug }) => slug),
  },
  {
    id: "branding-map-metro",
    src: "/photos/branding-generated--metro-detroit-map.png",
    alt: `${BUSINESS_NAME} service area across ${REGION}`,
    category: "branding-generated",
    kind: "brand",
    services: ["brand"],
  },
  ...SERVICES.map(({ slug, label }) => ({
    id: `service-hero-${slug}`,
    src: `/photos/service-hero-${slug}.png`,
    alt: `${label} by ${BUSINESS_NAME} in ${REGION}`,
    category: "service-hero",
    kind: "hero",
    services: [slug],
  })),
  ...GALLERY.map(({ file, category, services, alt }) => ({
    id: file.replace(/\.png$/i, ""),
    src: `/photos/${file}`,
    alt: `${alt} — ${BUSINESS_NAME}, ${REGION}`,
    category,
    kind: "work",
    services,
  })),
];

const photos = expectedAssets.map(catalogAsset).filter(Boolean);
writeFileSync(OUTPUT, `${JSON.stringify(photos, null, 2)}\n`);
console.log(
  `Wrote ${photos.length}/${expectedAssets.length} current kitchen assets to content/photos.json`
);
