import { useEffect, useState } from "react";
import { useInView } from "./useInView";

const still = () =>
  window.matchMedia("(prefers-reduced-motion: reduce)").matches;

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
