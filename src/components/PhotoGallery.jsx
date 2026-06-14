import { publicPath } from "../utils/publicPath.js";

export default function PhotoGallery({ images }) {
  const galleryItems = [...images, ...images];

  return (
    <div className="photo-gallery" aria-label="Research image gallery">
      <div className="gallery-track">
        {galleryItems.map((image, index) => (
          <figure className="gallery-item" key={`${image.src}-${index}`}>
            <img src={publicPath(image.src)} alt={image.alt} loading="lazy" decoding="async" />
            <figcaption>{image.caption}</figcaption>
          </figure>
        ))}
      </div>
    </div>
  );
}
