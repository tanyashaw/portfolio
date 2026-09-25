import ScrollReveal from "./ScrollReveal";
import PerspectiveCarousel from "./ui/PerspectiveCarousel";
import { projects } from "../data/projects";
import "./Projects.css";

// Map our project data to carousel item format
const carouselItems = projects.map((p) => ({
  src:      p.image,
  title:    p.title,
  note:     p.note,
  tags:     p.tags,
  demo:     p.demo,
  pbixFile: p.pbixFile,
  color:    p.color,
}));

export default function Projects() {
  return (
    <section id="projects" className="section projects" aria-labelledby="projects-heading">

      {/* Section header stays in container */}
      <div className="container">
        <ScrollReveal>
          <span className="eyebrow">Selected Work</span>
        </ScrollReveal>
        <ScrollReveal delay={80}>
          <h2 id="projects-heading" className="section-heading projects__heading">
            Things I built.<br />
            <em className="gold-italic">Real projects. Live links.</em>
          </h2>
        </ScrollReveal>
      </div>

      {/* Full-bleed carousel — escapes the container intentionally */}
      <PerspectiveCarousel
        items={carouselItems}
        defaultActiveIndex={3}
        slideWidth={340}
        loop
      />

    </section>
  );
}
