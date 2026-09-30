"use client";

// HOLIDAY-NOTICE simchat-torah-2026. Temporary homepage notice for the
// Shemini Atzeret and Simchat Torah 2026 closure. Remove it by deleting
// this file, its import in app/page.tsx and the lines between
// HOLIDAY-NOTICE:START simchat-torah-2026 and HOLIDAY-NOTICE:END there.
import { useEffect, useState } from "react";

// Monday, October 5, 2026 at 9:00 AM Detroit time, when regular hours resume.
const HIDE_FROM = Date.parse("2026-10-05T09:00:00-04:00");

export function HolidayNoticeSimchatTorah2026() {
  // The server render and the first client render both show the notice, so
  // hydration always matches. The clock is only read after mount.
  const [show, setShow] = useState(true);
  useEffect(() => {
    if (Date.now() >= HIDE_FROM) setShow(false);
  }, []);
  if (!show) return null;

  return (
    <aside
      aria-label="Simchat Torah closure notice"
      className="border-b border-brass-500/30 bg-brass-500/10"
    >
      <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-center gap-x-5 gap-y-2 px-4 py-3 text-center text-sm text-ink-100 md:px-6">
        <p>
          <strong className="font-bold text-brass-300">Closed for Shemini Atzeret and Simchat Torah.</strong> We are closed Saturday, October 3 and Sunday, October 4, and back Monday, October 5 at 9:00 AM. Chag Sameach!
        </p>
      </div>
    </aside>
  );
}
