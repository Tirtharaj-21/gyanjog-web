import React from "react";
import Courses from "../components/Courses";
import Contact from "../components/Contact";
import SEO from "../components/SEO";

export default function ProfessionalCoursesPage() {
  return (
    <main className="courses-subpage">
      <SEO
        title="Professional Courses | Gyanjog Group"
        description="Explore professional psychology, counselling, NLP and personal development courses offered by Gyanjog."
        path="/courses/professional"
        image="/assets/classroom.jpg"
      />

      <Courses />
      <Contact />
    </main>
  );
}
