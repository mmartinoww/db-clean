# DB-Clean Landing Page

Bulgarian Next.js App Router landing page for **DB-Clean** — почистване на имоти и дворове, рязане на опасни дървета, косене и извозване на отпадъци.

## Run Locally

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Tech

- Next.js (App Router) + React + TypeScript
- Single-page landing with hero, services, equipment, benefits, process, FAQ and contact
- LocalBusiness / Service / FAQ JSON-LD for SEO
- Green earthy theme (Olive Leaf, Black Forest, Cornsilk, Sunlit Clay, Copperwood)

## Replace Before Deployment

- Real phone number — `PHONE_DISPLAY` / `PHONE_HREF` in `app/page.tsx`.
- Real email and Facebook URL — `business` object in `app/page.tsx`.
- Real domain — `siteUrl` in `app/layout.tsx` and `app/page.tsx`.
- Real service area / town for the map embed (`mapEmbedSrc` in `app/page.tsx`).
- `public/hero.png` — swap for a real photo of the team / vehicles if available
  (keep visual subjects on the right, negative space on the left for the text overlay).
