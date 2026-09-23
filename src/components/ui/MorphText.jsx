import { useEffect, useRef, useState } from "react";
import "./MorphText.css";

/**
 * MorphText — SVG-filter morphing text component
 *
 * Props:
 *   words    — string[]  — words to cycle through (default: CREATE / DESIGN / DEVELOP)
 *   interval — number    — ms between morphs (default: 2000)
 *   subtext  — string    — static line below the morphing word
 *   fontSize — string    — CSS font-size for the morphing word
 */
export default function MorphText({
  words    = ["CREATE", "DESIGN", "DEVELOP"],
  interval = 2000,
  subtext  = "The Art of Code",
  fontSize = "clamp(3rem, 12vw, 8rem)",
}) {
  const [index, setIndex] = useState(0);
  const [morph, setMorph] = useState(0); // 0 → 1 progress
  const startRef  = useRef(null);
  const rafRef    = useRef(null);
  const pauseRef  = useRef(false);

  const MORPH_DUR  = 900;   // ms for the actual morph transition
  const HOLD_DUR   = interval - MORPH_DUR;

  useEffect(() => {
    let elapsed = 0;
    let lastTs  = null;
    let holding = true; // start by holding first word

    const tick = (ts) => {
      if (!lastTs) lastTs = ts;
      const delta = ts - lastTs;
      lastTs = ts;
      elapsed += delta;

      if (holding) {
        // Hold the current word
        setMorph(0);
        if (elapsed >= HOLD_DUR) {
          holding  = false;
          elapsed  = 0;
        }
      } else {
        // Morph transition
        const t = Math.min(elapsed / MORPH_DUR, 1);
        setMorph(t);
        if (t >= 1) {
          // Next word
          setIndex((i) => (i + 1) % words.length);
          holding  = true;
          elapsed  = 0;
        }
      }
      rafRef.current = requestAnimationFrame(tick);
    };

    rafRef.current = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(rafRef.current);
  }, [words.length, HOLD_DUR, MORPH_DUR]);

  const nextIndex = (index + 1) % words.length;

  // Map morph progress (0→1) to blur values
  // Text A: fades OUT (morph 0→1: opacity 1→0, blur 0→12)
  // Text B: fades IN  (morph 0→1: opacity 0→1, blur 12→0)
  const blurA  = morph * 12;
  const blurB  = (1 - morph) * 12;
  const alphaA = 1 - morph;
  const alphaB = morph;

  return (
    <div className="morph-text" role="status" aria-live="polite" aria-label={words[index]}>
      {/* Hidden SVG filter */}
      <svg className="morph-text__svg" aria-hidden="true" focusable="false">
        <defs>
          <filter id="morph-filter">
            <feGaussianBlur in="SourceGraphic" stdDeviation="0" result="blur" />
            <feColorMatrix
              in="blur"
              type="matrix"
              values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 28 -10"
            />
          </filter>
        </defs>
      </svg>

      {/* Morphing word pair — wrapped together so the SVG filter merges them */}
      <div className="morph-text__words-wrap" aria-hidden="true">
        <span
          className="morph-text__word"
          style={{
            fontSize,
            opacity: alphaA,
            filter: `blur(${blurA}px)`,
          }}
        >
          {words[index]}
        </span>
        <span
          className="morph-text__word"
          style={{
            fontSize,
            opacity: alphaB,
            filter: `blur(${blurB}px)`,
          }}
        >
          {words[nextIndex]}
        </span>
      </div>

      {/* Subtext */}
      {subtext && (
        <p className="morph-text__subtext">{subtext}</p>
      )}
    </div>
  );
}
