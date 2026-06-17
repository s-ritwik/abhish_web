import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const repoRoot = path.resolve(__dirname, "..");

const DEFAULT_INPUT = path.join(repoRoot, "docs", "project_responses.csv");
const DEFAULT_OUTPUT = path.join(repoRoot, "src", "data", "generatedResearchProjects.js");

const PROJECT_PUBLISH_CONSENT =
  "I confirm these project details may be published on the Helicopter and VTOL Laboratory website.";

function main() {
  const options = parseArgs(process.argv.slice(2));
  if (options.help) {
    printHelp();
    return;
  }

  const inputPath = path.resolve(repoRoot, options.input || DEFAULT_INPUT);
  const outputPath = path.resolve(repoRoot, options.output || DEFAULT_OUTPUT);

  if (!fs.existsSync(inputPath)) {
    throw new Error(`Input CSV not found: ${inputPath}`);
  }

  const csv = fs.readFileSync(inputPath, "utf8");
  const rows = parseCsv(csv);
  if (!rows.length) {
    throw new Error("The CSV file is empty.");
  }

  const headers = rows[0].map(normalizeHeader);
  const records = rows.slice(1).map((values) => rowFromValues(headers, values));
  const importedProjects = buildProjects(records);
  const outputSource = renderGeneratedModule(importedProjects, inputPath);

  fs.mkdirSync(path.dirname(outputPath), { recursive: true });
  fs.writeFileSync(outputPath, outputSource, "utf8");

  console.log(`Imported ${importedProjects.length} research project(s).`);
  console.log(`Output written to ${outputPath}`);
}

function parseArgs(args) {
  const options = {};

  for (let index = 0; index < args.length; index += 1) {
    const arg = args[index];

    if (arg === "--help" || arg === "-h") {
      options.help = true;
      continue;
    }

    if (arg === "--input" || arg === "-i") {
      options.input = args[index + 1];
      index += 1;
      continue;
    }

    if (arg === "--output" || arg === "-o") {
      options.output = args[index + 1];
      index += 1;
      continue;
    }

    throw new Error(`Unknown argument: ${arg}`);
  }

  return options;
}

function printHelp() {
  console.log(`Usage:
  node scripts/import-project-form-b.mjs --input <project_responses.csv> [--output <generatedResearchProjects.js>]

Defaults:
  input:  ${path.relative(repoRoot, DEFAULT_INPUT)}
  output: ${path.relative(repoRoot, DEFAULT_OUTPUT)}
`);
}

function parseCsv(source) {
  const rows = [];
  let row = [];
  let cell = "";
  let inQuotes = false;

  for (let index = 0; index < source.length; index += 1) {
    const char = source[index];
    const next = source[index + 1];

    if (inQuotes) {
      if (char === '"' && next === '"') {
        cell += '"';
        index += 1;
      } else if (char === '"') {
        inQuotes = false;
      } else {
        cell += char;
      }
      continue;
    }

    if (char === '"') {
      inQuotes = true;
      continue;
    }

    if (char === ",") {
      row.push(cell);
      cell = "";
      continue;
    }

    if (char === "\r" && next === "\n") {
      row.push(cell);
      rows.push(row);
      row = [];
      cell = "";
      index += 1;
      continue;
    }

    if (char === "\n") {
      row.push(cell);
      rows.push(row);
      row = [];
      cell = "";
      continue;
    }

    cell += char;
  }

  if (cell.length || row.length) {
    row.push(cell);
    rows.push(row);
  }

  return rows;
}

function normalizeHeader(value) {
  return value.replace(/^\uFEFF/, "").trim();
}

function rowFromValues(headers, values) {
  const row = {};
  headers.forEach((header, index) => {
    row[header] = (values[index] || "").trim();
  });
  return row;
}

function buildProjects(records) {
  const seen = new Map();

  records.forEach((row, rowIndex) => {
    const title = getValue(row, ["Title", "Project Title"]);
    if (!title) {
      return;
    }

    if (!hasPublishConsent(row)) {
      return;
    }

    if (isExplicitlyUnpublished(row)) {
      return;
    }

    const required = {
      area: getValue(row, ["Tag", "Research Area"]),
      status: getValue(row, ["Short Technical Description (<10 words)", "Status Line"]),
      authors: getValue(row, ["Author(s)", "Author Names in Display Order"]),
      details: getValue(row, ["Abstract / Summary / Plan", "Full Details", "Card Summary"]),
    };

    const missing = Object.entries(required)
      .filter(([, value]) => !value)
      .map(([key]) => key);

    if (missing.length) {
      console.warn(`Skipping "${title}" because required field(s) are missing: ${missing.join(", ")}`);
      return;
    }

    const project = {
      title,
      area: normalizeTag(required.area),
      authors: splitList(required.authors),
      phase: normalizePhase(getValue(row, ["Project Phase"])),
      status: required.status,
      image: resolveImagePath(row, title),
      summary: summarizeDetails(required.details),
      details: required.details,
      experimentVideos: buildLinkArray(row, "Experiment Video", "Experiment / Simulation Video Results Links"),
      paperLinks: buildLinkArray(row, "Paper Link", "Paper Links"),
      relatedLinks: buildLinkArray(row, "Related Link", "Related Links"),
    };

    if (!project.authors.length) {
      console.warn(`Skipping "${title}" because author parsing produced an empty list.`);
      return;
    }

    seen.set(title, { project, rowIndex, timestamp: parseTimestamp(getValue(row, ["Timestamp"])) });
  });

  return Array.from(seen.values())
    .sort((left, right) => {
      if (left.timestamp !== right.timestamp) {
        return left.timestamp - right.timestamp;
      }
      return left.rowIndex - right.rowIndex;
    })
    .map((entry) => entry.project);
}

