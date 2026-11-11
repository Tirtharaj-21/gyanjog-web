import React from "react";
import { Link } from "react-router-dom";
import {
  ArrowLeft,
  ArrowRight,
  BadgeCheck,
  Brain,
  CheckCircle2,
  Eye,
  FileCheck2,
  GraduationCap,
  HeartHandshake,
  Landmark,
  ShieldCheck,
  Sparkles,
} from "lucide-react";
import { Reveal } from "../components/motion/Motion";
import "../styles/gyanjog.css";
import SEO from "../components/SEO";

const trust = [
  {
    icon: Landmark,
    label: "Established under",
    value: "Act of 1882",
    note: "Registered with the Government of West Bengal",
  },
  {
    icon: FileCheck2,
    label: "Registration Number",
    value: "190202282/2024",
    note: "Government of West Bengal",
  },
  {
    icon: BadgeCheck,
    label: "NSDC Training Partner ID",
    value: "355303",
    note: "Authorised Training Partner, Government of India",
  },
  {
    icon: ShieldCheck,
    label: "NITI Aayog Registration ID",
    value: "WB/2025/0518097",
    note: "",
  },
];

const whoWeAre = [
  "GYANJOG is an institution committed to advancing education, psychology, professional skill development, human behavioural understanding, and spiritual development.",
  "Our primary objective is to make quality education, psychological knowledge, and professional training accessible to individuals who aspire to develop their knowledge, skills, and professional capabilities.",
  "We believe that understanding the human mind is fundamental to personal growth, effective education, emotional well-being, and the development of a progressive society.",
  "Through structured educational programmes, professional training, workshops, and developmental initiatives, GYANJOG strives to empower individuals with practical knowledge and lifelong learning opportunities.",
];

const focus = [
  {
    icon: Brain,
    title: "Psychology & Human Behaviour",
    items: [
      "General Psychology",
      "Child Psychology",
      "Student Psychology",
      "Human Behaviour and Thought Patterns",
      "Emotional and Behavioural Development",
      "Applied Psychology",
    ],
  },
  {
    icon: HeartHandshake,
    title: "Counselling & Mental Health Education",
    items: [
      "Child Counselling",
      "Student Counselling",
      "Career Counselling",
      "Parenting Psychology",
      "Counselling Skills Development",
      "Mental Health Awareness",
    ],
  },
  {
    icon: GraduationCap,
    title: "Professional Education & Skill Development",
    items: [
      "Certificate and Diploma Training Programmes",
      "Professional Counselling Training",
      "Neuro-Linguistic Programming (NLP)",
      "Personality and Communication Development",
      "Cognitive and Behavioural Skill Development",
      "Professional Capacity Building",
    ],
  },
  {
    icon: Sparkles,
    title: "Spiritual Development & Mind Sciences",
    items: [
      "Meditation and Mind Training",
      "Self-Awareness and Consciousness Development",
      "Spiritual Development",
      "Human Potential Development",
      "Psychology and Spirituality Integration",
    ],
  },
];

const mission = [
  "Make psychological education accessible to society.",
  "Develop knowledgeable and skilled counselling professionals.",
  "Empower parents, teachers, students, and educators.",
  "Promote scientific understanding of human behaviour.",
  "Encourage continuous learning and professional development.",
  "Explore the relationship between psychology, consciousness, and spirituality.",
  "Contribute to a more educated, emotionally aware, and progressive society.",
];

