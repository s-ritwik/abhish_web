import { useEffect, useState } from "react";
import DataTable from "../components/DataTable.jsx";
import Section from "../components/Section.jsx";
import {
  currentPeopleGroups,
  degreeAlumni,
  phdAlumni,
  summerTrainees,
} from "../data/siteContent.js";
import { publicPath } from "../utils/publicPath.js";

const phdAlumniColumns = [
  { key: "name", label: "Name" },
  { key: "program", label: "Program" },
  { key: "current", label: "Current Position" },
  { key: "thesis", label: "Thesis Topic" },
  { key: "contact", label: "Contact" },
];

const degreeAlumniColumns = [
  { key: "name", label: "Name" },
  { key: "program", label: "Program" },
  { key: "current", label: "Current Position" },
  { key: "research", label: "Research Interest" },
  { key: "contact", label: "Contact" },
];

function emailHref(email) {
  if (!email) return "";
  return `mailto:${email.replace("(at)", "@")}`;
}

function ContactIcon({ type }) {
  if (type === "email") {
    return (
      <svg aria-hidden="true" viewBox="0 0 24 24">
        <path d="M4 6h16v12H4z" />
        <path d="m4 7 8 6 8-6" />
      </svg>
    );
  }

  if (type === "linkedin") {
    return (
      <svg aria-hidden="true" viewBox="0 0 24 24">
        <path d="M6.5 10v8" />
        <path d="M6.5 6.5v.1" />
        <path d="M11 18v-8" />
        <path d="M11 13.5c0-2 1.1-3.5 3-3.5s3 1.2 3 3.6V18" />
      </svg>
    );
  }

  return (
    <svg aria-hidden="true" viewBox="0 0 24 24">
      <path d="M4 12a8 8 0 1 0 16 0 8 8 0 0 0-16 0Z" />
      <path d="M4.5 9h15" />
      <path d="M4.5 15h15" />
      <path d="M12 4a13 13 0 0 1 0 16" />
      <path d="M12 4a13 13 0 0 0 0 16" />
    </svg>
  );
}

function ContactLinks({ contacts = {} }) {
  const links = [
    contacts.email
      ? { type: "email", label: "Email", href: emailHref(contacts.email) }
      : null,
    contacts.linkedin
      ? { type: "linkedin", label: "LinkedIn", href: contacts.linkedin }
      : null,
    contacts.homepage
      ? { type: "homepage", label: "Homepage", href: contacts.homepage }
      : null,
  ].filter(Boolean);

  if (!links.length) {
    return <span className="empty-value">-</span>;
  }

  return (
    <div className="contact-links">
      {links.map((link) => (
        <a
          key={link.type}
          href={link.href}
          aria-label={link.label}
          title={link.label}
          target={link.type === "email" ? undefined : "_blank"}
          rel={link.type === "email" ? undefined : "noreferrer"}
          onClick={(event) => event.stopPropagation()}
          onKeyDown={(event) => event.stopPropagation()}
        >
          <ContactIcon type={link.type} />
        </a>
      ))}
    </div>
  );
}

function PersonCard({ person, onOpen }) {
  const initials = person.name
    .split(" ")
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0])
    .join("");

  return (
    <article
      className="person-card person-card-button"
      role="button"
      tabIndex={0}
      onClick={() => onOpen(person)}
      onKeyDown={(event) => {
        if (event.key === "Enter" || event.key === " ") {
          event.preventDefault();
          onOpen(person);
        }
      }}
    >
      {person.image ? (
        <img src={publicPath(person.image)} alt={person.name} loading="lazy" decoding="async" />
      ) : (
        <div className="person-photo-placeholder" aria-hidden="true">
          {initials}
        </div>
      )}
      <div className="person-card-body">
        <h3>{person.name}</h3>
        <p>{person.year || person.program || person.role}</p>
        <ContactLinks contacts={person.contacts} />
      </div>
    </article>
  );
}

