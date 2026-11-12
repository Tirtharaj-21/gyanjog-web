import { Link } from "react-router-dom";
import {
  FaFacebookF,
  FaInstagram,
  FaYoutube,
  FaWhatsapp,
} from "react-icons/fa";
import { courses } from "../data/siteData";
import { img } from "../data/constants";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-watermark">GYANJOG</div>

      <div className="wrap">
        <div className="footer-grid">
          {/* Column 1: Institute */}
          <div className="footer-brand">
            <a className="footer-logo" href="#home">
              <img src={img("logo.png")} alt="Gyanjog Group" />
            </a>

            <h4>Gyanjog Educational Institute</h4>

            <p>Bagnan, Library More, Howrah – 711303, WB</p>

            <p>
              Phone: <a href="tel:+916289062507">+91-6289062507</a>
            </p>

            <p>
              Email: <a href="mailto:info@gyanjog.org">info@gyanjog.org</a>
            </p>

            <div className="footer-social">
              <a
                href="https://www.facebook.com/share/1J8ggqGevx/?mibextid=wwXIfr"
                target="_blank"
                rel="noreferrer"
                aria-label="Facebook"
              >
                <FaFacebookF />
              </a>

              <a
                href="https://www.instagram.com/gyanjog?cplk=MXd0MTVnY2ZsanQ0YQ=="
                target="_blank"
                rel="noreferrer"
                aria-label="Instagram"
              >
                <FaInstagram />
              </a>

              <a
                href="https://youtube.com/@chandanchakraborty5?si=L7Qfv9ztu49FQ9mU"
                target="_blank"
                rel="noreferrer"
                aria-label="YouTube"
              >
                <FaYoutube />
              </a>

              <a
                href="https://wa.me/916289062507"
                target="_blank"
                rel="noreferrer"
                aria-label="WhatsApp"
              >
                <FaWhatsapp />
              </a>
            </div>
          </div>

          {/* Column 2: Courses */}
          <div className="footer-column">
            <h4>Featured Courses</h4>

            {courses.slice(0, 5).map((course) => (
              <a key={course.title} href="#courses">
                {course.title}
              </a>
            ))}

            <a href="#govt-courses">Govt. Certified Programs</a>
          </div>

          {/* Column 3: Navigation */}
          <div className="footer-column">
            <h4>Navigation</h4>

            {[
              ["About Gyanjog", "about"],
              ["22 District Branches", "branches"],
              ["Faculty & Leadership", "team"],
              ["Student Reviews", "reviews"],
              ["Campus Moments", "gallery"],
              ["Admissions & Contact", "contact"],
            ].map(([label, id]) => (
              <a key={id} href={`#${id}`}>
                {label}
              </a>
            ))}
          </div>

          {/* Column 4: Accreditation */}
          <div className="footer-column accreditation">
            <h4>Accreditation</h4>

            <p>
              Registered under Govt. of West Bengal & MSME India. Associated
              with 9+ secondary and higher-secondary educational institutions
              across Eastern India.
            </p>

            <strong>International Liaison: Dhaka, Bangladesh</strong>
          </div>
        </div>

        <div className="footer-bottom">
          <span>
            © {new Date().getFullYear()} Gyanjog Educational Institute. All
            rights reserved.
          </span>

          <a
            href="#home"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
          >
            Back to top ↑
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
