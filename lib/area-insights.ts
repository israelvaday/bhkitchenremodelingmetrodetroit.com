import insightsJson from "@/content/area-insights.json";

/**
 * Per-area local context. One entry per service-area slug (101/101 covered).
 * `tagline` and `keywords` are deliberately NOT rendered: the taglines carry
 * unverifiable adjectives ("trusted", "affordable") and the keyword list is a
 * planning artifact, not page copy.
 */
export type AreaInsight = {
  tagline: string;
  landmarks: string[];
  common_calls: string[];
  neighborhood_notes: string;
  keywords: string[];
};

export const AREA_INSIGHTS = insightsJson as Record<string, AreaInsight>;

export function insightFor(slug: string): AreaInsight | undefined {
  return AREA_INSIGHTS[slug];
}

/** Meta descriptions on this fleet get truncated mid-word, so cap on whole items. */
const DESCRIPTION_LIMIT = 152;

export function areaDescription(areaName: string, insight?: AreaInsight): string {
  const lead = `Kitchen remodeling in ${areaName}, MI: `;
  const generic = "cabinets, countertops, backsplash, flooring and kitchen design.";
  if (!insight) return lead + generic;

  const parts: string[] = [];
  for (const call of insight.common_calls) {
    const candidate = [...parts, call].join(", ");
    if ((lead + candidate + ".").length > DESCRIPTION_LIMIT) break;
    parts.push(call);
  }
  return parts.length ? `${lead}${parts.join(", ")}.` : lead + generic;
}
