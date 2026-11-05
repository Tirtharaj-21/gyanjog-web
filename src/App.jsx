import React, { useEffect, useMemo, useState } from "react";
import IntroAnimation from "./IntroAnimation";
import {
  Menu,
  X,
  ArrowUpRight,
  Phone,
  MapPin,
  Mail,
  Play,
  Search,
  Facebook,
  Youtube,
  MessageCircle,
  ShieldCheck,
  Check,
  Landmark,
  GraduationCap,
  Clock,
  ExternalLink,
} from "lucide-react";
import {
  Reveal,
  Stats,
  Marquee,
  Highlights,
  Progress,
  Watermark,
  SplitWords,
  useSpy,
  useGlow,
} from "./Motion";
import {
  courses,
  govtCourses,
  videos,
  branches,
  faculty,
  gallery,
} from "./data";

const PHONE = "+91-6289062507";
const nav = [
  ["About", "about"],
  ["Govt. Courses", "govt-courses"],
  ["Courses", "courses"],
  ["Videos", "videos"],
  ["Branches", "branches"],
  ["Team", "team"],
  ["Gallery", "gallery"],
  ["Contact", "contact"],
];
const img = (f) => `/assets/${f}`;

function Heading({ title, desc, light }) {
  return (
    <Reveal className={`heading${light ? " light" : ""}`}>
      <h2>{title}</h2>
      {desc && <p>{desc}</p>}
    </Reveal>
  );
}

