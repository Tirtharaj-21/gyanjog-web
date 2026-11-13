import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Reveal } from "./motion/Motion";
import { courses } from "../data/siteData";
import Heading from "./Heading";

const createSlug = (title) =>
  title
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");

function Courses() {
  return (
    <section className="section tint" id="professional-courses">
      <div className="wrap">
        <Heading
          title="Professional Courses"
          desc="Explore professional training programmes in psychology, counselling, NLP and personal development."
        />

        <div className="govt-grid">
          {courses.map((c, i) => (
            <Reveal as="article" key={c.title} delay={(i % 2) * 100} data-glow>
              <span className="pill">{c.tag}</span>

              <h3>{c.title}</h3>

              <p className="sub">{c.institute}</p>

              <p>{c.desc}</p>

              <ul>
                {c.points.map((p) => (
                  <li key={p}>{p}</li>
                ))}
              </ul>

              <div className="foot">
                <small>{c.mode}</small>

                <Link
                  to={`/courses/professional/${c.slug || createSlug(c.title)}`}
                >
                  View Details
                  <ArrowUpRight size={15} />
                </Link>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Courses;
