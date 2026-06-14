import DataTable from "../components/DataTable.jsx";
import Section from "../components/Section.jsx";
import {
  degreeAlumni,
  phdAlumni,
  studentGroups,
  summerTrainees,
} from "../data/siteContent.js";

const currentStudentColumns = [
  { key: "name", label: "Name" },
  { key: "role", label: "Role" },
  { key: "research", label: "Research Interest" },
  { key: "email", label: "Email" },
];

const phdAlumniColumns = [
  { key: "name", label: "Name" },
  { key: "program", label: "Program" },
  { key: "current", label: "Current Position" },
  { key: "thesis", label: "Thesis Topic" },
];

const degreeAlumniColumns = [
  { key: "name", label: "Name" },
  { key: "program", label: "Program" },
  { key: "current", label: "Current Position" },
];

export default function PeoplePage() {
  return (
    <div className="page-stack">
      <section className="page-hero compact">
        <p className="section-eyebrow">People</p>
        <h1>People</h1>
        <p>
          Current group members and alumni from the IIT Kanpur Helicopter and
          VTOL Laboratory pages, organized in the original group order.
        </p>
      </section>

      {studentGroups.map((group) => (
        <Section title={group.group} key={group.group}>
          <DataTable columns={currentStudentColumns} rows={group.members} />
        </Section>
      ))}

      <Section eyebrow="Alumni" title="PhD Alumni">
        <DataTable columns={phdAlumniColumns} rows={phdAlumni} />
      </Section>

      <Section eyebrow="Alumni" title="M.Tech and BT/MT Alumni">
        <DataTable columns={degreeAlumniColumns} rows={degreeAlumni} />
      </Section>

      <Section eyebrow="Alumni" title="Undergraduate Summer Trainees">
        <div className="trainee-grid">
          {summerTrainees.map((group) => (
            <article className="trainee-year" key={group.year}>
              <h3>{group.year}</h3>
              <ul className="clean-list">
                {group.people.map((person) => (
                  <li key={person}>{person}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </Section>
    </div>
  );
}
