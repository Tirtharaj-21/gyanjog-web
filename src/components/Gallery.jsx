import { useEffect, useState } from "react";
import { X } from "lucide-react";
import { gallery } from "../data/siteData";
import { img } from "../data/constants";
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

  const renderRow = (items, reverse = false) => {
    const repeatedItems = [...items, ...items];

    return (
      <div className={`gallery-marquee-row ${reverse ? "reverse" : ""}`}>
        <div className="gallery-marquee-track">
          {[0, 1].map((group) => (
            <div
              className="gallery-marquee-group"
              key={group}
              aria-hidden={group === 1}
            >
              {items.map(([f, tag, alt], i) => (
                <button
                  type="button"
                  className="gallery-marquee-card"
                  key={`${group}-${f}-${i}`}
                  onClick={() =>
                    setA(gallery.findIndex((item) => item[0] === f))
                  }
                  tabIndex={group === 1 ? -1 : 0}
                  aria-label={`Open photo: ${alt}`}
                >
                  <img
                    src={img(f)}
                    alt={group === 1 ? "" : alt}
                    loading="lazy"
                  />

                  <div className="gallery-marquee-caption">
                    <span>{tag}</span>
                    <p>{alt}</p>
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

      {/* Existing Lightbox */}
      {a !== null && (
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
            src={img(gallery[a][0])}
            alt={gallery[a][2]}
            onClick={(e) => e.stopPropagation()}
          />

          <p>{gallery[a][2]}</p>
        </div>
      )}
    </section>
  );
}

export default Gallery;
