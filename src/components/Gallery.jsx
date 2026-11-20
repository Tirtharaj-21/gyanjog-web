import { useEffect, useState } from "react";
import { X } from "lucide-react";
import { gallery } from "../data/siteData";
import Heading from "./Heading";

function Gallery() {
  const [a, setA] = useState(null);

  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === "Escape") setA(null);
    };

    window.addEventListener("keydown", handleEscape);

    return () => window.removeEventListener("keydown", handleEscape);
  }, []);

  // Divide images into two rows
  const firstRow = gallery.filter((_, i) => i % 2 === 0);
  const secondRow = gallery.filter((_, i) => i % 2 !== 0);

  // Render gallery row
  const renderRow = (items, reverse = false) => {
    return (
      <div className={`gallery-marquee-row ${reverse ? "reverse" : ""}`}>
        <div className="gallery-marquee-track">
          {[0, 1].map((group) => (
            <div
              className="gallery-marquee-group"
              key={group}
              aria-hidden={group === 1}
            >
              {items.map((item, i) => (
                <button
                  type="button"
                  className="gallery-marquee-card"
                  key={`${group}-${item.image}`}
                  onClick={() =>
                    setA(
                      gallery.findIndex(
                        (galleryItem) => galleryItem.image === item.image,
                      ),
                    )
                  }
                  tabIndex={group === 1 ? -1 : 0}
                  aria-label={`Open photo: ${item.title}`}
                >
                  <img
                    src={`/images/seminar/${item.image}`}
                    alt={group === 1 ? "" : item.title}
                    loading="lazy"
                  />

                  <div className="gallery-marquee-caption">
                    <span>{item.title}</span>
                    <p>{item.note}</p>
                  </div>
                </button>
              ))}
            </div>
          ))}
        </div>
      </div>
    );
  };

  return (
    <section className="section gallery-section" id="gallery">
      <div className="wrap">
        <Heading
          title="Life at Gyanjog"
          desc="School assemblies, keynotes, workshops and state honours."
        />
      </div>

      <div className="gallery-marquee">
        {/* First row: Right to Left */}
        {renderRow(firstRow)}

        {/* Second row: Left to Right */}
        {renderRow(secondRow, true)}
      </div>

      {/* Lightbox */}
      {a !== null && gallery[a] && (
        <div
          className="lightbox"
          role="dialog"
          aria-modal="true"
          onClick={() => setA(null)}
        >
          <button
            type="button"
            aria-label="Close photo"
            onClick={() => setA(null)}
          >
            <X />
          </button>

          <img
            src={`/images/seminar/${gallery[a].image}`}
            alt={gallery[a].title}
            onClick={(e) => e.stopPropagation()}
          />

          <p>{gallery[a].note}</p>
        </div>
      )}
    </section>
  );
}

export default Gallery;
