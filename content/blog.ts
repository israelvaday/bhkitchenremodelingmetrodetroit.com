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
      "Homeowner reviewing a written kitchen remodel scope with a contractor",
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

BH Kitchen Remodeling Metro Detroit provides professional kitchen remodeling across Metro Detroit with written scopes and direct project communication. Call (313) 236-4558 to discuss your kitchen.
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

The minimum room width follows directly from the clearance number. A modest island 24 inches deep, with 42 inches of clearance on both sides, needs 108 inches, or 9 feet, of open floor between the opposing runs of cabinets.

Add the cabinets themselves. Base cabinets are 24 inches deep, so with counters on both sides you need roughly **13 feet wall to wall** before an island is realistic. With counter on one side only, about 11 feet.

Length is more forgiving than width. A useful island starts at about 4 feet long by 2 feet deep; below that it holds a bowl and little else. If seating matters, allow about 24 inches of width per stool and plan the countertop overhang: roughly 15 inches of knee space at standard 36-inch counter height, or about 12 inches at a raised 42-inch bar. An overhang beyond 12 inches of unsupported stone needs brackets or corbels underneath.

## What Metro Detroit floor plans do to the math

The housing stock decides this more than the budget does. Much of Wayne County is pre-1960 bungalows and colonials with closed galley kitchens, often 8 to 10 feet wide, where an island cannot clear 42 inches on both sides no matter how small it is. In those homes the honest answer is that the wall between the kitchen and the dining room, not the island, is the actual project.

Post-war ranches across Oakland County frequently sit right at the boundary, wide enough for a compact island once a peninsula or a bank of lower cabinets comes out. Newer Macomb County builds usually have the width already and the real questions become seating, venting, and where the outlets land.

Measure your own room before applying any of it. Soffits, a chimney chase, a bulkhead hiding ductwork, or a floor register in the middle of the room all change what is possible.

## Decide what the island has to do

The clearance test is about the room. This one is about scope, and it is where island projects quietly get bigger.

- **Counter and storage only.** The contained version. Cabinets, top, and usually a receptacle. No plumbing, no venting.
- **Island sink.** Supply lines, a drain, and a vent have to reach the middle of the room, which means opening the floor and coordinating inspection.
- **Cooktop in the island.** The most involved option. Add gas or a dedicated circuit, plus ventilation: a downdraft or a ceiling hood, each with its own structural and ducting consequences.

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

Bring your measurements, meaning room width, cabinet runs, appliance locations, and ceiling height, and the answer takes one conversation. BH Kitchen Remodeling Metro Detroit handles [kitchen island installation](/services/kitchen-island-installation) across Wayne, Oakland, and Macomb counties. Call or text (313) 236-4558 for a written scope.
`,
  },
  {
    slug: "small-kitchen-remodel-metro-detroit",
    title: "Small Kitchen Remodeling in Metro Detroit: What Works in a Galley",
    metaTitle: "Small Kitchen Remodel Ideas for Metro Detroit Homes",
    excerpt:
      "A compact kitchen is not a scaled-down version of a large one. The constraints change which decisions come first, and which upgrades are worth paying for.",
    category: "Design",
    readMinutes: 9,
    date: "2026-08-18",
    heroImage: "/blog/small-kitchen-remodel-metro-detroit-hero.jpg",
    heroAlt:
      "Narrow galley kitchen in a Metro Detroit home with cabinets running to the ceiling",
    secondaryImage: "/blog/small-kitchen-remodel-metro-detroit-secondary.jpg",
    secondaryAlt:
      "Pull-out pantry and deep drawers inside the base cabinets of a compact kitchen",
    body: `
Much of Metro Detroit's housing stock was built with a closed kitchen at the back of the house, and a good share of those rooms are still the size they were in 1948. A remodel in that room is not a smaller version of an open-plan project. The order of the decisions changes, and so does the list of upgrades worth paying for.

The mistake worth avoiding is treating limited space as a budget problem. It is a geometry problem first. Solve the geometry and the rest of the project gets easier; skip it and you end up with expensive cabinets in a room that still does not work.

## Measure three numbers before anything else

Everything downstream depends on these, and all three take ten minutes with a tape:

- **Clear width** between the opposing runs, measured cabinet face to cabinet face, not wall to wall
- **Total run length**, meaning the linear feet of base cabinet you actually have
- **Ceiling height**, which decides how much storage you can recover overhead

Under about 7 feet of clear width, a two-sided galley is tight but workable for one cook. The National Kitchen & Bath Association puts the comfortable working aisle at 42 inches for one person and 48 inches when two people are in the room at once. Below roughly 36 inches, two people stop being able to pass, and no amount of cabinetry fixes that.

Write the three numbers down before you look at a single photo of a finished kitchen. They rule things in and out faster than any other step.

## The wall is the biggest lever, and the first decision

In a pre-1960 bungalow or colonial, the single change that most alters what is possible is removing or opening the wall between the kitchen and the dining room. It is also the only decision that is genuinely difficult to revisit later, so it belongs at the front of the project rather than the middle.

Two questions decide it. Is the wall load bearing, which determines whether a beam and posts are needed and where the load lands below? And what is inside it, since older walls in this housing stock routinely carry a plumbing stack, a heating duct, or the only run of wiring feeding the back half of the house. Rerouting any of those is ordinary work, but it is work, and it belongs in the estimate rather than in a surprise.

If the wall opens, the kitchen stops being a galley and most of the advice below becomes optional. If it stays, the footprint is fixed and the project becomes an optimization problem inside the space you already have. Either answer is fine. Not deciding is what causes a redesign halfway through.

## Buy back counter space before you buy cabinets

