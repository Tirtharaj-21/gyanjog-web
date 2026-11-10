import { useState } from "react";
import {
  ArrowUpRight,
  Phone,
  MapPin,
  Mail,
  Facebook,
  Youtube,
  MessageCircle,
  ShieldCheck,
  Check,
  Clock,
  ExternalLink,
} from "lucide-react";
import { courses, govtCourses } from "../data/siteData";

function Contact() {
  const [sent, setSent] = useState(false);

  const [f, setF] = useState({
    name: "",
    email: "",
    phone: "",
    course: "",
    message: "",
  });

  const up = (e) => setF({ ...f, [e.target.name]: e.target.value });

  const submit = (e) => {
    e.preventDefault();

    const body = encodeURIComponent(
      `Name: ${f.name}\nEmail: ${f.email}\nPhone: ${f.phone}\nCourse: ${f.course}\nMessage: ${f.message}`,
    );

    window.location.href = `mailto:info@gyanjog.org?subject=${encodeURIComponent(
      "Gyanjog Admission Enquiry",
    )}&body=${body}`;

    setSent(true);
  };

  return (
    <section className="section contact" id="contact">
      <div className="wrap gallery-heading">
        {/* Section Heading */}
        <div className="contact-heading">
          <h2>
            Begin Your <span>Transformation</span>
          </h2>
          <p>
            Connect with our academic counselors for syllabus details, admission
            criteria, or institutional collaborations.
          </p>
        </div>

        <div className="contact-grid">
          {/* LEFT: Admission Form */}
          <div className="contact-form-card">
            <span className="contact-kicker">FAST-TRACK ADMISSION DESK</span>

            <h3>Direct Academic Enquiry</h3>

            <p className="contact-description">
              Fill out this 1-minute form to receive the official syllabus,
              batch schedule, and fee details.
            </p>

            <div className="response-badge">
              <span></span>
              Avg. Response: &lt; 30 mins
            </div>

            <div className="contact-divider"></div>

            <form onSubmit={submit}>
              {sent && (
                <p className="ok">
                  <Check size={16} />
                  Your email app has opened. Press send there to finish your
                  enquiry.
                </p>
              )}

              <div className="row">
                <label>
                  Full Name <span className="required">*</span>
                  <input
                    required
                    name="name"
                    value={f.name}
                    onChange={up}
                    placeholder="e.g. Subrata Mondal"
                  />
                </label>

                <label>
                  Email Address <span className="required">*</span>
                  <input
                    required
                    type="email"
                    name="email"
                    value={f.email}
                    onChange={up}
                    placeholder="e.g. subrata@example.com"
                  />
                </label>
              </div>

              <div className="row">
                <label>
                  Mobile / WhatsApp Number
                  <span className="required">*</span>
                  <input
                    required
                    type="tel"
                    name="phone"
                    value={f.phone}
                    onChange={up}
                    placeholder="e.g. +91 98765 43210"
                  />
                </label>

                <label>
                  Course of Interest
                  <select name="course" value={f.course} onChange={up}>
                    <option value="">Choose a course</option>

                    {[...courses, ...govtCourses].map((c) => (
                      <option key={c.title} value={c.title}>
                        {c.title}
                      </option>
                    ))}
                  </select>
                </label>
              </div>

              <label>
                Your Message / Questions
                <span className="optional">(Optional)</span>
                <textarea
                  name="message"
                  rows="4"
                  value={f.message}
                  onChange={up}
                  placeholder="Tell us about your educational background, desired start date, or specific questions..."
                />
              </label>

              <button className="contact-submit" type="submit">
                Send Admission Enquiry
                <ArrowUpRight size={20} />
              </button>

              <small className="confidential">
                <ShieldCheck size={16} />
                100% Confidential • Official Academic Desk • No Promotional Spam
              </small>
            </form>
          </div>

          {/* RIGHT: Office Information */}
          <div className="contact-information">
            {/* India Headquarters */}
            <div className="office-card">
              <div className="office-top">
                <span className="office-badge india-badge">
                  IN &nbsp; HEADQUARTERS • INDIA
                </span>

                <span className="campus-label">Registered Campus</span>
              </div>

              <h3>Corporate & Registered Office</h3>

              <p className="office-description">
                Genius Mind Brain Development Academy • Gyanjog Group
              </p>

              <div className="office-detail">
                <span className="detail-icon blue-icon">
                  <MapPin size={21} />
                </span>

                <div>
                  <small>CAMPUS ADDRESS</small>
                  <p>
                    Bagnan, Library More, Howrah – 711303, West Bengal, India
                  </p>

                  <a
                    href="https://www.google.com/maps/search/?api=1&query=Bagnan+Library+More+Howrah+711303"
                    target="_blank"
                    rel="noreferrer"
                    className="map-link"
                  >
                    View on Google Maps <ExternalLink size={14} />
                  </a>
                </div>
              </div>

              <div className="office-contact-row">
                <a href="tel:+916289062507" className="office-contact-item">
                  <span className="detail-icon blue-icon">
                    <Phone size={19} />
                  </span>
                  <span>
                    <small>OFFICIAL PHONE</small>
                    <strong>+91-6289062507</strong>
                  </span>
                </a>

                <a
                  href="mailto:info@gyanjog.org"
                  className="office-contact-item"
                >
                  <span className="detail-icon yellow-icon">
                    <Mail size={19} />
                  </span>
                  <span>
                    <small>EMAIL ENQUIRIES</small>
                    <strong>info@gyanjog.org</strong>
                  </span>
                </a>
              </div>
            </div>

            {/* Bangladesh Chapter */}
            <div className="office-card">
              <div className="office-top">
                <span className="office-badge bd-badge">
                  BD &nbsp; INTERNATIONAL CHAPTER
                </span>

                <span className="campus-label">Dhaka Liaison</span>
              </div>

              <h3>International Chapter (Bangladesh)</h3>

              <p className="office-description">
                Dhaka Liaison Centre • Cross-border admissions and counseling
              </p>

              <div className="office-detail">
                <span className="detail-icon blue-icon">
                  <MapPin size={21} />
                </span>

                <div>
                  <small>LIAISON OFFICE</small>
                  <p>Dhaka Liaison Centre, Dhaka, Bangladesh</p>
                </div>
              </div>

              <div className="officer-divider"></div>

              <small className="officer-heading">
                AUTHORIZED CHAPTER OFFICERS:
              </small>

              <div className="officer-grid">
                <div className="officer">
                  <span>AK</span>
                  <div>
                    <strong>A K Azad Babu</strong>
                    <small>Chapter Head</small>
                  </div>
                </div>

                <div className="officer">
                  <span>SA</span>
                  <div>
                    <strong>Sumina Akhter Jahan</strong>
                    <small>Relationship Manager</small>
                  </div>
                </div>
              </div>
            </div>

            {/* Admission Hours */}
            <div className="admission-hours">
              <div className="hours-heading">
                <span className="hours-icon">
                  <Clock size={23} />
                </span>

                <div>
                  <small>● COUNSELING DESK ACTIVE</small>
                  <h3>Counseling & Admission Hours</h3>
                </div>
              </div>

              <div className="hours-content">
                <div>
                  <small>Monday – Saturday</small>
                  <strong>10:00 AM – 7:00 PM (IST)</strong>
                </div>

                <div>
                  <small>Sunday</small>
                  <strong className="appointment">
                    Prior Appointment Only
                  </strong>
                </div>
              </div>
            </div>

            {/* Social Channels */}
            <div className="official-social">
              <span>Connect on Official Channels:</span>

              <div>
                <a
                  href="https://www.facebook.com/"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Facebook"
                >
                  <Facebook />
                </a>

                <a
                  href="https://www.youtube.com/"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="YouTube"
                >
                  <Youtube />
                </a>

                <a
                  href="https://wa.me/916289062507"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="WhatsApp"
                >
                  <MessageCircle />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
