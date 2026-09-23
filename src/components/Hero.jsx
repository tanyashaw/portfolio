import { useEffect, useState } from "react";
import "./Hero.css";

export default function Hero() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setLoaded(true), 80);
    return () => clearTimeout(t);
  }, []);

  return (
    <section id="hero" className="hero" aria-label="Introduction">
      {/* Subtle radial gold glow — decorative */}
      <div className="hero__glow" aria-hidden="true" />

      <div className={`hero__content container${loaded ? " hero__content--in" : ""}`}>

        {/* LEFT — text column */}
        <div className="hero__text">


          {/* H1 */}
          <h1 className="hero__heading display-heading">
            <span className="hero__name-first">Tanya</span>
            <br />
            <em className="hero__name-last gold-italic">Shaw</em>
          </h1>

          {/* Sub-line */}
          <p className="hero__sub">
            Full-stack engineer &amp; AI/ML developer building complete
            applications — from model to interface.
          </p>

          {/* Short paragraph */}
          <p className="hero__tagline body-text">
            I turn complex problems into elegant, production-ready products
            across web, data, and AI.
          </p>

          {/* CTAs */}
          <div className="hero__ctas">
            <a href="#projects" className="btn-primary" id="hero-cta-work">
              <span>View my work</span>
            </a>
            <a href="#contact" className="btn-ghost" id="hero-cta-contact">
              Get in touch
            </a>
          </div>
        </div>

        {/* RIGHT — photo */}
        <div className="hero__photo-col" aria-hidden="true">
          <div className="hero__photo-frame">
            <div className="hero__photo-ring" />
            <img
              src="/tanya.jpg"
              alt="Tanya Shaw"
              className="hero__photo"
              loading="eager"
              draggable="false"
              width="400"
              height="400"
            />
          </div>
        </div>

      </div>

      {/* Scroll cue */}
      <div className="hero__scroll-cue" aria-hidden="true">
        <div className="hero__scroll-line" />
      </div>
    </section>
  );
}
