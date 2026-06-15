export const pages = [
  {
    slug: "home",
    label: "Home",
    source: "react",
    summary:
      "Professor profile, lab focus areas, education, research interests, and latest happenings.",
  },
  {
    slug: "research",
    label: "Research",
    source: "react",
    summary: "Rotorcraft, VTOL, UAV, MAV, wind turbine, and autonomous system projects.",
  },
  {
    slug: "people",
    label: "People",
    source: "react",
    summary: "Current students and alumni organized in the original group order.",
  },
  {
    slug: "teaching",
    label: "Teaching",
    source: "react",
    summary: "Courses taught and course content documents.",
  },
  {
    slug: "awards",
    label: "Awards",
    source: "legacy",
    legacyFile: "awards.html",
    summary: "Faculty, student, and professional recognition.",
  },
  {
    slug: "journal-papers",
    label: "Journal Papers",
    source: "legacy",
    legacyFile: "journal-papers.html",
    summary: "Publication list preserved from the original site.",
  },
  {
    slug: "outreach",
    label: "Outreach",
    source: "legacy",
    legacyFile: "outreach.html",
    summary: "Outreach activities and related material.",
  },
  {
    slug: "calendar",
    label: "Calendar",
    source: "react",
    summary: "Lab schedule and upcoming events.",
  },
  {
    slug: "contact",
    label: "Contact",
    source: "react",
    summary: "Department address and contact details.",
  },
];

export const legacyRouteAliases = {
  "index.html": "home",
  "indexba03.html": "home",
  "index33cb.html": "research",
  "index0f11.html": "research",
  "indexbc9f.html": "research",
  "index1589.html": "people",
  "index7d37.html": "people",
  "index2453.html": "people",
  "index219e.html": "people",
  "index39c3.html": "people",
  "index46c6.html": "people",
  "index1e9f.html": "people",
  "index41e1.html": "people",
  "indexcbec.html": "people",
  "index03b2.html": "teaching",
  "index3442.html": "teaching",
  "index72f6.html": "awards",
  "index09eb.html": "awards",
  "index11e9.html": "journal-papers",
  "indexfbe9.html": "journal-papers",
  "index7ea5.html": "outreach",
  "index5fdd.html": "outreach",
  "index6077.html": "calendar",
  "indexdfdf.html": "contact",
  "index1e5b.html": "contact",
};

export function getPageBySlug(slug) {
  return pages.find((page) => page.slug === slug) || pages[0];
}
