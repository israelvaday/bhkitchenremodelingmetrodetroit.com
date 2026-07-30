import { BIZ } from "@/lib/business";

export function BuyersGuide() {
  return (
    <section className="border-t border-ink-800 py-16">
      <div className="mx-auto max-w-3xl space-y-5 px-4 text-sm text-ink-200 md:px-6 md:text-base">
        <header>
          <p className="text-xs font-semibold uppercase tracking-wider text-brass-400">Buyer&apos;s guide</p>
          <h2 className="mt-2 font-display text-2xl font-bold text-white md:text-3xl">
            How to compare kitchen remodeling estimates in Metro Detroit
          </h2>
          <p className="mt-3 text-ink-300">
            A useful kitchen estimate identifies layout changes, cabinet tier, countertop allowances, trade coordination,
            and exclusions. Use this checklist before approving a scope.
          </p>
        </header>

        <p>
          <strong className="text-white">1. Compare the same scope.</strong> Confirm whether demolition, cabinets,
          counters, backsplash, flooring, lighting, and fixture setting are included or excluded.
        </p>
        <p>
          <strong className="text-white">2. Define layout decisions.</strong> Appliance locations, island size, pantry
          depth, and electrical changes should be documented—not assumed.
        </p>
        <p>
          <strong className="text-white">3. Record cabinet and counter specs.</strong> Note door style, box material,
          hardware, countertop type, edge profile, and seam expectations.
        </p>
        <p>
          <strong className="text-white">4. Clarify allowances.</strong> Ask what happens if tile, fixtures, or stone
          selections exceed the allowance and how change orders are handled.
        </p>
        <p>
          <strong className="text-white">5. Review trade coordination.</strong> Electrical, plumbing, gas, and vent work
          should identify who performs it and whether permits are included.
        </p>
        <p>
          <strong className="text-white">6. Plan livability and cleanup.</strong> Discuss temporary kitchen setups, dust
          control, daily reset, substantial completion, and the final walkthrough.
        </p>
        <p>
          {BIZ.name} serves Wayne, Oakland, and Macomb counties and answers project questions at {BIZ.phone}. Compare
          estimates only after layout, materials, trades, and closeout expectations are aligned.
        </p>
      </div>
    </section>
  );
}
