import React from "react";
import Govt from "../components/Govt";
import Contact from "../components/Contact";
import SEO from "../components/SEO";

export default function GovernmentCoursesPage() {
  return (
    <main className="courses-subpage">
      <SEO
        title="Government Courses | Gyanjog Group"
        description="Explore government-recognised and professional training programmes offered through Gyanjog."
        path="/courses/government"
        image="/assets/classroom.jpg"
      />

      <Govt />
      <Contact />
    </main>
  );
}
