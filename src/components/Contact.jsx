import ScrollReveal from "./ScrollReveal";
import "./Contact.css";

const EMAIL = "tanyashaw@virtualemployee.com";

export default function Contact() {
  return (
    <section id="contact" className="contact" aria-labelledby="contact-heading">
      {/* Gold glow behind */}
      <div className="contact__glow" aria-hidden="true" />

      <div className="container contact__inner">

        <ScrollReveal>
          <span className="eyebrow">Get in Touch</span>
        </ScrollReveal>

        <ScrollReveal delay={80}>
          <h2 id="contact-heading" className="section-heading contact__heading">
            Let's build something<br />
            <em className="gold-italic">together.</em>
          </h2>
        </ScrollReveal>

        <ScrollReveal delay={160}>
          <p className="body-text contact__sub">
            Have a project, opportunity, or idea? I'd like to hear about it.
          </p>
        </ScrollReveal>

        <ScrollReveal delay={240}>
          <div className="contact__ctas">
            <a
              href={`mailto:${EMAIL}`}
              className="btn-primary"
              id="contact-email-cta"
            >
              <span>Get in touch</span>
            </a>
            <a
              href={`mailto:${EMAIL}`}
              className="btn-ghost"
              id="contact-direct-email"
            >
              Email me directly
            </a>
          </div>
        </ScrollReveal>

        {/* Social links */}
        <ScrollReveal delay={320}>
          <div className="contact__socials">
            <a
              href="https://github.com/tanyashaw"
              target="_blank"
              rel="noopener noreferrer"
              className="contact__social"
              id="contact-github"
              aria-label="GitHub profile"
            >
              GitHub ↗
            </a>
            <a
              href="https://www.linkedin.com/in/tanya-shaw/"
              target="_blank"
              rel="noopener noreferrer"
              className="contact__social"
              id="contact-linkedin"
              aria-label="LinkedIn profile"
            >
              LinkedIn ↗
            </a>
          </div>
        </ScrollReveal>

      </div>
    </section>
  );
}
