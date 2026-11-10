import { ArrowUpRight, GraduationCap } from "lucide-react";
import { Reveal } from "./motion/Motion";
import { govtCourses } from "../data/siteData";
import Heading from "./Heading";

function Govt() {
  return (
    <section className="section" id="govt-courses">
      <div className="wrap">
        <Heading
          title="Government recognised courses"
          desc="Programmes certified by Genius Mind Brain Development Academy, with field exposure at our associate schools."
        />
        <div className="govt-grid">
          {govtCourses.map((c, i) => (
            <Reveal as="article" key={c.title} delay={(i % 2) * 100} data-glow>
              <span className="pill">{c.tag}</span>
              <h3>{c.title}</h3>
              <p className="sub">{c.sub}</p>
              <p>{c.desc}</p>
              <ul>
                {c.points.map((p) => (
                  <li key={p}>{p}</li>
                ))}
              </ul>
              <div className="foot">
                <small>{c.meta}</small>
                <a href="#contact">
                  Enquire <ArrowUpRight size={14} />
                </a>
              </div>
            </Reveal>
          ))}
        </div>
        <p className="partners">
          <GraduationCap size={18} /> Associate schools: Vivekananda
          Institution, Saharah Ramala Pal Vidyapith, Assembly of God Church
          School, Zilla Public School, Royal International School, St. Merry
          School, and three Vikramshila Academy branches.
        </p>
      </div>
    </section>
  );
}

export default Govt;