Usable counter is the thing small kitchens are actually short of, and it is recoverable without moving a wall.

- **Reduce the depth on one run.** Base cabinets are 24 inches deep by default. Dropping the second run to 15 or 18 inches gives back six to nine inches of aisle while keeping real storage. In a narrow galley that difference is the difference between passable and not.
- **Keep a landing zone on both sides of the range and the sink.** A continuous 15 inches beside each is worth more than a wider stretch somewhere else in the room.
- **Do not count the sink or the cooktop as counter.** A layout that looks like it has plenty of surface often has almost none once those are subtracted.
- **Reclaim the dead corner.** A blind corner cabinet in a small kitchen is usually the least useful cubic footage in the house. A corner pull-out or a lazy Susan converts it into storage you will actually reach.

## Storage: go vertical, and go specific

Once the floor plan is fixed, the remaining capacity is overhead and inside the boxes.

- **Run wall cabinets to the ceiling.** Many kitchens in this housing stock stop the uppers at 30 or 36 inches and cap them with a soffit. Removing the soffit and extending to the ceiling adds a full shelf across the entire run. The top shelf holds what you use twice a year, which is exactly what should be up there.
- **Choose drawers over doors below the counter.** A deep drawer presents its whole contents at once. A base cabinet with a door and a fixed shelf hides most of what is in it, and in a small kitchen nothing can afford to be invisible.
- **Use the toe kick.** Toe-kick drawers recover several inches of height that is otherwise structural dead space, and they suit flat items such as trays and sheet pans.
- **Specify the inserts up front.** Tray dividers, a pull-out pantry, a knife block, a vertical slot for cutting boards. These cost far less when the cabinets are ordered with them than when they are retrofitted afterwards.

## Size the appliances to the room

Appliances are where a compact kitchen is most often defeated, because standard sizes are set for standard rooms.

- **Refrigerator depth.** A standard-depth refrigerator can project well past the counter. A counter-depth model sits roughly flush with the cabinet run and gives the aisle back several inches for the whole length of the room. It holds less. In a galley that trade is usually worth making.
- **Dishwasher width.** The standard is 24 inches; 18-inch models exist and free up a base cabinet. For one or two people, the narrower unit is often the better use of the run.
- **Range width.** 30 inches is standard and 24-inch ranges are available. Going narrower is only worth it if the recovered space becomes usable counter rather than a filler panel.
- **Check every door swing against the aisle.** This is the detail that most often goes wrong. A layout that measures fine on paper can become unusable the moment the refrigerator, oven, and dishwasher doors are opened. Walk the swings before the order is placed, not after.

Venting deserves a separate thought. An over-the-range microwave saves a cabinet but vents poorly in a closed room. A proper hood ducted to the outside handles moisture and grease far better, and in a small kitchen with no other air path that matters more than it would in an open plan. If the microwave has to stay, a drawer unit in the base cabinets keeps the wall free.

## Light and sightlines do the rest

- **Under-cabinet lighting** puts light on the counter rather than on your back, and it is the single most noticeable upgrade per dollar in a narrow room.
- **Fewer visual breaks** make the space read longer: one countertop material rather than two, a continuous backsplash, and cabinet fronts in one finish.
- **Run the flooring the long way.** Boards or planks laid along the length of a galley stretch it. Laid across, they cut it into segments.
- **Glass or open uppers on one short run** relieve the boxed-in feeling without giving up the storage on the long walls.

## What actually drives the cost

No dollar figures here, because the honest answer depends on your room and the scope you choose. But the drivers are predictable, and knowing them lets you steer the estimate:

- **Moving water, gas, or drain lines** costs more than moving cabinets. Keeping the sink and range near their existing rough-ins is the largest single saving available in a small kitchen.
- **Structural work** on a load-bearing wall brings in a beam, posts, and an inspection, and its cost has little to do with the size of the room.
- **Odd cabinet widths.** Stock cabinets come in fixed increments. A run that does not divide neatly gets filler strips or custom boxes, and custom is where small kitchens quietly become expensive.
- **Small does not mean cheap per square foot.** The same trades, the same inspections, and the same appliances are involved as in a large kitchen. What shrinks is the linear feet of cabinet and counter, not the coordination.

## Where an island fits in

Usually it does not, and forcing one produces a room that is harder to cook in than before. A true galley at 8 to 10 feet wide cannot hold an island and keep a proper walkway on both sides. If you are close to the boundary and want the arithmetic, we worked it through in [kitchen island sizing and clearances](/blog/kitchen-island-clearance-sizing-metro-detroit). A peninsula at one end, which needs clearance on fewer sides, is the version that fits far more often.

## Sequencing a fall start

Kitchen work in Metro Detroit picks up through September and October, and small kitchens are affected by that more than large ones, for a reason that surprises people: in a compact room the trades cannot overlap. There is no second half of the kitchen for the electrician to work in while the cabinets go into the first. Work runs single file, so the schedule per square foot is longer than the square footage suggests, not shorter.

That makes the ordering decisions the critical path. Cabinets carry the longest lead time and everything after them waits, since countertops cannot be templated until the base cabinets are set and verified level. Appliances have to be selected before the cabinets are ordered, because the openings are built to the models chosen. If a finished kitchen before the holidays is the goal, the measuring, the wall decision, and the appliance selections belong in late summer.

