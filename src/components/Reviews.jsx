import { Reveal } from "./motion/Motion";
import Heading from "./Heading";

function Reviews() {
  const r = [
    [
      "Ramkrishna Sasmal",
      "Five-day residential programme",
      "The residential course gave me a new perspective on life. The learning and guidance helped me find clarity and direction.",
    ],
    [
      "Mousumi Banerjee",
      "Diploma in Child Counselling",
      "The case studies and practical tools changed how I support children's behavioural and emotional needs in my classroom.",
    ],
    [
      "Sukriti Mukherjee",
      "Mind Training and Therapy",
      "A life-changing programme. The guidance on emotional wellbeing and self-confidence was practical and valuable.",
    ],
    [
      "Debabrata Ghosh",
      "NLP Master Practitioner",
      "The modules improved my communication, my emotional resilience and how I handle pressure at work.",
    ],
  ];
  return (
    <section className="section reviews" id="reviews">
      <div className="wrap">
        <Heading
          title="What our learners say"
          desc="Reviews shared by students, practitioners and educators on Google Maps."
        />
        <div className="review-grid">
          {r.map(([n, c, t], i) => (
            <Reveal as="figure" key={n} delay={(i % 2) * 120}>
              <blockquote>{t}</blockquote>
              <figcaption>
                <b>{n}</b>
                <small>{c}</small>
              </figcaption>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Reviews;
