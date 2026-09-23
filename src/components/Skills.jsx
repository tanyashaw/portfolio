import ScrollReveal from "./ScrollReveal";
import "./Skills.css";

const SKILL_GROUPS = [
  {
    id: "frontend",
    group: "Frontend",
    desc: "Building the interfaces users interact with",
    chips: [
      { label: "React",         icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
      { label: "HTML5",         icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
      { label: "CSS3",          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" },
      { label: "Tailwind",      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg" },
      { label: "Vite",          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vitejs/vitejs-original.svg" },
      { label: "JavaScript",    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
    ],
  },
  {
    id: "backend-data",
    group: "Backend & Data",
    desc: "Server-side logic, APIs, databases, and data analysis",
    chips: [
      { label: "Django",        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/django/django-plain.svg" },
      { label: "FastAPI",       icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/fastapi/fastapi-original.svg" },
      { label: "PostgreSQL",    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" },
      { label: "Pandas",        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pandas/pandas-original.svg" },
      { label: "Power BI",      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/azuredevops/azuredevops-original.svg" },
    ],
  },
  {
    id: "tools",
    group: "Tools & ML",
    desc: "The ecosystem around building and shipping code",
    chips: [
      { label: "Git",           icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
      { label: "GitHub",        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" },
      { label: "VS Code",       icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg" },
      { label: "Docker",        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" },
      { label: "Node.js",       icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
      { label: "Scikit-learn",  icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/scikitlearn/scikitlearn-original.svg" },
    ],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="section skills" aria-labelledby="skills-heading">
      <div className="container">

        <ScrollReveal>
          <span className="eyebrow">Capabilities</span>
        </ScrollReveal>

        <ScrollReveal delay={80}>
          <h2 id="skills-heading" className="section-heading skills__heading">
            What I work<br />
            <em className="gold-italic">with.</em>
          </h2>
        </ScrollReveal>

        <ScrollReveal delay={160}>
          <p className="body-text skills__intro">
            Skills grouped by area of capability — an active ecosystem of modern
            tools, frameworks, and core technologies.
          </p>
        </ScrollReveal>

        {/* Chip groups */}
        <div className="skills__groups">
          {SKILL_GROUPS.map(({ id, group, desc, chips }, i) => (
            <ScrollReveal key={id} delay={i * 80}>
              <div className="skills__group">
                <div className="skills__group-header">
                  <h3 className="skills__group-name">{group}</h3>
                  <p className="skills__group-desc meta-text">{desc}</p>
                </div>
                <div className="skills__chips" role="list" aria-label={`${group} skills`}>
                  {chips.map(({ label, icon }) => (
                    <span key={label} className="chip chip--icon" role="listitem" title={label}>
                      <img
                        src={icon}
                        alt={label}
                        className="chip__icon"
                        width="22"
                        height="22"
                        loading="lazy"
                      />
                      <span className="chip__label">{label}</span>
                    </span>
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
