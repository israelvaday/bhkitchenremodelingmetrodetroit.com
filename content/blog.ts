// Original kitchen remodeling guidance written for Metro Detroit property owners.
// Bodies use a small markdown-like format: headings, list items, and paragraphs.

export type BlogPost = {
  slug: string;
  title: string;
  metaTitle?: string;
  excerpt: string;
  category: "Planning" | "Cabinets" | "Countertops" | "Design" | "Budget";
  readMinutes: number;
  date: string;
  heroImage: string;
  heroAlt: string;
  secondaryImage: string;
  secondaryAlt: string;
  body: string;
};

export const BLOG_POSTS: BlogPost[] = [
  {
    slug: "kitchen-remodel-planning-metro-detroit",
    title: "How to Plan a Kitchen Remodel in Metro Detroit",
    metaTitle: "Kitchen Remodel Planning for Metro Detroit Homes",
    excerpt:
      "Start with layout, storage, and workflow before ordering cabinets so your Metro Detroit kitchen remodel stays on budget and on schedule.",
    category: "Planning",
    readMinutes: 7,
    date: "2026-01-16",
    heroImage: "/blog/kitchen-remodel-planning-metro-detroit-hero.png",
    heroAlt:
      "Homeowner and kitchen designer reviewing layout options at a kitchen island",
    secondaryImage: "/blog/kitchen-remodel-planning-metro-detroit-secondary.png",
    secondaryAlt:
      "Kitchen floor plan sketch beside cabinet and flooring samples on a table",
    body: `
A successful kitchen remodel starts long before demolition. Metro Detroit homes range from Detroit bungalows and brick colonials to Royal Oak ranches and newer Macomb County builds, and each layout presents different constraints for storage, lighting, and workflow.

The most expensive changes are usually structural: moving plumbing stacks, relocating gas lines, removing walls, or reworking vent paths. That is why the planning phase matters. A clear layout decision protects budget, lead times, and daily livability.

## Define how you use the kitchen

List the tasks that happen every week: meal prep, baking, homework, entertaining, coffee, pet feeding, and storage for small appliances. Note whether two people cook at once, whether kids need a landing zone, and whether you want seating at an island.

Those habits should drive appliance placement, counter landing space, drawer versus door ratios, and pantry depth. A beautiful render is useless if the dishwasher door blocks the main walkway.

## Measure what exists today

Record ceiling height, window locations, soffits, floor transitions, and the distance between sink, range, and refrigerator. Photograph every wall, especially where plumbing and electrical enter.

In older Wayne County homes, surprises often appear behind soffits or under vinyl flooring. In Oakland County updates, the challenge may be fitting modern storage into compact footprints. Macomb County homes sometimes offer more room for islands but still need thoughtful lighting and venting.

## Decide what must change versus what can wait

Full remodels may include new cabinets, counters, backsplash, flooring, lighting, and appliances. Partial refreshes might focus on counters and backsplash while retaining sound cabinet boxes.

Write two lists: must-have changes and nice-to-have upgrades. That split helps you compare estimates fairly and phase work if needed.

## Build a realistic schedule

Cabinet lead times, countertop templating, inspection windows, and trade sequencing all affect duration. Countertops cannot be fabricated accurately until base cabinets are installed and verified.

Confirm when you will lose access to the sink, stove, or refrigerator and plan a temporary kitchen setup if the project spans more than a few days.

## Get a written scope before ordering materials

Your proposal should identify demolition, rough-in coordination, cabinet installation, countertop allowance, backsplash, flooring, fixture setting, protection, cleanup, and exclusions.

BH Kitchen Remodeling Metro Detroit helps homeowners across Wayne, Oakland, and Macomb counties plan functional kitchens and execute carefully sequenced remodels. Call or text (313) 236-4558 for a written estimate.
`,
  },
  {
    slug: "cabinet-installation-vs-refacing",
    title: "Cabinet Installation vs. Refacing: Which Is Right for Your Kitchen?",
    metaTitle: "Cabinet Installation vs Refacing in Metro Detroit",
    excerpt:
      "Compare new cabinet installation, refacing, and repainting when your boxes are sound but the kitchen looks dated.",
    category: "Cabinets",
    readMinutes: 6,
    date: "2026-02-03",
    heroImage: "/blog/cabinet-installation-vs-refacing-hero.png",
    heroAlt:
      "Contractor installing new shaker cabinets beside older cabinet boxes being refaced",
    secondaryImage: "/blog/cabinet-installation-vs-refacing-secondary.png",
    secondaryAlt:
      "Close detail of soft-close hinge adjustment on freshly installed cabinet doors",
    body: `
Not every dated kitchen needs a full cabinet tear-out. When boxes are structurally sound, refacing or repainting may deliver a dramatic visual change at lower cost and with less downtime. When layout, storage, or damage is the problem, new cabinet installation is usually the better long-term answer.

## When new cabinet installation makes sense

Choose new cabinets when you want a different layout, deeper drawers, taller pantry storage, improved accessibility, or when existing boxes are swollen from past leaks, poorly modified, or misaligned.

New installation also makes sense when you are changing appliance sizes, adding an island, or removing soffits that currently hide mechanicals. The project takes longer and costs more, but you solve function—not just appearance.

## When refacing or repainting can work

Refacing replaces doors, drawer fronts, and visible surfaces while retaining cabinet boxes. Repainting updates color and sheen on existing doors and frames when the underlying material accepts a durable finish system.

These options work best when layout is already functional, boxes are level, and hardware upgrades will bring the room current.

## Compare finish durability and maintenance

Painted MDF doors, thermofoil, wood, and laminate each behave differently around steam, grease, and daily cleaning. Hardware quality matters as much as door style: soft-close hinges and full-extension slides change daily use immediately.

Ask how finishes are cleaned, whether edges are sealed properly, and how touch-ups are handled after installation.

## Look at total project context

Even if cabinets stay, counters, backsplash, flooring, and lighting may still need updates to feel cohesive. A refacing quote should state whether toe kicks, end panels, fillers, and crown are included.

BH Kitchen Remodeling Metro Detroit installs new cabinets and coordinates partial refreshes across Metro Detroit. We will recommend the approach that matches your layout goals—not just the lowest upfront number.
`,
  },
  {
    slug: "countertop-materials-michigan-homes",
    title: "Countertop Materials for Michigan Kitchens: Quartz, Granite, and More",
    metaTitle: "Best Kitchen Countertops for Michigan Homes",
    excerpt:
      "Compare quartz, granite, marble, butcher block, and solid surface for durability, maintenance, and daily cooking.",
    category: "Countertops",
    readMinutes: 6,
    date: "2026-02-18",
    heroImage: "/blog/countertop-materials-michigan-homes-hero.png",
    heroAlt:
      "Quartz and granite countertop samples on a kitchen island in natural light",
    secondaryImage: "/blog/countertop-materials-michigan-homes-secondary.png",
    secondaryAlt:
      "Installer polishing a quartz seam at a kitchen sink cutout",
    body: `
Countertops define the visual tone of a kitchen and take the most daily abuse. Michigan homeowners often prioritize durability, easy cleanup, and resistance to wine, coffee, oils, and acidic foods—especially in busy family kitchens.

## Quartz

Engineered quartz is non-porous and low maintenance, which makes it popular for full-time kitchens. Seam placement and edge profile still matter for aesthetics. Use trivets for very hot pans; thermal shock can damage any stone-based surface.

## Granite

Granite offers natural variation and strong heat tolerance when sealed properly. Lighter stones may need more attentive sealing in high-use areas. If you love movement and natural pattern, granite remains a strong choice.

## Marble and marble look-alikes

Marble is beautiful but etches and stains more easily. Many clients choose quartz with marble veining for the look without the maintenance profile of true marble.

## Butcher block and solid surface

Butcher block adds warmth and is excellent on islands, but it needs oiling and careful moisture management near sinks. Solid surface allows integrated sinks and inconspicuous seams, which can help contemporary designs.

## Template and install quality

Even premium slabs look amateur if seams are poorly placed or sink cutouts are rough. Template after cabinets are installed, verify overhangs and supports for islands, and confirm backsplash height before fabrication.

BH Kitchen Remodeling Metro Detroit coordinates countertop replacement with cabinet installation and backsplash work across Wayne, Oakland, and Macomb counties.
`,
  },
  {
    slug: "hire-kitchen-remodeling-contractor-michigan",
    title: "How to Hire a Kitchen Remodeling Contractor in Michigan",
    metaTitle: "Hire a Kitchen Remodeling Contractor in Michigan",
    excerpt:
      "Use written scopes, insurance verification, reference checks, and clear payment terms before signing a kitchen contract.",
    category: "Planning",
    readMinutes: 7,
    date: "2026-03-02",
    heroImage: "/blog/hire-kitchen-remodeling-contractor-michigan-hero.png",
    heroAlt:
      "Homeowner reviewing a written kitchen remodel scope with an insured contractor",
    secondaryImage: "/blog/hire-kitchen-remodeling-contractor-michigan-secondary.png",
    secondaryAlt:
      "Organized kitchen jobsite with protected floors and labeled cabinet boxes",
    body: `
Kitchen remodeling is a sequence-sensitive project. The right contractor communicates scope, coordinates trades, protects your home, and documents changes instead of improvising under pressure.

## Verify insurance and trade coordination

Ask for proof of general liability insurance and workers compensation when applicable. Confirm who handles electrical, plumbing, gas, and vent work and whether those portions are permitted when required.

## Compare written scopes, not lump sums

Two bids with the same total can include very different work. Compare demolition, cabinet tier, countertop allowance, backsplash square footage, flooring, fixture setting, protection, cleanup, and warranty terms.

## Check sequencing experience

Cabinets before counters. Template after bases are set. Backsplash after counters when applicable. Lighting rough-in before close drywall or finish surfaces. Experienced remodelers plan these steps explicitly.

## Review change-order policy

Layout changes mid-project are common, but they should be documented with price and schedule impact before work proceeds. Avoid contractors who treat every discovery as an open-ended extra.

## Define payment milestones

Never pay the full contract upfront. Tie payments to measurable progress: demo complete, cabinets set, counters installed, substantial completion, and final punch list.

BH Kitchen Remodeling Metro Detroit provides insured professional kitchen remodeling across Metro Detroit with written scopes and direct project communication. Call (313) 236-4558 to discuss your kitchen.
`,
  },
  {
    slug: "kitchen-design-layout-tips",
    title: "Kitchen Design Layout Tips That Improve Daily Workflow",
    metaTitle: "Kitchen Layout Design Tips for Metro Detroit Homes",
    excerpt:
      "Improve prep zones, storage, landing space, and traffic flow before you finalize cabinet plans.",
    category: "Design",
    readMinutes: 6,
    date: "2026-03-20",
    heroImage: "/blog/kitchen-design-layout-tips-hero.png",
    heroAlt:
      "Open kitchen layout showing clear work zones between sink, range, and refrigerator",
    secondaryImage: "/blog/kitchen-design-layout-tips-secondary.png",
    secondaryAlt:
      "Designer marking cabinet heights and outlet locations on a kitchen wall",
    body: `
Layout is the part of kitchen design you feel every day. Finish selections matter, but poor circulation or missing landing space creates friction that no hardware upgrade fixes.

## Protect the work triangle—but do not worship it

The sink, range, and refrigerator should relate logically, yet modern kitchens also need space for coffee makers, mixers, and dual cooks. Add landing area beside the cooktop and refrigerator, and keep trash/recycling accessible without blocking drawers.

## Plan island size carefully

Islands need clearance on all sides for doors, drawers, dishwashers, and seated knees. Electrical outlets are often required on islands depending on code and design. Water and gas on islands are possible but add cost and coordination.

## Prioritize storage by item, not just door count

Deep drawers for pots, full-extension pullouts for spices, trash/recycling pullouts, and tall pantry units often improve function more than adding upper cabinets to the ceiling everywhere.

## Layer lighting early

Task lighting at the sink and range, ambient recessed light, and accent pendants should be planned with cabinet heights and soffit conditions in mind. Retrofit lighting after cabinets are built is harder and messier.

## Align finishes with the rest of the home

Open plans require the kitchen palette to cooperate with flooring, railings, and adjacent paint colors. Sample cabinets, counters, and backsplash together in the room's actual light.

BH Kitchen Remodeling Metro Detroit provides kitchen design and remodeling services across Wayne, Oakland, and Macomb counties.
`,
  },
  {
    slug: "kitchen-remodel-timeline-budget",
    title: "Kitchen Remodel Timelines and Budget Planning in Metro Detroit",
    metaTitle: "Kitchen Remodel Timeline and Budget Guide",
    excerpt:
      "Understand lead times, phasing, allowances, and the schedule impact of layout changes before you commit.",
    category: "Budget",
    readMinutes: 7,
    date: "2026-04-08",
    heroImage: "/blog/kitchen-remodel-timeline-budget-hero.png",
    heroAlt:
      "Phased kitchen remodel with lower cabinets installed and upper boxes staged",
    secondaryImage: "/blog/kitchen-remodel-timeline-budget-secondary.png",
    secondaryAlt:
      "Protected kitchen jobsite with project materials staged for installation",
    body: `
Budget overruns usually trace back to late layout decisions, unclear allowances, or unrealistic lead-time assumptions—not mysterious "construction surprises." A disciplined plan keeps Metro Detroit kitchen remodels predictable.

## Build budget tiers

Establish good-better-best allowances for cabinets, counters, tile, lighting, and fixtures. That lets you adjust selections without redesigning the entire scope when one material line is backordered or over budget.

## Sequence lead times intentionally

Order long-lead items early after layout approval. Schedule countertop templating only when base cabinets are installed and verified. Hold flooring installation until heavy trade traffic is complete when possible.

## Plan for living without a full kitchen

Even partial remodels disrupt cooking routines. Set up a temporary station with microwave, toaster oven, and dish storage. Discuss dust control, daily cleanup, and which utilities will be offline each week.

## Keep a contingency

A modest contingency for hidden conditions—roted subfloor, outdated wiring, or non-compliant venting—is prudent in older homes. The contingency is not a license to expand scope; it is protection against documented discoveries.

## Track changes in writing

Every layout or material change should update cost and schedule before crews proceed. Written change orders prevent disputes at final payment.

BH Kitchen Remodeling Metro Detroit provides transparent kitchen remodeling estimates across Metro Detroit. Request a written scope to compare options with confidence.
`,
  },
  {
    slug: "kitchen-island-clearance-sizing-metro-detroit",
    title: "Will a Kitchen Island Fit? Sizing and Clearances for Metro Detroit Kitchens",
    metaTitle: "Kitchen Island Sizing and Clearances for Metro Detroit Homes",
    excerpt:
      "Measure the walkways before you shop for an island. The clearance standard, not the island, decides whether your kitchen has room for one.",
    category: "Design",
    readMinutes: 8,
    date: "2026-08-08",
    heroImage: "/blog/kitchen-island-clearance-sizing-metro-detroit-hero.jpg",
    heroAlt:
      "Kitchen island with clear walkways on all sides in a bright Metro Detroit kitchen",
    secondaryImage: "/blog/kitchen-island-clearance-sizing-metro-detroit-secondary.jpg",
    secondaryAlt:
      "Tape measure stretched across a kitchen floor beside a paper island layout sketch",
    body: `
An island is the most requested addition in a kitchen remodel and the one most often ruled out after the tape measure comes out. The island itself is rarely the problem. The space that has to stay **empty around it** is what decides the answer, and that number is fixed long before you choose a countertop.

Work through the clearances first. If the room passes, the rest of the island decisions are a matter of preference. If it fails, you will save yourself a design round and a disappointment.

## Start with the walkway, not the island

Kitchen designers size aisles to the guidelines published by the National Kitchen & Bath Association, and the two numbers that matter are these:

- **42 inches** of clear walkway around a work aisle when one person cooks
- **48 inches** when two people work in the kitchen at once, or when a walkway also serves as a through-route to another room

Clear means clear: measured from the island's finished edge to the face of the opposing cabinet, appliance, or wall, with the dishwasher and oven doors in mind. A 42-inch aisle that drops to 20 inches with the dishwasher open is not a 42-inch aisle. Check every appliance door and the refrigerator swing before you accept a layout.

Anything under roughly 36 inches stops being a walkway and becomes a squeeze. That is the point at which most homeowners stop using the island as prep space and start using it as a place to put things down.

## Do the arithmetic before you fall in love with a layout

The minimum room width follows directly from the clearance number. A modest island 24 inches deep, with 42 inches of clearance on both sides, needs 108 inches — 9 feet — of open floor between the opposing runs of cabinets.

Add the cabinets themselves. Base cabinets are 24 inches deep, so with counters on both sides you need roughly **13 feet wall to wall** before an island is realistic. With counter on one side only, about 11 feet.

Length is more forgiving than width. A useful island starts at about 4 feet long by 2 feet deep; below that it holds a bowl and little else. If seating matters, allow about 24 inches of width per stool and plan the countertop overhang: roughly 15 inches of knee space at standard 36-inch counter height, or about 12 inches at a raised 42-inch bar. An overhang beyond 12 inches of unsupported stone needs brackets or corbels underneath.

## What Metro Detroit floor plans do to the math

The housing stock decides this more than the budget does. Much of Wayne County is pre-1960 bungalows and colonials with closed galley kitchens, often 8 to 10 feet wide, where an island cannot clear 42 inches on both sides no matter how small it is. In those homes the honest answer is that the wall between the kitchen and the dining room, not the island, is the actual project.

Post-war ranches across Oakland County frequently sit right at the boundary — wide enough for a compact island once a peninsula or a bank of lower cabinets comes out. Newer Macomb County builds usually have the width already and the real questions become seating, venting, and where the outlets land.

Measure your own room before applying any of it. Soffits, a chimney chase, a bulkhead hiding ductwork, or a floor register in the middle of the room all change what is possible.

## Decide what the island has to do

The clearance test is about the room. This one is about scope, and it is where island projects quietly get bigger.

- **Counter and storage only.** The contained version. Cabinets, top, and usually a receptacle. No plumbing, no venting.
- **Island sink.** Supply lines, a drain, and a vent have to reach the middle of the room, which means opening the floor and coordinating inspection.
- **Cooktop in the island.** The most involved option. Add gas or a dedicated circuit, plus ventilation — a downdraft or a ceiling hood, each with its own structural and ducting consequences.

There is no wrong answer, but the three are not the same project. Deciding early keeps the estimate honest and stops a "simple island" from turning into a floor-opening mid-build.

## Check what is under the floor

A stone island top is heavy, and the load sits in the middle of a joist span rather than over a wall. In older homes with long spans or previously modified framing, that is worth a look from below before the cabinets are set. Blocking or added support is a small job when it is planned and an expensive one when it is discovered after templating.

While the floor is open, it is also the moment to confirm the subfloor is sound and level. Cabinets set on an out-of-level floor telegraph into every countertop seam.

## When the answer is no

A kitchen that fails the clearance test is not out of options, and each of these keeps the walkway intact:

- A **peninsula** attached at one end, which needs clearance on fewer sides
- A **rolling cart or butcher block** that moves out of the aisle when it is not in use
- **Deeper perimeter counters** or a widened run, which buy prep space without eating floor
- Removing a **non-structural wall** to create the width, then revisiting the island

Forcing an island into a room that cannot hold one produces a kitchen that is harder to cook in than the one you started with. That is the outcome worth avoiding.

## Planning for a fall install

Kitchen work picks up sharply in September and October, and island projects are the ones most affected by that. Cabinet lead times stretch, countertop templating cannot begin until base cabinets are installed and verified, and anything involving plumbing or gas sits behind an inspection window that does not compress for anyone.

If the goal is a finished kitchen before the holidays, the measuring and layout decisions belong in late summer, not in October. Deciding the island question now is what makes the rest of the schedule possible.

Bring your measurements — room width, cabinet runs, appliance locations, and ceiling height — and the answer takes one conversation. BH Kitchen Remodeling Metro Detroit handles [kitchen island installation](/services/kitchen-island-installation) across Wayne, Oakland, and Macomb counties. Call or text (313) 236-4558 for a written scope.
`,
  },
];

export function findPost(slug: string) {
  return BLOG_POSTS.find((post) => post.slug === slug);
}
