# Riverways — Marketing Site

Next.js 14 (App Router) site for Riverways.

## Pages
- `/` — Home
- `/about` — About Femi
- `/deos` — DEOS Framework (9 dimensions)
- `/services` — Pricing tiers + project rates
- `/contact` — Contact form (mailto: to hello@riverwayse.com)

## Run locally
```
npm install
npm run dev
```

## Deploy
Push to GitHub, then import into Vercel. No environment variables required for this version.

## ⚠️ Before Saturday — things to finalize
1. **DEOS dimension names** (`app/deos/page.js`, also previewed on `app/page.js`) are drafted placeholders: Discover, Define, Design, Build, Launch, Optimize, Scale, Systemize, Sustain. Swap in Femi's real names/definitions if he has them locked.
2. **Testimonials/case studies**: intentionally left off. The names/numbers in the sales copy docs (Kemi, Tunde, Adebayo, Folake) look like fabricated training personas, not verified clients — do not publish them as real testimonials. Add a `/proof` section once you have real client quotes.
3. **Contact form** currently opens the visitor's email client via `mailto:` (no backend). Fine for Saturday; swap for a real form handler (e.g. Formspree, or a Next.js API route + Resend) when there's time.
4. **Favicon/nav mark** is using the raw logo JPG on a navy background — looks fine, but export a transparent PNG of just the mark if you want it crisper in the nav bar.
5. Pricing shown is the public "Fixed Pricing Structure" tiers only — internal commission/negotiation-protection numbers were deliberately excluded.
