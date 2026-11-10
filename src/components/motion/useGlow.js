import { useEffect } from "react";

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
