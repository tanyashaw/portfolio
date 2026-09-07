import { useEffect, useState } from "react";
import "./SectionDots.css";

const SECTIONS = [
  { id: "hero",     label: "Home"     },
  { id: "projects", label: "Projects" },
  { id: "skills",   label: "Skills"   },
  { id: "about",    label: "About"    },
  { id: "contact",  label: "Contact"  },
];

export default function SectionDots() {
  const [active, setActive] = useState("hero");
  const [hoveredLabel, setHoveredLabel] = useState(null);

  useEffect(() => {
    const observers = [];

    SECTIONS.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (!el) return;

      const obs = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActive(id);
        },
        { threshold: 0.55 }
      );
      obs.observe(el);
      observers.push(obs);
    });

    return () => observers.forEach((o) => o.disconnect());
  }, []);

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav className="section-dots" aria-label="Section navigation">
      {SECTIONS.map(({ id, label }) => (
        <button
          key={id}
          className={`section-dots__dot ${active === id ? "section-dots__dot--active" : ""}`}
          onClick={() => scrollTo(id)}
          onMouseEnter={() => setHoveredLabel(label)}
          onMouseLeave={() => setHoveredLabel(null)}
          aria-label={`Go to ${label}`}
          title={label}
        >
          <span className="section-dots__inner" />
          {hoveredLabel === label && (
            <span className="section-dots__tooltip" aria-hidden="true">
              {label}
            </span>
          )}
        </button>
      ))}
    </nav>
  );
}
