import React from "react";
import { Link, useParams } from "react-router-dom";
import {
  ArrowLeft,
  ArrowUpRight,
  BookOpen,
  CheckCircle2,
  Clock,
  GraduationCap,
  IndianRupee,
} from "lucide-react";

import SEO from "../components/SEO";
import Contact from "../components/Contact";
import { governmentCourseDetails } from "../data/governmentCourseDetails";

function GovernmentCourseDetailsPage() {
  const { courseSlug } = useParams();

  const course = governmentCourseDetails.find(
    (item) => item.slug === courseSlug,
  );

  // Invalid course URL
  if (!course) {
    return (
      <main className="govt-details-page">
        <SEO
          title="Course Not Found | Gyanjog Group"
          description="The requested government course could not be found."
          path="/courses/government"
        />

        <div className="govt-details-container">
          <div className="govt-not-found">
            <GraduationCap size={48} />
            <h1>Course Not Found</h1>
            <p>Sorry, the course you are looking for is not available.</p>

            <Link to="/courses/government" className="govt-primary-btn">
              <ArrowLeft size={17} />
              Back to Government Courses
            </Link>
          </div>
        </div>

        <Contact />
      </main>
    );
  }

  const whatsappNumber = "916289062507";

  const whatsappMessage = encodeURIComponent(
    `Hello Gyanjog, I am interested in the ${course.title} course. Please share more information.`,
  );

  return (
    <main className="govt-course-details-page">
      <SEO
        title={`${course.title} | Gyanjog Group`}
        description={
          course.courseObjectives?.[0] ||
          `Explore the ${course.title} programme offered by Gyanjog.`
        }
        path={`/courses/government/${course.slug}`}
        image="/assets/classroom.jpg"
      />

      {/* Course Hero */}
      <section className="govt-details-hero">
        <div className="govt-details-container">
          <div className="govt-hero-top">
            <Link to="/courses/government" className="govt-back-link">
              <ArrowLeft size={18} />
              Back to Government Courses
            </Link>

            <span className="govt-details-eyebrow">
              Government Recognised Programme
            </span>
          </div>

          <h1>{course.title}</h1>

          <p className="govt-details-institute">{course.institute}</p>

          <p className="govt-details-intro">
            {course.courseObjectives?.[0] ||
              `Explore the ${course.title} programme and its curriculum.`}
          </p>

          <div className="govt-details-meta">
            <div>
              <Clock size={20} />
              <span>
                <small>Duration</small>
                <strong>{course.duration}</strong>
              </span>
            </div>

            {course.totalClasses && (
              <div>
                <BookOpen size={20} />
                <span>
                  <small>Classes</small>
                  <strong>{course.totalClasses}</strong>
                </span>
              </div>
            )}

            {course.courseMode && (
              <div>
                <GraduationCap size={20} />
                <span>
                  <small>Mode</small>
                  <strong>{course.courseMode}</strong>
                </span>
              </div>
            )}
          </div>

          <a
            href={`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`}
            target="_blank"
            rel="noreferrer"
            className="govt-primary-btn"
          >
            Enquire About This Course
            <ArrowUpRight size={18} />
          </a>
        </div>
      </section>

      <div className="govt-details-container">
        {/* Course Objectives */}
        {course.courseObjectives?.length > 0 && (
          <section className="govt-details-section">
            <div className="govt-section-heading">
              <span>01</span>
              <div>
                <h2>Course Objectives</h2>
                <p>What you will learn from this programme</p>
              </div>
            </div>

            <div className="govt-objectives-grid">
              {course.courseObjectives.map((objective, index) => (
                <article key={index} className="govt-objective-card">
                  <CheckCircle2 size={21} />
                  <p>{objective}</p>
                </article>
              ))}
            </div>
          </section>
        )}

        {/* Course Modules */}
        {course.modules?.length > 0 && (
          <section className="govt-details-section">
            <div className="govt-section-heading">
              <span>02</span>
              <div>
                <h2>Course Curriculum</h2>
                <p>Explore the modules and topics covered in this course</p>
              </div>
            </div>

            <div className="govt-modules-list">
              {course.modules.map((module, index) => (
                <details
                  className="govt-module-card"
                  key={index}
                  open={index === 0}
                >
                  <summary>
                    <div className="govt-module-number">
                      {String(index + 1).padStart(2, "0")}
                    </div>

                    <div className="govt-module-heading">
                      <h3>{module.title}</h3>
                      <small>{module.topics?.length || 0} Topics</small>
                    </div>

                    <span className="govt-module-toggle">+</span>
                  </summary>

                  {module.topics?.length > 0 && (
                    <ul className="govt-module-topics">
                      {module.topics.map((topic, topicIndex) => (
                        <li key={topicIndex}>
                          <CheckCircle2 size={16} />
                          {topic}
                        </li>
                      ))}
                    </ul>
                  )}
                </details>
              ))}
            </div>
          </section>
        )}

        {/* Training Methodology */}
        {course.trainingMethodology?.length > 0 && (
          <section className="govt-details-section">
            <div className="govt-section-heading">
              <span>03</span>
              <div>
                <h2>Training Methodology</h2>
                <p>How the programme is delivered</p>
              </div>
            </div>

            <div className="govt-methodology-grid">
              {course.trainingMethodology.map((item, index) => (
                <div key={index} className="govt-methodology-card">
                  <GraduationCap size={22} />
                  <p>{item}</p>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Key Benefits */}
        {course.keyBenefits?.length > 0 && (
          <section className="govt-details-section">
            <div className="govt-section-heading">
              <span>04</span>
              <div>
                <h2>Key Benefits</h2>
                <p>What this programme aims to help you develop</p>
              </div>
            </div>

            <div className="govt-benefits-grid">
              {course.keyBenefits.map((benefit, index) => (
                <div key={index} className="govt-benefit-card">
                  <CheckCircle2 size={20} />
                  <p>{benefit}</p>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Additional Course Information */}
        {(course.classSchedule || course.language) && (
          <section className="govt-details-section">
            <div className="govt-section-heading">
              <span>05</span>
              <div>
                <h2>Additional Information</h2>
                <p>Programme schedule and learning details</p>
              </div>
            </div>

            <div className="govt-additional-info">
              {course.classSchedule && (
                <div>
                  <strong>Class Schedule</strong>
                  <p>{course.classSchedule}</p>
                </div>
              )}

              {course.language && (
                <div>
                  <strong>Language</strong>
                  <p>{course.language}</p>
                </div>
              )}
            </div>
          </section>
        )}

        {/* Fee Structure */}
        {course.feeStructure && Object.keys(course.feeStructure).length > 0 && (
          <section className="govt-details-section">
            <div className="govt-section-heading">
              <span>06</span>
              <div>
                <h2>Course Fee Structure</h2>
                <p>Programme fee and available payment options</p>
              </div>
            </div>

            <div className="govt-fee-card">
              <div className="govt-fee-heading">
                <IndianRupee size={25} />
                <h3>Course Investment</h3>
              </div>

              <div className="govt-fee-list">
                {Object.entries(course.feeStructure).map(([key, value]) => (
                  <div key={key} className="govt-fee-row">
                    <span>
                      {key
                        .replace(/([A-Z])/g, " $1")
                        .replace(/^./, (str) => str.toUpperCase())}
                    </span>

                    <strong>{value}</strong>
                  </div>
                ))}
              </div>

              <a
                href={`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`}
                target="_blank"
                rel="noreferrer"
                className="govt-primary-btn govt-fee-btn"
              >
                Contact Us for Admission
                <ArrowUpRight size={18} />
              </a>
            </div>
          </section>
        )}

        {/* Bottom CTA */}
        <section className="govt-details-cta">
          <GraduationCap size={42} />

          <h2>Interested in This Course?</h2>

          <p>
            Contact our team to learn more about admission, course details and
            upcoming batches.
          </p>

          <a
            href={`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`}
            target="_blank"
            rel="noreferrer"
            className="govt-primary-btn"
          >
            Enquire on WhatsApp
            <ArrowUpRight size={18} />
          </a>
        </section>

        <div className="govt-bottom-back">
          <Link to="/courses/government">
            <ArrowLeft size={16} />
            Explore All Government Courses
          </Link>
        </div>
      </div>

      <Contact />
    </main>
  );
}

export default GovernmentCourseDetailsPage;
