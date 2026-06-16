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
| Project Title | `project_title` | Short answer | Yes | 8-120 characters. Use the exact title to publish. | `title` |
| Project Phase | `project_phase` | Dropdown | Yes | Exact options: `ongoing`, `completed` | `phase` |
| Research Area | `research_area` | Short answer | Yes | 3-60 characters. Example: `Autonomous Landing` | `area` |
| Status Line | `status_line` | Short answer | Yes | 3-80 characters. Example: `Prototype flight tested in hover` | `status` |
| Author Names in Display Order | `author_names` | Short answer | Yes | Comma-separated full names. Must match people form names exactly when applicable. | `authors[]` |
| Card Summary | `card_summary` | Paragraph | Yes | 80-260 characters. One or two sentences. This is shown on the project card. | `summary` |
| Full Details | `full_details` | Paragraph | Yes | 120-800 characters. Two to six sentences. This is shown in the modal. | `details` |
| Project Image | `project_image` | File upload | Yes | One JPG or PNG. Square or 4:3 preferred. Minimum 1600 px on shortest side. Subject centered. | `image` |
| Experiment Video 1 Label | `experiment_video_1_label` | Short answer | No | If URL is present, label is required. | `experimentVideos[0].label` |
| Experiment Video 1 URL | `experiment_video_1_url` | Short answer | No | Must start with `https://` | `experimentVideos[0].href` |
| Experiment Video 2 Label | `experiment_video_2_label` | Short answer | No | If URL is present, label is required. | `experimentVideos[1].label` |
| Experiment Video 2 URL | `experiment_video_2_url` | Short answer | No | Must start with `https://` | `experimentVideos[1].href` |
| Experiment Video 3 Label | `experiment_video_3_label` | Short answer | No | If URL is present, label is required. | `experimentVideos[2].label` |
| Experiment Video 3 URL | `experiment_video_3_url` | Short answer | No | Must start with `https://` | `experimentVideos[2].href` |
| Paper Link 1 Label | `paper_link_1_label` | Short answer | No | If URL is present, label is required. | `paperLinks[0].label` |
| Paper Link 1 URL | `paper_link_1_url` | Short answer | No | Must start with `https://` | `paperLinks[0].href` |
| Paper Link 2 Label | `paper_link_2_label` | Short answer | No | If URL is present, label is required. | `paperLinks[1].label` |
| Paper Link 2 URL | `paper_link_2_url` | Short answer | No | Must start with `https://` | `paperLinks[1].href` |
| Paper Link 3 Label | `paper_link_3_label` | Short answer | No | If URL is present, label is required. | `paperLinks[2].label` |
| Paper Link 3 URL | `paper_link_3_url` | Short answer | No | Must start with `https://` | `paperLinks[2].href` |
| Related Link 1 Label | `related_link_1_label` | Short answer | No | If URL is present, label is required. | `relatedLinks[0].label` |
| Related Link 1 URL | `related_link_1_url` | Short answer | No | Must start with `https://` | `relatedLinks[0].href` |
| Related Link 2 Label | `related_link_2_label` | Short answer | No | If URL is present, label is required. | `relatedLinks[1].label` |
| Related Link 2 URL | `related_link_2_url` | Short answer | No | Must start with `https://` | `relatedLinks[1].href` |
| Related Link 3 Label | `related_link_3_label` | Short answer | No | If URL is present, label is required. | `relatedLinks[2].label` |
| Related Link 3 URL | `related_link_3_url` | Short answer | No | Must start with `https://` | `relatedLinks[2].href` |
| Lead Submitter Name | `lead_submitter_name` | Short answer | Yes | Name of the person filling the form | Review only |
| Lead Submitter Email | `lead_submitter_email` | Short answer | Yes | Must be a valid email address | Review only |
| Publish Consent | `publish_consent` | Checkbox | Yes | Exact checkbox text: `I confirm these project details may be published on the Helicopter and VTOL Laboratory website.` | Required for publish |

### Project Form Dropdown Values

Use exactly these values for `Project Phase`:

- `ongoing`
- `completed`

### Project Form Import Rules

Split `Author Names in Display Order` on commas, trim whitespace, and store as the `authors` array.

Build link arrays from complete label and URL pairs only:

- `experimentVideos`
- `paperLinks`
- `relatedLinks`

Ignore blank pairs. Do not create empty placeholder objects.

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

- `Project Title`
- `Project Phase`
- `Research Area`
- `Status Line`
- `Author Names in Display Order`
- `Card Summary`
- `Full Details`
- `Project Image`
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
