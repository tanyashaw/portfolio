import { useEffect, useRef, useState } from "react";
import "./StatsBar.css";

const STATS = [
  { value: 7,  suffix: "+", label: "Projects delivered" },
  { value: 2,  suffix: "+", label: "Power BI dashboards" },
  { value: 20, suffix: "+", label: "Technologies mastered" },
];

function easeOutCubic(t) {
  return 1 - Math.pow(1 - t, 3);
}

function Counter({ target, suffix, duration = 1200 }) {
  const [count, setCount]   = useState(0);
  const [started, setStart] = useState(false);
  const ref                  = useRef(null);
  const rafRef               = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) { setStart(true); obs.unobserve(el); }
      },
      { threshold: 0.5 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  useEffect(() => {
    if (!started) return;
    const startTime = performance.now();

    const animate = (now) => {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      setCount(Math.round(easeOutCubic(progress) * target));
      if (progress < 1) rafRef.current = requestAnimationFrame(animate);
    };

    rafRef.current = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(rafRef.current);
  }, [started, target, duration]);

  return (
    <span ref={ref} className="stats__number" aria-label={`${target}${suffix}`}>
      {count}{suffix}
    </span>
  );
}

export default function StatsBar() {
  return (
    <section className="stats-bar" aria-label="Key statistics">
      <div className="stats-bar__inner container">
        {STATS.map(({ value, suffix, label }) => (
          <div key={label} className="stats__item">
            <Counter target={value} suffix={suffix} />
            <span className="stats__label">{label}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
