import PhotoGallery from "../components/PhotoGallery.jsx";
import Section from "../components/Section.jsx";
import { galleryImages, lab, profile, researchInterests } from "../data/siteContent.js";
import { publicPath } from "../utils/publicPath.js";

function scrollToSection(event, id) {
  event.preventDefault();
  document.getElementById(id)?.scrollIntoView({ block: "start" });
}

function EmailIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24">
      <path d="M4 6h16v12H4z" />
      <path d="m4 7 8 6 8-6" />
    </svg>
  );
}

export default function HomePage() {
  return (
    <div className="page-stack">
      <section className="home-hero">
        <div className="hero-copy">
          <p className="section-eyebrow">Aerospace Engineering, IIT Kanpur</p>
          <h1>{lab.name}</h1>
          <p>{lab.shortDescription}</p>
          <div className="hero-actions" aria-label="Primary sections">
            <a href="#about-pi" onClick={(event) => scrollToSection(event, "about-pi")}>
              About PI
            </a>
            <a href="#lab-updates" onClick={(event) => scrollToSection(event, "lab-updates")}>
              Latest Happenings
            </a>
          </div>
        </div>
        <figure className="hero-portrait">
          <img src={publicPath(profile.image)} alt={profile.name} />
          <figcaption>
            <strong>{profile.name}</strong>
            <span>{profile.title}, {profile.department}</span>
          </figcaption>
        </figure>
      </section>

      <Section eyebrow="Profile" title="About PI" className="two-column-section" id="about-pi">
        <div className="section-copy">
          <h3>{profile.name}</h3>
          <address className="profile-address">
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
          <h3>Professional Interest</h3>
          <p>{profile.professionalInterest}</p>
        </div>
        <div className="section-panel">
          <h3>Education</h3>
          <ul className="clean-list">
            {profile.education.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      </Section>

      <Section eyebrow="Lab" title="Research Interests">
        <ul className="tag-grid">
          {researchInterests.map((interest) => (
            <li key={interest}>{interest}</li>
          ))}
        </ul>
      </Section>

      <Section
        eyebrow="Updates"
        title="About Lab / Latest Happenings"
        className="latest-grid"
        id="lab-updates"
      >
        <div className="section-copy">
          <p>{lab.latest}</p>
          <div className="latest-media">
            <div className="video-shell">
              <iframe title="Sabal 20 news clip" src={lab.latestVideo} loading="lazy" />
            </div>
            <img className="latest-image" src={publicPath(lab.latestImage)} alt="Sabal 20 unmanned logistic drone" />
          </div>
        </div>
      </Section>

      <Section eyebrow="Gallery" title="Lab Photo Gallery">
        <PhotoGallery images={galleryImages} />
      </Section>
    </div>
  );
}
