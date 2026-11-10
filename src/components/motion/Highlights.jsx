import { useRef, useState } from "react";
import { ChevronLeft, ChevronRight, Award } from "lucide-react";
import { gallery } from "../../data/siteData";
import { useInView } from "./useInView";

export function Highlights() {
  const [i, setI] = useState(0),
    [hold, setHold] = useState(false);
  const [ref, seen] = useInView({ threshold: 0.35 }, false);
  const x0 = useRef(0),
    n = gallery.length,
    go = (k) => setI((k + n) % n);
  return (
    <section
      className="hl"
      ref={ref}
      aria-roledescription="carousel"
      aria-label="Highlights"
      onMouseEnter={() => setHold(true)}
      onMouseLeave={() => setHold(false)}
      onKeyDown={(e) =>
        e.key === "ArrowRight" ? go(i + 1) : e.key === "ArrowLeft" && go(i - 1)
      }
    >
      <div className="wrap">
        <div
          className="sl-stage"
          onPointerDown={(e) => (x0.current = e.clientX)}
          onPointerUp={(e) => {
            const d = e.clientX - x0.current;
            if (Math.abs(d) > 50) go(i + (d < 0 ? 1 : -1));
          }}
        >
          {gallery.map(([f, , alt], k) => (
            <div
              key={f}
              className={k === i ? "sl on" : "sl"}
              aria-hidden={k !== i}
            >
              <img
                src={`/assets/${f}`}
                alt={alt}
                loading={k ? "lazy" : "eager"}
              />
            </div>
          ))}
        </div>
        <div className="sl-bar">
          <span
            key={i}
            className="sl-prog"
            style={{ animationPlayState: seen && !hold ? "running" : "paused" }}
            onAnimationEnd={() => go(i + 1)}
          />
          <div className="sl-cap">
            <small>
              <Award size={15} /> {gallery[i][1]}
            </small>
            <p>{gallery[i][2]}</p>
          </div>
          <div className="sl-ctl">
            <button onClick={() => go(i - 1)} aria-label="Previous slide">
              <ChevronLeft size={18} />
            </button>
            {gallery.map(([f], k) => (
              <button
                key={f}
                className={k === i ? "dot on" : "dot"}
                onClick={() => go(k)}
                aria-label={`Slide ${k + 1}`}
                aria-current={k === i}
              />
            ))}
            <button onClick={() => go(i + 1)} aria-label="Next slide">
              <ChevronRight size={18} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
