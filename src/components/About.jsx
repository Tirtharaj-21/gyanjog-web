import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Reveal } from "./motion/Motion";
import { img } from "../data/constants";
import "../styles/gyanjog-card.css";
import ImageWithFallback from "./ImageWithFallback";

function About() {
  return (
    <section className="section" id="about">
      <div className="wrap about">
        <Reveal className="about-img rv-wipe">
          <ImageWithFallback
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
          <Link className="btn btn-pink" to="/chairman">
            Learn more
          </Link>
        </div>
      </div>
      <div className="wrap inst">
        <Reveal as="article" className="gj-card" delay={120} data-glow>
          <span className="gj-card-label">Our Institute</span>
          <h3>Gyanjog Institute of Psychology and Spiritual Development</h3>
          <p>
            Certifies NLP, mind training and consciousness courses that bring
            psychology and Indian spiritual methods together.
          </p>
          <ul className="gj-card-tags">
            <li>NLP practitioner</li>
            <li>Mind training</li>
            <li>Residential retreats</li>
          </ul>
          <div className="gj-card-actions">
            <Link className="btn btn-pink" to="/about-gyanjog">
              Learn more about Gyanjog <ArrowRight size={18} />
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

export default About;
