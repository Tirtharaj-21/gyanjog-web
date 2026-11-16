import { Reveal } from "./motion/Motion";
import { Star, ExternalLink } from "lucide-react";
import Heading from "./Heading";

const GOOGLE_REVIEWS_URL =
  "https://www.google.com/maps/place/GYANJOG+INSTITUTE+OF+PSYCHOLOGY+%26+SPIRITUAL+DEVELOPMENT/@22.4685044,87.9674454,17z/data=!4m8!3m7!1s0x3a029b0a088d23d1:0xc7389ec850abe6a3!8m2!3d22.4685044!4d87.9674454!9m1!1b1!16s%2Fg%2F11m743kssx?entry=ttu&g_ep=EgoyMDI2MTExMC4wIKXMDSoASAFQAw%3D%3D";
function Reviews() {
  const reviews = [
    [
      "Salki Laha",
      "Psychology and Counselling",
      "An amazing session on psychology and counselling. Practical knowledge, excellent guidance, and meaningful learning. Highly recommended for anyone interested in mental health, self-growth, and helping others.",
    ],
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
          desc="Real experiences and feedback shared by our students and practitioners."
        />

        <Reveal className="google-review-summary">
          <div className="google-review-info">
            <div className="google-brand">
              <span className="google-g">G</span>
              <span className="google-brand-text">Google Reviews</span>
            </div>

            <div className="google-rating">
              <strong>5.0</strong>
              <div>
                <div className="google-stars">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star
                      key={star}
                      size={18}
                      fill="#FBBC04"
                      color="#FBBC04"
                      strokeWidth={1.5}
                    />
                  ))}
                </div>
                <small>Based on 87 Google reviews</small>
              </div>
            </div>
          </div>

          <a
            href={GOOGLE_REVIEWS_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="google-review-link"
          >
            Read all reviews
            <ExternalLink size={16} />
          </a>
        </Reveal>

        <div className="review-grid">
          {reviews.map(([name, course, review], i) => (
            <Reveal
              as="figure"
              key={name}
              delay={(i % 3) * 100}
              className="review-card"
            >
              <div className="review-stars">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star key={star} fill="currentColor" />
                ))}
              </div>

              <blockquote>{review}</blockquote>

              <figcaption>
                <b>{name}</b>
                <small>{course}</small>
                <span className="review-source">Google Review</span>
              </figcaption>
            </Reveal>
          ))}
        </div>

        <div className="review-footer">
          <a
            href={GOOGLE_REVIEWS_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="google-review-link"
          >
            See all Google reviews
            <ExternalLink size={16} />
          </a>
        </div>
      </div>
    </section>
  );
}

export default Reviews;
