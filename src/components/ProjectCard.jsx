import { useState, useRef, useCallback } from "react";
import ScrollReveal from "./ScrollReveal";
import "./ProjectCard.css";

// 3D tilt hook
function useTilt() {
  const ref = useRef(null);

  const handleMouseMove = useCallback((e) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    el.style.transform = `
      perspective(var(--perspective))
      rotateY(${x * 16}deg)
      rotateX(${-y * 12}deg)
      scale3d(1.02, 1.02, 1.02)
    `;
  }, []);

  const handleMouseLeave = useCallback(() => {
    const el = ref.current;
    if (!el) return;
    el.style.transform = "perspective(var(--perspective)) rotateY(0deg) rotateX(0deg) scale3d(1,1,1)";
  }, []);

  return { ref, handleMouseMove, handleMouseLeave };
}

export default function ProjectCard({ project, index }) {
  const [hovered, setHovered] = useState(false);
  const { ref, handleMouseMove, handleMouseLeave } = useTilt();
  const isEven = index % 2 === 0;

  return (
    <article
      className={`project-card ${isEven ? "" : "project-card--reverse"}`}
      aria-label={`Project: ${project.title}`}
    >
      <div className="project-card__inner">
        {/* 3D tilt visual block */}
        <ScrollReveal delay={100} className="project-card__visual-wrap">
          <div
            ref={ref}
            className={`project-card__visual ${hovered ? "project-card__visual--hovered" : ""}`}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            onMouseEnter={() => setHovered(true)}
            onMouseOut={() => setHovered(false)}
            style={{
              "--card-accent": project.color,
              transition: hovered ? "none" : "transform 600ms var(--ease-out)",
            }}
          >
            {/* Inner 3D card face */}
            <div className="project-card__visual-inner">
              {project.isPowerBI ? (
                /* Power BI Dashboard Mockup Visual */
                <div className="pbi-mock">
                  <div className="pbi-mock__header">
                    <span className="pbi-mock__logo">📊 Power BI Report</span>
                    <span className="pbi-mock__live-dot">● LIVE DATA</span>
                  </div>

                  {/* KPI Cards inside visual */}
                  {project.kpis && (
                    <div className="pbi-mock__kpis">
                      {project.kpis.map((kpi, kIdx) => (
                        <div key={kIdx} className="pbi-mock__kpi">
                          <span className="pbi-mock__kpi-label">{kpi.label}</span>
                          <span className="pbi-mock__kpi-val">{kpi.value}</span>
                          <span className="pbi-mock__kpi-change">{kpi.change}</span>
                        </div>
                      ))}
                    </div>
                  )}

                  {/* Simulated Power BI Charts */}
                  <div className="pbi-mock__chart">
                    <div className="pbi-mock__bar" style={{ height: "60%" }} />
                    <div className="pbi-mock__bar" style={{ height: "85%" }} />
                    <div className="pbi-mock__bar" style={{ height: "45%" }} />
                    <div className="pbi-mock__bar" style={{ height: "100%" }} />
                    <div className="pbi-mock__bar" style={{ height: "75%" }} />
                  </div>
                </div>
              ) : (
                /* Standard Abstract Geo Visual */
                <div className="project-card__geo">
                  <div className="project-card__geo-ring project-card__geo-ring--1" />
                  <div className="project-card__geo-ring project-card__geo-ring--2" />
                  <div className="project-card__geo-core" />
                  <div className="project-card__geo-stars">
                    {[...Array(5)].map((_, i) => (
                      <span key={i} className="project-card__geo-star" style={{ "--i": i }}>✦</span>
                    ))}
                  </div>
                </div>
              )}

              {/* Category & Phase badge */}
              <div className="project-card__badge">
                <span className="label label--accent">{project.category}</span>
              </div>

              {/* Hover overlay */}
              <div className={`project-card__hover-overlay ${hovered ? "visible" : ""}`}>
                <span className="project-card__hover-cta">View Details ↗</span>
              </div>
            </div>
          </div>
        </ScrollReveal>

        {/* Content column */}
        <div className="project-card__content">
          <ScrollReveal delay={150}>
            <div className="project-card__header">
              <div className="project-card__milestone-tag">
                <span className="project-card__phase-pill">{project.phaseLabel}</span>
              </div>
              <h3 className="project-card__title">{project.title}</h3>
              <p className="project-card__tagline">{project.tagline}</p>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={200}>
            <div className="project-card__stack">
              <div className="tag-list">
                {project.stack.map((t) => <span key={t} className="tag">{t}</span>)}
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={250}>
            <div className="project-card__links">
              {project.demo !== "#" ? (
                <a href={project.demo} target="_blank" rel="noopener noreferrer" className="btn-pill" style={{ fontSize: "0.75rem", padding: "0.5rem 1.25rem" }}>
                  Live Demo ↗
                </a>
              ) : (
                <span className="btn-bracket project-card__link--placeholder">
                  {project.isPowerBI ? "Power BI Interactive Report" : "Internship Project"}
                </span>
              )}
            </div>
          </ScrollReveal>
        </div>
      </div>
    </article>
  );
}
