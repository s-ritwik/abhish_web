import { useEffect, useState } from "react";
import Section from "../components/Section.jsx";
import { galleryImages, galleryLeadImage } from "../data/siteContent.js";
import { publicPath } from "../utils/publicPath.js";

function GalleryLightbox({ image, onClose }) {
  useEffect(() => {
    if (!image) {
      return undefined;
    }

    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [image, onClose]);

  if (!image) {
    return null;
  }

  return (
    <div className="modal-backdrop" role="presentation" onMouseDown={onClose}>
      <div
        className="gallery-lightbox"
        role="dialog"
        aria-modal="true"
        aria-labelledby="gallery-lightbox-title"
        onMouseDown={(event) => event.stopPropagation()}
      >
        <button className="modal-close" type="button" onClick={onClose} aria-label="Close full-size photo">
          x
        </button>
        <img src={publicPath(image.src)} alt={image.alt} />
        <p id="gallery-lightbox-title">{image.caption}</p>
      </div>
    </div>
  );
}

function GalleryTile({ image, onOpen, featured = false }) {
  return (
    <button
      className={featured ? "gallery-lead-button" : "gallery-tile"}
      type="button"
      onClick={() => onOpen(image)}
      aria-label={`Open full photo: ${image.caption}`}
    >
      <img src={publicPath(image.src)} alt={image.alt} loading="lazy" decoding="async" />
      <span className={featured ? "gallery-lead-caption" : "gallery-tile-caption"}>{image.caption}</span>
    </button>
  );
}

export default function GalleryPage() {
  const [activeImage, setActiveImage] = useState(null);

  return (
    <div className="page-stack">
      <section className="page-hero compact">
        <p className="section-eyebrow">Gallery</p>
        <h1>Lab Gallery</h1>
        <p>Photos from the Helicopter and VTOL Laboratory, including prototypes, flight tests, and field trials.</p>
      </section>

      <Section title="Laboratory Photo">
        <figure className="gallery-lead">
          <GalleryTile image={galleryLeadImage} onOpen={setActiveImage} featured />
        </figure>
      </Section>

      <Section title="All Photos">
        <div className="gallery-grid">
          {galleryImages.map((image) => (
            <GalleryTile key={image.src} image={image} onOpen={setActiveImage} />
          ))}
        </div>
      </Section>

      <GalleryLightbox image={activeImage} onClose={() => setActiveImage(null)} />
    </div>
  );
}
