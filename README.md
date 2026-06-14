# Helicopter and VTOL Laboratory Website

This repository is the cleaned, React-ready version of the scraped site from:

`https://home.iitk.ac.in/~abhish/`

## What Is Here

- `src/` contains the React app shell and modular page loader.
- `public/legacy-pages/` keeps the eight useful pages from the scrape.
- `public/assets/images/` contains usable site images with normalized names.
- `public/assets/documents/` contains course PDFs.
- `legacy/quickcms-theme/` preserves the old Quick.Cms CSS only as reference.
- `docs/migration-notes.md` records what was kept, removed, and why.

## Local Development

Node.js was not available in this environment, so dependencies were not installed here.

When Node is installed:

```bash
npm install
npm run dev
```

The current React app renders preserved legacy page content through a reusable loader.
Future work should replace each legacy HTML page with native React components and typed
content data.

## Editing Content

Most homepage, gallery, research, and students content now lives in:

`src/data/siteContent.js`

Add or replace gallery photos by editing `galleryImages`. Add research rows/cards by
editing `researchProjects`. Add real student names and groups by replacing the placeholder
rows in `students`.
