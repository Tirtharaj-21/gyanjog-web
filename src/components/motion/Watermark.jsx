import { useInView } from "./useInView";

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
