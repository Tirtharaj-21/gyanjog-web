import { Play } from "lucide-react";
import { Reveal } from "./motion/Motion";
import { videos } from "../data/siteData";
import Heading from "./Heading";

function Videos() {
  return (
    <section className="section dark" id="videos">
      <div className="wrap">
        <Heading
          light
          title="Watch a class before you enrol"
          desc="Lectures, course reviews and seminar sessions from Chandan Chakraborty and the Gyanjog faculty."
        />
        <div className="video-grid">
          {videos.map(([id, tag, t, d], i) => (
            <Reveal
              as="a"
              key={id}
              delay={(i % 3) * 100}
              className="video"
              href={`https://www.youtube.com/watch?v=${id}`}
              target="_blank"
              rel="noreferrer"
            >
              <div className="thumb">
                <img
                  loading="lazy"
                  src={`https://img.youtube.com/vi/${id}/hqdefault.jpg`}
                  alt=""
                />
                <span>
                  <Play fill="currentColor" size={22} />
                </span>
              </div>
              <small>{tag}</small>
              <h3>{t}</h3>
              <p>{d}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Videos;
