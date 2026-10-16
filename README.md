# Abiru Dinuwara — Personal Portfolio

Live site: https://abirudinuwara.github.io/abirudinuwara/

Personal adaptation of David Heckhoff's portfolio. This repository contains the **pre-built static site** (production build output), served directly from the `main` branch root via GitHub Pages. Keep all original attribution and license notices.

## Deploy (GitHub Pages)

1. Create a new repository named `abirudinuwara` on GitHub.
2. Upload all files in this folder to the repository root on the `main` branch.
3. Go to **Settings → Pages**.
4. Under **Build and deployment**, set **Source** to *Deploy from a branch*, **Branch** to `main`, folder to `/ (root)`, then **Save**.
5. After a minute or two the site is live at the URL above.

## Structure

```
/
├── index.html          # entry page
├── legal.html          # legal notice
├── privacy.html        # privacy policy
├── de/                 # German legal + privacy pages
├── assets/             # compiled CSS, images, 3D models, audio
├── chunks/             # compiled JavaScript bundles
├── fonts/              # self-hosted web fonts
├── meta/               # favicon
├── robots.txt
├── .nojekyll           # tells GitHub Pages to skip Jekyll processing
├── LICENSE.md
└── README.md
```

---

# Portfolio (2025)

Personal portfolio site: project case studies, lightweight 3D and shader demos, bilingual copy (English and German).

Built with **Vue 3**, **TypeScript**, and **Vite**. Motion via **GSAP** and **Lenis**, 3D via **three.js**, audio via **Howler**. GLSL is compiled through **vite-plugin-glsl**.

## Scripts

| Command        | Description                          |
| -------------- | ------------------------------------ |
| `npm run dev`   | Dev server on port **3000** (`strictPort`) |
| `npm run build` | `vue-tsc` then production bundle to `dist/` |
| `npm run preview` | Serve the production build locally |
| `npm run typecheck` | Typecheck only (`vue-tsc -b`) |

## Content

- **Projects**: `src/content/projects/{en,de}/<slug>.ts` — copy, tags, media, links. Slugs must align with `projectIds` in `src/content/projects/index.ts`.
- **Previews / listing**: `src/content/projects/previews/`.
- **Tags**: variants and labels live in `src/components/tagVariants.ts` (used by `Tag.vue` and content types).

## Stack (high level)

- Vue 3 (`<script setup>`), SCSS with shared mixins (`src/assets/styles/`)
- i18n helpers under `src/i18n/`
- WebGL / GLSL under `src/three/` where applicable

## Credits & Attribution

This project was created and designed by David Heckhoff.

If you use this project or substantial parts of its source code as a base for your own portfolio or work, attribution must be preserved.

Please keep:

- existing credit comments in the source code
- this attribution section in the README
- a visible reference to the original project/repository in derivative works

Original portfolio:
-> https://david-hckh.com

Commercial reuse or redistribution of substantial portions of this project without permission is prohibited.
