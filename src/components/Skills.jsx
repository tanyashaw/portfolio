import ScrollReveal from "./ScrollReveal";
import "./Skills.css";

const skillGroups = [
  {
    category: "Development",
    plain: "Core programming and web fundamentals",
    technologies: ["Python", "JavaScript", "HTML", "CSS"],
  },
  {
    category: "Frontend",
    plain: "Building the interfaces users interact with",
    technologies: ["React", "Responsive UI", "API Integration", "Vite", "Vercel"],
  },
  {
    category: "Backend",
    plain: "Server-side logic, APIs, and authentication",
    technologies: ["Django", "REST APIs", "JWT Auth", "OAuth concepts", "Python"],
  },
  {
    category: "Data & BI",
    plain: "Transforming raw data into insights",
    technologies: ["Pandas", "Power BI", "Data Analysis", "Data Visualization", "EDA"],
  },
  {
    category: "Databases",
    plain: "Structured data storage and querying",
    technologies: ["PostgreSQL", "SQL", "Relational Models", "Django ORM"],
  },
  {
    category: "Tools & Workflow",
    plain: "The environment around writing code",
    technologies: ["Git", "GitHub", "VS Code", "Virtual Environments", "Render", "Vercel"],
  },
  {
    category: "Machine Learning",
    plain: "Applying AI/ML concepts in real applications",
    technologies: ["Scikit-learn", "Model Training", "Feature Engineering", "Classification"],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="section skills">
      <div className="container">
        <ScrollReveal>
          <div className="section-label-row">
            <span className="label">Capabilities</span>
          </div>
        </ScrollReveal>

        <div className="skills__header">
          <ScrollReveal delay={100}>
            <h2 className="section-heading">
              What I work<br />
              <em>with.</em>
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={200}>
            <p className="body-text skills__intro">
              Skills grouped by area of capability — not presented as a grid of logos, but as a practical picture of what I can build and how.
            </p>
          </ScrollReveal>
        </div>

        {/* Skill table */}
        <div className="skills__table">
          {/* Table header */}
          <div className="skills__table-header">
            <span className="label">Category</span>
            <span className="label skills__table-plain-label">What it means</span>
            <span className="label">Technologies</span>
          </div>

          {skillGroups.map(({ category, plain, technologies }, i) => (
            <ScrollReveal key={category} delay={i * 60} direction={i % 2 === 0 ? "left" : "up"}>
              <div className="skills__row">
                <div className="skills__row-category">
                  <span className="skills__category-dot" aria-hidden="true" />
                  <span className="skills__category-text">{category}</span>
                </div>
                <div className="skills__row-plain">
                  <span className="body-text skills__plain-text">{plain}</span>
                </div>
                <div className="skills__row-tags tag-list">
                  {technologies.map((tech) => (
                    <span key={tech} className="tag">{tech}</span>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
