import { useEffect, useRef, useState } from "react";
import { useMousePosition } from "../hooks/useMousePosition";
import "./Hero.css";

// Floating decoration shapes
const SHAPES = [
  { type: "star",   size: 28, x: "12%",  y: "20%", delay: 0,    duration: 6 },
  { type: "circle", size: 22, x: "88%",  y: "15%", delay: 0.8,  duration: 7 },
  { type: "star",   size: 16, x: "75%",  y: "72%", delay: 1.5,  duration: 5 },
  { type: "star",   size: 22, x: "5%",   y: "65%", delay: 0.3,  duration: 8 },
  { type: "star",   size: 12, x: "92%",  y: "55%", delay: 2.2,  duration: 4.5 },
  { type: "circle", size: 18, x: "18%",  y: "78%", delay: 1.0,  duration: 6.5 },
  { type: "star",   size: 24, x: "55%",  y: "10%", delay: 0.5,  duration: 7.5 },
  { type: "circle", size: 14, x: "35%",  y: "85%", delay: 1.8,  duration: 5.5 },
  { type: "star",   size: 10, x: "62%",  y: "25%", delay: 2.8,  duration: 4 },
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
      {type === "star"   && <StarSVG   size={size} color={color} />}
      {type === "circle" && <CircleSVG size={size} color={color} />}
    </div>
  );
}

export default function Hero() {
  const mouse = useMousePosition();
  const [loaded, setLoaded] = useState(false);
  const contentRef = useRef(null);

  useEffect(() => {
    setTimeout(() => setLoaded(true), 120);
  }, []);

  // Parallax on heading based on mouse
  useEffect(() => {
    const el = contentRef.current;
    if (!el) return;
    const x = (mouse.x / window.innerWidth - 0.5) * 14;
    const y = (mouse.y / window.innerHeight - 0.5) * 8;
    el.style.transform = `translate3d(${x}px, ${y}px, 0)`;
  }, [mouse]);

  return (
    <section id="hero" className="hero" aria-label="Introduction">
      {/* Glowing background orbs */}
      <div className="hero__orb hero__orb--1" aria-hidden="true" />
      <div className="hero__orb hero__orb--2" aria-hidden="true" />

      {/* Floating decorative shapes */}
      <div className="hero__shapes" aria-hidden="true">
        {SHAPES.map((shape, i) => (
          <FloatingShape key={i} {...shape} />
        ))}
      </div>

      {/* Main content with subtle parallax */}
      <div
        ref={contentRef}
        className={`hero__content container ${loaded ? "hero__content--visible" : ""}`}
      >
        {/* Top row */}
        <div className="hero__meta">
          <span className="hero__meta-pill label">
            ✦ Software Developer ✦
          </span>
          <span className="hero__meta-pill label hero__meta-pill--2">
            ✦ AIML · Full-Stack ✦
          </span>
        </div>

        {/* Main heading */}
        <h1 className="hero__heading display-heading">
          <span className="hero__heading-line">Tanya</span>
          <span className="hero__heading-line hero__heading-accent">Shaw</span>
          <span className="hero__heading-sub">
            AIML Developer
          </span>
        </h1>

        {/* Tagline */}
        <p className="hero__tagline">
          Building complete applications —<br />
          from model to interface.
        </p>

        {/* CTAs */}
        <div className="hero__cta">
          <a href="#projects" className="btn-pill" id="hero-cta-work">
            ✦ View My Work
          </a>
          <a href="#contact" className="btn-bracket btn-bracket--accent hero__cta-secondary">
            Get in Touch
          </a>
        </div>
      </div>
    </section>
  );
}
