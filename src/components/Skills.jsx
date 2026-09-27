const COMPETENCIES = [
  {
    icon: '{}',
    title: 'Frontend Engineering',
    desc: 'Building responsive, component-driven interfaces with modern React patterns and clean, semantic markup.',
    tags: ['React', 'JavaScript (ES6+)', 'HTML5', 'CSS3', 'Vite'],
  },
  {
    icon: 'API',
    title: 'Backend & APIs',
    desc: 'Designing REST APIs and layered backends with clear separation of concerns and testable boundaries.',
    tags: ['PHP (Laravel)', 'REST APIs', 'Clean Architecture', 'Java'],
  },
  {
    icon: 'DB',
    title: 'Data & Persistence',
    desc: 'Modeling relational schemas and query logic, with repositories and DTOs to keep data access predictable.',
    tags: ['MySQL', 'SQL', 'Repository Pattern', 'DTOs'],
  },
  {
    icon: 'GIT',
    title: 'Tooling & Practice',
    desc: 'Working through feature branches, automated tests, and collaborative review to ship reliable features.',
    tags: ['Git', 'GitHub', 'Vitest', 'RTL', 'Responsive Design'],
  },
]

export default function Skills() {
  return (
    <section id="skills" className="section skills-section">
      <div className="container">
        <div className="section-head-row">
          <div>
            <div className="section-tag">Technical Toolkit</div>
            <h2 className="section-heading">Core Technical Competencies</h2>
          </div>
          <p className="section-lede">
            A full-stack foundation built through coursework, certifications, and shipping two
            real full-stack projects end to end.
          </p>
        </div>
        <div className="skills-grid">
          {COMPETENCIES.map((c) => (
            <div className="skill-card" key={c.title}>
              <div>
                <div className="skill-icon">{c.icon}</div>
                <h3 className="skill-title" style={{ marginTop: '0.85rem' }}>{c.title}</h3>
                <p className="skill-desc" style={{ marginTop: '0.4rem' }}>{c.desc}</p>
              </div>
              <div className="skill-tags">
                {c.tags.map((t) => (
                  <span className="tag" key={t}>{t}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
