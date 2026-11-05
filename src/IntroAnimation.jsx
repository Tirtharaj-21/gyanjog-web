import React, { useEffect, useState } from "react";

export default function IntroAnimation() {
  const [phase, setPhase] = useState("show");

  useEffect(() => {
    const leaveTimer = window.setTimeout(() => setPhase("leave"), 2300);
    const removeTimer = window.setTimeout(() => setPhase("done"), 2950);
    return () => {
      window.clearTimeout(leaveTimer);
      window.clearTimeout(removeTimer);
    };
  }, []);

  if (phase === "done") return null;

  return (
    <div className={`intro-screen ${phase === "leave" ? "intro-screen--leave" : ""}`}
         role="status" aria-label="Loading Gyanjog website">
      <div className="intro-content">
        <img className="intro-logo" src="/assets/logo.png" alt="Gyanjog Group" />
        <p className="intro-name">GYANJOG</p>
        <p className="intro-tagline">Understand the Mind. Transform Lives.</p>
        <div className="intro-progress">
          <span />
        </div>
        <strong className="intro-percent">100%</strong>
      </div>
    </div>
  );
}
