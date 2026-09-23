import { useEffect, useRef, useState } from "react";
import "./Nav.css";

const NAV_LINKS = [
  { label: "About",    href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Journey",  href: "#journey" },
  { label: "Contact",  href: "#contact" },
];

export default function Nav() {
  const [scrolled, setScrolled]       = useState(false);
  const [progress, setProgress]       = useState(0);
  const [activeSection, setActive]    = useState("");
  const [menuOpen, setMenuOpen]       = useState(false);
  const overlayRef                     = useRef(null);
  const hamburgerRef                   = useRef(null);

  // Scroll: condensed nav + progress bar
  useEffect(() => {
    const onScroll = () => {
      const sy = window.scrollY;
      setScrolled(sy > 80);
      const docH = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(docH > 0 ? (sy / docH) * 100 : 0);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Active section detection
  useEffect(() => {
    const ids = ["hero", "about", "projects", "journey", "contact"];
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => { if (e.isIntersecting) setActive(e.target.id); });
      },
      { rootMargin: "-40% 0px -55% 0px" }
    );
    ids.forEach((id) => { const el = document.getElementById(id); if (el) obs.observe(el); });
    return () => obs.disconnect();
  }, []);

  // Close menu on Esc
  useEffect(() => {
    const onKey = (e) => { if (e.key === "Escape" && menuOpen) closeMenu(); };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [menuOpen]);

  // Lock body scroll when menu open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  const openMenu  = () => setMenuOpen(true);
  const closeMenu = () => {
    setMenuOpen(false);
    hamburgerRef.current?.focus();
  };

  return (
    <>
      {/* Scroll progress bar */}
      <div
        className="nav-progress"
        style={{ width: `${progress}%` }}
        aria-hidden="true"
      />

      <header className={`nav${scrolled ? " nav--scrolled" : ""}`} role="banner">
        <div className="nav__inner container">

          {/* Logo */}
          <a href="#hero" className="nav__logo" aria-label="Tanya Shaw — back to top">
            Tanya Shaw
          </a>

          {/* Desktop links */}
          <nav className="nav__links" aria-label="Main navigation">
            <ul role="list">
              {NAV_LINKS.map(({ label, href }) => (
                <li key={label}>
                  <a
                    href={href}
                    className={`nav__link${activeSection === href.slice(1) ? " nav__link--active" : ""}`}
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Hamburger */}
          <div className="nav__right">
            <button
              ref={hamburgerRef}
              className={`nav__hamburger${menuOpen ? " nav__hamburger--open" : ""}`}
              onClick={openMenu}
              aria-label="Open navigation menu"
              aria-expanded={menuOpen}
              aria-controls="mobile-overlay"
            >
              <span /><span /><span />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile overlay */}
      <div
        id="mobile-overlay"
        ref={overlayRef}
        className={`nav-overlay${menuOpen ? " nav-overlay--open" : ""}`}
        aria-hidden={!menuOpen}
        role="dialog"
        aria-label="Navigation menu"
      >
        {/* Backdrop */}
        <div className="nav-overlay__backdrop" onClick={closeMenu} aria-hidden="true" />

        <nav className="nav-overlay__content" aria-label="Mobile navigation">
          <button
            className="nav-overlay__close"
            onClick={closeMenu}
            aria-label="Close navigation menu"
          >
            ✕
          </button>
          <ul role="list" className="nav-overlay__list">
            {NAV_LINKS.map(({ label, href }, i) => (
              <li key={label} style={{ "--i": i }}>
                <a
                  href={href}
                  className="nav-overlay__link"
                  onClick={closeMenu}
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>

        </nav>
      </div>
    </>
  );
}
