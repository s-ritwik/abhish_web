const PEOPLE_GROUP_OPTIONS = [
  "PhD",
  "MTech",
  "Undergraduate and BT-MT",
  "Research Assistant",
];

const PEOPLE_PUBLISH_CONSENT =
  "I confirm these details may be published on the Helicopter and VTOL Laboratory website.";

const PROJECT_PUBLISH_CONSENT =
  "I confirm these project details may be published on the Helicopter and VTOL Laboratory website.";

function createHvtlForms() {
  const people = createPeopleForm_();
  const projects = createProjectForm_();

  Logger.log("People form edit URL: %s", people.form.getEditUrl());
  Logger.log("People form live URL: %s", people.form.getPublishedUrl());
  Logger.log("People responses sheet: %s", people.spreadsheet.getUrl());

  Logger.log("Project form edit URL: %s", projects.form.getEditUrl());
  Logger.log("Project form live URL: %s", projects.form.getPublishedUrl());
  Logger.log("Project responses sheet: %s", projects.spreadsheet.getUrl());
}

function createPeopleForm_() {
  const form = FormApp.create("HVTL People Intake");
  const spreadsheet = SpreadsheetApp.create("HVTL People Intake Responses");

  configureForm_(
    form,
    [
      "Collect one response per current lab member.",
      "Use the exact spelling you want published on the Helicopter and VTOL Laboratory website.",
      "Author names used in project submissions must match these names exactly.",
      "Important: the 'Profile Photo' field is created as a short-answer placeholder because Apps Script's built-in Forms service does not expose file-upload question creation.",
      "After generating the form, you can manually replace that question with a Google Forms File upload question while keeping the title exactly 'Profile Photo'.",
    ].join("\n\n"),
    "Thank you. Your profile details have been recorded for review.",
  );

  form.setDestination(FormApp.DestinationType.SPREADSHEET, spreadsheet.getId());
  setupResponseWorkbook_(spreadsheet, "people_responses", "people_admin");

  form.addSectionHeaderItem()
    .setTitle("Profile and contact details")
    .setHelpText("Please fill every required field exactly as you want it to appear on the website.");

  addTextItem_(
    form,
    "Full Name",
    "Use the exact display name to publish. Example: Ritwik Shankar",
    true,
    FormApp.createTextValidation()
      .requireTextLengthGreaterThanOrEqualTo(2)
      .requireTextLengthLessThanOrEqualTo(60)
      .build(),
  );

  addDropdownItem_(
    form,
    "Member Group",
    "Choose the group exactly as it should be used on the People page.",
    true,
    PEOPLE_GROUP_OPTIONS,
  );

  addTextItem_(
    form,
    "Display Line",
    "Examples: Y21 BT-MT, PhD Scholar, MTech, Research Assistant",
    true,
    FormApp.createTextValidation()
      .requireTextLengthGreaterThanOrEqualTo(2)
      .requireTextLengthLessThanOrEqualTo(40)
      .build(),
  );

  addTextItem_(
    form,
    "IITK Email",
    "Enter the email address that should appear in the published contact links.",
    true,
    FormApp.createTextValidation().requireTextIsEmail().build(),
  );

  addTextItem_(
    form,
    "Secondary Email",
    "Optional backup email for internal review only.",
    false,
    FormApp.createTextValidation().requireTextIsEmail().build(),
  );

  addTextItem_(
    form,
    "LinkedIn URL",
    "Optional. Must begin with https://",
    false,
    FormApp.createTextValidation()
      .requireTextIsUrl()
      .requireTextMatchesPattern("^https://.*")
      .build(),
  );

  addTextItem_(
    form,
    "Personal Website URL",
    "Optional. Must begin with https://",
    false,
    FormApp.createTextValidation()
      .requireTextIsUrl()
      .requireTextMatchesPattern("^https://.*")
      .build(),
  );

  addTextItem_(
    form,
    "Profile Photo",
    "Temporary placeholder created by script. Paste a Google Drive share link, or manually replace this question with a File upload question while keeping the title exactly 'Profile Photo'. Required asset guidance: one JPG or PNG, square image preferred, minimum 1000 x 1000 px, face centered.",
    true,
    FormApp.createTextValidation()
      .requireTextIsUrl()
      .requireTextMatchesPattern("^https://.*")
      .build(),
  );

  form.addSectionHeaderItem()
    .setTitle("Research context")
    .setHelpText("These fields support later curation and cross-checking.");

  addTextItem_(
    form,
    "Research Keywords",
    "Optional. Comma-separated. Example: autonomous landing, rotorcraft control, UAV guidance",
    false,
    null,
  );

  addParagraphItem_(
    form,
    "Short Bio",
    "Optional. One paragraph only, 40-300 words.",
    false,
    FormApp.createParagraphTextValidation()
      .requireTextLengthGreaterThanOrEqualTo(40)
      .requireTextLengthLessThanOrEqualTo(300)
      .build(),
  );

  addTextItem_(
    form,
    "Current Project Titles",
    "Optional. Comma-separated exact project titles if you are attached to projects already on the site.",
    false,
    null,
  );

  addConsentCheckbox_(form, "Publish Consent", PEOPLE_PUBLISH_CONSENT);

  return { form, spreadsheet };
}

