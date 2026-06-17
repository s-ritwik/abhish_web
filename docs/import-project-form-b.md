# Import Form B Project Responses

This script imports responses from the `HVTL Project Intake` form into the website's research project data.

Script:

- [scripts/import-project-form-b.mjs](/d:/Ritwik_E/abhish_web/scripts/import-project-form-b.mjs)

Generated output:

- [src/data/generatedResearchProjects.js](/d:/Ritwik_E/abhish_web/src/data/generatedResearchProjects.js)

The site merges generated project entries with the hand-maintained base project list in [siteContent.js](/d:/Ritwik_E/abhish_web/src/data/siteContent.js). If a generated project has the same title as a base project, the generated one wins.

## Expected Input

The script expects a CSV export of the Google Sheet tied to `HVTL Project Intake`.

Required column names:

- `Tag`
- `Title`
- `Author(s)`
- `Short Technical Description (<10 words)`
- `Abstract / Summary / Plan`
- `Publish Consent`

Optional supported columns:

- `Timestamp`
- `Project Image`
- `asset_final_path`
- `Asset Final Path`
- `published_yes_no`
- `Published Yes/No`
- `Project Phase`
- `Experiment / Simulation Video Results Links`
- `Paper Links`
- `Related Links`

For compatibility, the importer also still accepts the older labels:

- `Project Title`
- `Research Area`
- `Status Line`
- `Author Names in Display Order`
- `Card Summary`
- `Full Details`
- `Experiment Video 1 Label` through `Experiment Video 3 URL`
- `Paper Link 1 Label` through `Paper Link 3 URL`
- `Related Link 1 Label` through `Related Link 3 URL`

## Usage

```bash
npm run import:projects -- --input path/to/project_responses.csv
```

Optional output override:

```bash
npm run import:projects -- --input path/to/project_responses.csv --output path/to/generatedResearchProjects.js
```

## Image Handling

The script resolves each project image like this:

1. `asset_final_path` or `Asset Final Path` if present
2. `Project Image` if it already contains `/assets/...` or an `http(s)` URL
3. fallback to `/assets/images/projects/<slugified-title>.jpg`

That means a practical workflow is:

1. export the project responses CSV
2. download or curate the uploaded project image
3. place it in `public/assets/images/projects/`
4. name it to match the slugified project title or set `asset_final_path`
5. run the importer

## Publish Filtering

The script only imports rows that:

- include the exact `Publish Consent` text, and
- are not explicitly marked unpublished through `published_yes_no` or `Published Yes/No`

If no publish-status column exists, every consented row is imported.

## Result

After the script runs:

- `src/data/generatedResearchProjects.js` is rewritten
- the Research page automatically reflects the imported projects on the next build

## Next Step

The natural extension after this is a parallel importer for the People form so current member cards can be generated from responses too.
