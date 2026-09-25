import { useState, useCallback, useEffect, useRef } from "react";
import "./PerspectiveCarousel.css";

/**
 * PerspectiveCarousel
 *
 * Props:
 *   items              — { src, title, note, tags, demo, color }[]
 *   defaultActiveIndex — initial center card index
 *   slideWidth         — px width of each card
 *   loop               — boolean — wrap around at ends
 *   autoPlay           — boolean — auto-advance every autoPlayInterval ms
 *   autoPlayInterval   — number  — ms between auto-advances (default 3500)
 *   className          — extra class on root
 */
export default function PerspectiveCarousel({
  items = [],
  defaultActiveIndex = 0,
  slideWidth = 320,
  loop = false,
  autoPlay = true,
  autoPlayInterval = 3500,
  className = "",
}) {
  const count = items.length;
  const [active, setActive] = useState(
    Math.min(defaultActiveIndex, count - 1)
  );
  const hovered = useRef(false);
  const rafRef  = useRef(null);

  /* ── Looping navigation helpers ── */
  const prev = useCallback(() => {
    setActive((i) => (loop ? (i - 1 + count) % count : Math.max(i - 1, 0)));
  }, [loop, count]);

  const next = useCallback(() => {
    setActive((i) => (loop ? (i + 1) % count : Math.min(i + 1, count - 1)));
  }, [loop, count]);

  /* ── Keyboard ── */
  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "ArrowLeft")  prev();
      if (e.key === "ArrowRight") next();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [prev, next]);

  /* ── Auto-play ── */
  useEffect(() => {
    if (!autoPlay) return;
    const id = setInterval(() => {
      if (!hovered.current) next();
    }, autoPlayInterval);
    return () => clearInterval(id);
  }, [autoPlay, autoPlayInterval, next]);

  /* ── Offset computation — shortest path for loop ── */
  const getOffset = useCallback(
    (i) => {
      if (!loop) return i - active;
      let raw = i - active;
      // Wrap to [-count/2, count/2]
      if (raw > count / 2)  raw -= count;
      if (raw < -count / 2) raw += count;
      return raw;
    },
    [active, count, loop]
  );

  /* ── Per-card 3D transform ── */
  const getTransform = useCallback(
    (offset) => {
      const abs  = Math.abs(offset);
      const sign = Math.sign(offset);

      // Horizontal spread — spaced to show side cards clearly
      const xStep  = slideWidth * 0.72;
      const x = offset === 0 ? 0 : sign * (xStep + (abs - 1) * xStep * 0.68);

      const rotateY = sign * Math.min(abs * 24, 55); // deg
      const scale   = Math.max(0.5, 1 - abs * 0.14);
      const opacity = abs > 3 ? 0 : Math.max(0.18, 1 - abs * 0.24);
      const z       = 30 - abs * 6;

      return { x, rotateY, scale, opacity, z, hidden: abs > 4 };
    },
    [slideWidth]
  );

  return (
    <div
      className={`pc-carousel ${className}`}
      role="region"
      aria-label="Projects perspective carousel"
      aria-roledescription="carousel"
      onMouseEnter={() => { hovered.current = true; }}
      onMouseLeave={() => { hovered.current = false; }}
    >
      {/* 3D scene — full viewport width */}
      <div
        className="pc-carousel__scene"
        style={{ "--slide-w": `${slideWidth}px` }}
      >
        {items.map((item, i) => {
          const offset   = getOffset(i);
          const { x, rotateY, scale, opacity, z, hidden } = getTransform(offset);
          const isActive = offset === 0;

          return (
            <div
              key={i}
              className={`pc-carousel__slide${isActive ? " pc-carousel__slide--active" : ""}`}
              style={{
                "--x":       `${x}px`,
                "--ry":      `${rotateY}deg`,
                "--scale":   scale,
                "--opacity": opacity,
                "--z":       z,
                width:       `${slideWidth}px`,
                visibility:  hidden ? "hidden" : "visible",
                pointerEvents: hidden ? "none" : "auto",
              }}
              onClick={() => !isActive && setActive(i)}
              role="group"
              aria-roledescription="slide"
              aria-label={`${i + 1} of ${count}: ${item.title}`}
              aria-current={isActive ? "true" : undefined}
              tabIndex={isActive ? 0 : -1}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") setActive(i);
              }}
            >
              {/* Image */}
              <div className="pc-carousel__img-wrap">
                {item.src ? (
                  <img
                    src={item.src}
                    alt={`${item.title} — project screenshot`}
                    className="pc-carousel__img"
                    loading="lazy"
                    draggable="false"
                  />
                ) : (
                  <div
                    className="pc-carousel__img-fallback"
                    style={{ background: (item.color || "#c9a84c") + "22" }}
                  >
                    <span style={{
                      color: item.color || "var(--accent)",
                      fontFamily: "var(--font-serif)",
                      fontSize: "2.5rem",
                      opacity: 0.5,
                    }}>
                      {String(i + 1).padStart(2, "0")}
                    </span>
                  </div>
                )}

                {/* Detail overlay — visible only on active */}
                <div className="pc-carousel__overlay">
                  <div className="pc-carousel__overlay-body">
                    <h3 className="pc-carousel__title">{item.title}</h3>
                    {item.note && (
                      <p className="pc-carousel__note">{item.note}</p>
                    )}
                    {item.tags?.length > 0 && (
                      <div className="pc-carousel__tags">
                        {item.tags.slice(0, 4).map((t) => (
                          <span key={t} className="pc-carousel__tag">{t}</span>
                        ))}
                      </div>
                    )}
                    <div className="pc-carousel__actions">
                      {item.demo && (
                        <a
                          href={item.demo}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="pc-carousel__demo"
                          tabIndex={isActive ? 0 : -1}
                          aria-label={`Open live demo of ${item.title}`}
                          onClick={(e) => e.stopPropagation()}
                        >
                          Live Demo ↗
                        </a>
                      )}
                      {item.pbixFile && (
                        <a
                          href={item.pbixFile}
                          download
                          className="pc-carousel__download"
                          tabIndex={isActive ? 0 : -1}
                          aria-label={`Download Power BI file for ${item.title}`}
                          onClick={(e) => e.stopPropagation()}
                        >
                          <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ display: "inline-block", verticalAlign: "middle", marginRight: "4px" }}>
                            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                            <polyline points="7 10 12 15 17 10" />
                            <line x1="12" y1="15" x2="12" y2="3" />
                          </svg>
                          Download .PBIX
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </div>

              {/* Always-visible caption bar */}
              <div className="pc-carousel__caption">
                <span className="pc-carousel__caption-title">{item.title}</span>
              </div>
            </div>
          );
        })}
      </div>

      {/* Navigation */}
      <div className="pc-carousel__nav" aria-label="Carousel navigation">
        <button
          className="pc-carousel__btn"
          onClick={prev}
          disabled={!loop && active === 0}
          aria-label="Previous project"
          id="pc-prev"
        >
          ←
        </button>

        {/* Dot indicators */}
        <div className="pc-carousel__dots" role="tablist">
          {items.map((item, i) => (
            <button
              key={i}
              role="tab"
              aria-selected={i === active}
              aria-label={`Go to ${item.title}`}
              className={`pc-carousel__dot${i === active ? " pc-carousel__dot--active" : ""}`}
              onClick={() => setActive(i)}
            />
          ))}
        </div>

        <button
          className="pc-carousel__btn"
          onClick={next}
          disabled={!loop && active === count - 1}
          aria-label="Next project"
          id="pc-next"
        >
          →
        </button>
      </div>
    </div>
  );
}
