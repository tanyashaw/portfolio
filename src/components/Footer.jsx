import "./Footer.css";

const year = new Date().getFullYear();

export default function Footer() {
  return (
    <footer className="footer" role="contentinfo">
      {/* Subtle dot strip at top */}
      <div className="footer__dot-strip" aria-hidden="true">
        <svg className="footer__dots" viewBox="0 0 1200 60" preserveAspectRatio="xMidYMid slice">
          {Array.from({ length: 50 }).map((_, c) =>
            Array.from({ length: 4 }).map((_, r) => (
              <circle
                key={`${c}-${r}`}
                cx={c * 26 + 13}
                cy={r * 14 + 7}
                r="1.5"
                fill="rgba(56,189,248,0.2)"
              />
            ))
          )}
        </svg>
      </div>

      <div className="container footer__inner">
        {/* Left */}
        <div className="footer__left">
          <span className="footer__name">Tanya Shaw</span>
          <span className="label footer__year">© {year}</span>
        </div>

        {/* Center — tagline */}
        <p className="footer__tagline label">
          Built with React · Designed with intention
        </p>

        {/* Right — links */}
        <div className="footer__links">
          <a
            href="https://github.com/tanyashaw"
            target="_blank"
            rel="noopener noreferrer"
            className="footer__link"
            aria-label="GitHub"
          >
            github.com/tanyashaw
          </a>
          <a
            href="https://linkedin.com/in/tanyashaw"
            target="_blank"
            rel="noopener noreferrer"
            className="footer__link"
            aria-label="LinkedIn"
          >
            LinkedIn
          </a>
          <a href="mailto:tanyashaw@virtualemployee.com" className="footer__link" aria-label="Email">
            tanyashaw@virtualemployee.com
          </a>
        </div>
      </div>
    </footer>
  );
}
