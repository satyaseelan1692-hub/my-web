# SNexus Technologies — Website

A cinematic, cyber-command-center style marketing site for SNexus Technologies, built with
Next.js 15 (App Router), TypeScript, Tailwind CSS, Framer Motion and React Three Fiber.

## Getting started

```bash
npm install
npm run dev
```

Then open http://localhost:3000. Production build: `npm run build && npm start`.

Requires Node.js 18.18+ (Node 20 LTS recommended).

## What's fully built

- **Boot sequence** (`components/BootSequence.tsx`, gated by `components/BootGate.tsx`) — the
  full-screen terminal intro with the exact lines requested, an animated progress bar, and the
  "SYSTEM ONLINE / WELCOME TO SNEXUS TECHNOLOGIES" reveal. Runs once per browser session
  (via `sessionStorage`) so returning visitors within the same session skip straight to the site.
- **Homepage** (`app/page.tsx`) — cinematic hero built around your uploaded `knowledge_network.glb`
  model (rendered via `components/KnowledgeNetworkModel.tsx`, normalized and re-styled in the
  cyan/glass theme with a solid + wireframe holographic pass), surrounded by a particle shell,
  HUD rings, canvas particle field and animated grid/scan line; a Live Command Center with
  count-up stats; a 9-card animated services grid; an SVG technology ecosystem map with
  particles flowing between SNexus Core and 11 partner platforms; and a closing CTA.
- **About** — story, vision, mission, core values, timeline, leadership grid, stats, "why choose
  us," and a CTA.
- **Services** — all 9 services (Network Infrastructure, Cloud, Cyber Security, Software
  Development, VoIP, Managed IT, CCTV & Access Control, Microsoft 365, Lark) each with overview,
  features, benefits, process, tech stack and a case study, with a sticky quick-jump nav.
- **Solutions** — 7 industries (Government, Healthcare, Education, Manufacturing, Retail, SME,
  Enterprise), each with challenges / solution / outcome / case study.
- **Projects** — 6 portfolio entries with scope, tech stack, timeline and outcome.
- **Careers** — open positions list and a working (front-end) application form.
- **Contact** — contact form, embedded map, WhatsApp button, and sales / support / emergency
  contact channels.
- **Client Portal** — feature overview plus a login screen UI.
- Global design system in `app/globals.css` and `tailwind.config.ts` (colors, glassmorphism,
  neon glow, HUD corner brackets, grid backgrounds, scanlines).
- SEO: metadata, Open Graph, Twitter cards, JSON-LD `Organization` structured data,
  `sitemap.ts`, `robots.ts`.
- Fully responsive, dark-mode-only by design, respects `prefers-reduced-motion`.

## What's intentionally scaffolded, not wired to a backend

These are real, working UI — but the brief's full scope (auth, ticketing, CMS, payments) needs a
backend decision from you before it can be "production-complete." Each is marked with a comment
in code:

- **Contact / Careers / Portal login forms** submit client-side only (`components/ContactForm.tsx`,
  `ApplyForm.tsx`, `PortalLoginForm.tsx`). Wire them to your email provider, ATS, or auth provider
  (e.g. NextAuth, Clerk, or your identity provider) of choice.
- **Client Portal** ships as a polished login screen + feature overview, not a full authenticated
  app (ticket management, asset tracking, invoices, SLA dashboards). That's a separate
  application in its own right — happy to scope it as a follow-up.
- **Leadership names, office address, phone numbers** are placeholders — swap in real details in
  `lib/data.ts` and `app/contact/page.tsx`.
- **Google Maps embed** uses a generic query string; replace with your exact address or a Google
  Maps API key–based embed for production.
- **World network map** in the original brief is represented via the technology ecosystem SVG map
  and the 3D globe; a literal world-map-with-office-pins visualization can be added with
  `react-simple-maps` or a custom Three.js globe with lat/lng markers if you want that specific
  treatment.

## Project structure

```
app/
  layout.tsx          Root layout, fonts, SEO metadata, JSON-LD
  page.tsx             Homepage
  globals.css          Design tokens & cyber utility classes
  sitemap.ts / robots.ts
  about/services/solutions/projects/careers/contact/portal/page.tsx
components/
  BootGate.tsx, BootSequence.tsx
  Navbar.tsx, Footer.tsx
  Hero.tsx, ParticleField.tsx, NetworkGlobe.tsx
  CommandCenter.tsx, AnimatedCounter.tsx
  ServicesGrid.tsx, TechEcosystem.tsx
  PageHero.tsx, CtaBand.tsx
  ContactForm.tsx, ApplyForm.tsx, PortalLoginForm.tsx, WhatsAppButton.tsx
lib/
  data.ts              All site content (services, stats, industries, projects, roles, etc.)
```

All copy, stats and case studies are realistic placeholders — replace them in `lib/data.ts`
(and the About/Contact pages) with your real figures before launch.

## 3D model

`public/models/knowledge_network.glb` is your uploaded model (a single-mesh network/graph
structure, no textures). `components/KnowledgeNetworkModel.tsx` loads it with `useGLTF`,
computes its real bounding box to auto-normalize scale and centering (so it stays correct even
if you swap in a different export), and renders it twice — once with a solid emissive cyan
material and once as a low-opacity wireframe pass — for the holographic look. It's the visual
centerpiece of the homepage hero, in `components/NetworkGlobe.tsx`, surrounded by a particle
shell and rotating HUD rings.

To swap in a different model later: drop the new `.glb` in `public/models/`, update the path in
both `useGLTF()` calls in `KnowledgeNetworkModel.tsx`, and adjust `TARGET_SIZE` if it should
read larger or smaller in the scene.

## Design tokens

| Token | Value |
|---|---|
| Primary | `#00E5FF` |
| Secondary | `#00BCD4` |
| Background | `#050505` |
| Card | `#0B0B0B` |
| Text | `#FFFFFF` |
| Glow | `rgba(0,229,255,.6)` |
| Display font | Orbitron |
| Body font | Inter |
