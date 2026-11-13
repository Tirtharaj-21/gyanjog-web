import React from "react";
import { Link, useParams } from "react-router-dom";
import {
  ArrowLeft,
  ArrowUpRight,
  Clock,
  BookOpen,
  GraduationCap,
  CheckCircle2,
  Users,
  Award,
  BriefcaseBusiness,
  ClipboardList,
} from "lucide-react";

import Contact from "../components/Contact";
import SEO from "../components/SEO";
import { professionalCourseDetails } from "../data/professionalCourseDetails";

export default function ProfessionalCourseDetailsPage() {
  const { slug } = useParams();

  const course = professionalCourseDetails.find((item) => item.slug === slug);

  if (!course) {
    return (
      <main className="prof-details-page">
        <div className="prof-details-container">
          <h1>Course Not Found</h1>
          <Link to="/courses/professional">
            <ArrowLeft size={17} />
            Back to Professional Courses
          </Link>
        </div>
      </main>
    );
  }

  const sections = [
    {
      title: "Who Can Join This Course?",
      icon: Users,
      items: course.audience,
    },
    {
      title: "What You Will Learn",
      icon: GraduationCap,
      items: course.outcomes,
    },
    {
      title: "Career Opportunities",
      icon: BriefcaseBusiness,
      items: course.careers,
    },
  ];

  return (
    <main className="prof-details-page">
      <SEO
        title={`${course.title} | Gyanjog Group`}
        description={course.overview}
        path={`/courses/professional/${course.slug}`}
        image="/assets/classroom.jpg"
      />

      {/* COURSE HERO */}

      <section className="prof-hero">
        <div className="prof-details-container">
          <div className="prof-hero-top">
            <Link to="/courses/professional" className="prof-back-link">
              <ArrowLeft size={18} />
              Back to Professional Courses
            </Link>

            <span className="prof-eyebrow">Professional Programme</span>
          </div>

          <h1>{course.title}</h1>

          <p className="prof-institute">{course.institute}</p>

          <p className="prof-overview">{course.overview}</p>

          <div className="prof-meta-grid">
            <div className="prof-meta-card">
              <Clock />
              <div>
                <small>Duration</small>
                <strong>{course.duration}</strong>
              </div>
            </div>

            <div className="prof-meta-card">
              <BookOpen />
              <div>
                <small>Classes</small>
                <strong>{course.classes}</strong>
              </div>
            </div>

            <div className="prof-meta-card">
              <GraduationCap />
              <div>
                <small>Mode</small>
                <strong>{course.mode}</strong>
              </div>
            </div>
          </div>

          <a href="#contact" className="prof-primary-btn">
            Enquire About This Course
            <ArrowUpRight size={18} />
          </a>
        </div>
      </section>

      <div className="prof-details-container">
        {/* COURSE DURATION AND SCHEDULE */}

        {course.durationDetails?.length > 0 && (
          <section className="prof-section">
            <div className="prof-section-heading">
              <span>
                <Clock />
              </span>
              <div>
                <h2>Course Duration & Structure</h2>
                <p>Programme schedule and learning structure.</p>
              </div>
            </div>

            <div className="prof-info-grid">
              {course.durationDetails.map((item, index) => (
                <div className="prof-info-card" key={index}>
                  <CheckCircle2 />
                  <p>{item}</p>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* COURSE MODULES */}

        <section className="prof-section">
          <div className="prof-section-heading">
            <span>
              <ClipboardList />
            </span>
            <div>
              <h2>Course Modules</h2>
              <p>
                Explore the topics covered in this programme. (
                {course.modules.length} Modules)
              </p>
            </div>
          </div>

          <div className="prof-modules">
            {course.modules.map((module, index) => (
              <details className="prof-module" key={index}>
                <summary>
                  <span className="prof-module-number">
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <span className="prof-module-title">
                    {module.title}
                    {module.topics.length > 0 && (
                      <small>{module.topics.length} Topics</small>
                    )}
                  </span>

                  <span className="prof-module-icon">+</span>
                </summary>

                {module.topics.length > 0 && (
                  <ul className="prof-topic-list">
                    {module.topics.map((topic, topicIndex) => (
                      <li key={topicIndex}>
                        <CheckCircle2 size={17} />
                        {topic}
                      </li>
                    ))}
                  </ul>
                )}
              </details>
            ))}
          </div>
        </section>

        {/* ADDITIONAL TOPICS */}

        {course.additionalTopics?.length > 0 && (
          <section className="prof-section">
            <div className="prof-section-heading">
              <span>
                <BookOpen />
              </span>
              <div>
                <h2>Additional Learning Topics</h2>
                <p>Additional subjects included in the programme.</p>
              </div>
            </div>

            <div className="prof-info-grid">
              {course.additionalTopics.map((item, index) => (
                <div className="prof-info-card" key={index}>
                  <CheckCircle2 />
                  <p>{item}</p>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* AUDIENCE, OUTCOMES AND CAREER */}

        {sections.map(({ title, icon: Icon, items }) =>
          items?.length > 0 ? (
            <section className="prof-section" key={title}>
              <div className="prof-section-heading">
                <span>
                  <Icon />
                </span>
                <div>
                  <h2>{title}</h2>
                </div>
              </div>

              <div className="prof-info-grid">
                {items.map((item, index) => (
                  <div className="prof-info-card" key={index}>
                    <CheckCircle2 />
                    <p>{item}</p>
                  </div>
                ))}
              </div>
            </section>
          ) : null,
        )}

        {/* CERTIFICATION */}

        {course.certification && (
          <section className="prof-certification">
            <div className="prof-cert-icon">
              <Award size={30} />
            </div>

            <div>
              <h2>Certification</h2>
              <p>{course.certification}</p>
            </div>
          </section>
        )}

        {/* CALL TO ACTION */}

        <section className="prof-cta">
          <GraduationCap size={45} />

          <h2>Start Your Learning Journey With Gyanjog</h2>

          <p>
            Interested in this programme? Contact our team to learn more about
            admission, course schedules and programme information.
          </p>

          <a href="#contact" className="prof-primary-btn">
            Enquire Now
            <ArrowUpRight size={18} />
          </a>
        </section>

        <div className="prof-bottom-back">
          <Link to="/courses/professional">
            <ArrowLeft size={17} />
            Explore Other Professional Courses
          </Link>
        </div>
      </div>

      <Contact />
    </main>
  );
}
