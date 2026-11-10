import React from "react";
import { ArrowUpRight } from "lucide-react";
function Banner() {
  return (
    <>
      {/* ===== Gyanjog Mission Banner ===== */}
      <section id="home" className="mission-banner">
        <div className="mission-overlay">
          <div className="wrap mission-content">
            <span className="mission-label">OUR MISSION</span>

            <h2>
              Building a Better Future Through
              <span> Child Psychology</span>
            </h2>

            <p>
              To equip parents, psychologists, therapists, and teachers with
              essential child psychology knowledge and practical skills to
              support children's healthy growth, behaviour, and emotional
              well-being.
            </p>

            <div className="actions">
              <a className="btn btn-gold" href="#courses">
                Explore courses <ArrowUpRight size={17} />
              </a>
              <a className="btn btn-ghost" href="#contact">
                Talk to an admissions counsellor
              </a>
            </div>
            <div className="mission-line"></div>
          </div>
        </div>
      </section>
    </>
  );
}
export default Banner;
