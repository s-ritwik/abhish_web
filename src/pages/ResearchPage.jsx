import DataTable from "../components/DataTable.jsx";
import Section from "../components/Section.jsx";
import { researchFocus, researchProjects } from "../data/siteContent.js";
import { publicPath } from "../utils/publicPath.js";

const researchColumns = [
  { key: "title", label: "Project" },
  { key: "area", label: "Area" },
  { key: "status", label: "Status" },
];

export default function ResearchPage() {
  return (
    <div className="page-stack">
      <section className="page-hero compact">
        <p className="section-eyebrow">Research</p>
        <h1>Rotorcraft, VTOL, UAV, MAV, and Autonomous Systems</h1>
        <p>
          The lab works on fundamental and applied problems in rotary wing vehicles,
          vertical takeoff and landing platforms, autonomous navigation, wind turbines,
          and flight dynamics.
        </p>
      </section>

      <Section title="Focus Areas">
        <ul className="tag-grid">
          {researchFocus.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </Section>

      <Section title="Project Summary">
        <DataTable columns={researchColumns} rows={researchProjects} />
      </Section>

      <Section title="Selected Projects">
        <div className="project-grid">
          {researchProjects.map((project) => (
            <article className="project-card" key={project.title}>
              <img src={publicPath(project.image)} alt="" loading="lazy" decoding="async" />
              <div>
                <p className="project-area">{project.area}</p>
                <h3>{project.title}</h3>
                <p>{project.summary}</p>
              </div>
            </article>
          ))}
        </div>
      </Section>
    </div>
  );
}
