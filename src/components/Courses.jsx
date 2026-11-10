import { ArrowUpRight } from "lucide-react";
import { Reveal } from "./motion/Motion";
import { courses } from "../data/siteData";
import Heading from "./Heading";

function Courses() {
  return (
    <section className="section tint" id="courses">
      <div className="wrap">
        <Heading
          title="Featured courses"
          desc="Career-oriented programmes for psychologists, counsellors, teachers, parents and wellness practitioners."
        />
        <ol className="course-list">
          {courses.map((c, i) => (
            <Reveal as="li" key={c.title} delay={i * 70}>
              <div className="dur">
                {c.tag.replace(
                  / (Certificate|Diploma|Practitioner|Intensive Camp)$/,
                  "",
                )}
                <small>{c.tag.split(" ").slice(2).join(" ")}</small>
              </div>
              <div className="cbody">
                <h3>{c.title}</h3>
                <p>{c.desc}</p>
                <ul>
                  {c.points.map((p) => (
                    <li key={p}>{p}</li>
                  ))}
                </ul>
              </div>
              <div className="cmeta">
                <span>{c.institute}</span>
                <span>{c.mode}</span>
                <a className="btn btn-line" href="#contact">
                  Enquire <ArrowUpRight size={15} />
                </a>
              </div>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}

export default Courses;
