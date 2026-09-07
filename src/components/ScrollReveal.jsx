// ScrollReveal — wraps children in a reveal-on-scroll animation
import { useRef, useEffect, useState } from "react";

export default function ScrollReveal({
  children,
  delay = 0,
  className = "",
  threshold = 0.12,
  direction = "up", // "up" | "left" | "right"
}) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.unobserve(el);
        }
      },
      { threshold }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold]);

  const dirClass =
    direction === "left"  ? "scroll-reveal--left"  :
    direction === "right" ? "scroll-reveal--right" :
    "";

  return (
    <div
      ref={ref}
      className={`scroll-reveal ${dirClass} ${visible ? "revealed" : ""} ${className}`}
      style={{ "--delay": `${delay}ms` }}
    >
      {children}
    </div>
  );
}
