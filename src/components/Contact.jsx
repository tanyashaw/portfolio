import ScrollReveal from "./ScrollReveal";
import "./Contact.css";

const EMAIL = "tanyashaw@virtualemployee.com";

export default function Contact() {

  return (
    <section id="contact" className="section contact">
      <div className="container">
        <ScrollReveal>
          <div className="section-label-row">
            <span className="label">Get in Touch</span>
          </div>
        </ScrollReveal>

        <div className="contact__layout">
          {/* Left — headline */}
          <div className="contact__left">
            <ScrollReveal delay={100}>
              <h2 className="section-heading contact__heading">
                Contact.
              </h2>
            </ScrollReveal>
            <ScrollReveal delay={200}>
              <p className="body-text contact__sub">
                Have a project, opportunity, or idea?<br />
                I'd like to hear about it.
              </p>
            </ScrollReveal>
          </div>

          {/* Right — contact details */}
          <div className="contact__right">
            {/* Email block */}
            <ScrollReveal delay={150}>
              <div className="contact__block">
                <span className="label">Email</span>
                <a href={`mailto:${EMAIL}`} className="contact__email">
                  {EMAIL}
                </a>
              </div>
            </ScrollReveal>

            {/* Divider */}
            <div className="divider" />

            {/* Social links — labels only, URLs hidden */}
            <ScrollReveal delay={250}>
              <div className="contact__socials">
                <span className="label" style={{ marginBottom: "var(--s4)", display: "block" }}>
                  Find me on
                </span>
                <div className="contact__social-links">
                  <a
                    href="https://github.com/tanyashaw"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="contact__social-link"
                    id="link-github"
                    aria-label="GitHub profile"
                  >
                    <span className="contact__social-label">GitHub</span>
                    <span className="contact__social-arrow" aria-hidden="true">↗</span>
                  </a>
                  <a
                    href="https://linkedin.com/in/tanyashaw"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="contact__social-link"
                    id="link-linkedin"
                    aria-label="LinkedIn profile"
                  >
                    <span className="contact__social-label">LinkedIn</span>
                    <span className="contact__social-arrow" aria-hidden="true">↗</span>
                  </a>
                </div>
              </div>
            </ScrollReveal>

          </div>
        </div>
      </div>
    </section>
  );
}
