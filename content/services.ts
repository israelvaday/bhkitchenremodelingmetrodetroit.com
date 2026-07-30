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
  },
];

export const SERVICES_BY_SLUG: Record<string, Service> = Object.fromEntries(
  SERVICES.map((service) => [service.slug, service])
);
