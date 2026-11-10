import { useEffect, useState } from "react";

export function useSpy(ids) {
  const [active, setActive] = useState("");
  const key = ids.join("|");

  useEffect(() => {
    if (ids.length === 0) {
      setActive("");
      return;
    }

    let ticking = false;

    const update = () => {
      ticking = false;
      const line = window.innerHeight * 0.35; // the "reading line"
      let current = "";
      let bestTop = -Infinity;
      let lastFound = "";

      ids.forEach((id) => {
        const el = document.getElementById(id);
        if (!el) return;
        lastFound = id;
        const top = el.getBoundingClientRect().top;
        // the section closest to the line, from above, wins
        if (top <= line && top > bestTop) {
          bestTop = top;
          current = id;
        }
      });

      // at the very bottom of the page, highlight the last section
      const atBottom =
        window.innerHeight + window.scrollY >=
        document.documentElement.scrollHeight - 4;
      if (atBottom && lastFound) current = lastFound;

      setActive(current || ids[0]);
    };

    const onScroll = () => {
      if (!ticking) {
        ticking = true;
        requestAnimationFrame(update);
      }
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, [key]);

  return active;
}
