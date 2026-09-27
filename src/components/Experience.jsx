const TIMELINE = [
  {
    role: 'Junior Software Developer',
    org: 'IT Valley — IT Services and IT Consulting',
    date: '2025',
    bullets: [
      'Assisted in developing and maintaining web applications.',
      'Collaborated with team members to implement new features and resolve bugs.',
      'Worked with Laravel, SQL, and Git in a collaborative development environment.',
    ],
    tags: ['Laravel', 'SQL', 'Git'],
  },
  {
    role: 'Bachelor of Information Technology Engineering',
    org: 'Damascus University',
    date: '2022 — Expected 2027',
    bullets: [
      'Coursework spanning software engineering, databases, and Java-based programming foundations.',
    ],
    tags: [],
  },
  {
    role: 'Professional Certifications',
    org: 'Meta & University of Michigan',
    date: 'Ongoing',
    bullets: [
      'Meta Back-End Developer Professional Certificate',
      'Meta Front-End Developer Professional Certificate',
      'Python for Everybody — University of Michigan',
    ],
    tags: [],
  },
]

export default function Experience() {
  return (
    <section id="experience" className="section exp-section">
      <div className="container">
        <div className="section-head-row">
          <div>
            <div className="section-tag">Track Record</div>
            <h2 className="section-heading">Experience &amp; Education</h2>
          </div>
          <p className="section-lede">
            Hands-on industry experience paired with a full-stack academic and self-taught
            foundation.
          </p>
        </div>
        <div className="timeline">
          {TIMELINE.map((item) => (
            <div className="timeline-item" key={item.role}>
              <span className="timeline-dot" />
              <div className="timeline-card">
                <div className="timeline-head">
                  <div>
                    <div className="timeline-role">{item.role}</div>
                    <div className="timeline-org">{item.org}</div>
                  </div>
                  <span className="timeline-date">{item.date}</span>
                </div>
                <ul className="timeline-body">
                  {item.bullets.map((b) => (
                    <li key={b}>{b}</li>
                  ))}
                </ul>
                {item.tags.length > 0 && (
                  <div className="timeline-tags">
                    {item.tags.map((t) => (
                      <span className="tag" key={t}>{t}</span>
                    ))}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