Bring the three measurements and a sense of whether the wall is on the table, and most of this resolves in one conversation. BH Kitchen Remodeling Metro Detroit handles [custom kitchen remodeling](/services/custom-kitchen-remodeling) and [kitchen design](/services/kitchen-design) across Wayne, Oakland, and Macomb counties. Call or text (313) 236-4558 for a written scope.
`,
  },
  {
    slug: "kitchen-flooring-under-cabinets-metro-detroit",
    title: "Kitchen Flooring in Metro Detroit: Under the Cabinets or Around Them?",
    metaTitle: "Kitchen Flooring Metro Detroit: Under or Around the Cabinets?",
    excerpt:
      "The floor can run under the cabinets or stop at them, and the flooring material often decides which. Getting it backwards is what traps a dishwasher.",
    category: "Planning",
    readMinutes: 9,
    date: "2026-08-26",
    heroImage: "/blog/kitchen-flooring-under-cabinets-metro-detroit-hero.jpg",
    heroAlt:
      "Luxury vinyl plank kitchen floor meeting a cabinet toe kick in a Metro Detroit kitchen",
    secondaryImage: "/blog/kitchen-flooring-under-cabinets-metro-detroit-secondary.jpg",
    secondaryAlt:
      "Flooring planks stacked in a kitchen to acclimate before installation",
    body: `
Most kitchen remodels answer this question by accident. The floor goes down before the cabinets or after them depending on which trade is free that week, and nobody writes the decision down. It is worth deciding on purpose, because the two sequences produce different kitchens, and one of them can trap your dishwasher under the counter.

## The two sequences

**Floor first.** The finished floor is installed across the whole room and the cabinets are set on top of it. The room reads as one continuous surface, and a future layout change, moving a run or pulling out a peninsula, does not expose a bare patch of subfloor.

**Cabinets first.** The boxes are set on the subfloor and the finished floor is installed around the footprint, butting to the toe kick. Less material, and the cabinet and counter heights land exactly where the drawings put them.

Neither is wrong. But the choice is not always yours to make.

## The flooring material usually decides it

This is the part that gets skipped. Kitchen floors fall into two groups, and only one of them belongs under a cabinet.

- **Floating floors.** Click-lock luxury vinyl plank, most laminate, and some engineered wood. These are not fastened down. They are one connected sheet that has to be free to expand and contract with temperature and humidity, which is why they need a gap at every wall.
- **Fixed floors.** Glue-down vinyl, nail-down or glue-down hardwood, and tile set in mortar. These are bonded to the substrate and do not move as a unit.

A cabinet run is heavy and it is screwed to the wall. Set it on a floating floor and you have pinned that floor in the middle of the room. It can no longer move where it needs to, so it moves where it can: joints open along the walkway, or planks peak up in the middle of the span. The failure usually appears a season later, once the house has dried out, which is long after anyone connects it to the install.

So the working rule is straightforward. **Floating floors go around the cabinets. Fixed floors can go under.** Every floating-floor manufacturer addresses this directly in its installation instructions, and those instructions are worth reading before agreeing to a plan that ignores them.

## The dishwasher is the part people regret

A dishwasher does not sit inside a cabinet. It sits in an opening between two of them, levelled up to the underside of the counter. Where the finished floor stops at the toe kick, the floor of that opening is still bare subfloor, and the machine was set to fit the height it found.

Eight years later it fails. The replacement is a slightly different height, or the same height with no room to tilt it out, and it will not clear the counter on the way. The remaining options are cutting the floor, pulling a countertop, or living with the old machine.

The prevention costs almost nothing and fits in one line of the scope: **run the finished floor through the dishwasher bay** and the range opening even when the rest of the floor stops at the cabinets. The same applies to a slide-in range, which is meant to sit flush with the countertop and cannot do that from a lower plane.

## Cabinet height, counter height, and the toe kick

Base cabinets are 34.5 inches and a standard countertop brings the working surface to 36. Put three quarters of an inch of floor underneath and the counter lands near 36.75 unless somebody planned for it.

On its own that is livable. The problem is that it moves everything with it. The backsplash gets shorter, the clearance under an existing window changes, and any appliance sized to a 36-inch opening now has to fit a taller one. Toe-kick height drops by the same amount, which is cosmetic right up until it is the difference between a drawer clearing the floor and scraping it.

If the floor is going under the cabinets, the floor thickness belongs on the drawings before the cabinets are ordered, not after they arrive.

## Michigan's heating season is the real deadline

Flooring acclimates. Wood and vinyl both arrive at whatever the warehouse temperature and humidity happened to be, and they need time in the actual room, at the conditions that room will actually be kept at, before they go down.

That matters more here than it does in a stable climate. A Metro Detroit house in August is humid. The same house in January, with forced air running, is dry enough to shrink almost everything in it. A wood floor laid tight at summer moisture content, with no time to adjust, is a floor with visible gaps between the boards by February. Laid too dry, it cups the following July instead.

For a fall install the consequence is practical: get the material into the house early, and where the schedule allows, have the heat on before the floor goes down rather than after. That is a few days of storage, not a delay, and it is far easier to arrange in September than to explain in December.

## Look underneath before choosing anything

The subfloor decides what is possible, and in this housing stock it changes within a few miles.

- **Pre-1960 Wayne County homes** often sit over an unconditioned basement or crawlspace, with plank subfloor and some deflection. Tile is the least forgiving of movement and telegraphs a bouncing floor straight into cracked grout, so it usually needs an added layer or a decoupling membrane rather than optimism.
- **Post-war ranches** across Oakland County are generally flatter, but decades of layered vinyl and underlayment can leave the kitchen sitting half an inch above the rooms beside it. That gets resolved at the doorway, and it is better resolved on paper than on install day.
- **Slab-on-grade additions and converted porches** need a moisture reading before wood or laminate is considered at all. Concrete releases moisture for a long time, and a vapor barrier is not optional under a floor that reacts to it.

Flatness is the other check worth making early. Click-together floors carry a stated flatness tolerance, and a floor installed outside it works its joints loose over the first year of normal use.

