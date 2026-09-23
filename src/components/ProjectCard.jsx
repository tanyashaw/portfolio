import "./ProjectCard.css";

export default function ProjectCard({ project }) {
  const tags = project.tags?.slice(0, 4) || project.functionalities?.slice(0, 4) || [];

  return (
    <article
      className="pcard"
      aria-label={`Project: ${project.title}`}
      tabIndex="0"
    >
      {/* Thumbnail — always visible */}
      <div className="pcard__thumb">
        {project.image ? (
          <img
            src={project.image}
            alt={`${project.title} — project screenshot`}
            className="pcard__img"
            loading="lazy"
            width="280"
            height="175"
            draggable="false"
          />
        ) : (
          <div
            className="pcard__img-placeholder"
            style={{ background: project.color + "22" }}
          >
            <span style={{ color: project.color, fontFamily: "var(--font-serif)", fontSize: "1.5rem", opacity: 0.6 }}>
              {project.id}
            </span>
          </div>
        )}

        {/* Overlay with details — revealed on hover */}
        <div className="pcard__overlay" aria-hidden="true">
          <h3 className="pcard__title">{project.title}</h3>
          <p className="pcard__desc">{project.note}</p>

          {tags.length > 0 && (
            <div className="pcard__tags">
              {tags.map((tag) => (
                <span key={tag} className="pcard__tag">{tag}</span>
              ))}
            </div>
          )}

          <a
            href={project.demo}
            target="_blank"
            rel="noopener noreferrer"
            className="pcard__demo"
            aria-label={`View live demo of ${project.title}`}
            tabIndex="-1"
          >
            Live Demo ↗
          </a>
        </div>
      </div>

      {/* Title bar always visible below card */}
      <div className="pcard__bar">
        <span className="pcard__bar-title">{project.title}</span>
        <span className="pcard__bar-cat">{project.category.split(" · ")[0]}</span>
      </div>
    </article>
  );
}
