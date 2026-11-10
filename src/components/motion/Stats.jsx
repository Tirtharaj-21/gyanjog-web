import {
  BookOpen,
  MapPin,
  School,
  Users,
  GraduationCap,
  UserPlus,
  HeartHandshake,
} from "lucide-react";
import { courses, faculty } from "../../data/siteData";
import { Reveal } from "./Reveal";
import { Counter } from "./Counter";

export function Stats() {
  const s = [
    [BookOpen, 10, "+", "Core courses", "Professional modules"],
    [MapPin, 25, "", "Active branches", "West Bengal"],
    [School, 8, "", "Associate schools", "Partner institutions"],
    [Users, 40, "", "Faculty and staff", "Trainers and relationship team"],
    [GraduationCap, 2000, "+", "Professional trained", "Across 2 countries"],
    [UserPlus, 4000, "+", "Student enrolled", "Across all programmes"],
    [
      HeartHandshake,
      10000,
      "+",
      "Parents trained",
      "Through workshops and courses",
    ],
  ];
  return (
    <section className="stats">
      <div className="wrap stat-grid">
        {s.map(([I, n, sf, l, d], i) => (
          <Reveal key={l} delay={i * 90} className="stat rv-zoom" data-glow>
            <span className="ico">
              <I size={22} />
            </span>
            <b>
              <Counter to={n} suffix={sf} />
            </b>
            <strong>{l}</strong>
            <small>{d}</small>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