## What this means for a fall remodel

Kitchen work in Metro Detroit picks up through September and October, and flooring is one of the few decisions that has to be settled before demolition rather than during it. The material determines the sequence, the sequence determines when the cabinets can be set, and the cabinet date determines when the countertops can be templated.

Deciding the floor early is what stops the rest of the schedule from moving.

Bring the room measurements, whatever you know about what is under the existing floor, and what the adjoining rooms are finished in. BH Kitchen Remodeling Metro Detroit handles [kitchen flooring installation](/services/kitchen-flooring) across Wayne, Oakland, and Macomb counties. Call or text (313) 236-4558 for a written scope.
`,
  },
  {
    slug: "happy-rosh-hashanah-2026",
    title: "Rosh Hashanah 2026: Holiday Hours and a Kitchen Checklist",
    metaTitle: "Rosh Hashanah 2026 Holiday Hours | BH Kitchen Remodeling",
    excerpt:
      "Shana Tova! Closed Saturday, September 12 and Sunday, September 13 for Rosh Hashanah, back Monday, September 14 at 9:00 AM, plus a kitchen checklist.",
    category: "Planning",
    readMinutes: 5,
    date: "2026-09-11T12:00:00-04:00",
    heroImage: "/blog/happy-rosh-hashanah-2026-hero.jpg",
    heroAlt:
      "A round challah, a jar of honey and sliced apples on a white quartz kitchen island in a bright kitchen",
    secondaryImage: "/blog/happy-rosh-hashanah-2026-secondary.jpg",
    secondaryAlt:
      "A bright kitchen with light wood cabinets, a stainless range and a white quartz island near a large window",
    body: `
Shana Tova from all of us at BH Kitchen Remodeling Metro Detroit. Rosh Hashanah, the Jewish New Year, begins at sundown tonight, Friday, September 11, and our team is taking the holiday off. Here is when we are closed, a little about the holiday, and a short kitchen checklist for anyone cooking a holiday meal this weekend.

## Rosh Hashanah holiday hours

We are closed Saturday, September 12 and Sunday, September 13 for Rosh Hashanah, and back Monday, September 14 at 9:00 AM.

- **Saturday, September 12:** closed for the first day of Rosh Hashanah, which this year is also Shabbat.
- **Sunday, September 13:** closed for the second day of Rosh Hashanah. Sunday is normally one of our working days, so please note the change this week.
- **Monday, September 14:** back at 9:00 AM on our regular schedule.

Our regular schedule is always listed on our [hours page](/hours). If you are planning a project, the holiday is a good moment to jot down what you would like to change in your kitchen, and we will be glad to hear about it when we are back.

## What is Rosh Hashanah?

Rosh Hashanah means "head of the year". It is the Jewish New Year, observed on the first and second days of Tishrei, and this year it welcomes the year 5787. The first day is Saturday, September 12, which is also Shabbat, and the second day is Sunday, September 13.

The holiday begins at sundown. For Metro Detroit, Hebcal lists candle lighting at 7:31 PM on Friday, September 11, and the end of the holiday at 8:28 PM on Sunday, September 13 (times for Oak Park, MI).

A few of the traditions you may notice this weekend:

- **The shofar.** Because the first day of Rosh Hashanah falls on Shabbat this year, the shofar is sounded on the second day, Sunday.
- **Apples dipped in honey.** A wish for a sweet year.
- **A round challah.** Its round shape stands for the cycle of the year.
- **The greeting.** "Shana Tova" means "a good year", and "Shana Tova u'Metukah" means "a good and sweet year".

Yom Kippur follows soon after, beginning at sundown on Sunday, September 20.

## A new-year kitchen checklist for the holiday meal

A holiday meal asks more of a kitchen than an ordinary weeknight does: more dishes, more people and more hours at the stove. A few minutes of checking before the cooking starts can save a scramble later.

- **Clear and wipe the counters.** Put away the mail, the chargers and any small appliances you will not use this weekend, then wipe down every surface you plan to cook, carve or serve on. When everything comes off the stove at once, open counter space is what you will want most.
- **Check cabinet hinges and drawer slides.** A year of daily use can work hinge screws loose, and a door that sags or rubs is easy to spot once you look for it. Open each drawer all the way out. A slide that sticks or drops at the end of its travel is better found now than with a full drawer of serving pieces.
- **Look at the caulk around the sink and backsplash.** Cracked, peeling or darkened caulk can let water get behind the counter and the wall. A holiday sink sees a lot of water, so it is worth a close look beforehand.
- **Test the range hood fan and light.** Run the fan on each speed and switch the light on before the big cooking day. If something is not working, it is better to find out on a quiet afternoon than with every burner going.

If the checklist turns up more than a quick fix, write it down and set it aside until after the holiday.

## See you Monday

From our team to yours, Shana Tova u'Metukah: a good and sweet year to everyone celebrating, and a happy new season to all of our neighbors across Metro Detroit.

We are back Monday, September 14 at 9:00 AM. When you are ready to plan your next kitchen, BH Kitchen Remodeling Metro Detroit handles [custom kitchen remodeling](/services/custom-kitchen-remodeling) across Wayne, Oakland, and Macomb counties. Call or text (313) 236-4558 for a written scope.
`,
  },
  {
    slug: "kitchen-backsplash-ideas-metro-detroit",
    title: "Kitchen Backsplash Ideas for Metro Detroit Homes: Start With the Countertop",
    metaTitle: "Kitchen Backsplash Ideas for Metro Detroit Homes",
    excerpt:
      "Good backsplash ideas start with the countertop, the grout, and the light the wall is seen under. Choosing tile and color for a Metro Detroit kitchen.",
    category: "Design",
    readMinutes: 8,
    date: "2026-09-13",
    heroImage: "/blog/kitchen-backsplash-ideas-metro-detroit-hero.jpg",
    heroAlt:
      "White subway tile backsplash with gray grout above a quartz countertop, lit by warm under-cabinet lighting at dusk",
    secondaryImage: "/blog/kitchen-backsplash-ideas-metro-detroit-secondary.jpg",
    secondaryAlt:
      "Backsplash samples in white subway, gray porcelain, green glass, and marble beside an oak cabinet door and grout color sticks",
    body: `
