import ScrollReveal from "./ScrollReveal";
import ProjectCard from "./ProjectCard";
import { projects } from "../data/projects";
import "./Projects.css";

export default function Projects() {
  return (
    <section id="projects" className="section projects">
      <div className="container">
        {/* Section Label */}
        <ScrollReveal>
          <div className="section-label-row">
            <span className="label">Selected Work</span>
          </div>
        </ScrollReveal>

        {/* Section Header */}
        <div className="projects__header">
          <ScrollReveal delay={100}>
            <h2 className="section-heading">
              Things I built.<br />
              <em>Real projects. Live links.</em>
            </h2>
          </ScrollReveal>

          <ScrollReveal delay={200}>
            <p className="body-text projects__subtitle">
              A collection of live products built across full-stack development, AI/ML, healthcare, fintech, and transportation analytics.
            </p>
          </ScrollReveal>
        </div>

        {/* Project cards list */}
        <div className="projects__list">
          {projects.map((project, i) => (
            <ProjectCard key={project.id} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
