# Rediat Terefe — Portfolio (React)

A React + Vite rebuild of my personal portfolio.

## Pages
| Route | What's there |
|---|---|
| `/` | Hero, highlights, research focus, latest publications, lab teaser, education journey |
| `/about` | Bio, education timeline, skills, languages, learning focus, conferences, hobbies |
| `/research` | Thesis, research pathway, the five Ph.D. objectives (expandable), collaborations, future interests |
| `/lab` | Analytical instruments and reactors (tabs, `?tab=reactors`), with photo lightbox |
| `/publications` | All papers grouped by year, first-author filter, copy-citation button |
| `/projects` | Web apps I've built, filterable by category |
| `/awards` | Awards and certificates with lightbox |
| `/contact` | Contact details and a Formspree-powered form |

## Run locally
```bash
npm install
npm run dev       # http://localhost:5173
npm run build     # production build in /dist
npm run preview   # preview the production build
```

## Updating content
**All text lives in `src/data/content.js`** — publications, awards, instruments, reactors, projects, education, socials, etc.
Edit that file; you don't need to touch the page components.

- New publication → add an object to `publications` (newest first) and put the journal image in `public/images/journals/`.
- Project live link → add `url: 'https://…'` to the project and a "Visit" button appears on its card.
- Images live in `public/images/…` (WebP, already compressed). Keep new photos ≤ ~1400 px wide.
- CV → replace `public/files/CV_Rediat_Terefe_2026.pdf` (keep the name, or update `profile.cv`).

## Deploying (Netlify)
`netlify.toml` is included: build command `npm run build`, publish directory `dist`, plus the SPA redirect so
links like `/publications` work on refresh. Connect the GitHub repo in Netlify and it deploys automatically.

## Tech
React 18 · React Router 6 · Vite 5 · plain CSS with design tokens (light/dark themes) · self-hosted fonts
(Fraunces, Manrope, JetBrains Mono) · Microsoft Clarity analytics kept from the original site.