Most backsplash ideas are shown as a photograph of a finished wall, and most backsplash regrets start the same way: a tile chosen from a picture, on its own, in a showroom. On the wall it has to share a sightline with a countertop, a cabinet finish, a grout line, and a strip of under-cabinet light. Those four things decide whether it looks right far more than the tile does.

The backsplash is usually the last surface chosen, which makes it the easiest to rush. It is also the one people look at from closest, for the most hours, every day.

## Let the countertop go first

The countertop is the largest, most expensive, and least changeable surface near the backsplash, so it sets the rules.

- **A busy counter wants a quiet wall.** Granite with heavy movement, or a quartz with strong veining, already carries the pattern. A plain tile in a color pulled from the slab lets the counter lead. A patterned tile on top of it makes both look busier.
- **A quiet counter can take a pattern.** Solid quartz, butcher block, and plain laminate leave room for a herringbone, a stacked vertical subway, a handmade-look tile, or a color.
- **One statement per sightline.** If the island has a waterfall edge in a bold slab, or the range has a hood that draws the eye, the backsplash usually works best in a supporting role.

Choose the slab first, then bring an actual sample or remnant of it to every tile decision. The companion guide to [countertop materials for Michigan kitchens](/blog/countertop-materials-michigan-homes) covers that choice.

## Materials, and what each asks of you

**Glazed ceramic** is the most common backsplash tile, including classic subway. It is easy to cut, easy to clean, and forgiving. It is a strong default for a wall that should look clean and stay that way.

**Porcelain** is denser and harder than ceramic. It resists staining and wear well, and it comes in large formats and stone-look finishes. It is also harder to cut cleanly around outlets and window returns, which shows up in the labor.

**Glass tile** reflects light and reads bright in a small or dark kitchen. It is also translucent. Uneven adhesive or a patched wall can show through it, and it chips if cut carelessly. Glass needs a flat wall and a careful installer more than any other option.

**Natural stone** such as marble, travertine, or slate brings real variation. It is porous and usually needs sealing. Marble also etches, which means acids like lemon juice, tomato, and vinegar can leave dull marks that sealing does not prevent. Behind a busy cooktop, that is a trade-off to accept knowingly.

**A slab backsplash** carries the countertop material up the wall. There are few or no grout lines, it cleans easily, and it looks deliberate. It is heavy, it must be templated after the counters are installed, and every outlet has to be cut into the stone.

**Peel-and-stick panels** are a short-term cosmetic fix, not a remodel material. Check the product's heat rating before putting anything like it near a range.

## Grout color changes the whole wall

The same white subway tile can look like three different kitchens depending on the grout.

- **Matching grout** (white on white) makes the wall read as one calm surface. It is also the most likely to discolor behind the range and around the sink.
- **Mid-tone grout** (light or warm gray on white) hides everyday cooking splatter and still looks soft.
- **Contrasting grout** (charcoal on white) turns the layout into the pattern. It looks graphic and intentional, and it also shows every uneven joint and every cut.

Joint width matters as well. Narrow joints look more refined and suit rectified porcelain. Handmade-look tile with irregular edges needs wider joints to absorb the variation. Cement grout is porous and is commonly sealed. Epoxy grout resists stains better and suits a cook's kitchen, at the cost of a more demanding installation.

## Look at samples under the light you will actually use

A Metro Detroit kitchen spends much of the year lit by its own fixtures. By December the sun is down around five in the afternoon, so for a large share of the months when the room is used most, the backsplash is seen under under-cabinet lighting, not daylight.

Under-cabinet lights graze the wall from above at a sharp angle. That makes glossy and handmade tile sparkle, and it also exaggerates every high tile edge, every wavy surface, and every uneven grout line. A zellige-style tile that looks charming in a showroom can look unfinished under a raking strip light if the installation is not planned for it.

The color temperature of that light changes the tile color too. Warm 2700K strips push white tile toward cream. Cooler light pushes gray toward blue. Test samples on the wall at night, under the lighting you have or plan to install, before ordering.

### Build a sample board before deciding

- A piece of the chosen countertop or a remnant of the same slab.
- A cabinet door or finish sample.
- Two or three tile candidates, at least a few pieces of each.
- Grout color samples for each candidate.
- A photo of the wall at night under the kitchen's lighting.

## Behind the range, and at the ends

Two parts of the backsplash deserve their own decision.

**Behind the range** the wall takes heat, steam, and grease. This is where a feature panel, a slab, or a different pattern usually goes, centered on the cooktop and the hood. Pick materials here for cleaning first and looks second, and follow the range and hood manufacturers' clearance requirements.

**At the ends** the tile has to stop somewhere. Where the backsplash meets an open wall, a window, or a doorway, the termination is visible from across the room. How that edge is finished, and whether the field runs full height or stops in a band, is covered in detail on our [kitchen backsplash installation](/services/kitchen-backsplash-tile) page. Settle those questions before tile is ordered, because they change the quantity and the trim pieces.

## Ideas that hold up in real Metro Detroit kitchens

