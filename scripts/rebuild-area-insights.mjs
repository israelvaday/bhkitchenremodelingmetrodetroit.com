/**
 * Rebuild local kitchen remodeling copy while preserving the existing Metro Detroit
 * service-area names and landmark lists. This provides an offline fallback
 * when the optional OpenRouter copy refresh is unavailable.
 */
import { readFileSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const ROOT = join(dirname(fileURLToPath(import.meta.url)), "..");
const areas = JSON.parse(
  readFileSync(join(ROOT, "content/service-areas.json"), "utf8")
);
const current = JSON.parse(
  readFileSync(join(ROOT, "content/area-insights.json"), "utf8")
);

const taglines = [
  "Custom kitchen remodeling with clear scopes and organized jobsite protection.",
  "Cabinet, counter, and backsplash upgrades planned around your layout and budget.",
  "Professional kitchen design and remodeling across Metro Detroit.",
  "Full and partial kitchen remodels with written estimates and direct communication.",
];

const callSets = [
  ["full kitchen remodel", "cabinet installation", "quartz countertop replacement"],
  ["kitchen island install", "backsplash upgrade", "kitchen design consultation"],
  ["cabinet refacing refresh", "lighting upgrade", "kitchen flooring replacement"],
  ["countertop replacement", "partial kitchen refresh", "appliance layout update"],
];

const propertyNotes = [
  "Homes here range from established colonials to updated ranch layouts, so kitchen plans should reflect room size, ceiling height, and how the space connects to adjacent rooms. Storage, lighting, and workflow matter as much as finish selections.",
  "Kitchen remodeling in this area often involves balancing modern layouts with existing plumbing and vent paths. A written scope for cabinets, counters, backsplash, and trade coordination helps avoid surprises mid-project.",
  "Local kitchens frequently need smarter storage, durable counters, and layered lighting because these rooms anchor daily life. Partial refreshes can be phased when a full gut remodel is not required yet.",
  "Properties here benefit from layouts planned around prep zones, landing space, and appliance clearances. Countertop templating, cabinet alignment, and backsplash terminations should be sequenced carefully for a clean finished look.",
];

function hash(value) {
  return Array.from(value).reduce((sum, char) => sum + char.charCodeAt(0), 0);
}

function lowerPlace(value) {
  return value.toLocaleLowerCase("en-US");
}

const output = Object.fromEntries(
  areas.map((area) => {
    const index = hash(area.slug) % taglines.length;
    const place = area.name;
    const city =
      area.kind === "city" || !area.city || area.city === place
        ? place
        : `${place} in ${area.city}`;
    const priorLandmarks = Array.isArray(current[area.slug]?.landmarks)
      ? current[area.slug].landmarks.filter(
          (landmark) => typeof landmark === "string" && landmark.trim()
        )
      : [];

    return [
      area.slug,
      {
        tagline: `${place}: ${taglines[index]}`,
        landmarks: priorLandmarks,
        common_calls: callSets[index],
        neighborhood_notes: `${city} is within our regular Metro Detroit kitchen remodeling service area. ${propertyNotes[index]}`,
        keywords: [
          `${lowerPlace(place)} kitchen remodeling`,
          `kitchen remodel ${lowerPlace(place)} mi`,
          `kitchen contractor ${lowerPlace(place)}`,
          `cabinet installation ${lowerPlace(place)}`,
          `countertop replacement ${lowerPlace(place)}`,
          `kitchen design ${lowerPlace(place)}`,
        ],
      },
    ];
  })
);

writeFileSync(
  join(ROOT, "content/area-insights.json"),
  `${JSON.stringify(output, null, 2)}\n`
);
console.log(`Rebuilt ${Object.keys(output).length} kitchen area insights`);
