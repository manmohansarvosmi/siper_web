import { createFileRoute } from "@tanstack/react-router";
import "../styles/home.css";

export const Route = createFileRoute("/")({
  component: HomePage,
});

function HomePage() {
  return (
    <div className="home">
      {/* ─── NAVBAR ─── */}
      <nav className="navbar">
        <div className="navbar-inner">
          <div className="navbar-brand">
            <img src="/siper-logo.svg" alt="SIPER Logo" className="nav-logo" />
            <div className="brand-text">
              <span className="brand-name">SIPER</span>
              <span className="brand-sub">Lahar</span>
            </div>
          </div>
          <ul className="nav-links">
            <li><a href="#about">About</a></li>
            <li><a href="#programs">Programs</a></li>
            <li><a href="#facilities">Facilities</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
          <a href="#portal" className="btn-portal">Student Portal</a>
        </div>
      </nav>

      {/* ─── HERO ─── */}
      <section className="hero" id="home">
        <div className="hero-overlay" />
        <img src="/campus-hero.jpg" alt="Campus" className="hero-bg" />
        <div className="hero-content">
          <div className="hero-badge">Est. Excellence in Education</div>
          <h1 className="hero-title">
            Shaping Tomorrow's<br />
            <span className="hero-accent">Healthcare Leaders</span>
          </h1>
          <p className="hero-desc">
            School of Integrated Pharmacy Education &amp; Research — Lahar.<br />
            Nurturing knowledge, compassion, and scientific excellence.
          </p>
          <div className="hero-actions">
            <a href="#programs" className="btn-primary">Explore Programs</a>
            <a href="#about" className="btn-outline">Learn More</a>
          </div>
          <div className="hero-stats">
            <div className="stat">
              <span className="stat-num">15+</span>
              <span className="stat-label">Years of Excellence</span>
            </div>
            <div className="stat-divider" />
            <div className="stat">
              <span className="stat-num">2000+</span>
              <span className="stat-label">Alumni</span>
            </div>
            <div className="stat-divider" />
            <div className="stat">
              <span className="stat-num">95%</span>
              <span className="stat-label">Placement Rate</span>
            </div>
          </div>
        </div>
      </section>

      {/* ─── ABOUT ─── */}
      <section className="about" id="about">
        <div className="container">
          <div className="section-label">Who We Are</div>
          <h2 className="section-title">Excellence in Pharmaceutical Education</h2>
          <div className="about-grid">
            <div className="about-text">
              <p>
                SIPER (School of Integrated Pharmacy Education &amp; Research) Lahar
                is a premier institution dedicated to producing highly qualified
                pharmacy professionals who serve society with integrity and expertise.
              </p>
              <p>
                With state-of-the-art laboratories, experienced faculty, and a
                curriculum aligned with the latest pharmaceutical advancements,
                we prepare our students to excel in all sectors of healthcare.
              </p>
              <div className="about-features">
                <div className="feat">
                  <span className="feat-icon">🏛️</span>
                  <span>AICTE Approved</span>
                </div>
                <div className="feat">
                  <span className="feat-icon">🔬</span>
                  <span>Research Driven</span>
                </div>
                <div className="feat">
                  <span className="feat-icon">🌐</span>
                  <span>Industry Connected</span>
                </div>
                <div className="feat">
                  <span className="feat-icon">🎓</span>
                  <span>PCI Recognized</span>
                </div>
              </div>
            </div>
            <div className="about-logo-wrap">
              <img src="/siper-logo.svg" alt="SIPER Seal" className="about-logo" />
            </div>
          </div>
        </div>
      </section>

      {/* ─── PROGRAMS ─── */}
      <section className="programs" id="programs">
        <div className="container">
          <div className="section-label">Academics</div>
          <h2 className="section-title">Our Programs</h2>
          <div className="programs-grid">
            {[
              {
                icon: "💊",
                title: "B.Pharm",
                duration: "4 Years",
                desc: "Bachelor of Pharmacy — a comprehensive undergraduate program in pharmaceutical sciences.",
              },
              {
                icon: "🧪",
                title: "M.Pharm",
                duration: "2 Years",
                desc: "Master of Pharmacy with specializations in Pharmaceutics, Pharmacology &amp; more.",
              },
              {
                icon: "📋",
                title: "D.Pharm",
                duration: "2 Years",
                desc: "Diploma in Pharmacy — a foundation course for pharmacy practice and retail.",
              },
              {
                icon: "🔭",
                title: "Pharm.D",
                duration: "6 Years",
                desc: "Doctor of Pharmacy — clinical pharmacy with patient-centered care training.",
              },
            ].map((p) => (
              <div key={p.title} className="program-card">
                <div className="program-icon">{p.icon}</div>
                <div className="program-badge">{p.duration}</div>
                <h3 className="program-title">{p.title}</h3>
                <p
                  className="program-desc"
                  dangerouslySetInnerHTML={{ __html: p.desc }}
                />
                <a href="#contact" className="program-link">
                  Know More →
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── FACILITIES ─── */}
      <section className="facilities" id="facilities">
        <div className="container">
          <div className="section-label">Infrastructure</div>
          <h2 className="section-title">World-Class Facilities</h2>
          <div className="fac-grid">
            <div className="fac-card fac-large">
              <img src="/lab.jpg" alt="Laboratory" className="fac-img" />
              <div className="fac-overlay">
                <h3>Advanced Laboratories</h3>
                <p>Fully equipped pharmaceutical, analytical &amp; microbiology labs</p>
              </div>
            </div>
            <div className="fac-card">
              <img src="/library.jpg" alt="Library" className="fac-img" />
              <div className="fac-overlay">
                <h3>Digital Library</h3>
                <p>Extensive collection of journals, textbooks &amp; e-resources</p>
              </div>
            </div>
            <div className="fac-card fac-feature">
              <div className="fac-icon-card">
                <div className="fac-icons-grid">
                  {[
                    { icon: "🏋️", label: "Sports" },
                    { icon: "🛏️", label: "Hostel" },
                    { icon: "🍽️", label: "Cafeteria" },
                    { icon: "🚌", label: "Transport" },
                    { icon: "💻", label: "Computer Lab" },
                    { icon: "🏥", label: "Medical Aid" },
                  ].map((f) => (
                    <div key={f.label} className="fac-mini">
                      <span>{f.icon}</span>
                      <span>{f.label}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── CONTACT ─── */}
      <section className="contact" id="contact">
        <div className="container">
          <div className="section-label">Get In Touch</div>
          <h2 className="section-title">Contact Us</h2>
          <div className="contact-grid">
            <div className="contact-info">
              <div className="contact-item">
                <span className="contact-icon">📍</span>
                <div>
                  <strong>Address</strong>
                  <p>SIPER Campus, Lahar, Bhind<br />Madhya Pradesh, India</p>
                </div>
              </div>
              <div className="contact-item">
                <span className="contact-icon">📞</span>
                <div>
                  <strong>Phone</strong>
                  <p>+91 XXXXX XXXXX</p>
                </div>
              </div>
              <div className="contact-item">
                <span className="contact-icon">✉️</span>
                <div>
                  <strong>Email</strong>
                  <p>info@siperlahar.ac.in</p>
                </div>
              </div>
              <div className="contact-item">
                <span className="contact-icon">🕐</span>
                <div>
                  <strong>Office Hours</strong>
                  <p>Mon – Sat: 9:00 AM – 5:00 PM</p>
                </div>
              </div>
            </div>
            <form className="contact-form">
              <h3>Send us a Message</h3>
              <input type="text" placeholder="Your Full Name" className="form-input" />
              <input type="email" placeholder="Email Address" className="form-input" />
              <input type="text" placeholder="Subject" className="form-input" />
              <textarea placeholder="Your Message" rows={4} className="form-textarea" />
              <button type="submit" className="btn-primary full-w">Send Message</button>
            </form>
          </div>
        </div>
      </section>

      {/* ─── FOOTER ─── */}
      <footer className="footer">
        <div className="container footer-inner">
          <div className="footer-brand">
            <img src="/siper-logo.svg" alt="SIPER" className="footer-logo" />
            <div>
              <div className="brand-name">SIPER Lahar</div>
              <div className="footer-tagline">School of Integrated Pharmacy Education &amp; Research</div>
            </div>
          </div>
          <div className="footer-copy">
            © {new Date().getFullYear()} SIPER Lahar. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}