Styles change, but a few approaches keep working across the colonials, bungalows, ranches, and newer builds in Wayne, Oakland, and Macomb counties.

- **White or off-white subway in a new orientation.** Stacked vertically, laid in a herringbone behind the range only, or set in a longer format, it looks current without committing to a trend.
- **Tile that picks up the counter.** A soft gray or warm white pulled from the veining in the slab ties the room together.
- **Full-height tile to the ceiling on a wall with no upper cabinets.** Where open shelving has replaced wall cabinets, running the tile up makes the wall feel finished.
- **Wood cabinets with a quiet, warm tile.** Oak and walnut cabinets, common in Metro Detroit kitchens being refreshed now, pair better with warm whites and creams than with stark white.
- **Color in one place.** A green or blue tile behind the range, with plain tile elsewhere, is easier to live with and to change than a whole wall of it.

## Decide in the fall, install after the counters

In a kitchen remodel the backsplash is installed after the countertops, because the tile sits on the finished counter line. Special-order tile and natural stone can take weeks to arrive, and that lead time often sets the schedule more than the installation itself does.

For a remodel planned this fall, the practical order is simple: choose the counter, build the sample board, order the tile early enough that it is on site before the counters go in, and keep a few spare pieces from the same batch after the job is done.

BH Kitchen Remodeling Metro Detroit handles [kitchen backsplash installation](/services/kitchen-backsplash-tile) across Wayne, Oakland, and Macomb counties, including tile layout, material selection with your countertop and cabinets, and clean finishing at every edge. Call or text (313) 236-4558 for a written scope.
`,
  },
  {
    slug: "yom-kippur-2026",
    title: "Yom Kippur 2026: Holiday Hours and a Quiet Kitchen Checklist",
    metaTitle: "Yom Kippur 2026 Holiday Hours | BH Kitchen Remodeling",
    excerpt:
      "Closed Sunday, September 20 and Monday, September 21 for Yom Kippur, back Tuesday, September 22 at 9:00 AM, plus a checklist for the fast and the break-fast.",
    category: "Planning",
    readMinutes: 5,
    date: "2026-09-20T09:00:00-04:00",
    heroImage: "/blog/yom-kippur-2026-hero.jpg",
    heroAlt:
      "A quiet kitchen with tall oak pantry cabinets, a wall oven and late summer light coming through the window",
    secondaryImage: "/blog/yom-kippur-2026-secondary.jpg",
    secondaryAlt:
      "A farmhouse sink set beside a dark quartz countertop and white subway backsplash during a kitchen installation",
    body: `
Yom Kippur 5787 begins at sundown on Sunday, September 20, 2026, and ends at nightfall on Monday, September 21. BH Kitchen Remodeling Metro Detroit is closed for both days, and our team is back on Tuesday, September 22. Here is our holiday schedule, a short note on what the day is, and a checklist for getting a kitchen ready before a fast day.

## Yom Kippur 2026 holiday hours

We are closed Sunday, September 20 and Monday, September 21 for Yom Kippur, and back Tuesday, September 22 at 9:00 AM.

- **Sunday, September 20:** closed. Yom Kippur begins at sundown. Sunday is normally one of our working days, so please note the change this week.
- **Monday, September 21:** closed for Yom Kippur. Monday is also normally a working day.
- **Tuesday, September 22:** back at 9:00 AM on our regular schedule.

Our regular schedule is always listed on our [hours page](/hours). Quote requests and messages that arrive over the holiday are read when we are back on Tuesday morning, in the order they came in.

## What is Yom Kippur?

Yom Kippur is the Day of Atonement, the most solemn day of the Jewish year. It falls on the tenth day of Tishrei and closes the ten days that begin with Rosh Hashanah, which this year fell on September 12 and 13. Our [Rosh Hashanah post](/blog/happy-rosh-hashanah-2026) covered that holiday and its hours.

The day is marked by a fast of about twenty five hours, from before sundown until nightfall the next evening, and by a long day of prayer. For Metro Detroit, Hebcal lists candle lighting at 7:15 PM on Sunday, September 20, and havdalah, the end of the holiday, at 8:13 PM on Monday, September 21.

A few things you may notice:

- **Kol Nidre.** The evening service that opens the holiday, sung just before sundown.
- **The fast.** No food and no drink for the full day, which is why the meal before it and the meal after it both matter so much.
- **White.** Many people wear white on Yom Kippur as a sign of purity and of a fresh start.
- **Neilah and the shofar.** The closing service ends with a single long blast of the shofar, and then the fast is broken.
- **The greeting.** "G'mar chatima tova" means "may you be sealed for good" in the year ahead. In English, wishing someone an easy and meaningful fast is the common thing to say.

## Getting the kitchen ready before a fast day

A fast day asks something unusual of a kitchen. It sits unused for a full day, and then a tired household walks in and wants to eat immediately. Everything that makes that easy has to be done beforehand, because on the day itself nobody is cooking.

- **Cook and stage the break-fast before the holiday starts.** Kugel, quiche, bagels and spreads, a salad that keeps: whatever your table looks like, it is easier when it is already made and only has to come out of the refrigerator or a low oven. Decide before sundown which dish goes where, so nobody is opening cabinets at nine at night.
- **Clear the counters and empty the sink.** Run the dishwasher before the holiday begins and put the dishes away. Coming back to open counter space and an empty sink is worth the twenty minutes it takes.
- **Make room in the refrigerator.** Staged platters need more shelf space than an ordinary week, and they need it in the shape of a tray. Moving the tall bottles out of the way beforehand is a small thing that saves a rearrangement while people are waiting.
- **Set out what the first ten minutes need.** The kettle filled, the coffee ready to start, glasses and pitchers on the counter, a knife and board out for the bread. Breaking a fast starts with a drink and something simple, not with the main dish.
- **Look at the sink and the faucet.** The sink does the most work on a day like this, before and after. A slow drain, a dripping faucet or cracked caulk at the backsplash is better found on a quiet afternoon than with a full counter of dishes.