function hasPublishConsent(row) {
  const value = getValue(row, ["Publish Consent"]);
  return Boolean(value && value.includes(PROJECT_PUBLISH_CONSENT));
}

function isExplicitlyUnpublished(row) {
  const value = getValue(row, [
    "published_yes_no",
    "Published Yes/No",
    "published",
    "Published",
  ]);

  if (!value) {
    return false;
  }

  const normalized = value.trim().toLowerCase();
  return !["yes", "y", "true", "1", "publish", "published"].includes(normalized);
}

function getValue(row, candidateHeaders) {
  for (const header of candidateHeaders) {
    if (row[header] !== undefined && row[header] !== "") {
      return row[header];
    }
  }
  return "";
}

function splitList(value) {
  return value
    .split(",")
    .map((item) => item.trim())
    .filter(Boolean);
}

function normalizeTag(value) {
  return value.trim().toUpperCase();
}

function normalizePhase(value) {
  return value.trim().toLowerCase() === "completed" ? "completed" : "ongoing";
}

function resolveImagePath(row, title) {
  const assetFinalPath = getValue(row, ["asset_final_path", "Asset Final Path"]);
  if (assetFinalPath) {
    return assetFinalPath;
  }

  const rawImage = firstCommaSeparatedValue(getValue(row, ["Project Image"]));
  if (rawImage.startsWith("/assets/") || /^https?:\/\//i.test(rawImage)) {
    return rawImage;
  }

  const fallback = `/assets/images/projects/${slugify(title)}.jpg`;
  console.warn(`Using fallback image path for "${title}": ${fallback}`);
  return fallback;
}

function buildLinkArray(row, prefix, multilineHeader) {
  const multilineItems = parseMultilineLinks(getValue(row, [multilineHeader]));
  if (multilineItems.length) {
    return multilineItems;
  }

  const items = [];

  for (let index = 1; index <= 3; index += 1) {
    const label = getValue(row, [`${prefix} ${index} Label`]);
    const href = firstCommaSeparatedValue(getValue(row, [`${prefix} ${index} URL`]));

    if (!label && !href) {
      continue;
    }

    if (!label || !href) {
      console.warn(`Skipping incomplete ${prefix.toLowerCase()} pair ${index}. Both label and URL are required.`);
      continue;
    }

    items.push({ label, href });
  }

  return items;
}

function parseMultilineLinks(value) {
  return value
    .split(/\r?\n/)
    .map((line) => line.trim())
    .filter(Boolean)
    .map((line) => {
      const parts = line.split("|").map((part) => part.trim()).filter(Boolean);
      if (parts.length >= 2) {
        return { label: parts[0], href: firstCommaSeparatedValue(parts.slice(1).join(" | ")) };
      }

      const urlMatch = line.match(/https?:\/\/\S+/i);
      if (!urlMatch) {
        console.warn(`Skipping link line without URL: ${line}`);
        return null;
      }

      const href = firstCommaSeparatedValue(urlMatch[0]);
      const label = line.replace(urlMatch[0], "").replace(/[-:|]+$/, "").trim() || href;
      return { label, href };
    })
    .filter(Boolean);
}

function summarizeDetails(value) {
  const normalized = value.replace(/\s+/g, " ").trim();
  if (normalized.length <= 260) {
    return normalized;
  }

  const sentenceEnd = normalized.slice(0, 260).lastIndexOf(".");
  if (sentenceEnd >= 80) {
    return normalized.slice(0, sentenceEnd + 1);
  }

  return `${normalized.slice(0, 257).trim()}...`;
}

function firstCommaSeparatedValue(value) {
  return value.split(",")[0].trim();
}

function parseTimestamp(value) {
  if (!value) {
    return Number.MAX_SAFE_INTEGER;
  }

  const parsed = Date.parse(value);
  return Number.isNaN(parsed) ? Number.MAX_SAFE_INTEGER : parsed;
}

function slugify(value) {
  return value
    .toLowerCase()
    .normalize("NFKD")
    .replace(/[^\w\s-]/g, "")
    .trim()
    .replace(/[\s_-]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

function renderGeneratedModule(projects, inputPath) {
  const relativeInput = path.relative(repoRoot, inputPath).replace(/\\/g, "/");
  const generatedAt = new Date().toISOString();

  return `// Auto-generated by scripts/import-project-form-b.mjs
// Source: ${relativeInput}
// Generated at: ${generatedAt}

export const generatedResearchProjects = ${JSON.stringify(projects, null, 2)};
`;
}

try {
  main();
} catch (error) {
  console.error(error instanceof Error ? error.message : String(error));
  process.exitCode = 1;
}