function createProjectForm_() {
  const form = FormApp.create("HVTL Project Intake");
  const spreadsheet = SpreadsheetApp.create("HVTL Project Intake Responses");

  configureForm_(
    form,
    [
      "Collect one response per project from a designated project lead.",
      "This form mirrors the fields already visible in each Research project card and popup.",
      "Use the exact project title, tag, author order, and short technical description intended for the website.",
      "Important: the 'Project Image' field is created as a short-answer placeholder because Apps Script's built-in Forms service does not expose file-upload question creation.",
      "After generating the form, you can manually replace that question with a Google Forms File upload question while keeping the title exactly 'Project Image'. This field is optional.",
    ].join("\n\n"),
    "Thank you. Your project details have been recorded for review.",
  );

  form.setDestination(FormApp.DestinationType.SPREADSHEET, spreadsheet.getId());
  setupResponseWorkbook_(spreadsheet, "project_responses", "project_admin");

  form.addSectionHeaderItem()
    .setTitle("Core project details")
    .setHelpText("These fields map directly to the project cards and modal on the Research page.");

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

  form.addSectionHeaderItem()
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

  form.addSectionHeaderItem()
    .setTitle("Submitter details")
    .setHelpText("Used for internal review and follow-up.");

  addConsentCheckbox_(form, "Publish Consent", PROJECT_PUBLISH_CONSENT);

  return { form, spreadsheet };
}

function configureForm_(form, description, confirmationMessage) {
  form
    .setDescription(description)
    .setConfirmationMessage(confirmationMessage)
    .setCollectEmail(true)
    .setAllowResponseEdits(true)
    .setLimitOneResponsePerUser(false)
    .setProgressBar(true);
}

function setupResponseWorkbook_(spreadsheet, responseSheetName, adminSheetName) {
  const sheets = spreadsheet.getSheets();
  const responseSheet = sheets[0];
  responseSheet.setName(responseSheetName);

  const adminSheet = spreadsheet.insertSheet(adminSheetName);
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

function addDropdownItem_(form, title, helpText, required, choices) {
  return form
    .addListItem()
    .setTitle(title)
    .setHelpText(helpText)
    .setRequired(required)
    .setChoiceValues(choices);
}

function addConsentCheckbox_(form, title, choiceLabel) {
  return form
    .addCheckboxItem()
    .setTitle(title)
    .setHelpText("This consent is required before the submission can be published on the website.")
    .setRequired(true)
    .setChoiceValues([choiceLabel]);
}

function addLabeledLinkTriplet_(form, fieldPrefix) {
  for (let i = 1; i <= 3; i += 1) {
    addTextItem_(
      form,
      `${fieldPrefix} ${i} Label`,
      "Optional. If a URL is provided, this label should describe the link clearly.",
      false,
      null,
    );

    addTextItem_(
      form,
      `${fieldPrefix} ${i} URL`,
      "Optional. Must begin with https://",
      false,
      FormApp.createTextValidation()
        .requireTextIsUrl()
        .requireTextMatchesPattern("^https://.*")
        .build(),
    );
  }
}
