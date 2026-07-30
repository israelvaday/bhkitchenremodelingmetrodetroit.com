/**
 * Generate BH Kitchen Remodeling Metro Detroit image assets and local kitchen insights.
 *
 * Usage:
 *   node scripts/openrouter-generate-site.mjs --test [--force]
 *   node scripts/openrouter-generate-site.mjs --images-blog [--force]
 *   node scripts/openrouter-generate-site.mjs --images-gallery [--force]
 *   node scripts/openrouter-generate-site.mjs --images-brand [--force]
 *   node scripts/openrouter-generate-site.mjs --images-quote [--force]
 *   node scripts/openrouter-generate-site.mjs --areas [--force]
 *   node scripts/openrouter-generate-site.mjs --all [--force]
 */
import { existsSync, mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { execFileSync } from "node:child_process";
import { fileURLToPath } from "node:url";
import {
  chatJson,
  generateImage,
  getOpenRouterKey,
  loadEnvLocal,
  sleep,
} from "./openrouter-lib.mjs";

const ROOT = join(dirname(fileURLToPath(import.meta.url)), "..");
const BUSINESS_NAME = "BH Kitchen Remodeling Metro Detroit";
const PHONE = "(313) 236-4558";
const PHOTO_STYLE =
  "Photorealistic professional kitchen remodeling project photographed on a full-frame camera, authentic Metro Detroit home, realistic materials and tools, natural Michigan light, balanced editorial composition";
const NO_TEXT =
  "No visible words, letters, labels, signs, logos, watermarks, captions, UI, or artificial CGI styling";

const SERVICE_HEROES = [
  {
    slug: "custom-kitchen-remodeling",
    prompt:
      "Completed modern kitchen remodel with white shaker cabinets, quartz waterfall island, brass hardware, and warm natural light in a Metro Detroit home",
  },
  {
    slug: "cabinet-installation",
    prompt:
      "Professional contractor installing level kitchen wall cabinets with a laser level and shims, clean jobsite protection, navy and brass palette",
  },
  {
    slug: "countertop-replacement",
    prompt:
      "Installer fitting a polished quartz kitchen countertop with precise seams at a sink cutout in a bright remodeled kitchen",
  },
  {
    slug: "kitchen-design",
    prompt:
      "Kitchen designer and homeowner reviewing cabinet elevations and material samples on a large island in natural daylight",
  },
  {
    slug: "kitchen-backsplash-tile",
    prompt:
      "Tile installer setting large-format subway backsplash tile with spacers behind a range in a modern kitchen",
  },
  {
    slug: "kitchen-lighting-upgrades",
    prompt:
      "Electrician installing under-cabinet LED lighting and recessed cans in a freshly remodeled kitchen with warm glow",
  },
  {
    slug: "kitchen-flooring",
    prompt:
      "Installer laying luxury vinyl plank flooring in an open kitchen with cabinets protected and clean transitions",
  },
  {
    slug: "kitchen-island-installation",
    prompt:
      "Contractors assembling a large kitchen island with base cabinets and preparing for countertop install in a spacious layout",
  },
  {
    slug: "kitchen-appliance-layout",
    prompt:
      "Professional aligning a stainless panel-ready refrigerator and range in a newly finished custom kitchen",
  },
  {
    slug: "partial-kitchen-refresh",
    prompt:
      "Targeted kitchen refresh with new quartz counters, updated backsplash, and refreshed cabinet hardware in an occupied home",
  },
];

const BLOG_IMAGES = [
  {
    slug: "kitchen-remodel-planning-metro-detroit",
    hero:
      "Homeowner and kitchen designer reviewing layout options at a kitchen island with unlabeled material samples",
    secondary:
      "Measured kitchen floor plan sketch beside cabinet samples and flooring swatches on a table",
  },
  {
    slug: "cabinet-installation-vs-refacing",
    hero:
      "Side-by-side comparison scene of new shaker cabinets being installed next to older cabinet boxes being refaced",
    secondary:
      "Close detail of a contractor adjusting soft-close hinges on freshly installed cabinet doors",
  },
  {
    slug: "countertop-materials-michigan-homes",
    hero:
      "Beautiful quartz and granite countertop samples on a kitchen island with natural window light",
    secondary:
      "Installer polishing a quartz seam at a kitchen sink cutout with professional tools",
  },
  {
    slug: "hire-kitchen-remodeling-contractor-michigan",
    hero:
      "Homeowner reviewing an unbranded written kitchen remodel scope with an insured contractor at a dining table",
    secondary:
      "Organized kitchen jobsite with protected floors, labeled cabinets, and professional tools",
  },
  {
    slug: "kitchen-design-layout-tips",
    hero:
      "Open kitchen layout showing work triangle between sink, range, and refrigerator with clear walkways",
    secondary:
      "Designer marking cabinet heights and outlet locations on a kitchen wall before installation",
  },
  {
    slug: "kitchen-remodel-timeline-budget",
    hero:
      "Phased kitchen remodel in progress with lower cabinets installed and upper boxes staged for installation",
    secondary:
      "Project calendar and material lead-time board on a protected kitchen jobsite wall without readable text",
  },
];

const GALLERY_IMAGES = [
  {
    file: "kitchen-gallery--modern-white-shaker.png",
    prompt:
      "Completed modern white shaker kitchen with quartz island, brass pulls, and pendant lights in a Metro Detroit home",
  },
  {
    file: "kitchen-gallery--navy-gold-remodel.png",
    prompt:
      "Sophisticated navy cabinet kitchen remodel with brass hardware, marble-look quartz counters, and warm wood flooring",
  },
  {
    file: "kitchen-gallery--cabinet-install-progress.png",
    prompt:
      "Professional contractors installing kitchen wall cabinets with laser level and floor protection",
  },
  {
    file: "kitchen-gallery--countertop-template.png",
    prompt:
      "Countertop templating professional measuring a kitchen island for quartz fabrication",
  },
  {
    file: "kitchen-gallery--subway-backsplash.png",
    prompt:
      "Fresh white subway tile backsplash with dark grout behind a stainless range in a remodeled kitchen",
  },
  {
    file: "kitchen-gallery--open-concept.png",
    prompt:
      "Open-concept kitchen remodel flowing into a living area with large island seating and recessed lighting",
  },
  {
    file: "kitchen-gallery--butcher-block-island.png",
    prompt:
      "Kitchen island with butcher block top, white cabinets, and pendant lights over bar seating",
  },
  {
    file: "kitchen-gallery--lighting-upgrade.png",
    prompt:
      "Remodeled kitchen showing layered lighting with under-cabinet LEDs, pendants, and recessed cans",
  },
  {
    file: "kitchen-gallery--luxury-vinyl-floor.png",
    prompt:
      "New luxury vinyl plank flooring installed in a kitchen with clean transitions to adjacent rooms",
  },
  {
    file: "kitchen-gallery--compact-galley.png",
    prompt:
      "Smart galley kitchen remodel maximizing storage with tall cabinets and bright finishes",
  },
  {
    file: "kitchen-gallery--farmhouse-sink.png",
    prompt:
      "Farmhouse sink installation with quartz counters and bridge faucet in a classic Metro Detroit kitchen",
  },
  {
    file: "kitchen-gallery--pantry-wall.png",
    prompt:
      "Floor-to-ceiling pantry wall with tall cabinet storage and integrated appliances",
  },
  {
    file: "kitchen-gallery--two-tone-cabinets.png",
    prompt:
      "Two-tone kitchen with white perimeter cabinets and navy island, quartz counters, and brass fixtures",
  },
  {
    file: "kitchen-gallery--before-after-staging.png",
    prompt:
      "Freshly completed kitchen remodel staged with bowls and greenery, bright and inviting atmosphere",
  },
];

const QUOTE_IMAGES = [
  ...SERVICE_HEROES.map(({ slug, prompt }) => ({
    file: `${slug}.png`,
    prompt: `Square website selection image, ${prompt}`,
  })),
  {
    file: "property-home.png",
    prompt:
      "Square view of a welcoming Metro Detroit home kitchen being professionally remodeled with protected floors",
  },
  {
    file: "property-business.png",
    prompt:
      "Square view of a commercial break-room kitchen receiving a professional cabinet and counter upgrade",
  },
  {
    file: "property-multifamily.png",
    prompt:
      "Square view of a clean apartment kitchen being updated with new counters and backsplash",
  },
  {
    file: "property-other.png",
    prompt:
      "Square view of a basement wet bar kitchenette receiving custom cabinets and quartz counters",
  },
];

const BRAND_IMAGES = [
  {
    path: "public/logo.png",
    logo: true,
    aspectRatio: "1:1",
    prompt:
      "Professional navy and warm gold brand logo, centered BH monogram integrated with a clean kitchen cabinet silhouette and subtle countertop line, premium geometric vector mark, strong contrast, transparent or plain background, no words beyond the BH monogram, no watermark",
  },
  {
    path: "public/photos/branding-generated--hero-kitchen-metro-detroit.png",
    aspectRatio: "16:9",
    prompt:
      "Wide cinematic website hero of a stunning completed modern kitchen remodel with white cabinets, quartz island, brass hardware, and warm natural light, open composition for page overlay",
  },
  {
    path: "public/photos/branding-generated--metro-detroit-map.png",
    aspectRatio: "16:9",
    prompt:
      "Photorealistic tabletop service-area map visual showing the recognizable tri-county Metro Detroit region through unlabeled navy and gold location markers, cabinet door sample and quartz chip nearby",
  },
  {
    path: "public/about/about-hero.png",
    aspectRatio: "16:9",
    prompt:
      "Wide editorial portrait of an insured professional kitchen remodeling team reviewing cabinet layout inside a bright Metro Detroit home",
  },
  {
    path: "public/about/about-workshop.png",
    aspectRatio: "16:9",
    prompt:
      "Professional kitchen remodeling team organizing cabinet hardware, samples, and installation tools in a tidy workshop",
  },
];

function absolutePath(relativePath) {
  return join(ROOT, ...relativePath.split("/"));
}

function writeBuffer(outPath, buffer) {
  mkdirSync(dirname(outPath), { recursive: true });
  writeFileSync(outPath, buffer);
  console.log("Wrote", outPath.replace(ROOT, ""));
}

function kitchenPrompt(prompt) {
  return `${prompt}. Brand context: ${BUSINESS_NAME}, serving Metro Detroit, Michigan. ${PHOTO_STYLE}. ${NO_TEXT}.`;
}

async function generateAsset(key, imageModel, job, force) {
  const outPath = absolutePath(job.path);
  if (existsSync(outPath) && !force) {
    console.log("Skip existing", job.path);
    return false;
  }

  const prompt = job.logo ? job.prompt : kitchenPrompt(job.prompt);
  const buffer = await generateImage(key, prompt, {
    model: imageModel,
    aspect_ratio: job.aspectRatio ?? "16:9",
    resolution: job.resolution ?? "1K",
    quality: job.quality ?? "high",
  });
  writeBuffer(outPath, buffer);
  return true;
}

async function runAssetJobs(key, imageModel, jobs, force) {
  for (const job of jobs) {
    try {
      const generated = await generateAsset(key, imageModel, job, force);
      if (generated) await sleep(1400);
    } catch (error) {
      console.error(`Failed ${job.path}:`, error instanceof Error ? error.message : error);
    }
  }
}

async function generateBlogImages(key, imageModel, force) {
  const jobs = BLOG_IMAGES.flatMap(({ slug, hero, secondary }) => [
    {
      path: `public/blog/${slug}-hero.png`,
      prompt: hero,
      aspectRatio: "16:9",
    },
    {
      path: `public/blog/${slug}-secondary.png`,
      prompt: secondary,
      aspectRatio: "16:9",
    },
  ]);
  await runAssetJobs(key, imageModel, jobs, force);
}

async function generateGalleryImages(key, imageModel, force) {
  const jobs = GALLERY_IMAGES.map(({ file, prompt }) => ({
    path: `public/photos/${file}`,
    prompt,
    aspectRatio: "16:9",
  }));
  await runAssetJobs(key, imageModel, jobs, force);
}

async function generateQuoteImages(key, imageModel, force) {
  const jobs = QUOTE_IMAGES.map(({ file, prompt }) => ({
    path: `public/photos/quote/${file}`,
    prompt,
    aspectRatio: "1:1",
  }));
  await runAssetJobs(key, imageModel, jobs, force);
}

async function refreshLogoCopies(force) {
  const logoPath = absolutePath("public/logo.png");
  if (!existsSync(logoPath)) return;

  const logo = readFileSync(logoPath);
  let sharp;
  try {
    ({ default: sharp } = await import("sharp"));
  } catch {
    console.warn("Image resizer unavailable; logo copies will retain source dimensions");
  }

  for (const size of [256, 512]) {
    const file = `logo-${size}.png`;
    const outPath = absolutePath(`public/${file}`);
    if (existsSync(outPath) && !force) continue;
    if (sharp) {
      await sharp(logoPath).resize(size, size, { fit: "contain" }).png().toFile(outPath);
      console.log("Wrote", outPath.replace(ROOT, ""));
    } else {
      writeBuffer(outPath, logo);
    }
  }
}

async function generateBrandImages(key, imageModel, force) {
  await runAssetJobs(key, imageModel, BRAND_IMAGES, force);
  await refreshLogoCopies(force);

  const serviceJobs = SERVICE_HEROES.map(({ slug, prompt }) => ({
    path: `public/photos/service-hero-${slug}.png`,
    prompt: `Wide service-page hero, ${prompt}`,
    aspectRatio: "16:9",
  }));
  await runAssetJobs(key, imageModel, serviceJobs, force);
}

async function generateTestImage(key, imageModel, force) {
  await runAssetJobs(
    key,
    imageModel,
    [
      {
        path: "public/photos/openrouter-test.png",
        prompt:
          "Close professional detail of a contractor installing a soft-close hinge on a white kitchen cabinet door",
        aspectRatio: "1:1",
      },
    ],
    force
  );
}

function readJson(path, fallback) {
  if (!existsSync(path)) return fallback;
  return JSON.parse(readFileSync(path, "utf8"));
}

function stringList(value, maxItems = Number.MAX_SAFE_INTEGER) {
  if (!Array.isArray(value)) return [];
  return value
    .filter((item) => typeof item === "string" && item.trim())
    .map((item) => item.trim())
    .slice(0, maxItems);
}

function normalizeAreaInsight(area, candidate, previous) {
  const priorLandmarks = stringList(previous?.landmarks);
  const generatedLandmarks = stringList(candidate?.landmarks, 3);
  const tagline =
    typeof candidate?.tagline === "string" ? candidate.tagline.trim() : "";
  let neighborhoodNotes =
    typeof candidate?.neighborhood_notes === "string"
      ? candidate.neighborhood_notes.trim()
      : "";

  const exactName = area.name;
  const combined = `${tagline} ${neighborhoodNotes}`.toLocaleLowerCase();
  if (exactName && !combined.includes(exactName.toLocaleLowerCase())) {
    neighborhoodNotes = `${exactName} kitchen remodeling projects benefit from layouts suited to the property's age, room size, and daily use. ${neighborhoodNotes}`.trim();
  }

  return {
    tagline,
    landmarks: priorLandmarks.length ? priorLandmarks : generatedLandmarks,
    common_calls: stringList(candidate?.common_calls, 3),
    neighborhood_notes: neighborhoodNotes,
    keywords: stringList(candidate?.keywords, 7).map((keyword) =>
      keyword.toLocaleLowerCase()
    ),
  };
}

async function refreshAreaInsights(key, chatModel, force) {
  const areasPath = absolutePath("content/service-areas.json");
  const outputPath = absolutePath("content/area-insights.json");
  const areas = readJson(areasPath, []);
  const previous = readJson(outputPath, {});
  const output = force ? {} : { ...previous };

  if (!Array.isArray(areas) || !areas.length) {
    throw new Error("No service areas found");
  }

  if (force) {
    writeFileSync(outputPath, "{}\n");
    console.log("Started area insights from a clean output");
  }

  const system = `Write original local SEO data for ${BUSINESS_NAME}, an insured professional kitchen remodeling business serving Metro Detroit, Michigan. Return only a JSON object keyed by the supplied slug. Each value must contain: tagline (14 words maximum), landmarks (exactly the supplied landmarks in the same order; only generate three accurate landmarks when none are supplied), common_calls (three concise kitchen remodeling requests), neighborhood_notes (two or three useful sentences about local home styles, kitchen layouts, storage needs, or remodeling considerations), and keywords (six or seven lowercase local kitchen remodeling search phrases). Keep every supplied place name exact. Do not claim ratings, awards, or licensing. Discuss kitchen remodeling only and do not mention unrelated trades.`;
  const batchSize = 8;

  for (let index = 0; index < areas.length; index += batchSize) {
    const batch = areas.slice(index, index + batchSize);
    const request = batch.map((area) => ({
      slug: area.slug,
      name: area.name,
      city: area.city,
      kind: area.kind,
      landmarks: stringList(previous[area.slug]?.landmarks),
    }));

    try {
      console.log(`Area batch ${Math.floor(index / batchSize) + 1}`);
      const generated = await chatJson(
        key,
        chatModel,
        system,
        `Create kitchen remodeling insights for this exact JSON input:\n${JSON.stringify(request, null, 2)}`,
        0.55
      );

      for (const area of batch) {
        const candidate = generated?.[area.slug];
        if (!candidate || typeof candidate !== "object") {
          console.error(`Missing generated insight for ${area.slug}`);
          continue;
        }
        output[area.slug] = normalizeAreaInsight(
          area,
          candidate,
          previous[area.slug]
        );
      }

      writeFileSync(outputPath, `${JSON.stringify(output, null, 2)}\n`);
      await sleep(800);
    } catch (error) {
      console.error(
        `Failed area batch ${Math.floor(index / batchSize) + 1}:`,
        error instanceof Error ? error.message : error
      );
    }
  }

  console.log(`Area insights: ${Object.keys(output).length}/${areas.length}`);
}

function printUsage() {
  console.log(
    "Pass --test, --images-blog, --images-gallery, --images-brand, --images-quote, --areas, or --all. Add --force to replace existing output."
  );
}

async function main() {
  const args = process.argv.slice(2);
  const validFlags = new Set([
    "--test",
    "--images-blog",
    "--images-gallery",
    "--images-brand",
    "--images-quote",
    "--areas",
    "--all",
    "--force",
  ]);
  const unknownFlags = args.filter((arg) => !validFlags.has(arg));
  if (unknownFlags.length) {
    throw new Error(`Unknown flag${unknownFlags.length > 1 ? "s" : ""}: ${unknownFlags.join(", ")}`);
  }

  const hasMode = args.some((arg) => arg !== "--force");
  if (!hasMode) {
    printUsage();
    return;
  }

  loadEnvLocal();
  const key = getOpenRouterKey();
  if (!key) {
    throw new Error("Set OPENROUTER_API_KEY in .env.local");
  }

  const force = args.includes("--force");
  const all = args.includes("--all");
  const chatModel =
    process.env.OPENROUTER_CHAT_MODEL || "google/gemini-2.5-flash";
  const imageModel =
    process.env.OPENROUTER_IMAGE_MODEL || "google/gemini-3-pro-image-preview";
  let productionImagesChanged = false;

  if (args.includes("--test")) {
    await generateTestImage(key, imageModel, force);
  }
  if (all || args.includes("--images-blog")) {
    await generateBlogImages(key, imageModel, force);
    productionImagesChanged = true;
  }
  if (all || args.includes("--images-gallery")) {
    await generateGalleryImages(key, imageModel, force);
    productionImagesChanged = true;
  }
  if (all || args.includes("--images-brand")) {
    await generateBrandImages(key, imageModel, force);
    productionImagesChanged = true;
  }
  if (all || args.includes("--images-quote")) {
    await generateQuoteImages(key, imageModel, force);
    productionImagesChanged = true;
  }
  if (all || args.includes("--areas")) {
    await refreshAreaInsights(key, chatModel, force);
  }

  if (productionImagesChanged) {
    console.log("Rebuilding kitchen photo catalog");
    execFileSync(
      process.execPath,
      [absolutePath("scripts/rebuild-photos-gallery.mjs")],
      { cwd: ROOT, stdio: "inherit" }
    );
  }
}

main().catch((error) => {
  console.error(error instanceof Error ? error.message : error);
  process.exitCode = 1;
});
