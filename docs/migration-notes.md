# Migration Notes

## Source Review

The original workspace was an HTTrack scrape. The useful site content was under
`home.iitk.ac.in/_abhish`; root files, cache folders, StatCounter files, duplicate
query-string pages, 404 pages, Polish Quick.Cms demo pages, and zero-byte external
asset mirrors were removed.

The live URL was checked through the browser tool, but it did not return usable page
content in this environment. The local scrape was therefore used as the authoritative
source for this cleanup pass.

## Preserved Pages

- Home
- Research
- People
- Teaching
- Awards
- Journal Papers
- Outreach
- Contact

These now live as trimmed fragments in `public/legacy-pages/` and are rendered by
`src/components/LegacyPage.jsx`.

## Preserved Assets

Images were moved to `public/assets/images/`.
Course PDFs were moved to `public/assets/documents/`.
The old Quick.Cms CSS was moved to `legacy/quickcms-theme/` for visual reference only.

## Removed Artifacts

- `hts-cache/`
- `cookies.txt`
- `hts-log.txt`
- HTTrack root index and decorative files
- `www.statcounter.com/`
- `www.iitk.ac.in/` zero-byte mirror files
- Quick.Cms demo pages and duplicate query-string HTML files
- Old Quick.Cms wrappers, JavaScript, analytics blocks, media player scripts, and
  unused thumbnails/demo images

## Next Migration Steps

1. Install Node.js and run the React app.
2. Convert each legacy page into structured data and React components.
3. Replace iframe/video embeds with a media component.
4. Add a content backend only after the content model is clear.
