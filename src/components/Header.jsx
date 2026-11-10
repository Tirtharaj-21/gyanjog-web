import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { useSpy } from "./motion/Motion";
import { nav, img } from "../data/constants";

function Header() {
  const [open, setOpen] = useState(false);
  const [solid, setSolid] = useState(false);
  const active = useSpy(nav.map((n) => n[1]));
  useEffect(() => {
    const f = () => setSolid(window.scrollY > 20);
    f();
    window.addEventListener("scroll", f, { passive: true });
    return () => window.removeEventListener("scroll", f);
  }, []);
  return (
    <header className={`header${solid ? " solid" : ""}`}>
      <div className="strip">
        <div className="wrap">
          {/* Keep the top strip available for future contact details */}
        </div>
      </div>

      {/* Institute Name Marquee */}
      <div className="institute-marquee">
        <div className="institute-marquee-track">
          <span>NSDC AFFILIATED ORGANIZATION</span>
          <span>GYANJOG INSTITUTE OF PSYCHOLOGY AND SPIRITUAL DEVELOPMENT</span>
          <span aria-hidden="true">
            <span>NSDC AFFILIATED ORGANIZATION</span>
            GYANJOG INSTITUTE OF PSYCHOLOGY AND SPIRITUAL DEVELOPMENT
          </span>
        </div>
      </div>

      <div className="wrap bar">
        <a className="brand" href="#home">
          <img src={img("logo.png")} alt="Gyanjog Institute Logo" />
        </a>

        <button
          className="burger"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
          aria-expanded={open}
        >
          {open ? <X /> : <Menu />}
        </button>

        <nav className={open ? "links open" : "links"}>
          {nav.map(([l, id]) => (
            <a
              key={id}
              className={active === id ? "active" : undefined}
              href={`#${id}`}
              onClick={() => setOpen(false)}
            >
              {l}
            </a>
          ))}

          <a
            className="btn btn-pink"
            href="#contact"
            onClick={() => setOpen(false)}
          >
            Enquire now
          </a>
        </nav>
      </div>
    </header>
  );
}

export default Header;
