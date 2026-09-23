import ScrollReveal from "./ScrollReveal";
import "./Experience.css";

const EXPERIENCE = [
  {
    id: "exp-1",
    role: "Full-Stack Developer & AI Integrator",
    company: "Virtual Employee Pvt. Ltd.",
    period: "2024 — Present",
    summary:
      "Building production web applications across fintech, healthcare, real estate, and transportation verticals. Integrating AI/ML models, Python backends, and React frontends into end-to-end client products.",
  },
  {
    id: "exp-2",
    role: "AI/ML & Data Projects",
    company: "Freelance & Academic",
    period: "2022 — 2024",
    summary:
      "Developed machine learning pipelines using Scikit-learn and Pandas for classification and EDA tasks. Built Power BI dashboards, REST APIs with Django, and full-stack applications with React.",
  },
  {
    id: "exp-3",
    role: "B.Tech — AI & Machine Learning",
    company: "University Institute of Technology",
    period: "2021 — 2025",
    summary:
      "Studied core AI/ML theory alongside practical software engineering. Focused coursework on data structures, machine learning algorithms, database systems, and applied Python development.",
  },
];

export default function Experience() {
  return (
    <section id="experience" className="section experience" aria-labelledby="exp-heading">
      <div className="container">

        <ScrollReveal>
          <span className="eyebrow">Experience</span>
        </ScrollReveal>

        <ScrollReveal delay={80}>
          <h2 id="exp-heading" className="section-heading experience__heading">
            Where I've<br />
            <em className="gold-italic">been building.</em>
          </h2>
        </ScrollReveal>

        {/* Timeline */}
        <div className="exp__timeline" role="list">
          {EXPERIENCE.map(({ id, role, company, period, summary }, i) => (
            <ScrollReveal key={id} delay={i * 100} className="exp__entry-wrap">
              <div className="exp__entry" role="listitem">
                {/* Timeline dot */}
                <div className="exp__dot" aria-hidden="true" />

                {/* Content */}
                <div className="exp__content">
                  <div className="exp__meta">
                    <span className="exp__period meta-text">{period}</span>
                  </div>
                  <h3 className="exp__role card-heading">{role}</h3>
                  <span className="exp__company">{company}</span>
                  <p className="exp__summary body-text">{summary}</p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

      </div>
    </section>
  );
}