None of that is remodeling work. It is just the order of operations that keeps a busy kitchen calm on a day when the household is running on empty.

## After the holiday

If the checklist turned up something the kitchen has been needing for a while, a sink that drains slowly, a cabinet door that has never closed right, counters that are past their useful life, write it down and call us when the holiday is over.

We are back Tuesday, September 22 at 9:00 AM. BH Kitchen Remodeling Metro Detroit handles [custom kitchen remodeling](/services/custom-kitchen-remodeling) across Wayne, Oakland, and Macomb counties. Call or text (313) 236-4558 for a written scope.

G'mar chatima tova, and an easy and meaningful fast to everyone observing across Metro Detroit.
`,
  },
  {
    slug: "kitchen-cabinet-door-styles-metro-detroit",
    title:
      "Kitchen Cabinet Doors and Finishes: Style, Wood, and a Michigan Winter",
    metaTitle: "Kitchen Cabinet Door Styles for Metro Detroit Homes",
    excerpt:
      "Shaker, slab, or raised panel, and what maple, oak, MDF and a Michigan heating season do to each. Choosing cabinet doors and finishes in Metro Detroit.",
    category: "Cabinets",
    readMinutes: 10,
    date: "2026-09-20T08:00:00-04:00",
    heroImage: "/blog/kitchen-cabinet-door-styles-metro-detroit-hero.jpg",
    heroAlt:
      "Three kitchen cabinet door styles side by side: white painted shaker, flat slab walnut, and raised panel oak",
    secondaryImage: "/blog/kitchen-cabinet-door-styles-metro-detroit-secondary.jpg",
    secondaryAlt:
      "Cabinet door samples in white painted MDF, maple, oak, cherry and walnut beside brushed brass and matte black pulls, knobs and a soft-close hinge",
    body: `
Cabinet doors are the surface you actually see. In a finished kitchen the boxes are hidden behind them, and what reads as "the cabinets" is really a door style, a material, a finish, and a piece of hardware. That is also the order in which the decisions get harder to reverse: a knob can change in an afternoon, a door style is fixed once the order is placed, and the material decides how the whole run behaves years later.

Cabinets usually carry the longest lead time in a kitchen remodel, so this is the decision that has to be made first and the one most often made last, from a showroom display under lighting that looks nothing like the room it is going into.

## Start with the door style

Three styles cover most of what gets installed in Metro Detroit kitchens, and each one carries consequences beyond how it looks.

- **Shaker.** A flat centre panel inside a square frame. It suits almost every house here, from a Ferndale bungalow to a newer Macomb County build, and it is the safest choice when the rest of the kitchen is still undecided. The inside corners of the frame collect dust and cooking film, which is a cleaning detail rather than a fault.
- **Slab, or flat panel.** One uninterrupted face, no frame, no profile. It reads modern, it is the easiest door in the kitchen to wipe down, and it puts all the visual interest into the material. In a veneer it shows grain beautifully. In a solid wood it is the style most likely to cup or telegraph a seam, so it is usually built as an engineered panel for a reason.
- **Raised panel.** A centre panel with a profiled edge, standing proud of the frame. It is the traditional look in a lot of the older housing stock in Wayne and Oakland counties, and in oak it is the style most associated with kitchens installed in the eighties and nineties. Done in a painted finish with a shallower profile it reads as current rather than dated.

Beyond those, beaded and mullion doors are detail options rather than whole-kitchen decisions, usually used on a single run or a glass-front cabinet.

One practical filter: look at the trim and interior doors in the rest of your house. A kitchen that argues with the millwork around it tends to feel like a room that was added rather than remodelled.

## Overlay or inset, and why the boxes decide

This is the decision that changes the most and gets discussed the least.

- **Full overlay** doors cover nearly the whole face frame, leaving narrow, even reveals between doors. It is the most common specification now, and it maximises usable opening size.
- **Partial overlay** leaves a wider band of frame visible between doors. It is the most forgiving of a run that is not perfectly square, and it is the least expensive of the three to build.
- **Inset** doors sit flush inside the frame, like a well-fitted drawer. It is the most exacting look and the most expensive, because the opening and the door have to agree to a tight tolerance and stay that way.

Inset is where a Michigan heating season shows up most directly. A solid wood door that fits its opening perfectly in a humid August has less room to expand into than an overlay door does, and the gap around it will visibly change between summer and February. That is the nature of the material rather than a defect, but it is worth choosing knowingly rather than discovering.

Whichever you choose, the opening has to be square for the reveals to look right, which is why the layout and shimming stage matters more on inset than on anything else.

## Wood, MDF, and a Michigan heating season

Every solid wood door moves with humidity. A house here goes from a humid summer to a dry forced-air heating season, and that swing is what separates the materials in practice.

- **Maple** is close-grained, hard, and pale. It is the usual choice under a painted finish because there is almost no grain to telegraph through the paint. Stained, it can blotch unless it is properly conditioned first, which is worth asking about.
- **Oak** has open, prominent grain. Red oak reads pink-brown and is everywhere in the older stock here; white oak reads cooler and is the one currently in favour. Oak is hard and forgiving, and its grain is a feature you either want or do not.
- **Birch** sits between maple and oak on price and appearance and takes stain reasonably well.
- **Cherry** is smooth and warm, and it darkens with light exposure over the first year or two. A cabinet that has been covered by a small appliance will be lighter than the door beside it. Plan for that rather than being surprised by it.
- **Walnut** is dark, expensive, and increasingly used as a single accent run or island rather than a whole kitchen.
- **Hickory** has dramatic colour variation board to board. It is very hard, and it is a commitment.

