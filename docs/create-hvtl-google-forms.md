# Create HVTL Google Forms

This runbook uses the generator script in [create-hvtl-google-forms.gs](/d:/Ritwik_E/abhish_web/docs/create-hvtl-google-forms.gs) to create the two intake forms automatically in your Google account.

## What It Creates

- `HVTL People Intake`
- `HVTL Project Intake`
- one linked response spreadsheet for each form
- one admin tracking sheet in each spreadsheet

## Before You Run It

- Sign in to the Google account that should own the forms.
- Open `script.google.com`.
- Create a new standalone Apps Script project.
- Paste the contents of `docs/create-hvtl-google-forms.gs` into the editor.

## Run It

1. Save the project.
2. Choose the function `createHvtlForms`.
3. Click `Run`.
4. Authorize the script when Google asks.
5. Open `Execution log` to copy the form edit URLs, live URLs, and response spreadsheet URLs.

## Important Manual Step

The built-in Apps Script Forms service creates every field in the schema except true file-upload questions.

After the forms are created:

1. Open the `HVTL People Intake` form in edit mode.
2. Replace the `Profile Photo` short-answer question with a `File upload` question.
3. Keep the title exactly `Profile Photo`.

Then:

1. Open the `HVTL Project Intake` form in edit mode.
2. Replace the `Project Image` short-answer question with a `File upload` question.
3. Keep the title exactly `Project Image`.
4. Keep this question optional unless you want to force every submitted project to include its own image.

If you prefer not to use file-upload questions, the generated forms already accept a Google Drive share link in those fields.

## Recommended Form Settings

Check these in the Google Forms UI after generation:

- responders can edit after submit: `On`
- collect email addresses: `On`
- progress bar: `On`
- restrict to one response: choose based on your lab workflow

## After Creation

- Send the live `People` form to all current lab members.
- Send the live `Project` form only to designated project leads.
- Keep author name spellings consistent across both forms.

## Next Step

Once responses start coming in, the natural follow-up is to build an import script that reads the two response sheets and updates `src/data/siteContent.js`.
