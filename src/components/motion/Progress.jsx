import { useEffect, useRef } from "react";

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
