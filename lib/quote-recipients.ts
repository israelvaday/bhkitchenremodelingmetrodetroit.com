// Who gets the contact form email when the Next.js server route
// (app/api/quote/route.ts) sends it. Override with the QUOTE_TO_EMAIL env
// (comma-separated).
//
// SERVER ONLY. Import this from the API route and nowhere else. It used to sit
// on BIZ in lib/business.ts, which every page imports, so both personal
// addresses were compiled into the public client chunks on all pages. The
// static GitHub Pages build does not need it at all: the live form posts to
// the Cloudflare worker at /api/quote, which holds its own recipient list.
export const QUOTE_NOTIFY_EMAILS = ["israelvaday97@gmail.com", "oren.siyonov@gmail.com"] as const;
