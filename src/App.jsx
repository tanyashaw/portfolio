import { lazy, Suspense } from "react";

// Always-immediate: visible on first paint
import Cursor from "./components/Cursor";
import Background3D from "./components/Background3D";
import Nav from "./components/Nav";
import Hero from "./components/Hero";

// Lazy-loaded: below the fold
const Projects = lazy(() => import("./components/Projects"));
const Skills = lazy(() => import("./components/Skills"));
const About = lazy(() => import("./components/About"));
const Contact = lazy(() => import("./components/Contact"));
const Footer = lazy(() => import("./components/Footer"));

/** Lightweight skeleton shown while a lazy section loads */
function SectionSkeleton() {
  return (
    <div className="section-skeleton" aria-hidden="true">
      <div className="section-skeleton__bar section-skeleton__bar--label" />
      <div className="section-skeleton__bar section-skeleton__bar--heading" />
      <div className="section-skeleton__bar section-skeleton__bar--text" />
      <div className="section-skeleton__bar section-skeleton__bar--text section-skeleton__bar--short" />
    </div>
  );
}

export default function App() {
  return (
    <>
      {/* Fixed 3D background — behind everything */}
      <Background3D />

      {/* Custom cursor — desktop only */}
      <Cursor />


      {/* Navigation */}
      <Nav />

      {/* Full-page scroll-snap container */}
      <main id="main-content" className="snap-container">

        {/* Hero is eager — first contentful paint */}
        <section className="snap-section" id="hero-snap">
          <Hero />
        </section>

        {/* Projects */}
        <section className="snap-section" id="projects-snap">
          <Suspense fallback={<SectionSkeleton />}>
            <Projects />
          </Suspense>
        </section>

        {/* Skills */}
        <section className="snap-section" id="skills-snap">
          <Suspense fallback={<SectionSkeleton />}>
            <Skills />
          </Suspense>
        </section>

        {/* About */}
        <section className="snap-section" id="about-snap">
          <Suspense fallback={<SectionSkeleton />}>
            <About />
          </Suspense>
        </section>

        {/* Contact + Footer stacked in last snap section */}
        <section className="snap-section" id="contact-snap">
          <Suspense fallback={<SectionSkeleton />}>
            <Contact />
          </Suspense>
          <Suspense fallback={null}>
            <Footer />
          </Suspense>
        </section>

      </main>
    </>
  );
}
