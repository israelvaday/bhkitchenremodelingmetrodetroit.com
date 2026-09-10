import type { Area } from "@/lib/areas";

/**
 * A sub-area name on its own is not a place: 50 of the 101 service areas are
 * neighborhoods, and 35 of them carry a name that never mentions its city, so
 * "Downtown", "East Side" and "North End" name nowhere on their own. The slug
 * and `city` already know the parent; the visible string did not.
 *
 * This lived as a private copy inside app/service-areas/[slug]/page.tsx, where
 * 364cbd7 used it to fix the 101 area TITLES on 2026-08-15. The internal links
 * pointing AT those pages never got the same treatment, so it moves here to be
 * the one definition both sides share. Keyed on `area.city` rather than a
 * parent lookup so a client component can import it without pulling the whole
 * areas dataset into the browser bundle: `city` equals the parent's name on all
 * 50 neighborhoods and equals `name` on every city and community, so the result
 * is identical on all 101 areas.
 */
export function areaPlaceName(area: Area): string {
  const cityLead = area.city?.split(" ")[0].toLowerCase();
  return cityLead && area.city !== area.name && !area.name.toLowerCase().includes(cityLead)
    ? `${area.name}, ${area.city}`
    : area.name;
}

export function areaPlace(area: Area): string {
  return `${areaPlaceName(area)}, MI`;
}
