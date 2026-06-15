import Section from "../components/Section.jsx";
import { profile } from "../data/siteContent.js";

function EmailIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24">
      <path d="M4 6h16v12H4z" />
      <path d="m4 7 8 6 8-6" />
    </svg>
  );
}

export default function ContactPage() {
  return (
    <div className="page-stack">
      <section className="page-hero compact">
        <p className="section-eyebrow">Contact</p>
        <h1>Contact</h1>
        <p>Department address and contact details for the laboratory.</p>
      </section>

      <Section title={profile.name} className="contact-section">
        <address className="profile-address contact-address">
          <span>{profile.title},</span>
          <span>{profile.department},</span>
          <span>{profile.lab},</span>
          <span>{profile.institute},</span>
          <span>{profile.address}</span>
          <span>Tel: {profile.phones[0]}</span>
          <span>{profile.phones[1]}</span>
          <span>{profile.phones[2]}</span>
          <a href={`mailto:${profile.email.replace("(at)", "@")}`} className="email-line">
            <EmailIcon />
            {profile.email}
          </a>
        </address>
      </Section>
    </div>
  );
}
