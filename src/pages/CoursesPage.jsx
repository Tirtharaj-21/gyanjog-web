import React from "react";
import { Link } from "react-router-dom";
import { GraduationCap, BookOpen, ArrowUpRight } from "lucide-react";
import SEO from "../components/SEO";
import Heading from "../components/Heading";

export default function CoursesPage() {
  return (
    <main>
      <SEO
        title="Our Courses | Gyanjog Group"
        description="Explore government courses and professional courses offered through Gyanjog."
        path="/courses"
        image="/assets/classroom.jpg"
      />

      <section className="section courses-page">
        <div className="wrap">
          <div className="wrap">
            <Heading
              title="Explore Our Courses"
              desc="Choose the right learning path to develop your knowledge, skills and professional career."
            />
          </div>

          <div className="course-category-grid">
            <Link
              to="/courses/government"
              className="course-category-card government-card"
            >
              <div className="category-icon">
                <GraduationCap size={36} />
              </div>

              <span className="category-label">Government Programmes</span>

              <h2>Government Courses</h2>

              <p>
                Explore government-recognised training programmes and
                professional qualifications.
              </p>

              <span className="category-link">
                Explore Government Courses
                <ArrowUpRight size={18} />
              </span>
            </Link>

            <Link
              to="/courses/professional"
              className="course-category-card professional-card"
            >
              <div className="category-icon">
                <BookOpen size={36} />
              </div>

              <span className="category-label">Gyanjog Programmes</span>

              <h2>Professional Courses</h2>

              <p>
                Discover Gyanjog's professional courses in psychology,
                counselling, NLP and personal development.
              </p>

              <span className="category-link">
                Explore Professional Courses
                <ArrowUpRight size={18} />
              </span>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
