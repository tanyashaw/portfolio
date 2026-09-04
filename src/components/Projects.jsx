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
            <span className="label">6-Month Internship Journey</span>
          </div>
        </ScrollReveal>

        {/* Section Header */}
        <div className="projects__header">
          <ScrollReveal delay={100}>
            <h2 className="section-heading">
              6 Months Internship.<br />
              <em>What I Built & Delivered.</em>
            </h2>
          </ScrollReveal>

          <ScrollReveal delay={200}>
            <p className="body-text projects__subtitle">
              A progressive timeline of my 6-month software development internship — featuring executive Power BI dashboards, production-ready REST APIs, and end-to-end AI lead qualification systems.
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
