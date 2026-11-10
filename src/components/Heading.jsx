import { Reveal } from "./motion/Motion";

function Heading({ title, desc, light }) {
  return (
    <Reveal className={`heading${light ? " light" : ""}`}>
      <h2>{title}</h2>
      {desc && <p>{desc}</p>}
    </Reveal>
  );
}

export default Heading;
