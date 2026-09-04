import ScrollReveal from "./ScrollReveal";
import "./Dashboard.css";

// CSS-drawn static bar chart data
const chartData = [
  { label: "Data Cleaning", value: 82 },
  { label: "Visualization", value: 74 },
  { label: "Analysis", value: 68 },
  { label: "Dashboard Design", value: 61 },
  { label: "BI Reporting", value: 55 },
];

const kpis = [
  { value: "6+", label: "Datasets Cleaned", sub: "Python · Pandas" },
  { value: "3", label: "BI Tools Used", sub: "Power BI · Matplotlib · Seaborn" },
  { value: "KPI", label: "Dashboard Design", sub: "Visual reporting & storytelling" },
];

const tools = ["Power BI", "Python", "Pandas", "Matplotlib", "Seaborn", "SQL", "Excel"];

export default function Dashboard() {
  return (
    <section id="dashboard" className="section dashboard">
      <div className="container">
        <ScrollReveal>
          <div className="section-label-row">
            <span className="label">Data & Dashboards</span>
          </div>
        </ScrollReveal>

        <div className="dashboard__header">
          <ScrollReveal delay={100}>
            <h2 className="section-heading dashboard__heading">
              Turning raw data<br />
              <em>into understanding.</em>
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={200}>
            <p className="body-text dashboard__intro">
              Working with data means more than writing queries or running scripts — it means translating numbers into decisions that real people can act on.
            </p>
          </ScrollReveal>
        </div>

        <div className="dashboard__layout">
          {/* Left — KPIs + tool list */}
          <div className="dashboard__left">
            {/* KPI cards */}
            <ScrollReveal delay={100}>
              <div className="dashboard__kpis">
                {kpis.map(({ value, label, sub }) => (
                  <div key={label} className="dashboard__kpi">
                    <span className="dashboard__kpi-value">{value}</span>
                    <span className="dashboard__kpi-label">{label}</span>
                    <span className="dashboard__kpi-sub label">{sub}</span>
                  </div>
                ))}
              </div>
            </ScrollReveal>

            {/* Tools */}
            <ScrollReveal delay={200}>
              <div className="dashboard__tools">
                <span className="label" style={{ marginBottom: "var(--s4)", display: "block" }}>Tools</span>
                <div className="tag-list">
                  {tools.map((t) => (
                    <span key={t} className="tag">{t}</span>
                  ))}
                </div>
              </div>
            </ScrollReveal>

            {/* CTA */}
            <ScrollReveal delay={300}>
              <div className="dashboard__cta">
                <a href="#projects" className="btn-bracket btn-bracket--accent">
                  View Data Projects
                </a>
                <p className="dashboard__cta-note label">
                  Live Power BI dashboards will be linked here as they are completed.
                </p>
              </div>
            </ScrollReveal>
          </div>

          {/* Right — Static dashboard preview */}
          <ScrollReveal delay={150} className="dashboard__right">
            <div className="dashboard__preview">
              {/* Preview header */}
              <div className="dashboard__preview-header">
                <span className="label label--accent">Dashboard Preview</span>
                <span className="label">Static · Updated when live</span>
              </div>

              {/* Chart */}
              <div className="dashboard__chart">
                <span className="label" style={{ marginBottom: "var(--s4)", display: "block" }}>
                  Skill Depth by Area
                </span>
                <div className="dashboard__bars">
                  {chartData.map(({ label, value }, i) => (
                    <div key={label} className="dashboard__bar-row" style={{ "--bar-delay": `${i * 80 + 200}ms` }}>
                      <span className="dashboard__bar-label label">{label}</span>
                      <div className="dashboard__bar-track">
                        <div
                          className="dashboard__bar-fill"
                          style={{ "--bar-width": `${value}%` }}
                        />
                      </div>
                      <span className="dashboard__bar-val label">{value}%</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Mini metric row */}
              <div className="dashboard__metrics">
                <div className="dashboard__metric">
                  <span className="dashboard__metric-val">↑ 23%</span>
                  <span className="label">Data projects growth</span>
                </div>
                <div className="dashboard__metric">
                  <span className="dashboard__metric-val">100%</span>
                  <span className="label">Python data pipeline</span>
                </div>
                <div className="dashboard__metric">
                  <span className="dashboard__metric-val">BI</span>
                  <span className="label">Power BI certified viewer</span>
                </div>
              </div>

              {/* Disclaimer */}
              <p className="dashboard__disclaimer label">
                This is a static preview representation. Real dashboard data will be embedded here.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