function PersonProfileModal({ person, onClose }) {
  useEffect(() => {
    if (!person) return undefined;

    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [person, onClose]);

  if (!person) {
    return null;
  }

  return (
    <div className="modal-backdrop" role="presentation" onMouseDown={onClose}>
      <article
        className="person-profile-modal"
        role="dialog"
        aria-modal="true"
        aria-labelledby="person-profile-modal-title"
        onMouseDown={(event) => event.stopPropagation()}
      >
        <button className="modal-close" type="button" onClick={onClose} aria-label="Close profile details">
          x
        </button>
        {person.image ? (
          <img src={publicPath(person.image)} alt={person.name} loading="lazy" decoding="async" />
        ) : (
          <div className="person-photo-placeholder modal-photo-placeholder" aria-hidden="true">
            {person.name
              .split(" ")
              .filter(Boolean)
              .slice(0, 2)
              .map((part) => part[0])
              .join("")}
          </div>
        )}
        <div className="person-profile-content">
          <h2 id="person-profile-modal-title">{person.name}</h2>
          <p className="person-profile-line">{person.year || person.program || person.role}</p>
          <ContactLinks contacts={person.contacts} />
          <div className="person-profile-section">
            <h3>Short Bio</h3>
            <p>{person.shortBio || "Bio will be added soon."}</p>
          </div>
          <div className="person-profile-section">
            <h3>Research Keywords</h3>
            {person.researchKeywords?.length ? (
              <ul className="tag-grid">
                {person.researchKeywords.map((keyword) => (
                  <li key={keyword}>{keyword}</li>
                ))}
              </ul>
            ) : (
              <p className="empty-value">Keywords will be added soon.</p>
            )}
          </div>
        </div>
      </article>
    </div>
  );
}

function CurrentPeopleSection({ group, onOpen }) {
  return (
    <Section title={group.group}>
      {group.members.length ? (
        <div className="people-card-grid">
          {group.members.map((person) => (
            <PersonCard person={person} key={person.name} onOpen={onOpen} />
          ))}
        </div>
      ) : (
        <div className="people-empty-card">
          <p>Profiles will be added here.</p>
        </div>
      )}
    </Section>
  );
}

function TraineeEntry({ person }) {
  if (typeof person === "string") {
    return person;
  }

  return (
    <span className="trainee-person">
      <span>
        {person.name}, {person.college}
      </span>
      {person.email ? (
        <a
          className="trainee-email-link"
          href={emailHref(person.email)}
          aria-label={`Email ${person.name}`}
          title={person.email}
        >
          <ContactIcon type="email" />
        </a>
      ) : null}
    </span>
  );
}

export default function PeoplePage() {
  const [selectedPerson, setSelectedPerson] = useState(null);
  const phdRows = phdAlumni.map((person) => ({
    ...person,
    contact: <ContactLinks contacts={person.contacts} />,
  }));
  const degreeRows = degreeAlumni.map((person) => ({
    ...person,
    contact: <ContactLinks contacts={person.contacts} />,
  }));

  return (
    <div className="page-stack">
      <section className="page-hero compact">
        <p className="section-eyebrow">People</p>
        <h1>People</h1>
        <p>
          Current group members and alumni from the IIT Kanpur Helicopter and VTOL
          Laboratory pages.
        </p>
      </section>

      {currentPeopleGroups.map((group) => (
        <CurrentPeopleSection group={group} key={group.group} onOpen={setSelectedPerson} />
      ))}

      <Section eyebrow="Alumni" title="PhD Alumni">
        <DataTable columns={phdAlumniColumns} rows={phdRows} />
      </Section>

      <Section eyebrow="Alumni" title="M.Tech and BT/MT Alumni">
        <DataTable columns={degreeAlumniColumns} rows={degreeRows} />
      </Section>

      <Section eyebrow="Alumni" title="Undergraduate Summer Trainees">
        <div className="trainee-grid">
          {summerTrainees.map((group) => (
            <article className="trainee-year" key={group.year}>
              <h3>{group.year}</h3>
              <ul className="clean-list">
                {group.people.map((person) => (
                  <li key={typeof person === "string" ? person : `${person.name}-${person.email}`}>
                    <TraineeEntry person={person} />
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </Section>

      <PersonProfileModal person={selectedPerson} onClose={() => setSelectedPerson(null)} />
    </div>
  );
}
