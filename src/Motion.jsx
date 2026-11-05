import React, { useEffect, useRef, useState } from "react";
import {
  ChevronLeft,
  ChevronRight,
  Award,
  BookOpen,
  MapPin,
  School,
  Users,
  GraduationCap,
} from "lucide-react";
import { courses, faculty, gallery } from "./data";

const still = () =>
  window.matchMedia("(prefers-reduced-motion: reduce)").matches;

export function useInView(
  opts = { threshold: 0.15, rootMargin: "0px 0px -8% 0px" },
  once = true,
) {
  const ref = useRef(null);
  const [seen, setSeen] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el || !("IntersectionObserver" in window)) {
      setSeen(true);
      return;
    }
    const io = new IntersectionObserver(([e]) => {
      setSeen(e.isIntersecting);
      if (e.isIntersecting && once) io.disconnect();
    }, opts);
    io.observe(el);
    return () => io.disconnect();
  }, []);
  return [ref, seen];
}

/* scroll reveal: className variants rv-left | rv-zoom | rv-wipe */
export function Reveal({
  as: T = "div",
  delay = 0,
  className = "",
  children,
  ...p
}) {
  const [ref, seen] = useInView();
  return (
    <T
      ref={ref}
      className={`rv ${className}${seen ? " in" : ""}`}
      style={{ "--d": `${delay}ms` }}
      {...p}
    >
      {children}
    </T>
  );
}

export function Counter({ to, suffix = "" }) {
  const [ref, seen] = useInView({ threshold: 0.6 });
  const [n, setN] = useState(0);
  useEffect(() => {
    if (!seen) return;
    if (still()) {
      setN(to);
      return;
    }
    let raf, t0;
    const tick = (t) => {
      t0 ??= t;
      const p = Math.min((t - t0) / 1600, 1);
      setN(Math.round(to * (1 - Math.pow(1 - p, 4))));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [seen, to]);
  return (
    <span ref={ref}>
      {n.toLocaleString("en-IN")}
      {suffix}
    </span>
  );
}

export function Stats() {
  const s = [
    [BookOpen, courses.length, "", "Core courses", "Professional modules"],
    [MapPin, 22, "", "Active branches", "West Bengal"],
    [School, 9, "", "Associate schools", "Partner institutions"],
    [
      Users,
      faculty.length,
      "",
      "Faculty and staff",
      "Trainers and relationship team",
    ],
    [GraduationCap, 3500, "+", "Learners trained", "Across 2 countries"],
  ];
  return (
    <section className="stats">
      <div className="wrap stat-grid">
        {s.map(([I, n, sf, l, d], i) => (
          <Reveal key={l} delay={i * 90} className="stat rv-zoom" data-glow>
            <span className="ico">
              <I size={22} />
            </span>
            <b>
              <Counter to={n} suffix={sf} />
            </b>
            <strong>{l}</strong>
            <small>{d}</small>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

export function Marquee({ items }) {
  return (
    <div className="trust" role="group" aria-label="Recognitions">
      <div className="marq">
        {[0, 1, 2, 3].map((k) => (
          <ul key={k} aria-hidden={k ? "true" : undefined}>
            {items.map((i) => (
              <li key={i}>{i}</li>
            ))}
          </ul>
        ))}
      </div>
    </div>
  );
}

// export function Highlights() {
//   const [i, setI] = useState(0),
//     [hold, setHold] = useState(false);
//   const [ref, seen] = useInView({ threshold: 0.35 }, false);
//   const x0 = useRef(0),
//     n = gallery.length,
//     go = (k) => setI((k + n) % n);
//   return (
//     <section
//       className="hl"
//       ref={ref}
//       aria-roledescription="carousel"
//       aria-label="Highlights"
//       onMouseEnter={() => setHold(true)}
//       onMouseLeave={() => setHold(false)}
//       onKeyDown={(e) =>
//         e.key === "ArrowRight" ? go(i + 1) : e.key === "ArrowLeft" && go(i - 1)
//       }
//     >
//       <div className="wrap">
//         <div
//           className="sl-stage"
//           onPointerDown={(e) => (x0.current = e.clientX)}
//           onPointerUp={(e) => {
//             const d = e.clientX - x0.current;
//             if (Math.abs(d) > 50) go(i + (d < 0 ? 1 : -1));
//           }}
//         >
//           {gallery.map(([f, , alt], k) => (
//             <div
//               key={f}
//               className={k === i ? "sl on" : "sl"}
//               aria-hidden={k !== i}
//             >
//               <img
//                 src={`/assets/${f}`}
//                 alt={alt}
//                 loading={k ? "lazy" : "eager"}
//               />
//             </div>
//           ))}
//         </div>
//         <div className="sl-bar">
//           <span
//             key={i}
//             className="sl-prog"
//             style={{ animationPlayState: seen && !hold ? "running" : "paused" }}
//             onAnimationEnd={() => go(i + 1)}
//           />
//           <div className="sl-cap">
//             <small>
//               <Award size={15} /> {gallery[i][1]}
//             </small>
//             <p>{gallery[i][2]}</p>
//           </div>
//           <div className="sl-ctl">
//             <button onClick={() => go(i - 1)} aria-label="Previous slide">
//               <ChevronLeft size={18} />
//             </button>
//             {gallery.map(([f], k) => (
//               <button
//                 key={f}
//                 className={k === i ? "dot on" : "dot"}
//                 onClick={() => go(k)}
//                 aria-label={`Slide ${k + 1}`}
//                 aria-current={k === i}
//               />
//             ))}
//             <button onClick={() => go(i + 1)} aria-label="Next slide">
//               <ChevronRight size={18} />
//             </button>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

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

export function Progress() {
  const r = useRef(null);
  useEffect(() => {
    const f = () => {
      const h = document.documentElement;
      r.current.style.transform = `scaleX(${h.scrollTop / (h.scrollHeight - h.clientHeight || 1)})`;
    };
    f();
    window.addEventListener("scroll", f, { passive: true });
    return () => window.removeEventListener("scroll", f);
  }, []);
  return <div className="prog" ref={r} aria-hidden="true" />;
}

export function useSpy(ids) {
  const [a, setA] = useState("");
  useEffect(() => {
    const io = new IntersectionObserver(
      (es) => es.forEach((e) => e.isIntersecting && setA(e.target.id)),
      { rootMargin: "-45% 0px -50% 0px" },
    );
    ids.forEach((id) => {
      const el = document.getElementById(id);
      el && io.observe(el);
    });
    return () => io.disconnect();
  }, []);
  return a;
}

export function useGlow() {
  useEffect(() => {
    const m = (e) => {
      const c = e.target.closest?.("[data-glow]");
      if (!c) return;
      const r = c.getBoundingClientRect();
      c.style.setProperty("--mx", `${e.clientX - r.left}px`);
      c.style.setProperty("--my", `${e.clientY - r.top}px`);
    };
    document.addEventListener("pointermove", m, { passive: true });
    return () => document.removeEventListener("pointermove", m);
  }, []);
}

export const SplitWords = ({ text }) =>
  text.split(" ").map((w, i) => (
    <React.Fragment key={i}>
      <span className="w" aria-hidden="true">
        <span style={{ "--i": i }}>{w}</span>
      </span>{" "}
    </React.Fragment>
  ));

export function Watermark() {
  const [ref, seen] = useInView({ threshold: 0.3 });
  return (
    <div ref={ref} className={`wm${seen ? " in" : ""}`} aria-hidden="true">
      {"GYANJOG".split("").map((c, i) => (
        <span key={i} style={{ "--i": i }}>
          {c}
        </span>
      ))}
    </div>
  );
}
