import { useEffect, useRef, useState } from "react";

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
