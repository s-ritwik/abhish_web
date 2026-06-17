const PROJECT_PUBLISH_CONSENT =
  "I confirm these project details may be published on the Helicopter and VTOL Laboratory website.";

function createResearchProjectForm() {
  const form = FormApp.create("HVTL Project Intake");
  const spreadsheet = SpreadsheetApp.create("HVTL Project Intake Responses");

  configureProjectForm_(
    form,
    [
      "Collect one response per research project from a designated project lead.",
      "This form mirrors the fields already visible in each Research project card and popup.",
      "Use the exact project title, tag, author order, and short technical description intended for the website.",
      "Important: the 'Project Image' field is created as a short-answer placeholder because Apps Script's built-in Forms service does not expose file-upload question creation.",
      "After generating the form, you can manually replace that question with a Google Forms File upload question while keeping the title exactly 'Project Image'. This field is optional.",
    ].join("\n\n"),
    "Thank you. Your project details have been recorded for review.",
  );

  form.setDestination(FormApp.DestinationType.SPREADSHEET, spreadsheet.getId());
  setupProjectResponseWorkbook_(spreadsheet);

  form
    .addSectionHeaderItem()
    .setTitle("Core project details")
    .setHelpText("These fields map directly to the project cards and popup on the Research page.");

  addTextItem_(
    form,
    "Tag",
    "One uppercase project tag shown above the title. Example: AUTONOMOUS LANDING",
    true,
    FormApp.createTextValidation()
      .requireTextLengthGreaterThanOrEqualTo(3)
      .requireTextLengthLessThanOrEqualTo(60)
      .build(),
  );

  addTextItem_(
    form,
    "Title",
    "Use the exact project title to publish. Example: RL-Optimised UAV Quadrotor Landing On A Heaving Ship-Deck Emulator With CBF-Safety Filtering",
    true,
    FormApp.createTextValidation()
      .requireTextLengthGreaterThanOrEqualTo(8)
      .requireTextLengthLessThanOrEqualTo(160)
      .build(),
  );

  addTextItem_(
    form,
    "Author(s)",
    "Comma-separated full names in display order. Example: Ritwik Shankar, Chiranjeev Prachand",
    true,
    null,
  );

  addTextItem_(
    form,
    "Short Technical Description (<10 words)",
    "Shown in green inside the project popup. Example: RL landing policy with CBF safety filtering",
    true,
    FormApp.createTextValidation()
      .requireTextLengthGreaterThanOrEqualTo(3)
      .requireTextLengthLessThanOrEqualTo(80)
      .build(),
  );

  addParagraphItem_(
    form,
    "Abstract / Summary / Plan",
    "The main project paragraph shown in the popup and summarized on the project card.",
    true,
    FormApp.createParagraphTextValidation()
      .requireTextLengthGreaterThanOrEqualTo(80)
      .requireTextLengthLessThanOrEqualTo(800)
      .build(),
  );

  addTextItem_(
    form,
    "Project Image",
    "Optional. Temporary placeholder created by script. Paste a Google Drive share link, or manually replace this question with a File upload question while keeping the title exactly 'Project Image'. Recommended asset guidance: one JPG or PNG, square or 4:3 preferred, minimum 1600 px on the shortest side.",
    false,
    FormApp.createTextValidation()
      .requireTextIsUrl()
      .requireTextMatchesPattern("^https://.*")
      .build(),
  );

  form
    .addSectionHeaderItem()
    .setTitle("Optional project links")
    .setHelpText("Use one line per link. Format each line as: Label | https://example.com");

  addParagraphItem_(
    form,
    "Experiment / Simulation Video Results Links",
    "Optional. One per line, using: Label | URL. Example: Heaving deck landing experiment | https://youtu.be/...",
    false,
    null,
  );

  addParagraphItem_(
    form,
    "Paper Links",
    "Optional. One per line, using: Label | URL.",
    false,
    null,
  );

  addParagraphItem_(
    form,
    "Related Links",
    "Optional. One per line, using: Label | URL.",
    false,
    null,
  );

  addConsentCheckbox_(form, "Publish Consent", PROJECT_PUBLISH_CONSENT);

  Logger.log("Project form edit URL: %s", form.getEditUrl());
  Logger.log("Project form live URL: %s", form.getPublishedUrl());
  Logger.log("Project responses sheet: %s", spreadsheet.getUrl());
}

function configureProjectForm_(form, description, confirmationMessage) {
  form
    .setDescription(description)
    .setConfirmationMessage(confirmationMessage)
    .setCollectEmail(true)
    .setAllowResponseEdits(true)
    .setLimitOneResponsePerUser(false)
    .setProgressBar(true);
}

function setupProjectResponseWorkbook_(spreadsheet) {
  const sheets = spreadsheet.getSheets();
  const responseSheet = sheets[0];
  responseSheet.setName("project_responses");

  const adminSheet = spreadsheet.insertSheet("project_admin");
  adminSheet.getRange(1, 1, 1, 5).setValues([
    ["response_id", "review_status", "review_notes", "asset_final_path", "published_yes_no"],
  ]);
}

function addTextItem_(form, title, helpText, required, validation) {
  const item = form.addTextItem().setTitle(title).setHelpText(helpText).setRequired(required);
  if (validation) {
    item.setValidation(validation);
  }
  return item;
}

function addParagraphItem_(form, title, helpText, required, validation) {
  const item = form.addParagraphTextItem().setTitle(title).setHelpText(helpText).setRequired(required);
  if (validation) {
    item.setValidation(validation);
  }
  return item;
}

function addConsentCheckbox_(form, title, choiceLabel) {
  return form
    .addCheckboxItem()
    .setTitle(title)
    .setHelpText("This consent is required before the submission can be published on the website.")
    .setRequired(true)
    .setChoiceValues([choiceLabel]);
}
