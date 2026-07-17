# Tibia Calculators

An unofficial static site of useful calculators for Tibia players. It is built with Astro and TypeScript and deploys to GitHub Pages.

## Local development

Requires Node.js 22 or newer.

```bash
npm install
npm run dev
```

Useful commands:

- `npm run check` — type-check Astro and TypeScript files
- `npm run build` — type-check and produce the static `dist/` site
- `npm run preview` — serve the production build locally

## Deploying to GitHub Pages

1. Push this repository to GitHub.
2. In **Settings → Pages**, select **GitHub Actions** as the publishing source.
3. Push to `main`; the included workflow builds and deploys the site.

The Astro configuration automatically uses the repository name as the GitHub project-pages base path during Actions builds. For a `<user>.github.io` repository or custom domain, remove the `base` logic or set it to `/`.

## Adding a calculator

Create a page under `src/pages/calculators/<name>/index.astro`. Keep calculation formulas in a nearby TypeScript module, separate from the UI, so they can be tested easily. Browser-only saved data should be versioned before it is written to `localStorage`.
