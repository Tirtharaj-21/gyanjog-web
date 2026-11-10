import { useState } from "react";
import { Reveal } from "./motion/Motion";
import { faculty } from "../data/siteData";
import { img } from "../data/constants";
import Heading from "./Heading";

function Team() {
  const filters = [
    "All",
    "Trainers",
    "Relationship team",
    "Design and media",
    "Administration",
    "Bangladesh",
  ];
  const [f, setF] = useState("All");
  const ok = ([, role, place]) =>
    f === "All" ||
    (f === "Trainers" && role === "Trainer") ||
    (f === "Relationship team" && role.includes("Relationship")) ||
    (f === "Design and media" &&
      (role.includes("Graphics") || role.includes("Media"))) ||
    (f === "Administration" &&
      (role.includes("Admin") || role.includes("Assistance"))) ||
    (f === "Bangladesh" && place.includes("Bangladesh"));
  return (
    <section className="section tint" id="team">
      <div className="wrap">
        <Heading title="The people who teach and guide" />
        <div className="leader">
          <img
            className="petal"
            src={img("chairman.jpg")}
            alt="Chandan Chakraborty"
          />
          <div>
            <h3>Chandan Chakraborty</h3>
            <p className="role">Founder and Academic Director</p>
            <p>
              A pioneer in child counselling, NLP and applied mind sciences,
              working to make accredited psychological training reachable across
              Eastern India.
            </p>
            <ul className="chips">
              <li>Child and adolescent psychology</li>
              <li>Clinical hypnotherapy</li>
              <li>NLP master practitioner</li>
            </ul>
            <a className="btn btn-pink" href="#contact">
              Enquire about the Director's masterclass
            </a>
          </div>
        </div>
        <div className="filters" role="group" aria-label="Filter team">
          {filters.map((x) => (
            <button
              key={x}
              className={f === x ? "on" : ""}
              aria-pressed={f === x}
              onClick={() => setF(x)}
            >
              {x}
            </button>
          ))}
        </div>

        <div className="faculty">
          {faculty.filter(ok).map(([n, r, p], i) => (
            <Reveal key={n} delay={(i % 4) * 60} className="faculty-card">
              <img
                className="faculty-photo"
                src={`/assets/faculty/${
                  {
                    "Payel Biswas": "payel-biswas.webp",
                    "Madhumita Sengupta": "madhumita-sengupta.webp",
                    "Nandita Banerjee": "nandita-banerjee.webp",
                    "Priyanka Santra": "priyanka-santra.webp",
                    "Papiya Roy": "papiya-roy.webp",
                    "Trishna Dhali": "trishna-dhali.webp",
                    "Mousumi Saha": "mousumi-saha.webp",
                    "Pampa Banerjee": "pampa-banerjee.webp",
                    "Rahul Bera": "rahul-bera.webp",
                    "Swati Mukherjee": "swati-mukherjee.webp",
                    "Piu Das": "piu-das.webp",
                    "Jayasri Banerjee": "jayasri-banerjee.webp",
                    "Samrat Banerjee": "samrat-banerjee.webp",
                    "A K Azad Babu": "ak-azad-babu.webp",
                    "Sumina Akhter Jahan": "sumina-akhter-jahan.webp",
                    "Ipsita Basu": "ipsita-basu.webp",
                    "Rinki Hazra Ghosh": "rinki-hazra-ghosh.webp",
                    "Sanu Kotal": "sanu-kotal.webp",
                  }[n]
                }`}
                alt={n}
                loading="lazy"
              />
              <div className="faculty-info">
                <b>{n}</b>
                <span className="faculty-role">{r}</span>
                <small>{p}</small>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Team;
