import ScrollReveal from "./ScrollReveal";
import "./Journey.css";

const JOURNEY = [
  {
    id: "j-feb",
    month: "February 2025",
    type: "learning",
    typeLabel: "Learning",
    title: "LLM Engineering",
    desc: "Deep-dived into large language model architectures — transformer internals, prompt engineering patterns, retrieval-augmented generation (RAG), vector databases, and LLM API integration. Built experiments integrating OpenAI and open-source models into Python backends.",
    tags: ["LLMs", "RAG", "Prompt Engineering", "OpenAI API", "Vector DBs"],
    link: null,
  },
  {
    id: "j-mar",
    month: "March 2025",
    type: "project",
    typeLabel: "Project",
    title: "Fleet360",
    desc: "Built a Transportation Analytics Command Center — real-time vehicle and route tracking, logistics performance metrics, and operational dashboards for fleet management teams.",
    tags: ["React", "Analytics", "Real-time", "Dashboard"],
    link: "https://fleet360-vtpl.vercel.app/",
  },
  {
    id: "j-apr",
    month: "April 2025",
    type: "project",
    typeLabel: "Project",
    title: "NestQuest India",
    desc: "Developed a full-stack real estate listing platform — property search, filters, and enquiry flows for apartments, villas, and houses across Bangalore, Mumbai, Chennai, and Hyderabad.",
    tags: ["Full-Stack", "Django", "React", "PostgreSQL"],
    link: "https://nest-quest-india.vercel.app",
  },
  {
    id: "j-may",
    month: "May 2025",
    type: "project",
    typeLabel: "Project",
    title: "AI Document Analyser",
    desc: "Shipped an AI-powered document intelligence tool — upload any file and receive LLM-generated summaries, key insight extraction, and structured data from unstructured documents.",
    tags: ["AI", "NLP", "FastAPI", "OpenAI"],
    link: "https://ai-document-analyser.vercel.app",
  },
  {
    id: "j-jun",
    month: "June 2025",
    type: "project",
    typeLabel: "Project",
    title: "MedTrace",
    desc: "Built an end-to-end pharmaceutical traceability platform with CDSCO-aligned serialization, multi-hop custody tracking, and public QR-based medicine authentication for supply chains.",
    tags: ["Healthcare", "Supply Chain", "Django", "PostgreSQL"],
    link: "https://med-mvp.vercel.app",
  },
  {
    id: "j-jul",
    month: "July 2025",
    type: "data",
    typeLabel: "Data & BI",
    title: "Power BI Dashboard — I",
    desc: "Designed interactive Power BI dashboards with DAX-powered KPIs, dynamic slicers, and drill-through capabilities for sales performance and operational reporting.",
    tags: ["Power BI", "DAX", "Data Viz", "Business Intelligence"],
    link: null,
  },
  {
    id: "j-aug",
    month: "August 2025",
    type: "data",
    typeLabel: "Data & BI",
    title: "Power BI Dashboard — II",
    desc: "Built a second Power BI reporting suite focused on executive-level analytics — trend analysis, forecasting visuals, and multi-source data model integration using Power Query.",
    tags: ["Power BI", "Power Query", "EDA", "Forecasting"],
    link: null,
  },
];

const TYPE_CLASS = {
  learning:  "journey__badge--learning",
  project:   "journey__badge--project",
  data:      "journey__badge--data",
  milestone: "journey__badge--milestone",
};

export default function Journey() {
  return (
    <section id="journey" className="section journey" aria-labelledby="journey-heading">
      <div className="container">

        <ScrollReveal>
          <span className="eyebrow">Journey</span>
        </ScrollReveal>

        {/* Header — two-column like About/Skills */}
        <div className="journey__header">
          <ScrollReveal delay={80}>
            <h2 id="journey-heading" className="section-heading">
              Six months of<br />
              <em className="gold-italic">building things.</em>
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={160}>
            <p className="body-text journey__intro">
              From learning LLM engineering fundamentals in February to shipping
              production-grade applications across multiple verticals — a
              chronological record of what I built and when.
            </p>
          </ScrollReveal>
        </div>

        {/* Timeline */}
        <div className="journey__timeline">

          {/* Vertical connecting line */}
          <div className="journey__line" aria-hidden="true" />

          {JOURNEY.map(({ id, month, type, typeLabel, title, desc, tags, link }, i) => (
            <div key={id} className="journey__row">

              {/* Left — dot column */}
              <div className="journey__dot-col">
                <div className={`journey__dot journey__dot--${type}`}>
                  <div className="journey__dot-ring" />
                </div>
              </div>

              {/* Right — card */}
              <ScrollReveal delay={i * 70} className="journey__card-wrap">
                <div className={`journey__card journey__card--${type}`}>

                  <div className="journey__card-top">
                    <span className="journey__month">{month}</span>
                    <span className={`journey__badge ${TYPE_CLASS[type]}`}>{typeLabel}</span>
                  </div>

                  <h3 className="journey__title">{title}</h3>
                  <p className="journey__desc body-text">{desc}</p>

                  <div className="journey__tags">
                    {tags.map((tag) => (
                      <span key={tag} className="journey__tag">{tag}</span>
                    ))}
                  </div>

                  {link && (
                    <a
                      href={link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="journey__link"
                    >
                      View project →
                    </a>
                  )}

                </div>
              </ScrollReveal>

            </div>
          ))}

        </div>
      </div>
    </section>
  );
}
