import {
  ChefHat,
  PanelsTopLeft,
  Gem,
  PencilRuler,
  Grid3X3,
  Lightbulb,
  SquareStack,
  LayoutGrid,
  Plug,
  RefreshCw,
} from "lucide-react";

export type Service = {
  slug: string;
  name: string;
  shortName: string;
  icon: typeof ChefHat;
  tagline: string;
  description: string;
  bullets: string[];
  intent: "emergency" | "service" | "trust";
  keywords: string[];
  /** Optional in-depth guide on /blog that covers this service's main decision. */
  guide?: { href: string; anchor: string };
  /**
   * Optional service-specific depth, rendered on that service's page only.
   * Services without it keep the shared template copy unchanged.
   */
  deepDive?: { heading: string; body: string }[];
  /**
   * Optional service-specific questions for the in-depth block at the foot of
   * the page. When set they replace the shared question set that every other
   * page on the site renders, so this page carries its own answers.
   */
  faq?: { q: string; a: string }[];
};

export const SERVICES: Service[] = [
  {
    slug: "custom-kitchen-remodeling",
    name: "Custom Kitchen Remodeling",
    shortName: "Full Remodel",
    icon: ChefHat,
    tagline: "Complete kitchen transformations planned around layout, storage, finishes, and how your family actually cooks.",
    description:
      "Transform an outdated or poorly laid-out kitchen with a custom remodeling plan built for Metro Detroit homes. BH Kitchen Remodeling Metro Detroit coordinates demolition, structural adjustments, cabinetry, countertops, backsplash, flooring, lighting, and final finishes with a written scope, clear phasing, and daily site protection across Wayne, Oakland, and Macomb counties.",
    bullets: [
      "Full layout redesign and workflow planning",
      "Demolition, rough-in coordination, and finish carpentry",
      "Cabinet, counter, backsplash, and flooring integration",
      "Permit guidance and inspection scheduling when required",
      "Written scope, timeline, and final walkthrough",
    ],
    intent: "service",
    keywords: [
      "kitchen remodeling metro detroit",
      "custom kitchen remodel detroit mi",
      "kitchen renovation wayne county",
      "kitchen contractor oakland county",
      "kitchen remodel macomb county",
    ],
    faq: [
      {
        q: "What drives the schedule on a full kitchen remodel?",
        a:
          "Cabinet lead time usually sets the calendar, not the site work. Countertops add a second wait because they cannot be templated until the base cabinets are installed and verified, so there is a gap between cabinets going in and counters arriving. Appliance availability and any permit or inspection step can extend that further, which is why selections are locked before demolition rather than during it.",
      },
      {
        q: "Does a kitchen layout have to change to be worth remodeling?",
        a:
          "Often it does not. Many Metro Detroit kitchens improve enormously from better storage, taller cabinets, corrected counter runs, and lighting without moving a single wall or fixture. Relocating a sink, range, or vent brings plumbing, electrical, and ducting into the job, so a layout change should be justified by how the room actually fails you rather than adopted by default.",
      },
      {
        q: "What tends to be discovered once demolition starts?",
        a:
          "Common finds are wiring that predates current practice, drain or vent runs in an unexpected place, walls and floors that are out of level or out of plumb, and previous repairs hidden behind cabinets or a tiled backsplash. None of these are unusual in older housing stock. They are worth naming as possibilities before cabinets are ordered so the scope and schedule can absorb them if they appear.",
      },
      {
        q: "In what order does a full remodel actually happen?",
        a:
          "Typically protection and demolition, then any structural or rough-in work with inspections where required, then wall and ceiling repair, flooring or floor preparation, cabinets, countertop template and installation, backsplash, plumbing and electrical trim-out, appliance setting, paint touch-up, and closeout. Each stage depends on the one before it being complete and verified, which is why a single delayed selection moves everything after it.",
      },
      {
        q: "Can the household stay in the home during a full remodel?",
        a:
          "Usually yes, with planning. That means agreeing in advance on a temporary setup for the refrigerator, microwave, and sink access, dust separation at the openings, where debris leaves the house, protection on the path crews walk, and utility outages that need warning. Pets, work-from-home schedules, and stair access are worth raising early because they change how the site is staged.",
      },
      {
        q: "What should a full remodel proposal exclude as well as include?",
        a:
          "A useful proposal is explicit about what is not in it. Common exclusions are appliance purchase, window and door replacement, floor structure repair found after demolition, asbestos or lead handling, drywall work beyond the kitchen opening, and any allowance overage on cabinets or counters. Naming the exclusions is what keeps a change order a conversation instead of a surprise.",
      },
    ],
  },
  {
    slug: "cabinet-installation",
    name: "Cabinet Installation",
    shortName: "Cabinets",
    icon: PanelsTopLeft,
    tagline: "Level, plumb, and aligned cabinet runs with durable hardware and clean filler details.",
    description:
      "Professional cabinet installation for new kitchens, partial updates, and replacement projects throughout Metro Detroit. We verify layout lines, shim and secure boxes, install fillers and panels, mount doors and drawers, adjust hardware, and coordinate with countertop templating so your finished kitchen looks built-in rather than assembled.",
    bullets: [
      "Stock, semi-custom, and custom cabinet installation",
      "Wall and base runs, tall units, and pantries",
      "Soft-close hinges, drawer slides, and hardware alignment",
      "Crown, light rail, and finished end panels",
      "Coordination with counters, backsplash, and appliances",
    ],
    intent: "service",
    keywords: [
      "cabinet installation metro detroit",
      "kitchen cabinet installer detroit mi",
      "cabinet contractors oakland county",
      "new kitchen cabinets wayne county",
      "cabinet installation macomb county",
    ],
    faq: [
      {
        q: "Should existing cabinets be replaced or refaced?",
        a:
          "It depends on the boxes, not the doors. If the carcasses are square, solid, and in a layout that works, refacing changes the visible surfaces and hardware while keeping the structure. If the boxes are sagging, water damaged, particleboard that has swollen, or in a layout you want to change, replacement is the honest answer because refacing preserves the problem.",
      },
      {
        q: "What has to be ready before cabinets can go in?",
        a:
          "Walls need to be finished and reasonably flat, the floor needs to be at its final height in the cabinet footprint or accounted for, plumbing and electrical rough-in must be complete and inspected where required, and the room should be clear. Cabinets installed before those are settled almost always have to be adjusted later, and adjustment after countertops are on is far more disruptive.",
      },
      {
        q: "Why do cabinet runs need shimming and scribing?",
        a:
          "Very few walls are plumb and very few floors are level, particularly in older Metro Detroit homes. Boxes are shimmed so the run itself is level and the doors and drawers align, and filler pieces and end panels are scribed to the wall so the gap disappears. Skipping this is what produces doors that will not sit flush and a countertop with a visible taper against the wall.",
      },
      {
        q: "How are gaps at appliances and walls handled?",
        a:
          "Fillers, finished end panels, and toe-kick pieces close the gaps between cabinet runs, walls, and appliance openings. Appliance openings are held to the manufacturer's specified dimensions rather than eyeballed, because a dishwasher or range that will not seat is a cabinet problem that gets found on the day the appliance arrives.",
      },
      {
        q: "When are countertops measured relative to cabinet installation?",
        a:
          "After. Base cabinets are installed, leveled, and verified first, then the fabricator templates against what is actually there. Measuring from a drawing or from the old counters risks a top that does not fit the installed run, and a stone top that misses is not adjustable on site.",
      },
      {
        q: "What happens to the cabinets that come out?",
        a:
          "Removal, debris handling, and disposal should be stated in the scope. If you intend to donate a set or reuse boxes in a garage or basement, say so before demolition is scheduled, because cabinets taken out intact come out differently and more slowly than cabinets that are only going to a dumpster.",
      },
    ],
    guide: {
      href: "/blog/cabinet-installation-vs-refacing",
      anchor: "cabinet installation vs refacing",
    },
    deepDive: [
      {
        heading: "What a cabinet installation quote is actually built from",
        body:
          "Cabinet installation is priced off the cabinets, not the room. The count of boxes drives it, and wall, base, and tall units are not equivalent work: a pantry or an oven cabinet takes far longer to set and secure than a two-door base. Beyond the count, the line items that move an estimate are modifications to make a run fit a real wall, fillers and finished end panels, crown and light rail, toe-kick and scribe work, whether removal and disposal of the existing set is included, and whether appliance panels, a hood surround, or open shelving are part of the scope. We put those items and the exclusions in the written scope so competing quotes can be compared on the same basis rather than on a single number.",
      },
      {
        heading: "Assembled boxes, flat-pack, and who does the assembly",
        body:
          "A large share of the cabinetry sold in this market ships ready-to-assemble, and assembly is real labour that sits on its own line. It is worth settling before you compare quotes: are the boxes arriving assembled, is assembly included in the installation, or is it excluded and expected from you. Assembly done off site keeps the mess and the staging out of the house but needs somewhere to put finished boxes; assembly done in the room means the kitchen is a workshop for part of the schedule. Neither is wrong, but a quote that assumes one and a quote that assumes the other are not the same quote.",
      },
      {
        heading: "Delivery, count, and checking the order before install day",
        body:
          "The order should be checked against the layout and the door and drawer schedule when it lands, before demolition is scheduled. Damaged doors, a cracked frame, the wrong finish on one run, or missing hardware are all normally replaceable, but on the cabinet manufacturer's lead time rather than the installer's, and a single missing filler can stall a whole run at the wall. Storage matters too while boxes wait: an unheated garage through a Michigan winter is a poor place for wood and MDF, which move with humidity and temperature.",
      },
      {
        heading: "Fastening into older Metro Detroit walls",
        body:
          "Wall cabinets carry their load through the mounting rail into whatever is behind the drywall or plaster, so what is back there decides the fastening. Plaster and lath, stud spacing that does not follow a modern layout, and furred-out masonry are all common in the older housing stock here, and any of them can mean the run needs blocking or a ledger before a box goes up. Loaded upper cabinets are heavy and a run of them is heavier, so this is checked at layout rather than discovered on install day. Base runs carrying stone tops need the floor under them to be sound for the same reason.",
      },
      {
        heading: "Flooring, appliances, and the order the trades work in",
        body:
          "Two sequencing decisions on a cabinet job are worth making deliberately. Whether the finished floor runs under the cabinets or stops at the toe kick affects the height of the dishwasher opening and how a future floor replacement will go, and it is far cheaper to decide than to revisit. Appliances set their own constraints: a dishwasher needs its opening and its finished height, a slide-in range needs the counter cut to its specification, and panel-ready refrigerators and dishwashers need their panels ordered with the cabinets and built to the appliance maker's dimensions, not approximated afterwards.",
      },
      {
        heading: "The final adjustment pass, and what moves after the first winter",
        body:
          "The last stage of an installation is an alignment pass across every door and drawer: reveals made even, doors brought flush, drawer fronts levelled, and soft-close mechanisms checked. It is worth knowing that this is not permanent. Solid wood doors and face frames move with humidity, and a Michigan heating season is a large swing from a humid August, so a door that sat perfectly at installation can want a small adjustment months later. European soft-close hinges adjust in three directions with a screwdriver, which makes seasonal movement a maintenance detail rather than a defect.",
      },
    ],
  },
  {
    slug: "countertop-replacement",
    name: "Countertop Replacement",
    shortName: "Countertops",
    icon: Gem,
    tagline: "Template-accurate countertops in quartz, granite, butcher block, and solid surface.",
    description:
      "Upgrade worn laminate or dated stone with countertop replacement planned around your sink, cooktop, and edge profile. We coordinate templating, seam placement, cutouts, support brackets, and installation day so your Metro Detroit kitchen counters fit cleanly against backsplash and cabinet lines.",
    bullets: [
      "Quartz, granite, marble, and solid-surface options",
      "Template scheduling and seam planning",
      "Undermount sink and cooktop cutout coordination",
      "Edge profiles, backsplashes, and waterfall details",
      "Removal of existing tops with cabinet protection",
    ],
    intent: "service",
    keywords: [
      "countertop replacement metro detroit",
      "quartz countertops detroit mi",
      "granite countertops oakland county",
      "kitchen counters wayne county",
      "countertop installation macomb county",
    ],
    faq: [
      {
        q: "Will the seams be visible?",
        a:
          "On natural stone and most quartz, seams are visible on close inspection; the goal is placement that keeps them out of sightlines and away from stress points, not invisibility. Seam location is constrained by slab size, the layout of your runs, and where cutouts fall, so it is planned at templating rather than chosen freely.",
      },
      {
        q: "Do new counters need sealing, and how often?",
        a:
          "It depends on the material. Most quartz and solid surface are non-porous and are not sealed. Granite, marble, and other natural stone are porous to varying degrees and are typically sealed, with the interval depending on the stone and how the kitchen is used. Butcher block is a different regime again and needs periodic oiling. Ask which category your selection falls into before you buy it.",
      },
      {
        q: "What if the cabinets underneath are not level?",
        a:
          "They have to be corrected before the new tops go on. Stone does not flex to follow a dipping cabinet run; it bridges the low spots and concentrates load, and an unsupported span is where cracks start. Correcting the run at the cabinet stage is straightforward, and doing it after the tops are set generally is not.",
      },
      {
        q: "Can the existing backsplash stay?",
        a:
          "Sometimes, but plan for the possibility that it cannot. Where tile was set on top of the old counters, the bottom course is usually bonded to them and comes off with the removal. Where the old tops were run into an adhesive bed, the wall surface behind them is frequently damaged. It is worth agreeing in advance whether a partial repair or a new backsplash run is acceptable to you.",
      },
      {
        q: "Can a slab remnant be used for a small kitchen or an island?",
        a:
          "For a compact top, an island, or a bar run, remnants are often a genuine option and widen the material choice. The constraints are the piece's actual dimensions against your layout, whether the cutouts fit within it, and whether the pattern and color still read as a set with anything else in the room.",
      },
      {
        q: "How long is the kitchen without counters?",
        a:
          "There is a working gap between the day the old tops come off and the day the fabricated ones are installed, because templating happens against the installed cabinets and fabrication follows it. The sink and any dropped-in cooktop are out of service for that window, so a temporary washing and prep setup is worth arranging before removal day rather than after.",
      },
    ],
    guide: {
      href: "/blog/countertop-materials-michigan-homes",
      anchor: "countertop materials for Michigan kitchens",
    },
    deepDive: [
      {
        heading: "Replacing counters is a different job from installing them new",
        body:
          "On a replacement the old tops have to come off before anything else happens, and that is where most of the risk sits. Laminate is usually screwed up through the cabinet corner blocks; stone is often run in a bed of adhesive that grips the cabinet tops and, where a tile backsplash was set on top of the counter, the bottom course of tile as well. We plan the removal around what has to survive it: cabinet boxes, the wall surface behind, and any backsplash you intend to keep. We also say up front when a backsplash cannot come through intact and will need a repair or a new run.",
      },
      {
        heading: "Sink, faucet, and appliance disconnects",
        body:
          "Countertop replacement always means disconnecting and resetting the sink, faucet, supply lines, drain, and a disposal or filter if you have one. A drop-in sink can often be reused; an undermount is bonded to the old top and generally does not survive removal, so plan on a new sink where the current one is undermounted. If the cooktop drops into the counter, it comes out with the old top and goes back after the new one is set.",
      },
      {
        heading: "Templating, and how long your kitchen is without counters",
        body:
          "Fabricators template against the actual installed condition, which on a replacement means after the old tops are off and the cabinet runs have been checked for level. That is the point most people underestimate: between template day and install day the counters and sink are out of service while the slab is cut, so the gap between those two dates is the part of the schedule worth asking about before you commit. We confirm the fabrication window in writing and set a temporary work surface where it helps.",
      },
      {
        heading: "Seams, cutouts, and support",
        body:
          "Seam placement is decided by slab dimensions, the length of the run, and where the sink and cooktop cutouts land, not by preference alone, though preference decides between the options that are genuinely available. Cutouts for the sink, cooktop, faucet, soap dispenser, and air gap are made at the shop from the template, so late changes to a faucet or sink model are expensive to accommodate. Overhangs on islands and peninsulas need bracket or corbel support past the span the material can carry unsupported; we work that out before fabrication rather than on install day.",
      },
      {
        heading: "Edge profiles and finish details",
        body:
          "Edge profile changes the look and the feel of the counter and is chosen at template. Eased and beveled edges read contemporary and are easy to wipe down; ogee and bullnose profiles read traditional. Where the counter meets a wall that is out of plumb, which is common in older Metro Detroit homes, the scribe and caulk line is what makes the fit look intentional, and it is worth agreeing how that junction will be finished.",
      },
      {
        heading: "What the estimate is actually built from",
        body:
          "A countertop replacement estimate is driven by square footage, the material tier you select, the edge profile, how many cutouts are needed, how many seams the layout forces, whether the existing tops require careful removal and disposal, and whether backsplash work is included. We put those line items and the exclusions in the written scope so you can compare quotes on the same basis, and we discuss and document any change before added work proceeds.",
      },
    ],
  },
  {
    slug: "kitchen-design",
    name: "Kitchen Design",
    shortName: "Design",
    icon: PencilRuler,
    tagline: "Functional layouts, material selections, and elevations before construction begins.",
    description:
      "Kitchen design services help you visualize workflow, storage, lighting, and finish combinations before cabinets are ordered. We review existing conditions, discuss how you cook and entertain, develop layout options, and align selections with budget and lead times for Metro Detroit remodeling projects.",
    bullets: [
      "Layout options for traffic, prep, and storage",
      "Cabinet elevations and appliance placement",
      "Counter, backsplash, flooring, and hardware selections",
      "Lighting layers and outlet planning",
      "Budget tiers and phasing recommendations",
    ],
    intent: "trust",
    keywords: [
      "kitchen design metro detroit",
      "kitchen designer detroit mi",
      "kitchen layout planning oakland county",
      "kitchen design consultant wayne county",
      "custom kitchen design macomb county",
    ],
    faq: [
      {
        q: "What does a design phase actually produce?",
        a:
          "A workable design phase ends with a layout you can build from: cabinet elevations and plan, appliance positions and their utility requirements, counter and backsplash selections, a lighting and outlet plan, and the decisions that other trades depend on. The point is to move choices ahead of demolition, because a decision made mid-project costs schedule as well as money.",
      },
      {
        q: "How is an existing layout judged?",
        a:
          "By how the room is actually used rather than by style. That means looking at the paths between refrigerator, sink, and cooking surface, whether two people can work without colliding, door and appliance swings that conflict, dead corners, where groceries land, and where the trash and dish routines happen. Most complaints about a kitchen resolve to one of those, not to the finishes.",
      },
      {
        q: "How much clearance do walkways and islands need?",
        a:
          "Walkways are commonly planned around 36 inches and work aisles where someone stands and turns around 42 to 48 inches, wider where two cooks share the space or a dishwasher and oven door open into the same aisle. These are planning guides rather than rules, but a layout that has to violate them is usually telling you the island is too big for the room.",
      },
      {
        q: "When do selections need to be locked?",
        a:
          "Cabinets first, because their lead time gates the schedule and their dimensions drive everything else. Appliances next, since panel-ready units, hood sizing, and counter-depth refrigerators all change cabinetry. Counters, backsplash, flooring, and hardware can follow, but late changes to any of them ripple back into work already done.",
      },
      {
        q: "Can design work happen before a contractor is chosen?",
        a:
          "Yes, and a completed design makes the bids you receive genuinely comparable, because every contractor is pricing the same scope. What matters is that the design accounts for the constraints of your actual house rather than an ideal room, so field measurements and the positions of existing plumbing, venting, and electrical belong in it.",
      },
      {
        q: "How do budget tiers change a design?",
        a:
          "Mostly through cabinet construction and finish, counter material, and how much of the mechanical layout moves. A plan can often be designed so the expensive decisions are isolated and can be phased, for example keeping the current plumbing wall now while sizing the layout for a future change. Naming the tier early avoids designing a kitchen that has to be redrawn once numbers arrive.",
      },
    ],
  },
  {
    slug: "kitchen-backsplash-tile",
    name: "Kitchen Backsplash & Tile",
    shortName: "Backsplash",
    icon: Grid3X3,
    tagline: "Subway, slab, mosaic, and large-format backsplash installation with clean terminations.",
    description:
      "A well-installed backsplash protects walls, defines the kitchen palette, and ties cabinets to countertops. We lay out tile to center focal points, waterproof wet areas appropriately, cut precisely around outlets and windows, and finish edges cleanly for Metro Detroit kitchens.",
    bullets: [
      "Subway, mosaic, large-format, and slab backsplash",
      "Layout centered on range, sink, or window",
      "Waterproofing at wet areas and behind sinks",
      "Outlet, switch, and trim coordination",
      "Grout, caulk, and sealer recommendations",
    ],
    intent: "service",
    keywords: [
      "kitchen backsplash metro detroit",
      "tile backsplash detroit mi",
      "subway tile installation oakland county",
      "backsplash contractor wayne county",
      "kitchen tile macomb county",
    ],
    faq: [
      {
        q: "When in the project does the backsplash go in?",
        a:
          "After the countertops are installed, because the backsplash sits on them and the tile has to follow the actual finished counter line. Attempting it earlier means either a gap or a cut course once the real tops arrive. Electrical and plumbing trim-out generally follows the tile so plates sit on the finished surface.",
      },
      {
        q: "How is the tile layout decided?",
        a:
          "By choosing what the field centers on, usually the range, the sink, or a window, then working outward so the cuts land where they are least visible. The layout is set before any adhesive goes on the wall. Where two focal points compete, one of them takes the full tile and the other absorbs the cut, and that is a decision worth making with you rather than at the wall.",
      },
      {
        q: "What is different behind the range and at wet areas?",
        a:
          "Behind a range the surface takes heat and grease, so material choice and grout selection matter more there, and any decorative panel or slab section is usually centered on the appliance. Around the sink and any run below a window, water management is the concern, which is why the joint between counter and tile is treated as a movement joint rather than grouted solid.",
      },
      {
        q: "How are outlets and switches handled in a tile field?",
        a:
          "They are planned into the layout rather than cut around afterward. Boxes may need extenders so the device sits proud of the finished tile and the plate lies flat. Where a run of outlets would break an important part of the pattern, moving the boxes or switching to under-cabinet strip outlets is worth discussing during design rather than at install.",
      },
      {
        q: "Where does grout end and caulk begin?",
        a:
          "Grout goes in the joints between tiles. Caulk, in a matching color, goes where two different materials or planes meet and where movement is expected: the counter-to-tile joint, inside corners, and the joint against cabinets or trim. Grouting those spots instead is the most common reason a backsplash cracks along the counter line within a year.",
      },
      {
        q: "Does the backsplash need sealing?",
        a:
          "The tile itself usually does not if it is glazed ceramic or porcelain. Natural stone tile and cement-based grout are porous and are commonly sealed, particularly behind a range and around the sink. Epoxy grout is an alternative where staining is the main worry. Which of these applies follows entirely from the material you select.",
      },
    ],
  },
  {
    slug: "kitchen-lighting-upgrades",
    name: "Kitchen Lighting Upgrades",
    shortName: "Lighting",
    icon: Lightbulb,
    tagline: "Task, ambient, and accent lighting planned with your layout and finish palette.",
    description:
      "Lighting changes how cabinets, counters, and flooring read in a finished kitchen. We help plan recessed cans, under-cabinet LED, pendants, and switched zones so work areas stay bright and the room feels balanced. Electrical rough-in is coordinated with licensed trade partners when required.",
    bullets: [
      "Recessed, pendant, and under-cabinet lighting plans",
      "Dimming, switching, and circuit zoning",
      "Coordination with cabinet and ceiling layouts",
      "Bright task areas at sink, range, and prep zones",
      "Licensed electrical partner coordination when needed",
    ],
    intent: "service",
    keywords: [
      "kitchen lighting metro detroit",
      "under cabinet lighting detroit mi",
      "kitchen pendant lights oakland county",
      "recessed lighting kitchen wayne county",
      "kitchen lighting contractor macomb county",
    ],
    faq: [
      {
        q: "What are the layers of kitchen lighting?",
        a:
          "Ambient light fills the room, task light puts usable brightness on the counters where you actually cut and read, and accent light picks out an island, glass cabinet, or backsplash. A kitchen lit only from a central ceiling fixture puts the cook's own shadow on the work surface, which is the single most common complaint the layered approach fixes.",
      },
      {
        q: "Where do recessed lights belong?",
        a:
          "Generally forward of the wall cabinets rather than centered in the room, so the light lands on the counter edge instead of the cabinet faces. Spacing is planned against ceiling height and beam angle, and the layout has to be coordinated with joists, ducting, and any existing ceiling framing before positions are marked.",
      },
      {
        q: "How is under-cabinet lighting powered and switched?",
        a:
          "Usually from a dedicated circuit or a switched leg run into the cabinet run, with the driver or transformer placed where it stays accessible. It should be on its own switch, not tied to the ceiling lights, because its whole value is being usable on its own. Planning it before cabinets go up is far simpler than retrofitting behind an installed run.",
      },
      {
        q: "How many pendants belong over an island?",
        a:
          "It follows the island length and the fixture diameter more than any fixed count. Two or three is typical, spaced so they read as evenly balanced against the island ends rather than against the room, and hung high enough to clear sightlines across the counter. The electrical boxes have to be positioned during rough-in, so the island dimensions need to be settled first.",
      },
      {
        q: "What color temperature suits a kitchen?",
        a:
          "A warmer neutral is the common choice for kitchens because it keeps food and wood tones looking right while staying bright enough to work under. What matters more than the exact number is consistency: mixing temperatures between ceiling cans, under-cabinet strips, and pendants is very visible, and a good color rendering rating makes more difference to how the room feels than raw brightness does.",
      },
      {
        q: "When does lighting work need an electrical partner?",
        a:
          "New circuits, panel work, moving or adding boxes, and anything requiring inspection are handled by an electrical partner rather than as carpentry. Swapping a fixture in an existing box is a different matter. The scope should say which category your project falls into and who is scheduling any inspection.",
      },
    ],
  },
  {
    slug: "kitchen-flooring",
    name: "Kitchen Flooring",
    shortName: "Flooring",
    icon: SquareStack,
    tagline: "Durable flooring transitions that survive spills, pets, and daily traffic.",
    description:
      "Kitchen flooring must handle moisture, dropped cookware, and heavy foot traffic while complementing cabinets and counters. We install luxury vinyl plank, tile, and engineered options with flat substrates, sensible transitions, and protection during the rest of your Metro Detroit remodel.",
    bullets: [
      "Luxury vinyl plank, tile, and engineered wood",
      "Subfloor leveling and moisture assessment",
      "Transitions to adjacent rooms and stair noses",
      "Heat-register and appliance clearance planning",
      "Protection during cabinet and counter work",
    ],
    intent: "service",
    keywords: [
      "kitchen flooring metro detroit",
      "kitchen floor installation detroit mi",
      "luxury vinyl kitchen oakland county",
      "kitchen tile floor wayne county",
      "kitchen flooring contractor macomb county",
    ],
    faq: [
      {
        q: "Does the flooring run under the cabinets or stop at them?",
        a:
          "Both are done, and the choice has consequences. Running the floor through first is simpler to install and makes a future layout change easier, but it raises the cabinets and therefore the counter height by the floor thickness. Installing around the cabinet footprint saves material and keeps heights as drawn, but it commits you to the current layout. It is worth deciding deliberately rather than by whichever trade arrives first.",
      },
      {
        q: "How is the subfloor assessed before new flooring?",
        a:
          "By checking it for flatness, movement, fastening, and moisture. Tile in particular is unforgiving of deflection and will telegraph a bouncing subfloor into cracked grout, and click-together floors need flatness within tolerance or the joints work loose. Older homes often need leveling compound or an added layer, and that is better found before material is ordered.",
      },
      {
        q: "Which flooring types actually suit a kitchen?",
        a:
          "Luxury vinyl plank, porcelain and ceramic tile, and engineered wood are the common choices, and they trade off differently. Tile is the most water tolerant and the hardest underfoot. Vinyl plank is forgiving of spills and of a slightly imperfect subfloor. Engineered wood matches adjoining rooms best but is the least tolerant of standing water, which matters directly in front of a dishwasher.",
      },
      {
        q: "Will the dishwasher still come out after the floor is raised?",
        a:
          "This is worth checking before installation, not after. Adding floor height under the cabinet run without accounting for it can leave a dishwasher trapped under the counter, so it cannot be pulled for service or replacement without cutting the floor. The clearance is verified against the appliance's specified height while the layout is still adjustable.",
      },
      {
        q: "How are transitions to adjacent rooms handled?",
        a:
          "Where the new floor meets an existing one at a different height or material, a transition piece, a reducer, or a flush detail carries the change. The doorway is the usual location because it is where a break reads as intentional. Stair noses, heat registers, and any threshold to a garage or side door are worth walking before the floor is ordered.",
      },
      {
        q: "Where does flooring fall in the sequence?",
        a:
          "After demolition and any subfloor repair, and its position relative to cabinets depends on the under-or-around decision above. Whichever order applies, the finished floor is protected through cabinet, counter, and backsplash work, because those stages involve heavy boxes, stone, and wet materials moving across it.",
      },
    ],
  },
  {
    slug: "kitchen-island-installation",
    name: "Kitchen Island Installation",
    shortName: "Islands",
    icon: LayoutGrid,
    tagline: "Islands sized for prep, seating, storage, and appliance clearances.",
    description:
      "A kitchen island can add prep space, seating, storage, and a visual anchor when proportions and clearances are right. We plan island dimensions, electrical needs, countertop overhangs, and cabinet alignment so the finished island feels intentional in your Metro Detroit kitchen.",
    bullets: [
      "Sizing for walkways, appliances, and seating",
      "Base cabinets, panels, and finished ends",
      "Countertop overhang and support planning",
      "Outlet and lighting coordination",
      "Water and gas rough-in coordination when applicable",
    ],
    intent: "service",
    keywords: [
      "kitchen island installation metro detroit",
      "kitchen island contractor detroit mi",
      "custom kitchen island oakland county",
      "island cabinets wayne county",
      "kitchen island remodel macomb county",
    ],
    faq: [
      {
        q: "How much space does an island need around it?",
        a:
          "Aisles are commonly planned at roughly 42 to 48 inches on working sides and around 36 inches where the aisle is only a walkway, measured to the counter edge rather than the cabinet base. The tightest constraint is usually an appliance door and a person occupying the same aisle at once, so dishwasher, oven, and refrigerator swings are checked against the island before its size is fixed.",
      },
      {
        q: "Can an island carry a sink or a cooktop?",
        a:
          "Yes, and each brings its own rough-in. A sink means supply and drain lines and a vent path run to the island location, which on a slab or over a finished basement ceiling is a real constraint worth checking early. A cooktop means gas or a dedicated circuit and a decision about ventilation, since a downdraft, an island hood, and no ventilation at all are very different installations.",
      },
      {
        q: "How is a seating overhang supported?",
        a:
          "By brackets, corbels, or a steel support plate sized to the overhang and the material. A short overhang in quartz may need little; a longer one, or one in a more brittle stone, needs proper support or it becomes a cracking risk the first time someone leans on it. The support method should be settled at templating, since it affects the cabinet and panel detail underneath.",
      },
      {
        q: "Does an island need outlets?",
        a:
          "Islands with a counter surface generally require receptacles under current electrical practice, and where they are placed is a design decision as much as a code one. Options include the cabinet side, a panel-integrated position, or a pop-up in the counter, and each has a different visual result and a different cabinet implication. Verifying what applies is part of the electrical scope.",
      },
      {
        q: "Is the island fastened down?",
        a:
          "Yes. The base cabinets are anchored to the floor through cleats or blocking so the assembly cannot shift, which matters more once a stone top and a seating overhang are on it. A movable cart is a different product and a legitimate choice for a small kitchen, but it is not the same thing as an installed island.",
      },
      {
        q: "When is an island the wrong answer?",
        a:
          "When the room cannot give it the aisles without pinching circulation, or when the only way to fit it is to block an appliance door or the main path through the kitchen. In those rooms a peninsula, a longer counter run, or a movable work table usually delivers the prep surface and storage without making the kitchen harder to use.",
      },
    ],
    guide: {
      href: "/blog/kitchen-island-clearance-sizing-metro-detroit",
      anchor: "kitchen island sizing and clearances",
    },
  },
  {
    slug: "kitchen-appliance-layout",
    name: "Appliance Layout & Upgrades",
    shortName: "Appliances",
    icon: Plug,
    tagline: "Refrigerator, range, hood, and dishwasher placement that supports daily workflow.",
    description:
      "Appliance swaps often reveal cabinet, electrical, venting, or flooring adjustments. We plan refrigerator openings, range landing space, hood clearances, and dishwasher panel alignment so new appliances integrate cleanly into your Metro Detroit kitchen remodel.",
    bullets: [
      "Refrigerator, range, hood, and dishwasher placement",
      "Cabinet modifications for panel-ready units",
      "Venting, gas line, and electrical coordination",
      "Landing zones and workflow review",
      "Panel, filler, and trim alignment",
    ],
    intent: "service",
    keywords: [
      "kitchen appliance layout metro detroit",
      "kitchen appliance installation detroit mi",
      "panel ready dishwasher oakland county",
      "range hood installation wayne county",
      "kitchen appliance remodel macomb county",
    ],
    faq: [
      {
        q: "When should appliances be selected?",
        a:
          "Before cabinets are ordered. Appliance dimensions, door swings, panel requirements, and utility needs all drive cabinetry, and a substitution made after the boxes arrive is the most common cause of a filler that does not fit or an opening that has to be rebuilt. Model numbers and specification sheets are what the cabinet order is built against, not category names.",
      },
      {
        q: "What is a landing zone and why does it matter?",
        a:
          "It is usable counter beside the refrigerator, the cooking surface, and the oven, so there is somewhere to set a hot pan or an armful of groceries. Kitchens that feel unworkable despite having plenty of total counter often have that counter in the wrong place, split into strips too narrow to use. Landing zones are planned into the layout rather than left to whatever space remains.",
      },
      {
        q: "What does a panel-ready appliance require from the cabinets?",
        a:
          "A custom panel matched to the cabinet door, plus the hardware and mounting the specific appliance calls for, plus an opening built to that model's tolerance. It is a cabinet order item with its own lead time, not an accessory bought later. The specification sheet has to be in hand when the cabinets are ordered.",
      },
      {
        q: "Ducted or recirculating range hood?",
        a:
          "Ducted removes heat, moisture, and cooking odor from the house and is the better performer where a duct route exists. Recirculating filters and returns air to the room, which is sometimes the only option on an interior wall or in a condo. The decision affects framing, cabinet depth above the range, and the electrical run, so it belongs in the design phase rather than at installation.",
      },
      {
        q: "What utilities does each appliance need?",
        a:
          "Ranges and cooktops need either gas or a dedicated high-amperage circuit; wall ovens usually need their own circuit; dishwashers need supply, drain, and power; refrigerators with ice or water need a supply line; microwaves and hoods need their own circuits. Mapping these against the existing panel and plumbing early is what prevents a rough-in surprise after demolition.",
      },
      {
        q: "Counter-depth or standard-depth refrigerator?",
        a:
          "Counter-depth sits closer to flush with the cabinet run and looks built in, at the cost of interior volume. Standard depth holds more but projects into the room, which matters in a narrow galley or opposite an island. Either way the specified depth including the door and hinge clearance is what the surround is built to, not the nominal figure.",
      },
    ],
  },
  {
    slug: "partial-kitchen-refresh",
    name: "Partial Kitchen Refresh",
    shortName: "Refresh",
    icon: RefreshCw,
    tagline: "Targeted updates when a full gut remodel is more than you need right now.",
    description:
      "Not every project requires a complete demolition. Partial kitchen refreshes focus on the highest-impact upgrades—cabinets, counters, backsplash, lighting, or flooring—while keeping functional elements that still work. We phase work to minimize downtime for occupied Metro Detroit homes.",
    bullets: [
      "Cabinet refacing, repainting, or selective replacement",
      "Countertop and backsplash-only upgrades",
      "Hardware, lighting, and fixture updates",
      "Phased scheduling for occupied homes",
      "Clear scope separating refresh from full remodel",
    ],
    intent: "service",
    keywords: [
      "partial kitchen remodel metro detroit",
      "kitchen refresh detroit mi",
      "cabinet refacing oakland county",
      "countertop upgrade wayne county",
      "small kitchen remodel macomb county",
    ],
    faq: [
      {
        q: "Where is the line between a refresh and a full remodel?",
        a:
          "A refresh keeps the existing layout and the mechanical positions, and changes the visible surfaces: cabinet fronts or finish, counters, backsplash, hardware, lighting, and sometimes flooring. Once the sink, range, or vent moves, or a wall changes, the plumbing and electrical work involved makes it a remodel regardless of what it is called. Naming which one you are doing keeps the scope honest.",
      },
      {
        q: "Can cabinets be refaced instead of replaced?",
        a:
          "If the boxes are square, solid, and laid out the way you want, yes. Refacing replaces doors, drawer fronts, and hardware and applies matching material to the visible box surfaces. If the boxes are water damaged, sagging, or in a layout you dislike, refacing preserves the problem in a new finish, and replacement is the more honest option.",
      },
      {
        q: "Can countertops be replaced without touching the cabinets?",
        a:
          "Usually, provided the cabinet runs are sound and level. The removal is the delicate part, because old tops are often bonded to the cabinet tops and to the bottom course of a tiled backsplash. Expect the backsplash to be part of the conversation, and expect a level check on the cabinet run before the new tops are templated.",
      },
      {
        q: "Can the kitchen stay usable through a refresh?",
        a:
          "Largely, with phasing. Work can often be sequenced so the refrigerator stays connected and the sink is out for a defined window rather than the whole project. What that looks like depends on which elements you are changing, so it is worth agreeing the phasing and the specific days without a sink before scheduling.",
      },
      {
        q: "Does a refresh need permits?",
        a:
          "A surface-level refresh that does not move plumbing, alter structure, or add circuits generally does not, though requirements vary by municipality across Wayne, Oakland, and Macomb counties. Once electrical or plumbing changes enter the scope, the answer can change. The proposal should identify any likely permit need and who coordinates inspections when one applies.",
      },
      {
        q: "When is a refresh the wrong call?",
        a:
          "When the thing that frustrates you is the layout. New doors and counters on a plan that has no landing space beside the range, a blocked walkway, or a dead corner will look better and work exactly the same. In that case the money is better spent on design first, even if the build itself is then phased over time.",
      },
    ],
  },
];

export const SERVICES_BY_SLUG: Record<string, Service> = Object.fromEntries(
  SERVICES.map((service) => [service.slug, service])
);