export default function GyanjogPage() {
  return (
    <main className="gj-page">
      <SEO
        title="About Gyanjog Group | Education, Psychology & Training"
        description="Learn about Gyanjog Group, its educational mission, psychology programmes, counselling initiatives and professional skill development activities."
        path="/about-gyanjog"
        image="/assets/logo.png"
      />
      <div className="gj-wrap">
        <Link to="/" className="gj-back">
          <ArrowLeft size={18} /> Back to Home
        </Link>

        {/* ---------- Title ---------- */}
        <header className="gj-title">
          <span className="gj-eyebrow">About Gyanjog</span>
          <h1>Gyanjog Institute of Psychology and Spiritual Development</h1>
          <p>
            An Institution Dedicated to Psychology, Education, Human Development
            & Spiritual Growth.
          </p>
        </header>

        {/* ---------- Registration & recognition ---------- */}
        <section className="gj-section">
          <h2>Institutional Registration & Recognition</h2>
          <div className="gj-trust">
            {trust.map(({ icon: Icon, label, value, note }, i) => (
              <Reveal key={label} className="gj-trust-card" delay={i * 90}>
                <span className="gj-icon">
                  <Icon size={24} />
                </span>
                <small>{label}</small>
                <strong>{value}</strong>
                {note && <em>{note}</em>}
              </Reveal>
            ))}
          </div>
        </section>

        {/* ---------- Who we are ---------- */}
        <section className="gj-section gj-who">
          <div>
            <span className="gj-eyebrow">Who We Are</span>
            <h2>Education that transforms understanding into life</h2>
          </div>
          <div className="gj-who-text">
            {whoWeAre.map((t, i) => (
              <Reveal key={i} delay={i * 80}>
                <p>{t}</p>
              </Reveal>
            ))}
          </div>
        </section>

        {/* ---------- Areas of focus ---------- */}
        <section className="gj-section">
          <h2>Our Areas of Focus</h2>
          <div className="gj-focus">
            {focus.map(({ icon: Icon, title, items }, i) => (
              <Reveal key={title} className="gj-focus-card" delay={i * 90}>
                <span className="gj-icon">
                  <Icon size={26} />
                </span>
                <h3>{title}</h3>
                <ul>
                  {items.map((it) => (
                    <li key={it}>{it}</li>
                  ))}
                </ul>
              </Reveal>
            ))}
          </div>
        </section>

        {/* ---------- Mission ---------- */}
        <section className="gj-section">
          <h2>Our Mission</h2>
          <p className="gj-lead">
            Our mission is to promote psychological awareness, professional
            education, skill development, and holistic human growth. We aim to:
          </p>
          <ul className="gj-mission">
            {mission.map((m) => (
              <li key={m}>
                <CheckCircle2 size={22} />
                <span>{m}</span>
              </li>
            ))}
          </ul>
        </section>

        {/* ---------- Vision ---------- */}
        <Reveal className="gj-vision">
          <Eye size={34} />
          <h2>Our Vision</h2>
          <p>
            Our vision is to establish GYANJOG as a distinguished institution in
            the fields of Psychology, Professional Education, Human Behaviour,
            Mind Sciences, and Spiritual Development.
          </p>
          <p>
            We aspire to create an educational ecosystem that combines
            scientific knowledge, practical learning, professional skills, and
            holistic human development. Through innovation, education,
            research-oriented initiatives, and professional training, we seek to
            contribute meaningfully to the future of education and human
            development in India and beyond.
          </p>
        </Reveal>

        {/* ---------- Philosophy ---------- */}
        <section className="gj-philosophy">
          <span className="gj-eyebrow gj-eyebrow-light">Our Philosophy</span>
          <p>
            At GYANJOG, we believe that education is not merely the acquisition
            of information; it is the development of knowledge, understanding,
            awareness, and the ability to transform life. We believe in
            empowering individuals through knowledge, strengthening society
            through education, and transforming lives through a deeper
            understanding of the human mind.
          </p>
          <h2>
            Where Knowledge Meets Wisdom, Psychology Meets Humanity, and
            Education Leads to Transformation.
          </h2>
        </section>

        {/* ---------- Call to action ---------- */}
        <section className="gj-cta">
          <Link className="btn btn-pink" to="/#contact">
            Enquire now <ArrowRight size={18} />
          </Link>
          <Link className="gj-link" to="/chairman">
            Meet our Chairman →
          </Link>
        </section>
      </div>
    </main>
  );
}
