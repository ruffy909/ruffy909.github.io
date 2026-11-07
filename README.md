# Ruffy John A. Manito — Portfolio

Built with [Astro](https://astro.build). Static, fast, and almost JavaScript-free.

## Commands

| Command           | What it does                              |
| ----------------- | ----------------------------------------- |
| `npm install`     | Install dependencies                      |
| `npm run dev`     | Start dev server at http://localhost:4321 |
| `npm run build`   | Type-check and build to `dist/`           |
| `npm run preview` | Preview the production build              |

## Editing content

All text (name, intro, skills, projects, experience, socials) lives in **`src/data/site.ts`**.

Before deploying:
1. If you move to a custom domain, update `astro.config.mjs` (`site`), `src/data/site.ts` (`url`) and `public/robots.txt`.
2. Replace the placeholder social links and projects.
3. Optional: drop `resume.pdf` into `public/` and set `resume: '/resume.pdf'`.

## Deploy

Every push to `main` is automatically built and published to **https://ruffy909.github.io** by GitHub Actions (`.github/workflows/deploy.yml`).
