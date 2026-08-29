Google Analytics Setup

What I added

- `src/hooks/useAnalytics.ts`: runtime GA injector that reads `VITE_GA_ID`, injects gtag, exposes `trackPageview` and `trackEvent`.
- `src/hooks/useSectionAnalytics.ts`: observes `<section id="...">` elements and sends `section_view` events.
- Integrated `useAnalytics` and `useSectionAnalytics` in `src/App.tsx` so the app initializes GA and tracks sections.
- Removed inline GA snippet from `index.html` to avoid duplicate initialization.
- `.env.example` updated and a local `.env` may be created (ignored by git).
- README updated with instructions to set `VITE_GA_ID`.

How to enable

1. Add your Measurement ID to a local `.env` (do not commit):

   VITE_GA_ID=G-XXXXXXXXXX

2. Start dev server:

   npm run dev

3. Verify in browser console:

   !!window.gtag
   window.dataLayer.slice(-20)

Notes

- `VITE_GA_ID` is not a secret (GA runs client-side) — but keep `.env` out of the repo.
- If you prefer server-side tracking, use Measurement Protocol and keep secrets on the server.
