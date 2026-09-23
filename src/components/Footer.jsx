import "./Footer.css";

const year = new Date().getFullYear();

export default function Footer() {
  return (
    <footer className="footer" role="contentinfo">
      <div className="container footer__inner">

        {/* Col 1 — Name + tagline */}
        <div className="footer__col footer__col--brand">
          <span className="footer__name">Tanya Shaw</span>
          <span className="footer__one-liner">
            Full-stack engineer &amp; AI/ML developer
          </span>
        </div>

        {/* Col 2 — Social links */}
        <div className="footer__col footer__col--links" aria-label="Social links">
          <a
            href="https://github.com/tanyashaw"
            target="_blank"
            rel="noopener noreferrer"
            className="footer__link"
            aria-label="GitHub"
          >
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/tanya-shaw/"
            target="_blank"
            rel="noopener noreferrer"
            className="footer__link"
            aria-label="LinkedIn"
          >
            LinkedIn
          </a>
          <a
            href="mailto:tanyashaw@virtualemployee.com"
            className="footer__link"
            aria-label="Email"
          >
            Email
          </a>
        </div>

        {/* Col 3 — Copyright */}
        <div className="footer__col footer__col--copy">
          <span className="footer__copy">
            © {year} Tanya Shaw
          </span>
          <span className="footer__built">
            Built with React · Designed with intention
          </span>
        </div>

      </div>
    </footer>
  );
}
