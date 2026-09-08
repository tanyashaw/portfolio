import ScrollReveal from "./ScrollReveal";
import "./ProjectCard.css";

export default function ProjectCard({ project, index }) {
  const isEven = index % 2 === 0;

  return (
    <article
      className={`pc ${isEven ? "" : "pc--reverse"}`}
      aria-label={`Project: ${project.title}`}
    >
      <div className="pc__inner">
        {/* Visual Picture Frame (Static & Clean) */}
        <ScrollReveal delay={100} className="pc__visual-wrap">
          <div className="pc__visual" style={{ "--accent-col": project.color }}>
            <div className="pc__visual-face">
              {project.image ? (
                <img
                  src={project.image}
                  alt={project.title}
                  className="pc__screenshot"
                  loading="lazy"
                />
              ) : (
                <>
                  <span className="pc__num-wm">{project.id}</span>
                  <div className="pc__rings">
                    <div className="pc__ring pc__ring--1" />
                    <div className="pc__ring pc__ring--2" />
                    <div className="pc__ring pc__ring--3" />
                  </div>
                  <div className="pc__core" />
                </>
              )}
            </div>
          </div>
        </ScrollReveal>

        {/* Content */}
        <div className="pc__content">
          <ScrollReveal delay={120}>
            <h3 className="pc__title">{project.title}</h3>
          </ScrollReveal>

          <ScrollReveal delay={200}>
            <p className="pc__note">{project.note}</p>
          </ScrollReveal>
          {/* Functionalities Micro-Grid */}
          {project.functionalities && project.functionalities.length > 0 && (
            <ScrollReveal delay={240}>
              <div className="pc__capabilities">
                <div className="pc__cap-grid">
                  {project.functionalities.map((func) => (
                    <div
                      key={func}
                      className="pc__cap-item"
                      style={{ "--accent-col": project.color }}
                    >
                      <span className="pc__cap-text">{func}</span>
                    </div>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          )}

          <ScrollReveal delay={280}>
            <div className="pc__footer">
              <a
                href={project.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="pc__live-btn"
                style={{ "--btn-color": project.color }}
              >
                Live Demo ↗
              </a>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </article>
  );
}
