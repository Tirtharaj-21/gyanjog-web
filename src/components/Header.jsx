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
  const active = useSpy(isHome ? nav.map((n) => n[1]) : []);

  useEffect(() => {
    const handleScroll = () => setSolid(window.scrollY > 10);

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    const handleKey = (e) => {
      if (e.key === "Escape") setOpen(false);
    };

    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, []);

  const isActive = (id) =>
    id === "courses"
      ? pathname.startsWith("/courses") || active === id
      : active === id;

  return (
    <header className={`header${solid || !isHome ? " solid" : ""}`}>
      {/* Announcement Bar */}
      <div className="institute-strip">
        <span className="institute-label">NSDC Affiliated Organization</span>
        <span className="institute-dot" aria-hidden="true" />
        <span className="institute-text">
          Authorized Training Partner of National Skill Development Corporation,
          Govt. of India
        </span>
      </div>

      {/* Main Navbar */}
      <div className="main-navbar">
        <div className="wrap navbar-container">
          <Link
            className="navbar-brand"
            to="/#home"
            onClick={() => setOpen(false)}
            aria-label="Gyanjog Home"
          >
            <img src={img("logo.png")} alt="Gyanjog Institute Logo" />

            {/* <div className="navbar-brand-text">
              <span className="brand-title">Gyanjog</span>
              <span className="brand-subtitle">
                Institute of Psychology &amp; Spiritual Development
              </span>
            </div> */}
            <div className="navbar-brand-text">
              <span className="brand-title">
                <span className="gold-letter">G</span>yan
                <span className="gold-letter">j</span>o
                <span className="gold-letter">g</span>
              </span>

              <span className="brand-subtitle">
                Institute of Psychology &amp; Spiritual Development
              </span>
            </div>
          </Link>

          <button
            className="burger"
            onClick={() => setOpen((prev) => !prev)}
            aria-label={open ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={open}
            aria-controls="main-navigation"
          >
            {open ? <X size={24} /> : <Menu size={24} />}
          </button>

          <nav id="main-navigation" className={`links${open ? " open" : ""}`}>
            {nav.map(([label, id]) => (
              <Link
                key={id}
                className={isActive(id) ? "active" : undefined}
                aria-current={isActive(id) ? "page" : undefined}
                to={id === "courses" ? "/courses" : `/#${id}`}
                onClick={() => setOpen(false)}
              >
                {label}
              </Link>
            ))}

            <Link
              className="btn nav-enquiry"
              to="/#contact"
              onClick={() => setOpen(false)}
            >
              Enquire Now
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
}

export default Header;
