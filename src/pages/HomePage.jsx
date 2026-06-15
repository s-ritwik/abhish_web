import PhotoGallery from "../components/PhotoGallery.jsx";
import Section from "../components/Section.jsx";
import { galleryImages, lab, profile, researchInterests } from "../data/siteContent.js";
import { publicPath } from "../utils/publicPath.js";
import { useState } from "react";

function scrollToSection(event, id) {
  event.preventDefault();
  document.getElementById(id)?.scrollIntoView({ block: "start" });
}

function HeroCopy({ overMedia = false }) {
  return (
    <div className={overMedia ? "hero-copy hero-copy-over-media" : "hero-copy"}>
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
  );
}

function LabHeroCarousel() {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeImage = galleryImages[activeIndex];

  function moveImage(direction) {
    setActiveIndex((index) => (index + direction + galleryImages.length) % galleryImages.length);
  }

  return (
    <section className="home-hero carousel-hero">
      <HeroCopy />
      <figure className="lab-hero-carousel">
        <div className="carousel-frame">
          <img src={publicPath(activeImage.src)} alt={activeImage.alt} />
          <button
            className="carousel-arrow carousel-arrow-left"
            type="button"
            aria-label="Previous lab image"
            onClick={() => moveImage(-1)}
          >
            &lt;
          </button>
          <button
            className="carousel-arrow carousel-arrow-right"
            type="button"
            aria-label="Next lab image"
            onClick={() => moveImage(1)}
          >
            &gt;
          </button>
        </div>
        <figcaption>{activeImage.caption}</figcaption>
      </figure>
    </section>
  );
}

function LabHeroMarquee() {
  const marqueeImages = [...galleryImages, ...galleryImages];

  return (
    <section className="home-hero marquee-hero">
      <div className="hero-marquee-track" aria-hidden="true">
        {marqueeImages.map((image, index) => (
          <img key={`${image.src}-${index}`} src={publicPath(image.src)} alt="" />
        ))}
      </div>
      <HeroCopy overMedia />
    </section>
  );
}

function getHeroVariant() {
  if (typeof window === "undefined") {
    return "marquee";
  }

  return new URLSearchParams(window.location.search).get("hero") === "carousel"
    ? "carousel"
    : "marquee";
}

export default function HomePage() {
  const heroVariant = getHeroVariant();

  return (
    <div className="page-stack">
      {heroVariant === "marquee" ? <LabHeroMarquee /> : <LabHeroCarousel />}

      <Section eyebrow="Profile" title="About PI" className="two-column-section about-pi-section" id="about-pi">
        <div className="section-copy">
          <div className="section-panel education-panel">
            <h3>Education</h3>
            <ul className="clean-list">
              {profile.education.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
          <div className="professional-interest-block">
            <h3>Professional Interest</h3>
            <p>{profile.professionalInterest}</p>
          </div>
        </div>
        <figure className="pi-profile-card">
          <img src={publicPath(profile.image)} alt={profile.name} />
          <figcaption>
            <strong>{profile.name}</strong>
            <span>{profile.title}</span>
            <span>{profile.department}</span>
          </figcaption>
        </figure>
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
