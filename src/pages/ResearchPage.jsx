import { useEffect, useState } from "react";
import Section from "../components/Section.jsx";
import { researchFocus, researchProjects } from "../data/siteContent.js";
import { publicPath } from "../utils/publicPath.js";

function ResourceList({ title, items }) {
  return (
    <div className="project-resource">
      <h4>{title}</h4>
      {items.length ? (
        <ul className="clean-list">
          {items.map((item) => (
            <li key={`${title}-${item.href}-${item.label}`}>
              <a href={publicPath(item.href)} target="_blank" rel="noreferrer">
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      ) : (
        <p className="empty-value">No links added.</p>
      )}
    </div>
  );
}

function ProjectGrid({ projects, onSelect }) {
  return (
    <div className="project-grid">
      {projects.map((project) => (
        <button
          className="project-card project-card-button"
          type="button"
          key={project.title}
          onClick={() => onSelect(project)}
        >
          <img src={publicPath(project.image)} alt="" loading="lazy" decoding="async" />
          <span className="project-card-body">
            <span className="project-area">{project.area}</span>
            <span className="project-card-title">{project.title}</span>
            <span className="project-card-summary">{project.summary}</span>
          </span>
        </button>
      ))}
    </div>
  );
}

function ProjectModal({ project, onClose }) {
  useEffect(() => {
    if (!project) return undefined;

    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div className="modal-backdrop" role="presentation" onMouseDown={onClose}>
      <article
        className="project-modal"
        role="dialog"
        aria-modal="true"
        aria-labelledby="project-modal-title"
        onMouseDown={(event) => event.stopPropagation()}
      >
        <button className="modal-close" type="button" onClick={onClose} aria-label="Close project details">
          x
        </button>
        <img src={publicPath(project.image)} alt="" loading="lazy" decoding="async" />
        <div className="project-modal-content">
          <p className="project-area">{project.area}</p>
          <h2 id="project-modal-title">{project.title}</h2>
          <p className="project-status">{project.status}</p>
          <p>{project.details || project.summary}</p>
          <div className="project-resource-grid">
            <ResourceList title="Experiment Videos" items={project.experimentVideos || []} />
            <ResourceList title="Paper Links" items={project.paperLinks || []} />
            <ResourceList title="Related Links" items={project.relatedLinks || []} />
          </div>
        </div>
      </article>
    </div>
  );
}

export default function ResearchPage() {
  const [selectedProject, setSelectedProject] = useState(null);
  const ongoingProjects = researchProjects.filter((project) => project.phase === "ongoing");
  const completedProjects = researchProjects.filter((project) => project.phase === "completed");

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

      <Section title="Ongoing Projects">
        <ProjectGrid projects={ongoingProjects} onSelect={setSelectedProject} />
      </Section>

      <Section title="Completed Projects">
        <ProjectGrid projects={completedProjects} onSelect={setSelectedProject} />
      </Section>

      <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />
    </div>
  );
}
