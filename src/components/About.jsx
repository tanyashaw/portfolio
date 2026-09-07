import ScrollReveal from "./ScrollReveal";
import "./About.css";

const statements = [
  {
    label: "01",
    text: "I build web applications from the ground up — handling both the frontend interface users see and the backend logic that makes it work.",
  },
  {
    label: "02",
    text: "My work sits at the intersection of software engineering and data. I'm comfortable writing Python backends, building REST APIs, working with databases, and integrating machine learning models into real applications.",
  },
  {
    label: "03",
    text: "I care about the complete picture — not just whether something works, but whether it's clear, maintainable, and actually useful to the person using it.",
  },
  {
    label: "04",
    text: "Each project in this portfolio was built to solve a real problem. The goal is always to turn an idea into a working product.",
  },
];

const stats = [
  { value: "6", label: "Projects Built" },
  { value: "5+", label: "Technologies" },
  { value: "Full", label: "Stack Capable" },
  { value: "ML +", label: "Web Dev" },
];

export default function About() {
  return (
    <section id="about" className="section about">
      <div className="container">
        {/* Section label */}
        <ScrollReveal>
          <div className="section-label-row">
            <span className="label">About</span>
          </div>
        </ScrollReveal>

        <div className="about__layout">
          {/* Left — heading */}
          <div className="about__left">
          <ScrollReveal delay={100} direction="left">
            <h2 className="section-heading about__heading">
              The person<br />
              <em>behind the projects.</em>
            </h2>
          </ScrollReveal>

            {/* Stats */}
            <ScrollReveal delay={200}>
              <div className="about__stats">
                {stats.map(({ value, label }) => (
                  <div key={label} className="about__stat">
                    <span className="about__stat-value">{value}</span>
                    <span className="about__stat-label label">{label}</span>
                  </div>
                ))}
              </div>
            </ScrollReveal>
          </div>

          {/* Right — statements */}
          <div className="about__right">
            {statements.map(({ label, text }, i) => (
              <ScrollReveal key={label} delay={i * 80} direction={i % 2 === 0 ? "left" : "right"}>
                <div className="about__statement">
                  <span className="about__statement-num label label--accent">{label}</span>
                  <p className="body-text body-text--large">{text}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
