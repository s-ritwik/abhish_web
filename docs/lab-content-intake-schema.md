# Lab Content Intake Schema

This document defines the exact form fields to collect lab member details for the `People` page and project details for the `Research` page.

The schema is designed to map directly into the current site data structures in [src/data/siteContent.js](/d:/Ritwik_E/abhish_web/src/data/siteContent.js).

## Recommended Setup

- Use two forms:
  - `HVTL People Intake`
  - `HVTL Project Intake`
- Use one shared uploads folder with two subfolders:
  - `people/`
  - `projects/`
- Each lab member fills the people form once.
- Each research project gets one project form submission by one designated project lead.
- Author names entered in the project form must match the people form names exactly.

## Form A: HVTL People Intake

Use these exact field labels so the exported spreadsheet headers stay stable.

| Field Label | Key | Type | Required | Validation / Notes | Maps To |
| --- | --- | --- | --- | --- | --- |
| Full Name | `full_name` | Short answer | Yes | 2-60 characters. Use the exact display name to publish. Example: `Ritwik Shankar` | `name` |
| Member Group | `member_group` | Dropdown | Yes | Exact options: `PhD`, `MTech`, `Undergraduate and BT-MT`, `Research Assistant` | `currentPeopleGroups[].group` |
| Display Line | `display_line` | Short answer | Yes | 2-40 characters. Examples: `Y21 BT-MT`, `PhD Scholar`, `MTech`, `Research Assistant` | `year` or `program` or `role` |
| IITK Email | `iitk_email` | Short answer | Yes | Must be a valid email address | `contacts.email` |
| Secondary Email | `secondary_email` | Short answer | No | Valid email if provided | Reserve only |
| LinkedIn URL | `linkedin_url` | Short answer | No | Must start with `https://` | `contacts.linkedin` |
| Personal Website URL | `homepage_url` | Short answer | No | Must start with `https://` | `contacts.homepage` |
| Profile Photo | `profile_photo` | File upload | Yes | One JPG or PNG. Square image preferred. Minimum 1000 x 1000 px. Face centered. | `image` |
| Research Keywords | `research_keywords` | Short answer | No | Comma-separated. Example: `autonomous landing, rotorcraft control, UAV guidance` | Reserve only |
| Short Bio | `short_bio` | Paragraph | No | 40-300 words. One paragraph only. | Reserve only |
| Current Project Titles | `current_project_titles` | Short answer | No | Comma-separated exact project titles if the member is attached to projects already on the site | Cross-check only |
| Publish Consent | `publish_consent` | Checkbox | Yes | Exact checkbox text: `I confirm these details may be published on the Helicopter and VTOL Laboratory website.` | Required for publish |

### People Form Dropdown Values

Use exactly these values for `Member Group`:

- `PhD`
- `MTech`
- `Undergraduate and BT-MT`
- `Research Assistant`

### People Form Import Rules

Map `Display Line` by group like this:

- `Undergraduate and BT-MT` -> save into `year`
- `PhD` -> save into `program`
- `MTech` -> save into `program`
- `Research Assistant` -> save into `role`

Create the `contacts` object like this:

- `contacts.email` = `IITK Email`
- `contacts.linkedin` = `LinkedIn URL`
- `contacts.homepage` = `Personal Website URL`

Rename profile images to:

- `/assets/images/people/<slug>.jpg`

Example:

- `Ritwik Shankar` -> `/assets/images/people/ritwik-shankar.jpg`

## Form B: HVTL Project Intake

Use these exact field labels so the exported spreadsheet headers stay stable.

| Field Label | Key | Type | Required | Validation / Notes | Maps To |
| --- | --- | --- | --- | --- | --- |
| Tag | `tag` | Short answer | Yes | One uppercase tag. Example: `AUTONOMOUS LANDING` | `area` |
| Title | `title` | Short answer | Yes | 8-160 characters. Use the exact title to publish. | `title` |
| Author(s) | `authors` | Short answer | Yes | Comma-separated full names in display order. Example: `Ritwik Shankar, Chiranjeev Prachand` | `authors[]` |
| Short Technical Description (<10 words) | `short_technical_description` | Short answer | Yes | Under 10 words. Example: `RL landing policy with CBF safety filtering` | `status` |
| Abstract / Summary / Plan | `abstract_summary_plan` | Paragraph | Yes | 80-800 characters. Main project paragraph shown in the popup; card summary is generated from this text. | `details`, `summary` |
| Project Image | `project_image` | File upload or Drive link | No | Optional JPG or PNG. Square or 4:3 preferred. Minimum 1600 px on shortest side. Subject centered. | `image` |
| Experiment / Simulation Video Results Links | `experiment_simulation_video_results_links` | Paragraph | No | One link per line, format: `Label \| URL` | `experimentVideos[]` |
| Paper Links | `paper_links` | Paragraph | No | One link per line, format: `Label \| URL` | `paperLinks[]` |
| Related Links | `related_links` | Paragraph | No | One link per line, format: `Label \| URL` | `relatedLinks[]` |
| Publish Consent | `publish_consent` | Checkbox | Yes | Exact checkbox text: `I confirm these project details may be published on the Helicopter and VTOL Laboratory website.` | Required for publish |

### Project Form Import Rules

Split `Author(s)` on commas, trim whitespace, and store as the `authors` array.

Build link arrays from each paragraph field by reading one link per line:

- `experimentVideos`
- `paperLinks`
- `relatedLinks`

Each line should use `Label | URL`. Ignore blank lines. Do not create empty placeholder objects.

Rename project images to:

- `/assets/images/projects/<slug>.jpg`

Example:

- `RL-Optimised UAV Quadrotor Landing On A Moving Ship-Deck Emulator` -> `/assets/images/projects/rl-optimised-uav-quadrotor-landing-on-a-moving-ship-deck-emulator.jpg`

## Sheet Layout

If you use Google Forms, keep the two form responses in two separate sheets:

- `people_responses`
- `project_responses`

Recommended extra tracking columns in each sheet:

- `review_status`
- `review_notes`
- `asset_final_path`
- `published_yes_no`
- `last_updated_on`

These review columns should be maintained manually after each submission.

## Submission Rules for Lab Members

- Every lab member fills the people form once.
- One person per project submits the project form for that project.
- Do not submit duplicate project entries for the same project.
- The project lead is responsible for confirming author order and link correctness.
- Use the same spelling of names across both forms.

## Minimum Publish Checklist

Before importing into the site, check that each published person entry has:

- `Full Name`
- `Member Group`
- `Display Line`
- `IITK Email`
- `Profile Photo`
- `Publish Consent`

Before importing into the site, check that each published project entry has:

- `Tag`
- `Title`
- `Author(s)`
- `Short Technical Description (<10 words)`
- `Abstract / Summary / Plan`
- `Publish Consent`

## Why This Matches the Current Site

This schema maps directly to the current structures used by:

- `currentPeopleGroups`
- `researchProjects`
- `contacts.email`
- `contacts.linkedin`
- `contacts.homepage`
- `experimentVideos`
- `paperLinks`
- `relatedLinks`

That means the next step can be a small import script instead of manual editing.
