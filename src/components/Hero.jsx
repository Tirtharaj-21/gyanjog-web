import { Landmark } from "lucide-react";
import { SplitWords } from "./motion/Motion";
import { img } from "../data/constants";

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

export default Hero;
