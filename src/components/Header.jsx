import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { useSpy } from "./motion/Motion";
import { nav, img } from "../data/constants";

function Header() {
  const [open, setOpen] = useState(false);
  const [solid, setSolid] = useState(false);
  const { pathname } = useLocation();
  const isHome = pathname === "/";
  // Section highlighting only makes sense on the Home page
  const active = useSpy(isHome ? nav.map((n) => n[1]) : []);

  useEffect(() => {
    const f = () => setSolid(window.scrollY > 20);
    f();
    window.addEventListener("scroll", f, { passive: true });
    return () => window.removeEventListener("scroll", f);
  }, []);

  return (
    <header className={`header${solid || !isHome ? " solid" : ""}`}>
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
        <Link className="brand" to="/#home" onClick={() => setOpen(false)}>
          <img src={img("logo.png")} alt="Gyanjog Institute Logo" />
        </Link>

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
            <Link
              key={id}
              className={active === id ? "active" : undefined}
              to={`/#${id}`}
              onClick={() => setOpen(false)}
            >
              {l}
            </Link>
          ))}

          <Link
            className="btn btn-pink"
            to="/#contact"
            onClick={() => setOpen(false)}
          >
            Enquire now
          </Link>
        </nav>
      </div>
    </header>
  );
}

export default Header;
