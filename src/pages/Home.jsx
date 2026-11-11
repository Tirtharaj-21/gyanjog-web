import React from "react";
import { Stats, Highlights } from "../components/motion/Motion";
import Banner from "../components/Banner";
import Trust from "../components/Trust";
import About from "../components/About";
import Courses from "../components/Courses";
import Govt from "../components/Govt";
import Videos from "../components/Videos";
import Branches from "../components/Branches";
import Team from "../components/Team";
import Reviews from "../components/Reviews";
import Gallery from "../components/Gallery";
import Contact from "../components/Contact";
import Recognition from "../components/Recognition";
import SEO from "../components/SEO";

export default function Home() {
  return (
    <main>
      <SEO
        title="Gyanjog Group | Psychology, Counselling & Professional Training"
        description="Discover psychology, counselling, mind-science and professional training programmes at Gyanjog Group. Explore our courses, faculty and educational initiatives."
        path="/"
        image="/assets/classroom.jpg"
      />
      <Banner />
      <Highlights />
      <Trust />
      <Recognition />
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
  );
}
