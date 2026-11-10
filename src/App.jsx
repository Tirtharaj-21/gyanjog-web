import React from "react";
import { MessageCircle } from "lucide-react";
import {
  Stats,
  Highlights,
  Progress,
  useGlow,
} from "./components/motion/Motion";
import IntroAnimation from "./components/IntroAnimation";
import Banner from "./components/Banner";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Trust from "./components/Trust";
import About from "./components/About";
import Courses from "./components/Courses";
import Govt from "./components/Govt";
import Videos from "./components/Videos";
import Branches from "./components/Branches";
import Team from "./components/Team";
import Reviews from "./components/Reviews";
import Gallery from "./components/Gallery";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Recognition from "./components/Recognition";

export default function App() {
  useGlow();
  return (
    <>
      <IntroAnimation />
      <Progress />
      <Header />
      <main>
        {/* <Hero /> */}
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
