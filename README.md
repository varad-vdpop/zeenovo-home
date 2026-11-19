# ZeeNovo home page

Next.js App Router implementation of the ZeeNovo home page in the [Figma design](https://www.figma.com/design/rrHHtxngRbQaUSuoeGZPRx/zeenovo-new-website?node-id=69-5453).

## Run locally

```powershell
npm install
npm run dev -- --port 3000
```

Open [http://localhost:3000](http://localhost:3000).

All design imagery and vector assets used by the page are stored in `public/assets`; the fonts are stored in `public/fonts`. The navigation links point to sections within this landing page. Product, login, and signup destinations need real URLs or an application backend when those flows are available.

## Security and review settings

- `npm run dev` serves on this machine only. Use `npm run dev:lan` when you need to open the site from a phone on the same network.
- Security headers (content security policy, clickjacking and content-type protection, referrer and permissions policy) are set in `next.config.ts`.
- Review hosts (`*.vercel.app`, `*.amplifyapp.com`) send `X-Robots-Tag: noindex, nofollow`, so search engines skip them. The production domain is not affected.
- The YBM feedback widget loads only when the environment variable `NEXT_PUBLIC_FEEDBACK_PROJECT` is set (for example `zeenovo-v2`). Set it on the review site and for local review; leave it unset on the production site.
