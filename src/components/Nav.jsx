import { useEffect, useState } from "react";
import { useScrollProgress } from "../hooks/useScrollProgress";
import "./Nav.css";

const navLinks = [
  { label: "Journey", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "About", href: "#about" },
];

export default function Nav() {
  const { scrollY } = useScrollProgress();
  const [activeSection, setActiveSection] = useState("");
  const scrolled = scrollY > 60;

  // Theme state — persist in localStorage
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem("portfolio-theme") || "dark";
  });

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("portfolio-theme", theme);
  }, [theme]);

  const toggleTheme = () => setTheme((t) => (t === "dark" ? "light" : "dark"));

  useEffect(() => {
    const sections = ["projects", "skills", "about", "contact", "hero"];
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveSection(entry.target.id);
        });
      },
      { rootMargin: "-40% 0px -55% 0px" }
    );
    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  return (
    <nav
      className={`nav ${scrolled ? "nav--scrolled" : ""}`}
      role="navigation"
      aria-label="Main navigation"
    >
      {/* Left — gradient logo mark */}
      <a href="#hero" className="nav__logo" aria-label="Back to top">
        <div className="nav__logo-ring">
          <span className="nav__logo-letter">T</span>
        </div>
      </a>

      {/* Center — floating pill menu */}
      <div className="nav__center">
        <ul className="nav__links" role="list">
          {navLinks.map(({ label, href }) => (
            <li key={label}>
              <a
                href={href}
                className={`nav__link ${activeSection === href.slice(1) ? "nav__link--active" : ""}`}
              >
                {label}
              </a>
            </li>
          ))}
        </ul>
      </div>

      {/* Right — theme toggle + CTA */}
      <div className="nav__right">
        <button
          className="theme-toggle"
          onClick={toggleTheme}
          aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} theme`}
          title={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
        >
          {theme === "dark" ? "☀️" : "🌙"}
        </button>
        <a href="#contact" className="nav__contact-btn">
          ✦ Get in Touch
        </a>
      </div>
    </nav>
  );
}
