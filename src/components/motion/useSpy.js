import { useEffect, useState } from "react";

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
