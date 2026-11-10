import React from "react";
import { Link } from "react-router-dom";
import {
  ArrowLeft,
  Award,
  Baby,
  GraduationCap,
  Quote,
  Users,
  UserRound,
} from "lucide-react";
import { Reveal } from "../components/motion/Motion";
import { img } from "../data/constants";
import "../styles/chairman.css";

const chips = [
  "RCI-Registered Clinical Psychologist",
  "Founder & Chairman",
  "Child Psychology Expert",
  "NLP Trainer",
];

const audience = [
  {
    icon: Users,
    title: "Parents",
    text: "Conscious parenting guidance rooted in child psychology.",
  },
  {
    icon: UserRound,
    title: "Teachers",
    text: "Practical psychological understanding for the classroom.",
  },
  {
    icon: GraduationCap,
    title: "Students",
    text: "Awareness and support for emotional and personal growth.",
  },
  {
    icon: Award,
    title: "Aspiring Professionals",
    text: "Professional training for future psychology practitioners.",
  },
];

const focus = [
  "Psychological Awareness",
  "Child Development",
  "Behavioural Science",
  "Mental Well-being",
  "Holistic Human Development",
];

export default function ChairmanPage() {
  return (
    <main className="ch-page">
      <div className="ch-wrap">
        <Link to="/" className="ch-back">
          <ArrowLeft size={18} /> Back to Home
        </Link>

        {/* ---------- Intro ---------- */}
        <section className="ch-hero">
          <Reveal className="ch-photo">
            <div className="ch-photo-frame">
              <img
                src={img("mic.jpg")}
                alt="Chandan Chakraborty, Founder and Chairman of Gyanjog"
              />
            </div>
            <span className="ch-badge">
              <Award size={16} /> RCI Registered
            </span>
          </Reveal>

          <div className="ch-intro">
            <span className="ch-label">Message from the Chairman</span>
            <h1>Chandan Chakraborty</h1>

            <div className="ch-chips">
              {chips.map((c) => (
                <span key={c} className="ch-chip">
                  {c}
                </span>
              ))}
            </div>

            <p>
              A Registered Clinical Psychologist under the Rehabilitation
              Council of India (RCI), Chandan Chakraborty is an Indian
              psychologist, child psychology expert, NLP trainer, mental health
              educator, and educational entrepreneur dedicated to transforming
              child psychology, conscious parenting, and psychological
              education.
            </p>
          </div>
        </section>

        {/* ---------- Biography ---------- */}
        <section className="ch-bio">
          <Reveal>
            <p>
              As the Founder and Chairman of{" "}
              <strong>
                Gyanjog Institute of Psychology and Spiritual Development
              </strong>{" "}
              and <strong>Genius Mind Brain Development Academy</strong>, he is
              committed to advancing psychological awareness, child development,
              behavioural science, mental well-being, and holistic human
              development.
            </p>
          </Reveal>
          <Reveal delay={120}>
            <p>
              With a multidisciplinary professional background spanning
              corporate management, banking, psychology, and education, he has
              dedicated his work to empowering parents, teachers, students, and
              aspiring psychology professionals.
            </p>
          </Reveal>
        </section>

        {/* ---------- Mission quote ---------- */}
        <Reveal className="ch-quote">
          <Quote className="ch-quote-icon" size={42} />
          <p>
            His mission is to bridge the gap between psychological science and
            practical education, making professional psychological knowledge
            more accessible to society.
          </p>
        </Reveal>

        {/* ---------- Who he empowers ---------- */}
        <section className="ch-block">
          <h2>Empowering Every Learner</h2>
          <div className="ch-grid">
            {audience.map(({ icon: Icon, title, text }, i) => (
              <Reveal key={title} className="ch-card" delay={i * 100}>
                <span className="ch-icon">
                  <Icon size={26} />
                </span>
                <h3>{title}</h3>
                <p>{text}</p>
              </Reveal>
            ))}
          </div>
        </section>

        {/* ---------- Focus areas ---------- */}
        <section className="ch-block">
          <h2>Areas of Commitment</h2>
          <div className="ch-tags">
            {focus.map((f) => (
              <span key={f} className="ch-tag">
                <Baby size={0} aria-hidden="true" />
                {f}
              </span>
            ))}
          </div>
        </section>

        {/* ---------- Call to action ----------
        <section className="ch-cta">
          <h2>Learn more about the institute he founded</h2>
          <div className="ch-cta-btns">
            <Link className="btn btn-pink" to="/about-gyanjog">
              About Gyanjog
            </Link>
            <Link className="btn ch-btn-outline" to="/#contact">
              Enquire now
            </Link>
          </div>
        </section> */}
      </div>
    </main>
  );
}