function Header() {
  const [open, setOpen] = useState(false);
  const [solid, setSolid] = useState(false);
  const active = useSpy(nav.map((n) => n[1]));
  useEffect(() => {
    const f = () => setSolid(window.scrollY > 20);
    f();
    window.addEventListener("scroll", f, { passive: true });
    return () => window.removeEventListener("scroll", f);
  }, []);
  return (
    <header className={`header${solid ? " solid" : ""}`}>
      <div className="strip">
        <div className="wrap">
          <span>
            Recognised by NITI Aayog and MCA. 22 branches in India and
            Bangladesh.
          </span>
          <a href={`tel:${PHONE}`}>
            <Phone size={13} /> {PHONE}
          </a>
        </div>
      </div>
      <div className="wrap bar">
        <a className="brand" href="#home">
          <img src={img("logo.png")} alt="" />
          <span>
            <b>Gyanjog Group</b>
            <small>Psychology and mind-science training</small>
          </span>
        </a>
        <button
          className="burger"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
          aria-expanded={open}
        >
          {open ? <X /> : <Menu />}
        </button>
        <nav className={open ? "links open" : "links"}>
          {nav.map(([l, id]) => (
            <a
              key={id}
              className={active === id ? "active" : undefined}
              href={`#${id}`}
              onClick={() => setOpen(false)}
            >
              {l}
            </a>
          ))}
          <a
            className="btn btn-pink"
            href="#contact"
            onClick={() => setOpen(false)}
          >
            Enquire now
          </a>
        </nav>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section className="hero" id="home">
      <div className="wrap hero-grid">
        <div className="hero-copy">
          <p className="hero-kicker">Howrah, West Bengal</p>
          <h1 aria-label="Understand the mind. Transform lives.">
            <SplitWords text="Understand the mind. Transform lives." />
          </h1>
          <p className="lead">
            Professional training in psychology, counselling, mind sciences and
            spiritual development, taught by working practitioners.
          </p>
          <div className="actions">
            <a className="btn btn-gold" href="#courses">
              Explore courses <ArrowUpRight size={17} />
            </a>
            <a className="btn btn-ghost" href="#contact">
              Talk to an admissions counsellor
            </a>
          </div>
        </div>
        <div className="collage" aria-hidden="false">
          <img
            className="c-main petal"
            src={img("chairman.jpg")}
            alt="Chandan Chakraborty, founder and director of Gyanjog Group"
          />
          <img
            className="c-a petal-s"
            src={img("lecture.jpg")}
            alt="Keynote session in a full auditorium"
          />
          <img
            className="c-b petal-s"
            src={img("classroom.jpg")}
            alt="School students raising their hands in a workshop"
          />
          <div className="c-badge">
            <Landmark size={18} />
            <span>
              <b>Registered under the Indian Trusts Act, 1882</b>
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}

function Trust() {
  const items = [
    "NITI Aayog, Government of India",
    "Ministry of Corporate Affairs",
    "Govt. of West Bengal and NCT Delhi",
    "NSDC skill network",
    "Glocal University and UGC standards",
  ];
  return <Marquee items={items} />;
}

function About() {
  return (
    <section className="section" id="about">
      <div className="wrap about">
        <Reveal className="about-img rv-wipe">
          <img
            className="petal"
            src={img("mic.jpg")}
            alt="Chandan Chakraborty speaking at a seminar"
          />
        </Reveal>
        <div>
          <h2>A training house built on science, empathy and human values</h2>
          <p>
            Gyanjog Group trains psychologists, counsellors, teachers and
            parents across India and Bangladesh. Two autonomous institutions
            each certify a distinct field, so every credential has a clear
            academic owner.
          </p>
          <blockquote>
            Our mission is to create highly skilled, ethically grounded and
            socially responsible professionals, blending scientific knowledge
            with human values.
            <cite>Chandan Chakraborty, Founder and Director</cite>
          </blockquote>
        </div>
      </div>
      <div className="wrap inst">
        <Reveal as="article" className="inst-a" data-glow>
          <h3>Genius Mind Brain Development Academy</h3>
          <p>
            Certifies psychology, counselling, child guidance and mental-health
            courses, with case-study practice and clinical ethics.
          </p>
          <ul>
            <li>Child counselling</li>
            <li>Diploma in counselling</li>
            <li>Career guidance</li>
          </ul>
        </Reveal>
        <Reveal as="article" className="inst-b" delay={120} data-glow>
          <h3>Gyanjog Institute of Psychology and Spiritual Development</h3>
          <p>
            Certifies NLP, mind training and consciousness courses that bring
            psychology and Indian spiritual methods together.
          </p>
          <ul>
            <li>NLP practitioner</li>
            <li>Mind training</li>
            <li>Residential retreats</li>
          </ul>
        </Reveal>
      </div>
    </section>
  );
}

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

function Videos() {
  return (
    <section className="section dark" id="videos">
      <div className="wrap">
        <Heading
          light
          title="Watch a class before you enrol"
          desc="Lectures, course reviews and seminar sessions from Chandan Chakraborty and the Gyanjog faculty."
        />
        <div className="video-grid">
          {videos.map(([id, tag, t, d], i) => (
            <Reveal
              as="a"
              key={id}
              delay={(i % 3) * 100}
              className="video"
              href={`https://www.youtube.com/watch?v=${id}`}
              target="_blank"
              rel="noreferrer"
            >
              <div className="thumb">
                <img
                  loading="lazy"
                  src={`https://img.youtube.com/vi/${id}/hqdefault.jpg`}
                  alt=""
                />
                <span>
                  <Play fill="currentColor" size={22} />
                </span>
              </div>
              <small>{tag}</small>
              <h3>{t}</h3>
              <p>{d}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function Branches() {
  const [q, setQ] = useState("");
  const list = useMemo(
    () =>
      branches.filter((b) =>
        b.join(" ").toLowerCase().includes(q.toLowerCase()),
      ),
    [q],
  );
  return (
    <section className="section" id="branches">
      <div className="wrap">
        <Heading
          title="22 branches across West Bengal"
          desc="Search for your nearest study centre. Not listed? Our live online and weekend practicum batches reach every district."
        />
        <label className="search">
          <Search size={18} />
          <input
            value={q}
            onChange={(e) => setQ(e.target.value)}
            placeholder="Search by town or district"
            aria-label="Search branches"
          />
        </label>
        <div className="branch-grid">
          {list.map(([name, desc, area], i) => (
            <Reveal
              as="a"
              key={name}
              href="#contact"
              className="branch"
              delay={(i % 4) * 60}
              data-glow
            >
              <b>{name}</b>
              <span>{area}</span>
              <small>{desc}</small>
            </Reveal>
          ))}
        </div>
        {!list.length && (
          <p className="empty">
            No branch matches that search. Call {PHONE} to ask about the nearest
            batch.
          </p>
        )}
      </div>
    </section>
  );
}

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
        {/* <div className="faculty">
          {faculty.filter(ok).map(([n, r, p], i) => (
            <Reveal key={n} delay={(i % 3) * 60} className="faculty-card">
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
              <div>
                <b>{n}</b>
                <small>
                  {r}, {p}
                </small>
              </div>
            </Reveal>
          ))}
        </div> */}

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

function Reviews() {
  const r = [
    [
      "Ramkrishna Sasmal",
      "Five-day residential programme",
      "The residential course gave me a new perspective on life. The learning and guidance helped me find clarity and direction.",
    ],
    [
      "Mousumi Banerjee",
      "Diploma in Child Counselling",
      "The case studies and practical tools changed how I support children's behavioural and emotional needs in my classroom.",
    ],
    [
      "Sukriti Mukherjee",
      "Mind Training and Therapy",
      "A life-changing programme. The guidance on emotional wellbeing and self-confidence was practical and valuable.",
    ],
    [
      "Debabrata Ghosh",
      "NLP Master Practitioner",
      "The modules improved my communication, my emotional resilience and how I handle pressure at work.",
    ],
  ];
  return (
    <section className="section reviews">
      <div className="wrap">
        <Heading
          title="What our learners say"
          desc="Reviews shared by students, practitioners and educators on Google Maps."
        />
        <div className="review-grid">
          {r.map(([n, c, t], i) => (
            <Reveal as="figure" key={n} delay={(i % 2) * 120}>
              <blockquote>{t}</blockquote>
              <figcaption>
                <b>{n}</b>
                <small>{c}</small>
              </figcaption>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function Gallery() {
  const [a, setA] = useState(null);

  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === "Escape") setA(null);
    };

    window.addEventListener("keydown", handleEscape);

    return () => window.removeEventListener("keydown", handleEscape);
  }, []);

  // Divide images into two rows
  const firstRow = gallery.filter((_, i) => i % 2 === 0);
  const secondRow = gallery.filter((_, i) => i % 2 !== 0);

  const renderRow = (items, reverse = false) => {
    const repeatedItems = [...items, ...items];

    return (
      <div className={`gallery-marquee-row ${reverse ? "reverse" : ""}`}>
        <div className="gallery-marquee-track">
          {[0, 1].map((group) => (
            <div
              className="gallery-marquee-group"
              key={group}
              aria-hidden={group === 1}
            >
              {items.map(([f, tag, alt], i) => (
                <button
                  type="button"
                  className="gallery-marquee-card"
                  key={`${group}-${f}-${i}`}
                  onClick={() =>
                    setA(gallery.findIndex((item) => item[0] === f))
                  }
                  tabIndex={group === 1 ? -1 : 0}
                  aria-label={`Open photo: ${alt}`}
                >
                  <img
                    src={img(f)}
                    alt={group === 1 ? "" : alt}
                    loading="lazy"
                  />

                  <div className="gallery-marquee-caption">
                    <span>{tag}</span>
                    <p>{alt}</p>
                  </div>
                </button>
              ))}
            </div>
          ))}
        </div>
      </div>
    );
  };

  return (
    <section className="section gallery-section" id="gallery">
      <div className="wrap">
        <Heading
          title="Life at Gyanjog"
          desc="School assemblies, keynotes, workshops and state honours."
        />
      </div>

      <div className="gallery-marquee">
        {/* First row: Right to Left */}
        {renderRow(firstRow)}

        {/* Second row: Left to Right */}
        {renderRow(secondRow, true)}
      </div>

      {/* Existing Lightbox */}
      {a !== null && (
        <div
          className="lightbox"
          role="dialog"
          aria-modal="true"
          onClick={() => setA(null)}
        >
          <button
            type="button"
            aria-label="Close photo"
            onClick={() => setA(null)}
          >
            <X />
          </button>

          <img
            src={img(gallery[a][0])}
            alt={gallery[a][2]}
            onClick={(e) => e.stopPropagation()}
          />

          <p>{gallery[a][2]}</p>
        </div>
      )}
    </section>
  );
}

// function Contact() {
//   const [sent, setSent] = useState(false);
//   const [f, setF] = useState({
//     name: "",
//     email: "",
//     phone: "",
//     course: "",
//     message: "",
//   });
//   const up = (e) => setF({ ...f, [e.target.name]: e.target.value });
//   const submit = (e) => {
//     e.preventDefault();
//     const body = encodeURIComponent(
//       `Name: ${f.name}\nEmail: ${f.email}\nPhone: ${f.phone}\nCourse: ${f.course}\nMessage: ${f.message}`,
//     );
//     window.location.href = `mailto:info@gyanjog.org?subject=${encodeURIComponent("Gyanjog admission enquiry")}&body=${body}`;
//     setSent(true);
//   };
//   return (
//     <section className="section contact" id="contact">
//       <div className="wrap contact-grid">
//         <div>
//           <h2>Start your enquiry</h2>
//           <p>
//             Tell us what you want to study. A senior academic counsellor will
//             send the syllabus, batch dates and fees.
//           </p>
//           <ul className="reach">
//             <li>
//               <Phone size={18} />
//               <a href={`tel:${PHONE}`}>{PHONE}</a>
//             </li>
//             <li>
//               <Mail size={18} />
//               <a href="mailto:info@gyanjog.org">info@gyanjog.org</a>
//             </li>
//             <li>
//               <MapPin size={18} />
//               <span>Bagnan, Library More, Howrah 711303, West Bengal</span>
//             </li>
//           </ul>
//           <p className="hours">
//             <b>Admission desk:</b> Monday to Saturday, 10 AM to 7 PM IST. Sunday
//             by appointment.
//           </p>
//           <p className="hours">
//             <b>Bangladesh:</b> Dhaka liaison centre for cross-border admissions.
//           </p>
//           <a
//             className="btn btn-gold"
//             href="https://wa.me/916289062507"
//             target="_blank"
//             rel="noreferrer"
//           >
//             <MessageCircle size={17} /> Chat on WhatsApp
//           </a>
//         </div>
//         <form onSubmit={submit}>
//           {sent && (
//             <p className="ok">
//               <Check size={16} /> Your email app has opened with the enquiry.
//               Press send there to finish.
//             </p>
//           )}
//           <div className="row">
//             <label>
//               Full name
//               <input
//                 required
//                 name="name"
//                 value={f.name}
//                 onChange={up}
//                 autoComplete="name"
//               />
//             </label>
//             <label>
//               Email
//               <input
//                 required
//                 type="email"
//                 name="email"
//                 value={f.email}
//                 onChange={up}
//                 autoComplete="email"
//               />
//             </label>
//           </div>
//           <div className="row">
//             <label>
//               Mobile or WhatsApp number
//               <input
//                 required
//                 name="phone"
//                 value={f.phone}
//                 onChange={up}
//                 autoComplete="tel"
//               />
//             </label>
//             <label>
//               Course of interest
//               <select name="course" value={f.course} onChange={up}>
//                 <option value="">Choose a course</option>
//                 {[...courses, ...govtCourses].map((c) => (
//                   <option key={c.title}>{c.title}</option>
//                 ))}
//               </select>
//             </label>
//           </div>
//           <label>
//             Questions (optional)
//             <textarea name="message" rows="4" value={f.message} onChange={up} />
//           </label>
//           <button className="btn btn-pink" type="submit">
//             Send enquiry
//           </button>
//           <small>
//             <ShieldCheck size={14} /> Confidential. We use your details only to
//             reply to this enquiry.
//           </small>
//         </form>
//       </div>
//     </section>
//   );
// }

function Contact() {
  const [sent, setSent] = useState(false);

  const [f, setF] = useState({
    name: "",
    email: "",
    phone: "",
    course: "",
    message: "",
  });

  const up = (e) => setF({ ...f, [e.target.name]: e.target.value });

  const submit = (e) => {
    e.preventDefault();

    const body = encodeURIComponent(
      `Name: ${f.name}\nEmail: ${f.email}\nPhone: ${f.phone}\nCourse: ${f.course}\nMessage: ${f.message}`,
    );

    window.location.href = `mailto:info@gyanjog.org?subject=${encodeURIComponent(
      "Gyanjog Admission Enquiry",
    )}&body=${body}`;

    setSent(true);
  };

  return (
    <section className="section contact" id="contact">
      <div className="wrap gallery-heading">
        {/* Section Heading */}
        <div className="contact-heading">
          <h2>
            Begin Your <span>Transformation</span>
          </h2>
          <p>
            Connect with our academic counselors for syllabus details, admission
            criteria, or institutional collaborations.
          </p>
        </div>

        <div className="contact-grid">
          {/* LEFT: Admission Form */}
          <div className="contact-form-card">
            <span className="contact-kicker">FAST-TRACK ADMISSION DESK</span>

            <h3>Direct Academic Enquiry</h3>

            <p className="contact-description">
              Fill out this 1-minute form to receive the official syllabus,
              batch schedule, and fee details.
            </p>

            <div className="response-badge">
              <span></span>
              Avg. Response: &lt; 30 mins
            </div>

            <div className="contact-divider"></div>

            <form onSubmit={submit}>
              {sent && (
                <p className="ok">
                  <Check size={16} />
                  Your email app has opened. Press send there to finish your
                  enquiry.
                </p>
              )}

              <div className="row">
                <label>
                  Full Name <span className="required">*</span>
                  <input
                    required
                    name="name"
                    value={f.name}
                    onChange={up}
                    placeholder="e.g. Subrata Mondal"
                  />
                </label>

                <label>
                  Email Address <span className="required">*</span>
                  <input
                    required
                    type="email"
                    name="email"
                    value={f.email}
                    onChange={up}
                    placeholder="e.g. subrata@example.com"
                  />
                </label>
              </div>

              <div className="row">
                <label>
                  Mobile / WhatsApp Number
                  <span className="required">*</span>
                  <input
                    required
                    type="tel"
                    name="phone"
                    value={f.phone}
                    onChange={up}
                    placeholder="e.g. +91 98765 43210"
                  />
                </label>

                <label>
                  Course of Interest
                  <select name="course" value={f.course} onChange={up}>
                    <option value="">Choose a course</option>

                    {[...courses, ...govtCourses].map((c) => (
                      <option key={c.title} value={c.title}>
                        {c.title}
                      </option>
                    ))}
                  </select>
                </label>
              </div>

              <label>
                Your Message / Questions
                <span className="optional">(Optional)</span>
                <textarea
                  name="message"
                  rows="4"
                  value={f.message}
                  onChange={up}
                  placeholder="Tell us about your educational background, desired start date, or specific questions..."
                />
              </label>

              <button className="contact-submit" type="submit">
                Send Admission Enquiry
                <ArrowUpRight size={20} />
              </button>

              <small className="confidential">
                <ShieldCheck size={16} />
                100% Confidential • Official Academic Desk • No Promotional Spam
              </small>
            </form>
          </div>

          {/* RIGHT: Office Information */}
          <div className="contact-information">
            {/* India Headquarters */}
            <div className="office-card">
              <div className="office-top">
                <span className="office-badge india-badge">
                  IN &nbsp; HEADQUARTERS • INDIA
                </span>

                <span className="campus-label">Registered Campus</span>
              </div>

              <h3>Corporate & Registered Office</h3>

              <p className="office-description">
                Genius Mind Brain Development Academy • Gyanjog Group
              </p>

              <div className="office-detail">
                <span className="detail-icon blue-icon">
                  <MapPin size={21} />
                </span>

                <div>
                  <small>CAMPUS ADDRESS</small>
                  <p>
                    Bagnan, Library More, Howrah – 711303, West Bengal, India
                  </p>

                  <a
                    href="https://www.google.com/maps/search/?api=1&query=Bagnan+Library+More+Howrah+711303"
                    target="_blank"
                    rel="noreferrer"
                    className="map-link"
                  >
                    View on Google Maps <ExternalLink size={14} />
                  </a>
                </div>
              </div>

              <div className="office-contact-row">
                <a href="tel:+916289062507" className="office-contact-item">
                  <span className="detail-icon blue-icon">
                    <Phone size={19} />
                  </span>
                  <span>
                    <small>OFFICIAL PHONE</small>
                    <strong>+91-6289062507</strong>
                  </span>
                </a>

                <a
                  href="mailto:info@gyanjog.org"
                  className="office-contact-item"
                >
                  <span className="detail-icon yellow-icon">
                    <Mail size={19} />
                  </span>
                  <span>
                    <small>EMAIL ENQUIRIES</small>
                    <strong>info@gyanjog.org</strong>
                  </span>
                </a>
              </div>
            </div>

            {/* Bangladesh Chapter */}
            <div className="office-card">
              <div className="office-top">
                <span className="office-badge bd-badge">
                  BD &nbsp; INTERNATIONAL CHAPTER
                </span>

                <span className="campus-label">Dhaka Liaison</span>
              </div>

              <h3>International Chapter (Bangladesh)</h3>

              <p className="office-description">
                Dhaka Liaison Centre • Cross-border admissions and counseling
              </p>

              <div className="office-detail">
                <span className="detail-icon blue-icon">
                  <MapPin size={21} />
                </span>

                <div>
                  <small>LIAISON OFFICE</small>
                  <p>Dhaka Liaison Centre, Dhaka, Bangladesh</p>
                </div>
              </div>

              <div className="officer-divider"></div>

              <small className="officer-heading">
                AUTHORIZED CHAPTER OFFICERS:
              </small>

              <div className="officer-grid">
                <div className="officer">
                  <span>AK</span>
                  <div>
                    <strong>A K Azad Babu</strong>
                    <small>Chapter Head</small>
                  </div>
                </div>

                <div className="officer">
                  <span>SA</span>
                  <div>
                    <strong>Sumina Akhter Jahan</strong>
                    <small>Relationship Manager</small>
                  </div>
                </div>
              </div>
            </div>

            {/* Admission Hours */}
            <div className="admission-hours">
              <div className="hours-heading">
                <span className="hours-icon">
                  <Clock size={23} />
                </span>

                <div>
                  <small>● COUNSELING DESK ACTIVE</small>
                  <h3>Counseling & Admission Hours</h3>
                </div>
              </div>

              <div className="hours-content">
                <div>
                  <small>Monday – Saturday</small>
                  <strong>10:00 AM – 7:00 PM (IST)</strong>
                </div>

                <div>
                  <small>Sunday</small>
                  <strong className="appointment">
                    Prior Appointment Only
                  </strong>
                </div>
              </div>
            </div>

            {/* Social Channels */}
            <div className="official-social">
              <span>Connect on Official Channels:</span>

              <div>
                <a
                  href="https://www.facebook.com/"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Facebook"
                >
                  <Facebook />
                </a>

                <a
                  href="https://www.youtube.com/"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="YouTube"
                >
                  <Youtube />
                </a>

                <a
                  href="https://wa.me/916289062507"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="WhatsApp"
                >
                  <MessageCircle />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// function Footer() {
//   return (
//     <footer className="footer">
//       <Watermark />
//       <div className="wrap foot-grid">
//         <div>
//           <a className="brand" href="#home">
//             <img src={img("logo.png")} alt="" />
//             <span>
//               <b>Gyanjog Group</b>
//             </span>
//           </a>
//           <p>
//             Training in psychology, counselling, mind sciences and personal
//             development.
//           </p>
//           <div className="soc">
//             <a href="https://www.facebook.com/" aria-label="Facebook">
//               <Facebook />
//             </a>
//             <a href="https://www.youtube.com/" aria-label="YouTube">
//               <Youtube />
//             </a>
//           </div>
//         </div>
//         <div>
//           <h4>Explore</h4>
//           {nav.slice(0, 5).map(([l, id]) => (
//             <a key={id} href={`#${id}`}>
//               {l}
//             </a>
//           ))}
//         </div>
//         <div>
//           <h4>Contact</h4>
//           <a href={`tel:${PHONE}`}>{PHONE}</a>
//           <a href="mailto:info@gyanjog.org">info@gyanjog.org</a>
//           <a href="#contact">Bagnan, Howrah, West Bengal</a>
//         </div>
//       </div>
//       <div className="wrap foot-bottom">
//         <span>
//           © {new Date().getFullYear()} Gyanjog Group. All rights reserved.
//         </span>
//         <a href="#home">Back to top</a>
//       </div>
//     </footer>
//   );
// }

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-watermark">GYANJOG</div>

      <div className="wrap">
        <div className="footer-grid">
          {/* Column 1: Institute */}
          <div className="footer-brand">
            <a className="footer-logo" href="#home">
              <img src={img("logo.png")} alt="Gyanjog Group" />
            </a>

            <h4>Gyanjog Educational Institute</h4>

            <p>Bagnan, Library More, Howrah – 711303, WB</p>

            <p>
              Phone: <a href="tel:+916289062507">+91-6289062507</a>
            </p>

            <p>
              Email: <a href="mailto:info@gyanjog.org">info@gyanjog.org</a>
            </p>

            <div className="footer-social">
              <a
                href="https://www.facebook.com/"
                target="_blank"
                rel="noreferrer"
                aria-label="Facebook"
              >
                <Facebook />
              </a>

              <a
                href="https://www.youtube.com/"
                target="_blank"
                rel="noreferrer"
                aria-label="YouTube"
              >
                <Youtube />
              </a>

              <a
                href="https://wa.me/916289062507"
                target="_blank"
                rel="noreferrer"
                aria-label="WhatsApp"
              >
                <MessageCircle />
              </a>
            </div>
          </div>

          {/* Column 2: Courses */}
          <div className="footer-column">
            <h4>Featured Courses</h4>

            {courses.slice(0, 5).map((course) => (
              <a key={course.title} href="#courses">
                {course.title}
              </a>
            ))}

            <a href="#govt-courses">Govt. Certified Programs</a>
          </div>

          {/* Column 3: Navigation */}
          <div className="footer-column">
            <h4>Navigation</h4>

            {[
              ["About Gyanjog", "about"],
              ["22 District Branches", "branches"],
              ["Faculty & Leadership", "team"],
              ["Student Reviews", "reviews"],
              ["Campus Moments", "gallery"],
              ["Admissions & Contact", "contact"],
            ].map(([label, id]) => (
              <a key={id} href={`#${id}`}>
                {label}
              </a>
            ))}
          </div>

          {/* Column 4: Accreditation */}
          <div className="footer-column accreditation">
            <h4>Accreditation</h4>

            <p>
              Registered under Govt. of West Bengal & MSME India. Associated
              with 9+ secondary and higher-secondary educational institutions
              across Eastern India.
            </p>

            <strong>International Liaison: Dhaka, Bangladesh</strong>
          </div>
        </div>

        <div className="footer-bottom">
          <span>
            © {new Date().getFullYear()} Gyanjog Educational Institute. All
            rights reserved.
          </span>

          <a href="#home">Back to top ↑</a>
        </div>
      </div>
    </footer>
  );
}

export default function App() {
  useGlow();
  return (
    <>
      <IntroAnimation />
      <Progress />
      <Header />
      <main>
        <Hero />
        <Highlights />
        <Trust />
        <Stats />
        <About />
        <Courses />
        <Govt />
        <Videos />
        <Branches />
        <Team />
        <Reviews />
        <Gallery />
        <Contact />
      </main>
      <Footer />
      <a
        className="wa"
        href="https://wa.me/916289062507"
        target="_blank"
        rel="noreferrer"
        aria-label="Chat on WhatsApp"
      >
        <MessageCircle />
      </a>
    </>
  );
}
