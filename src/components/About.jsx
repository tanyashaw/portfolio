import ScrollReveal from "./ScrollReveal";
import "./About.css";

export default function About() {
  return (
    <section id="about" className="section about" aria-labelledby="about-heading">
      <div className="container">

        {/* Eyebrow */}
        <ScrollReveal>
          <span className="eyebrow">About</span>
        </ScrollReveal>

        {/* Heading + Body — two columns filling the full width */}
        <div className="about__layout">

          {/* Left — sticky heading */}
          <ScrollReveal delay={80}>
            <h2 id="about-heading" className="section-heading about__heading">
              The person<br />
              <em className="gold-italic">behind the projects.</em>
            </h2>
          </ScrollReveal>

          {/* Right — body text + currently */}
          <div className="about__right">
            <ScrollReveal delay={160}>
              <p className="body-text">
                I build web applications from the ground up — handling both the
                frontend interface users see and the backend logic that makes it
                work. My work sits at the intersection of software engineering
                and data: Python backends, REST APIs, relational databases, and
                machine learning models integrated into real, production
                products.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={240}>
              <p className="body-text">
                I care about the complete picture — not just whether something
                works, but whether it's clear, maintainable, and genuinely
                useful to the person using it. Every project I take on is built
                to solve a real problem, turning an idea into a working product.
              </p>
            </ScrollReveal>

            {/* Currently list */}
            <ScrollReveal delay={320}>
              <div className="about__currently">
                <span className="eyebrow" style={{ marginBottom: "var(--s3)" }}>Currently</span>
                <ul className="about__currently-list">
                  <li>Building AI-powered web tools and full-stack applications</li>
                  <li>Exploring LLM integration patterns in production apps</li>
                  <li>Open to freelance projects and full-time opportunities</li>
                </ul>
              </div>
            </ScrollReveal>
          </div>

        </div>
      </div>
    </section>
  );
}
