// Single source of truth for NAP, hours, and links. No licence, insurance or
// price wording lives here: the owner confirmed on 2026-09-30 that there is no
// licence and that BH brand sites show no prices.
export const BIZ = {
  name: "BH Kitchen Remodeling Metro Detroit",
  legalName: "BH Kitchen Remodeling Metro Detroit",
  tagline: "Kitchen Remodeling Across Metro Detroit",
  phone: "(313) 236-4558",
  phoneE164: "+13132364558",
  phoneHref: "tel:+13132364558",
  smsHref: "sms:+13132364558",
  email: "info@bhkitchenremodelingmetrodetroit.com",
  emailHref: "mailto:info@bhkitchenremodelingmetrodetroit.com",
  // The contact form's recipient list lives in lib/quote-recipients.ts, which
  // only the server route imports: everything on BIZ ships in the client chunks.
  url: "https://bhkitchenremodelingmetrodetroit.com",
  address: {
    street: "Metro Detroit Service Area",
    locality: "Detroit",
    region: "MI",
    postalCode: "48201",
    country: "US",
    full: "Metro Detroit, MI",
  },
  geo: { lat: 42.3314, lng: -83.0458 },
  /** Wayne / Oakland / Macomb — geolocation + map bounds */
  metroBounds: {
    minLat: 42.15,
    maxLat: 42.75,
    minLng: -83.65,
    maxLng: -82.45,
  },
  /** Default embed map center (full tri-county view) */
  metroMap: { lat: 42.45, lng: -83.05, zoom: 10 },
  hours247: false,
  hours: [
    { day: 0, open: "09:00", close: "17:00", label: "Sunday" },
    { day: 1, open: "09:00", close: "17:00", label: "Monday" },
    { day: 2, open: "09:00", close: "17:00", label: "Tuesday" },
    { day: 3, open: "09:00", close: "17:00", label: "Wednesday" },
    { day: 4, open: "09:00", close: "17:00", label: "Thursday" },
    { day: 5, open: "09:00", close: "12:00", label: "Friday" },
    { day: 6, open: "00:00", close: "00:00", label: "Saturday", closed: true },
  ] as const,
  social: {
    google: "",
    yelp: "",
    facebook: "",
    instagram: "",
    tiktok: "",
  },
};