For painted doors, **MDF** is usually the better material, not the compromise. It is dimensionally stable, it has no grain to raise, and it gives a flatter painted surface than solid wood does. Its weakness is water at an unsealed edge, particularly at the sink base and the dishwasher, so edge sealing is the thing to ask about. Many painted doors are built as an MDF centre panel inside a solid wood frame for exactly this reason.

**Thermofoil** is a vinyl film heat-formed over an MDF core. It is seamless, easy to clean, and inexpensive. It is also sensitive to heat, and the doors immediately beside and above a range or a wall oven are where it fails first, so check the appliance clearances before specifying it there.

**Laminate and melamine** fronts are durable and flat, and in a slab door they are a reasonable modern specification rather than a downgrade.

## Painted, stained, and factory-applied finishes

The finish matters at least as much as the material, and where it is applied matters more than most people expect.

A **factory-applied** finish is sprayed and cured in controlled conditions, and it is harder and more uniform than anything that can be achieved in an occupied house. It is also effectively impossible to match exactly later, which is why ordering a touch-up kit and a spare door front with the original order is worth doing.

A **site-applied** finish on existing doors is a different proposition. It can look very good, it is the route when the boxes are staying, and it depends heavily on preparation: degreasing, deglossing, a bonding primer, and enough cure time before the doors go back on. Cabinet finishes cure for weeks after they stop feeling dry, and stacking or taping too early is what causes the print marks that show up later. Whether that route makes sense at all is the subject of our guide to [cabinet installation vs refacing](/blog/cabinet-installation-vs-refacing).

On **sheen**, a satin or semi-gloss is the practical range for kitchen doors. Flatter finishes look soft and show hand marks and cleaning; glossier finishes clean easily and show every imperfection in the substrate underneath.

Two questions worth asking whoever supplies the doors: what the finish system actually is, and how a chip or a scratch is repaired in five years.

## Colour that still looks right in five years

White and off-white remain the most-specified cabinet colour, and the reason is not fashion. They keep a small kitchen feeling open, they do not date as sharply as a strong colour, and they are the easiest to build a countertop and backsplash around later.

The things that move the decision:

- **Warm versus cool white.** Oak floors, brass hardware, and the warm light most kitchens are lit by all push toward a creamy white. A stark bright white beside warm oak can read cold and slightly blue.
- **Wood tone is back, and it is not the eighties.** White oak and walnut in a slab or shallow shaker door look nothing like a raised-panel red oak kitchen, even though both are wood.
- **Two-tone.** Darker base cabinets with lighter uppers, or a contrasting island, breaks up a long run and hides wear where it actually happens, which is low down.
- **Strong colour in one place.** A deep green or navy island with quiet perimeter cabinets is far easier to live with, and to change, than a whole kitchen in that colour.

Test colour samples in the actual room, on the wall, at night, under the lighting you have. A Metro Detroit kitchen is lit by its own fixtures for a large share of the year, and colour temperature shifts cabinet colour noticeably. The same point applies to the wall behind them, which is covered in our guide to [kitchen backsplash ideas](/blog/kitchen-backsplash-ideas-metro-detroit).

## Hinges, slides, and the hardware you touch every day

Hardware is the smallest line in the specification and the part your hands are on several times a day.

- **Soft-close hinges** are close to standard now. European concealed hinges adjust in three directions with a screwdriver, which is what makes seasonal movement a maintenance detail instead of a service call.
- **Full-extension drawer slides** let the back of the drawer come out where you can see it. On deep pot drawers the difference between full-extension and three-quarter is the difference between using the space and losing it.
- **Drawers instead of doors** in the base cabinets is the single upgrade people mention most afterwards. Reaching into the back of a base cabinet on your knees is the thing that makes a kitchen feel old.
- **Pulls versus knobs.** Pulls are easier on drawers and for anyone with limited grip. Sizing them to the drawer width, rather than using one size everywhere, is what makes a run look designed.
- **Finish mixing.** Hardware does not have to match the faucet, but it should look deliberate. Picking up the faucet finish on the cabinet hardware, or the lighting finish, is an easy way to make the choice read as intentional.

Order a single pull and a single knob before committing to thirty of them, and hold them against an actual door sample.

## Decide in the fall, order before the install

Cabinet doors and fronts are made to order, and the lead time is usually the longest single item in the schedule. A specialty finish, an inset build, or a custom colour extends it further. That makes autumn the right time to settle this for a winter installation, which is the season most Metro Detroit kitchens are actually remodelled in, since the work is entirely indoors.

A workable order of operations:

- Settle the door style and the overlay first, because they drive the cabinet order.
- Choose the material and finish next, with samples seen in the room at night.
- Confirm appliance model numbers before the order is placed, since panel-ready units and specified openings are built into the cabinetry rather than added later.
- Choose hardware last, against a real door sample.
- Check the order against the layout the day it arrives, and store the boxes somewhere heated. Wood and MDF sitting in an unheated garage through a Michigan winter is a problem that surfaces after installation, not before.

BH Kitchen Remodeling Metro Detroit handles [cabinet installation](/services/cabinet-installation) across Wayne, Oakland, and Macomb counties, including layout verification, door and drawer alignment, filler and end panel detailing, and coordination with countertop templating. Call or text (313) 236-4558 for a written scope.
`,
  },
];

export function findPost(slug: string) {
  return BLOG_POSTS.find((post) => post.slug === slug);
}
