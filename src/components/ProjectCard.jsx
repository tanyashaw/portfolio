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

          <div className="pcard__actions">
            {project.demo && (
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
            )}
            {project.pbixFile && (
              <a
                href={project.pbixFile}
                download
                className="pcard__download"
                aria-label={`Download PBIX file for ${project.title}`}
                tabIndex="-1"
              >
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ display: "inline-block", verticalAlign: "middle", marginRight: "3px" }}>
                  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                  <polyline points="7 10 12 15 17 10" />
                  <line x1="12" y1="15" x2="12" y2="3" />
                </svg>
                Download .PBIX
              </a>
            )}
          </div>
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
