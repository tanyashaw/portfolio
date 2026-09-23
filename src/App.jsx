import { lazy, Suspense } from "react";

// Always-immediate: visible on first paint
import Nav    from "./components/Nav";
import Hero   from "./components/Hero";

// Below the fold — lazy loaded
const StatsBar   = lazy(() => import("./components/StatsBar"));
const About      = lazy(() => import("./components/About"));
const Skills     = lazy(() => import("./components/Skills"));
const Projects   = lazy(() => import("./components/Projects"));

const Contact    = lazy(() => import("./components/Contact"));
const Journey    = lazy(() => import("./components/Journey"));
const Footer     = lazy(() => import("./components/Footer"));

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
      {/* Fixed navigation + scroll progress bar */}
      <Nav />

      {/* Main scrollable content */}
      <main id="main-content">

        {/* Hero — eager, first contentful paint */}
        <Hero />

        {/* Stats bar */}
        <Suspense fallback={null}>
          <StatsBar />
        </Suspense>

        {/* About */}
        <Suspense fallback={<SectionSkeleton />}>
          <About />
        </Suspense>

        {/* Skills */}
        <Suspense fallback={<SectionSkeleton />}>
          <Skills />
        </Suspense>

        {/* Projects horizontal slider */}
        <Suspense fallback={<SectionSkeleton />}>
          <Projects />
        </Suspense>

        {/* Journey timeline */}
        <Suspense fallback={<SectionSkeleton />}>
          <Journey />
        </Suspense>

        {/* Contact teaser band */}
        <Suspense fallback={null}>
          <Contact />
        </Suspense>

      </main>

      {/* Footer */}
      <Suspense fallback={null}>
        <Footer />
      </Suspense>
    </>
  );
}
