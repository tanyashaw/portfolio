import { useEffect, useState } from "react";
import MorphText from "./ui/MorphText";
import "./LoadingScreen.css";

/**
 * LoadingScreen
 *
 * Shows a full-screen dark loading overlay with morphing text.
 * After `duration` ms it sets opacity to 0, then calls `onDone`
 * once the CSS fade-out transition finishes (~600ms).
 *
 * Props:
 *   onDone   — () => void — called when the overlay has fully faded out
 *   duration — number     — how long to show the loader before fading (ms)
 */
export default function LoadingScreen({ onDone, duration = 3600 }) {
  const [fading, setFading] = useState(false);

  useEffect(() => {
    // After `duration`, start the fade-out
    const t1 = setTimeout(() => setFading(true), duration);
    // After fade-out transition completes, unmount
    const t2 = setTimeout(() => onDone?.(), duration + 700);
    return () => { clearTimeout(t1); clearTimeout(t2); };
  }, [duration, onDone]);

  return (
    <div
      className={`loading-screen${fading ? " loading-screen--out" : ""}`}
      aria-label="Loading Tanya Shaw's portfolio"
      role="status"
    >
      {/* Subtle gold glow in the background */}
      <div className="loading-screen__glow" aria-hidden="true" />

      {/* Morphing words */}
      <MorphText
        words={["CREATE", "DESIGN", "DEVELOP"]}
        interval={1100}
        subtext="Tanya Shaw"
        fontSize="clamp(3.5rem, 12vw, 9rem)"
      />

      {/* Loading progress line */}
      <div className="loading-screen__bar" aria-hidden="true">
        <div
          className="loading-screen__bar-fill"
          style={{ animationDuration: `${duration}ms` }}
        />
      </div>
    </div>
  );
}
