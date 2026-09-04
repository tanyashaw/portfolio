import { useScrollProgress } from "./hooks/useScrollProgress";
import Cursor from "./components/Cursor";
import Background3D from "./components/Background3D";
import Nav from "./components/Nav";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function ScrollProgressBar({ progress }) {
  return (
    <div
      className="scroll-progress-bar"
      style={{ transform: `scaleX(${progress})` }}
      role="progressbar"
      aria-valuenow={Math.round(progress * 100)}
      aria-valuemin={0}
      aria-valuemax={100}
      aria-label="Page scroll progress"
    />
  );
}

export default function App() {
  const { progress } = useScrollProgress();

  return (
    <>
      {/* Fixed 3D background — behind everything */}
      <Background3D />

      {/* Custom cursor — desktop only */}
      <Cursor />

      {/* Scroll progress indicator */}
      <ScrollProgressBar progress={progress} />

      {/* Navigation */}
      <Nav />

      {/* Main content — single scrolling page */}
      <main id="main-content">
        <Hero />
        <Projects />
        <Skills />
        <About />
        <Contact />
      </main>

      <Footer />
    </>
  );
}
