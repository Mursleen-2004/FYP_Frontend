// Base URL of the Content Genius API.
// Set VITE_API_URL in the Vercel project settings (and in client/.env for
// local overrides); falls back to the local server for `npm run dev`.
export const API_BASE = (
  import.meta.env.VITE_API_URL || "http://localhost:4000"
).replace(/\/$/, "");
