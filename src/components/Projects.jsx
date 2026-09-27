import { useState } from 'react'
import { ArrowRightIcon, GitHubIcon } from './icons.jsx'

const TASKFLOW_REPO = 'https://github.com/Danny-Algazi11/TaskFlow'
const CLINIC_REACT_REPO = 'https://github.com/Danny-Algazi11/medical-center'
const CLINIC_LARAVEL_REPO = 'https://github.com/fakherahmad5-svg/MediZone'

function DemoVideo({ src, label }) {
  const [show, setShow] = useState(false)
  const [status, setStatus] = useState('loading')

  if (!show) {
    return (
      <button className="btn btn-ghost" onClick={() => { setShow(true); setStatus('loading') }}>
        <span>&#9654;</span>
        <span>{label}</span>
      </button>
    )
  }

  if (status === 'error') {
    return (
      <div className="video-error">
        <span>Couldn&rsquo;t load the demo video.</span>
        <a href={src} target="_blank" rel="noopener noreferrer">Open it directly</a>
      </div>
    )
  }

  return (
    <div className="video-wrap">
      {status === 'loading' && (
        <div className="video-loading">
          <span className="spinner" />
          <span>Loading demo&hellip;</span>
        </div>
      )}
      <video
        src={src}
        controls
        autoPlay
        preload="auto"
        onCanPlay={() => setStatus('ready')}
        onError={() => setStatus('error')}
        style={{ display: status === 'ready' ? 'block' : 'none' }}
      />
    </div>
  )
}

export default function Projects() {
  return (
    <section id="projects" className="section">
      <div className="container">
        <div className="section-head-row">
          <div>
            <div className="section-tag">Featured Work</div>
            <h2 className="section-heading">Projects</h2>
          </div>
          <p className="section-lede">
            Two full-stack builds &mdash; one shipped solo end-to-end, one built collaboratively
            across frontend and backend.
          </p>
        </div>

        {/* Project 1: TaskFlow */}
        <div className="project-card">
          <div className="project-grid">
            <div>
              <div className="project-eyebrow">
                <span className="project-badge">PROJECT 01 // PERSONAL</span>
                <span className="project-kind">Full-Stack Task &amp; Project Manager</span>
              </div>
              <h3 className="project-title">TaskFlow: workspaces, boards, and live collaboration</h3>
              <p className="project-desc">
                A full-stack task and project management platform with workspaces, boards, lists,
                cards, invitations, and role-based access. Drag-and-drop reordering, labels,
                assignees, checklists, comments, and due dates round out the board experience,
                with real-time updates synced live across users via Laravel Reverb and Echo.
              </p>
              <div className="project-badges">
                <div className="metric-badge">
                  <span>42 tests / 182 assertions</span>
                </div>
                <div className="metric-badge">
                  <span>Real-time sync via Reverb</span>
                </div>
                <div className="metric-badge">
                  <span>Clean Architecture backend</span>
                </div>
              </div>

              <div className="media-row">
                <a href="/screenshots/taskflow-1.png" target="_blank" rel="noopener noreferrer">
                  <img className="media-thumb" src="/screenshots/taskflow-1.png" alt="TaskFlow sign-in screen" loading="lazy" />
                </a>
                <a href="/screenshots/taskflow-2.png" target="_blank" rel="noopener noreferrer">
                  <img className="media-thumb" src="/screenshots/taskflow-2.png" alt="TaskFlow kanban board" loading="lazy" />
                </a>
                <a href="/screenshots/taskflow-3.png" target="_blank" rel="noopener noreferrer">
                  <img className="media-thumb" src="/screenshots/taskflow-3.png" alt="TaskFlow workspace members" loading="lazy" />
                </a>
              </div>

              <div className="project-actions">
                <a className="btn btn-primary" href={TASKFLOW_REPO} target="_blank" rel="noopener noreferrer">
                  <span>View on GitHub</span>
                  <ArrowRightIcon />
                </a>
                <DemoVideo src="/videos/taskflow-demo.mp4" label="Watch Demo" />
              </div>
            </div>
            <div className="project-panel">
              <div>
                <div className="panel-title">Backend Layers</div>
                <div className="panel-list">
                  <div className="panel-row"><span className="dot-sm" />Domain</div>
                  <div className="panel-row"><span className="dot-sm" />Application</div>
                  <div className="panel-row"><span className="dot-sm" />Infrastructure</div>
                  <div className="panel-row"><span className="dot-sm" />HTTP</div>
                </div>
              </div>
              <div className="panel-tags">
                <span className="tag">Laravel 13</span>
                <span className="tag">React 19</span>
                <span className="tag">MySQL</span>
                <span className="tag">Sanctum</span>
                <span className="tag">Reverb</span>
                <span className="tag">Vitest</span>
              </div>
            </div>
          </div>
        </div>

        {/* Project 2: Clinic Management Platform */}
        <div className="project-card">
          <div className="project-grid">
            <div>
              <div className="project-eyebrow">
                <span className="project-badge">PROJECT 02 // TEAM</span>
                <span className="project-kind">Clinic Management Platform</span>
              </div>
              <h3 className="project-title">Clinic Management Platform: designed &amp; built React frontend + Laravel backend</h3>
              <p className="project-desc">
                Designed and built the full UI for a team-built clinic management platform, then
                implemented it across both the React frontend and Laravel backend. Owned the page
                designs for doctor and receptionist workflows &mdash; profiles, scheduling,
                appointments, medical records, and encounters &mdash; plus registration, email
                verification, and admin-approval login flows.
              </p>
              <div className="project-badges">
                <div className="metric-badge">
                  <span>Designed all page UI</span>
                </div>
                <div className="metric-badge">
                  <span>Doctor &amp; receptionist workflows</span>
                </div>
                <div className="metric-badge">
                  <span>Admin-approval auth flow</span>
                </div>
              </div>

              <div className="project-actions">
                <a className="btn btn-primary" href={CLINIC_REACT_REPO} target="_blank" rel="noopener noreferrer">
                  <GitHubIcon />
                  <span>React Repository</span>
                </a>
                <a className="btn btn-ghost" href={CLINIC_LARAVEL_REPO} target="_blank" rel="noopener noreferrer">
                  <GitHubIcon />
                  <span>Laravel Repository</span>
                </a>
                <DemoVideo src="/videos/clinic-demo.mp4" label="Watch Demo" />
              </div>
            </div>
            <div className="project-panel">
              <div>
                <div className="panel-title">Contribution</div>
                <div className="panel-list">
                  <div className="panel-row"><span className="dot-sm" />UI/UX design (all pages)</div>
                  <div className="panel-row"><span className="dot-sm" />Sidebar &amp; top bar</div>
                  <div className="panel-row"><span className="dot-sm" />Signup &amp; auth screens</div>
                  <div className="panel-row"><span className="dot-sm" />Role-specific pages</div>
                </div>
              </div>
              <div className="panel-tags">
                <span className="tag">React</span>
                <span className="tag">Laravel</span>
                <span className="tag">REST APIs</span>
                <span className="tag">MySQL</span>
                <span className="tag">Git/GitHub</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
