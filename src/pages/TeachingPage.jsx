import DataTable from "../components/DataTable.jsx";
import Section from "../components/Section.jsx";
import { teachingCourses } from "../data/siteContent.js";
import { publicPath } from "../utils/publicPath.js";

const teachingColumns = [
  { key: "term", label: "Term" },
  { key: "code", label: "Course Code" },
  { key: "title", label: "Course Title" },
  { key: "role", label: "Role" },
  { key: "resources", label: "Resources" },
];

function formatResources(resources) {
  if (!resources.length) return "";

  return (
    <div className="link-list">
      {resources.map((resource) => (
        <a key={resource.href} href={publicPath(resource.href)} target="_blank" rel="noreferrer">
          {resource.label}
        </a>
      ))}
    </div>
  );
}

export default function TeachingPage() {
  const rows = teachingCourses.map((course) => ({
    ...course,
    resources: formatResources(course.resources),
  }));

  return (
    <div className="page-stack">
      <section className="page-hero compact">
        <p className="section-eyebrow">Teaching</p>
        <h1>Teaching</h1>
        <p>Courses taught and available course documents from the laboratory website.</p>
      </section>

      <Section title="Courses">
        <DataTable columns={teachingColumns} rows={rows} />
      </Section>
    </div>
  );
}
