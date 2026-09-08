import ScrollReveal from "./ScrollReveal";
import "./Skills.css";

const techLogos = [
  { name: "Python", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
  { name: "JavaScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
  { name: "React", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
  { name: "Django", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/django/django-plain.svg" },
  { name: "FastAPI", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/fastapi/fastapi-original.svg" },
  { name: "Node.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
  { name: "PostgreSQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" },
  { name: "MongoDB", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" },
  { name: "Docker", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" },
  { name: "Tailwind", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg" },
  { name: "HTML5", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
  { name: "CSS3", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" },
  { name: "Git", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
  { name: "Vercel", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vercel/vercel-original.svg" },
  { name: "HTML", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
  { name: "CSS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" },
  { name: "GitHub", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" },
  { name: "VS Code", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg" },
  { name: "Pandas", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pandas/pandas-original.svg" },
  { name: "Scikit-learn", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/scikitlearn/scikitlearn-original.svg" },
  { name: "Vite", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vitejs/vitejs-original.svg" },
];

const iconMap = Object.fromEntries(techLogos.map((t) => [t.name, t.icon]));

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
              Skills grouped by area of capability — powered by an active ecosystem of modern tools, frameworks, and core technologies.
            </p>
          </ScrollReveal>
        </div>

        {/* Sliding Technologies Marquee Banner */}
        <ScrollReveal delay={250}>
          <div className="skills__tech-marquee" aria-label="Technologies queue">
            <div className="skills__tech-track">
              {[...techLogos, ...techLogos, ...techLogos].map((tech, idx) => (
                <div key={`${tech.name}-${idx}`} className="skills__tech-badge">
                  <img src={tech.icon} alt="" className="skills__tech-icon" loading="lazy" />
                  <span>{tech.name}</span>
                </div>
              ))}
            </div>
          </div>
        </ScrollReveal>

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
