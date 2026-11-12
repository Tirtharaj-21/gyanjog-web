import React from "react";
import { Routes, Route } from "react-router-dom";
import { MessageCircle } from "lucide-react";
import { Progress, useGlow } from "./components/motion/Motion";
import IntroAnimation from "./components/IntroAnimation";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";
import Home from "./pages/Home";
import ChairmanPage from "./pages/ChairmanPage";
import GyanjogPage from "./pages/GyanjogPage";
import GovernmentCoursesPage from "./pages/GovernmentCoursesPage";
import ProfessionalCoursesPage from "./pages/ProfessionalCoursesPage";
import CoursesPage from "./pages/CoursesPage";

export default function App() {
  useGlow();
  return (
    <>
      <ScrollToTop />
      <IntroAnimation />
      <Progress />
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/chairman" element={<ChairmanPage />} />
        <Route path="/about-gyanjog" element={<GyanjogPage />} />
        <Route path="/courses" element={<CoursesPage />} />
        <Route path="/courses/government" element={<GovernmentCoursesPage />} />

        <Route
          path="/courses/professional"
          element={<ProfessionalCoursesPage />}
        />
      </Routes>
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
