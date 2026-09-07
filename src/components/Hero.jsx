import { useEffect, useRef, useState } from "react";
import { useMousePosition } from "../hooks/useMousePosition";
import "./Hero.css";

// Floating decoration shapes
const SHAPES = [
  { type: "star", size: 28, x: "12%", y: "20%", delay: 0, duration: 6 },
  { type: "circle", size: 22, x: "88%", y: "15%", delay: 0.8, duration: 7 },
  { type: "star", size: 16, x: "75%", y: "72%", delay: 1.5, duration: 5 },
  { type: "star", size: 22, x: "5%", y: "65%", delay: 0.3, duration: 8 },
  { type: "star", size: 12, x: "92%", y: "55%", delay: 2.2, duration: 4.5 },
  { type: "circle", size: 18, x: "18%", y: "78%", delay: 1.0, duration: 6.5 },
  { type: "star", size: 24, x: "55%", y: "10%", delay: 0.5, duration: 7.5 },
  { type: "circle", size: 14, x: "35%", y: "85%", delay: 1.8, duration: 5.5 },
  { type: "star", size: 10, x: "62%", y: "25%", delay: 2.8, duration: 4 },
];

// Titles cycling in the typewriter sub-label
const TITLES = [
  "AI · ML Developer",
  "Full-Stack Engineer",
  "Python Developer",
  "Data Enthusiast",
];

function StarSVG({ size, color = "currentColor" }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill={color}>
      <path d="M12 2l2.4 7.4H22l-6.2 4.5 2.4 7.4L12 17 5.8 21.3l2.4-7.4L2 9.4h7.6z" />
    </svg>
  );
}

function CircleSVG({ size, color = "currentColor" }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24">
      <circle cx="12" cy="12" r="9" fill="none" stroke={color} strokeWidth="2" />
      <circle cx="12" cy="12" r="4" fill={color} opacity="0.6" />
    </svg>
  );
}

function FloatingShape({ type, size, x, y, delay, duration }) {
  const colors = ["#38BDF8", "#818CF8", "#7DD3FC", "#34D399"];
  const color = colors[Math.floor(Math.random() * colors.length)];

  return (
    <div
      className="hero__deco-shape"
      style={{
        left: x,
        top: y,
        animationDelay: `${delay}s`,
        animationDuration: `${duration}s`,
      }}
      aria-hidden="true"
    >
      {type === "star" && <StarSVG size={size} color={color} />}
      {type === "circle" && <CircleSVG size={size} color={color} />}
    </div>
  );
}

function Typewriter({ titles }) {
  const [titleIdx, setTitleIdx] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [phase, setPhase] = useState("typing");
  const charIdx = useRef(0);

  useEffect(() => {
    const current = titles[titleIdx];
    let timer;

    if (phase === "typing") {
      if (charIdx.current < current.length) {
        timer = setTimeout(() => {
          setDisplayed(current.slice(0, charIdx.current + 1));
          charIdx.current++;
        }, 55);
      } else {
        timer = setTimeout(() => setPhase("waiting"), 1800);
      }
    } else if (phase === "waiting") {
      timer = setTimeout(() => setPhase("erasing"), 400);
    } else if (phase === "erasing") {
      if (charIdx.current > 0) {
        timer = setTimeout(() => {
          charIdx.current--;
          setDisplayed(current.slice(0, charIdx.current));
        }, 30);
      } else {
        const next = (titleIdx + 1) % titles.length;
        setTitleIdx(next);
        setPhase("typing");
      }
    }
    return () => clearTimeout(timer);
  }, [phase, displayed, titleIdx, titles]);

  return (
    <span className="hero__heading-sub" aria-label={titles[titleIdx]}>
      {displayed}
      <span className="hero__cursor" aria-hidden="true">|</span>
    </span>
  );
}

export default function Hero() {
  const mouse = useMousePosition();
  const [loaded, setLoaded] = useState(false);
  const contentRef = useRef(null);

  useEffect(() => {
    setTimeout(() => setLoaded(true), 120);
  }, []);

  // Subtle parallax on the text column only
  useEffect(() => {
    const el = contentRef.current;
    if (!el) return;
    const x = (mouse.x / window.innerWidth - 0.5) * 10;
    const y = (mouse.y / window.innerHeight - 0.5) * 6;
    el.style.transform = `translate3d(${x}px, ${y}px, 0)`;
  }, [mouse]);

  return (
    <section id="hero" className="hero" aria-label="Introduction">
      {/* Glowing background orbs */}
      <div className="hero__orb hero__orb--1" aria-hidden="true" />
      <div className="hero__orb hero__orb--2" aria-hidden="true" />
      <div className="hero__orb hero__orb--3" aria-hidden="true" />

      {/* Floating decorative shapes */}
      <div className="hero__shapes" aria-hidden="true">
        {SHAPES.map((shape, i) => (
          <FloatingShape key={i} {...shape} />
        ))}
      </div>

      {/* Two-column layout */}
      <div className={`hero__content container ${loaded ? "hero__content--visible" : ""}`}>

        {/* LEFT — text column */}
        <div className="hero__text" ref={contentRef}>
          {/* Pills */}
          <div className="hero__meta">
            <span className="hero__meta-pill label hero__meta-pill--2 hero__pill-1">
              ✦ Artificial Intelligence ✦
            </span>
            <span className="hero__meta-pill label hero__meta-pill--3 hero__pill-2">
              ✦ Machine Learning ✦
            </span>
          </div>

          {/* Heading */}
          <h1 className="hero__heading display-heading">
            <span className="hero__heading-line hero__name-gradient">Tanya</span>
            <span className="hero__heading-line hero__name-gradient hero__name-second">Shaw</span>
            <Typewriter titles={TITLES} />
          </h1>

          {/* Tagline */}
          <p className="hero__tagline">
            Building complete applications —<br />
            from model to interface.
          </p>

          {/* CTAs */}
          <div className="hero__cta">
            <a href="#projects" className="btn-pill hero__btn-primary" id="hero-cta-work">
              <span className="hero__btn-shimmer" aria-hidden="true" />
              ✦ View My Work
            </a>
            <a href="#contact" className="btn-bracket btn-bracket--accent hero__cta-secondary">
              Get in Touch ↗
            </a>
          </div>
        </div>

        {/* RIGHT — photo column */}
        <div className="hero__photo-col">
          <div className="hero__photo-frame">
            {/* Rotating gradient ring */}
            <div className="hero__photo-ring" aria-hidden="true" />
            {/* Glow blob behind photo */}
            <div className="hero__photo-glow" aria-hidden="true" />
            <img
              src="/tanya.jpg"
              alt="Tanya Shaw"
              className="hero__photo"
              loading="eager"
              draggable="false"
            />
          </div>
        </div>

      </div>

      {/* Scroll cue */}
      <div className={`hero__scroll-cue ${loaded ? "hero__scroll-cue--visible" : ""}`} aria-hidden="true">
        <div className="hero__scroll-line" />
        <span className="hero__scroll-text label">scroll</span>
      </div>
    </section>
  );
}
