export type FAQ = { q: string; a: string };

export type FAQSection = {
  id: string;
  title: string;
  emoji: string;
  description: string;
  items: FAQ[];
};

export const FAQ_HERO_IMAGE = "/photos/branding-generated--hero-kitchen-metro-detroit.png";
export const FAQ_HERO_ALT =
  "BH Kitchen Remodeling Metro Detroit contractor reviewing kitchen layout options with a homeowner";

export const FAQ_SECTIONS: FAQSection[] = [
  {
    id: "pricing",
    title: "Pricing & estimates",
    emoji: "💰",
    description: "How kitchen remodeling scopes, materials, and written estimates are prepared.",
    items: [
      {
        q: "How much does a kitchen remodel cost in Metro Detroit?",
        a: "Pricing depends on layout changes, cabinet quality, countertop material, electrical and plumbing adjustments, flooring, backsplash, and the amount of demolition required. We provide a written estimate after reviewing your kitchen so the scope reflects your actual space rather than a generic square-foot rate.",
      },
      {
        q: "Do you provide free kitchen remodeling estimates?",
        a: "Yes. We provide free estimates for kitchen remodeling across Wayne, Oakland, and Macomb counties. Photos and rough measurements help us start the conversation, but most full remodels benefit from an on-site walkthrough before final pricing.",
      },
      {
        q: "Are cabinets, counters, and fixtures included in the estimate?",
        a: "The proposal identifies whether cabinets, countertops, backsplash, hardware, lighting, and standard installation labor are included, along with allowance levels for fixtures and appliances. Allowances and exclusions are listed clearly so you can compare bids meaningfully.",
      },
      {
        q: "How are changes handled after work begins?",
        a: "If you request a layout change, upgraded material, or added scope, we document the price and schedule impact before proceeding. We do not rely on surprise extras at the end of a project.",
      },
    ],
  },
  {
    id: "process",
    title: "Remodeling process",
    emoji: "🔨",
    description: "What happens from the first consultation through the final walkthrough.",
    items: [
      {
        q: "What does your kitchen remodeling process include?",
        a: "A typical project includes a scope review, design and layout confirmation, demolition when needed, rough-in coordination, cabinet installation, countertop templating and install, backsplash, flooring, fixture setting, cleanup, and a final walkthrough. The exact sequence is written into your proposal.",
      },
      {
        q: "How long will my kitchen remodel take?",
        a: "A partial refresh may take a few weeks, while a full gut remodel commonly requires several weeks depending on lead times, inspections, and trade scheduling. We provide an estimated start window and duration after seeing the scope, then communicate if discoveries or material delays affect the schedule.",
      },
      {
        q: "Can you remodel while we live in the home?",
        a: "Yes. Many occupied-home projects are phased to maintain access to a sink, refrigerator, or microwave when possible. We discuss temporary kitchen setups, dust control, daily cleanup, pets, and children before scheduling.",
      },
      {
        q: "Who will perform the work?",
        a: "BH Kitchen Remodeling Metro Detroit provides professional remodeling crews and direct project communication. Electrical, plumbing, and gas work is coordinated with trade partners when required, and you can raise questions with our team throughout the project.",
      },
    ],
  },
  {
    id: "products",
    title: "Materials & selections",
    emoji: "🎨",
    description: "How cabinets, counters, tile, flooring, and hardware are selected.",
    items: [
      {
        q: "Which cabinet lines do you install?",
        a: "We work with stock, semi-custom, and custom cabinet options based on budget, lead time, and layout needs. The proposal specifies the intended cabinet tier, door style, and finish rather than promising one brand for every situation.",
      },
      {
        q: "What countertop materials do you recommend?",
        a: "Quartz is popular for durability and low maintenance, while granite, marble, butcher block, and solid surface each have different care and performance traits. We recommend materials based on how you cook, clean, and use the space.",
      },
      {
        q: "Do you help with kitchen design and layout?",
        a: "Yes. Kitchen design is part of most remodeling projects. We review workflow, storage, appliance placement, lighting, and finish combinations before cabinets are ordered so costly layout mistakes are avoided.",
      },
      {
        q: "Can I supply my own materials or fixtures?",
        a: "Homeowner-supplied items can sometimes be incorporated when lead times, warranties, and compatibility are confirmed in writing. We note any adjusted labor, scheduling, or warranty terms when customer-supplied products are used.",
      },
    ],
  },
  {
    id: "planning",
    title: "Planning & permits",
    emoji: "📋",
    description: "Permits, inspections, lead times, and pre-construction decisions.",
    items: [
      {
        q: "Do kitchen remodels require permits in Metro Detroit?",
        a: "Projects involving structural changes, electrical upgrades, plumbing relocations, or vent modifications often require permits depending on municipality. We identify likely permit needs during scoping and coordinate submissions when included in the project.",
      },
      {
        q: "How far in advance should I order cabinets and counters?",
        a: "Cabinet lead times vary by manufacturer and season. Countertops are templated after base cabinets are installed. We build a realistic order and install sequence into the schedule so trades are not waiting on materials.",
      },
      {
        q: "What should I decide before demolition begins?",
        a: "Finalize layout, appliance locations, cabinet heights, outlet and lighting plans, flooring direction, backsplash height, and major finish selections before demolition when possible. Late changes are manageable but often affect cost and timeline.",
      },
      {
        q: "Do you handle appliance installation?",
        a: "We plan appliance openings, panels, and clearances as part of the remodel. Hookup of gas, dedicated circuits, or complex built-in units may involve trade partners or the appliance retailer depending on the scope.",
      },
    ],
  },
  {
    id: "service-area",
    title: "Service area",
    emoji: "📍",
    description: "Where we remodel kitchens across Metro Detroit.",
    items: [
      {
        q: "Which areas do you serve?",
        a: "We serve Wayne, Oakland, and Macomb counties, including Detroit, Dearborn, Livonia, Troy, Royal Oak, Birmingham, Sterling Heights, Warren, Clinton Township, and surrounding communities.",
      },
      {
        q: "Do you work on condos and townhomes?",
        a: "Yes. We remodel kitchens in single-family homes, condos, townhomes, and some light-commercial break areas. Association rules, elevator access, and parking logistics are discussed during scheduling.",
      },
      {
        q: "Do you offer partial kitchen updates?",
        a: "Yes. Partial refreshes can focus on cabinets, counters, backsplash, lighting, or flooring when a full gut remodel is not needed. We define what stays, what changes, and how phasing affects daily use.",
      },
      {
        q: "How do I schedule a consultation?",
        a: `Call or text ${"(313) 236-4558"} or request an estimate through our website. We will review your goals, timeline, and kitchen photos, then schedule a walkthrough when appropriate.`,
      },
      {
        q: "What are your business hours?",
        a: "Sunday through Thursday hours are 9:00 AM to 5:00 PM, Friday is 9:00 AM to 12:00 PM, and Saturday is closed.",
      },
    ],
  },
];
