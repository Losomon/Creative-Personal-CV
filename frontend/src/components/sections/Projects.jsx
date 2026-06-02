import { useMemo, useState } from 'react'
import '../../styles/components/Projects.css'


const TABS = [
  { key: 'all', label: 'Featured', icon: 'ti ti-layout-grid' },
  { key: 'dashboard', label: 'Dashboard', icon: 'ti ti-chart-bar' },
  { key: 'database', label: 'Database', icon: 'ti ti-database' },
  { key: 'uiux', label: 'UI/UX Design', icon: 'ti ti-palette' },
  { key: 'tools', label: 'Tools & Others', icon: 'ti ti-tools' },
]

export default function Projects() {
  const [activeTab, setActiveTab] = useState('all')

  const projects = useMemo(
    () => ({
      all: [
        {
          name: 'Travels Admin\nDashboard',
          type: 'Featured',
          kind: 'featured',
          desc:
            'A comprehensive travel management dashboard built for airlines and travel agencies — real-time booking analytics, route management and revenue tracking in one elegant interface.',
        },
        {
          name: 'Game Guru',
          desc:
            'A game discovery platform with reviews, ratings and recommendations powered by the RAWG API.',
          cat: 'Web App',
          cls: 'pcard-img-1',
          tech: ['React', 'RAWG API', 'TypeScript'],
        },
        {
          name: 'Travels Catcher',
          desc:
            'Travel development software for seamless itinerary planning and destination discovery.',
          cat: 'Mobile',
          cls: 'pcard-img-2',
          tech: ['React Native', 'Firebase'],
        },
        {
          name: 'Lessons Learner',
          desc:
            'Online learning platform for learners who want to learn from experts.',
          cat: 'EdTech',
          cls: 'pcard-img-3',
          tech: ['Next.js', 'Prisma', 'Stripe'],
        },
      ],
      dashboard: [
        {
          name: 'Travels Admin\nDashboard',
          type: 'Dashboard',
          kind: 'featured',
          desc:
            'A comprehensive travel management dashboard built for airlines and travel agencies — real-time booking analytics, route management and revenue tracking in one elegant interface.',
        },
      ],
      database: [
        {
          name: 'Lessons Learner',
          desc:
            'Online learning platform for learners who want to learn from experts.',
          cat: 'EdTech',
          cls: 'pcard-img-3',
          tech: ['Next.js', 'Prisma', 'Stripe'],
        },
      ],
      uiux: [
        {
          name: 'Game Guru',
          desc:
            'A game discovery platform with reviews, ratings and recommendations powered by the RAWG API.',
          cat: 'Web App',
          cls: 'pcard-img-1',
          tech: ['React', 'RAWG API', 'TypeScript'],
        },
      ],
      tools: [
        {
          name: 'Travels Catcher',
          desc:
            'Travel development software for seamless itinerary planning and destination discovery.',
          cat: 'Mobile',
          cls: 'pcard-img-2',
          tech: ['React Native', 'Firebase'],
        },
      ],
    }),
    []
  )

  const content = projects[activeTab] ?? projects.all

  return (
    <section className="projects-section" id="projects">

      <div className="proj-header">
        <div>
          <div className="eyebrow">Portfolio</div>
          <h2 className="section-title">Projects that<br /><em>continue to evolve</em></h2>
        </div>
        <a href="#" className="view-all">View All Projects <i className="ti ti-arrow-right" /></a>
      </div>

      <div className="proj-tabs">
        {TABS.map((t) => (
          <button
            key={t.key}
            className={`ptab ${activeTab === t.key ? 'active' : ''}`}
            onClick={() => setActiveTab(t.key)}
            type="button"
          >
            <i className={t.icon} /> {t.label}
          </button>
        ))}
      </div>

      {activeTab === 'all' && (
        <div className="featured-card">
          <div className="feat-img">
            <div className="feat-screen">
              <div className="feat-screen-bar">
                <div className="feat-screen-dot" style={{ background: '#e74c3c' }} />
                <div className="feat-screen-dot" style={{ background: '#f39c12' }} />
                <div className="feat-screen-dot" style={{ background: '#2ecc71' }} />
              </div>
              <div className="feat-screen-content">
                <div className="feat-row wide" />
                <div className="feat-row med" />
                <div className="feat-chart">
                  {[30, 60, 45, 80, 55, 70, 40].map((h, i) => (
                    <div
                      key={i}
                      className="feat-bar"
                      style={{
                        height: `${h}%`,
                        background: i === 3 ? 'rgba(212,175,55,.55)' : 'rgba(212,175,55,.25)',
                      }}
                    />
                  ))}
                </div>
                <div className="feat-row short" />
              </div>
            </div>
          </div>
          <div className="feat-info">
            <div className="feat-badge">
              <i className="ti ti-star-filled" style={{ fontSize: 11 }} /> Featured Project
            </div>
            <h3 className="feat-title">Travels Admin<br />Dashboard</h3>
            <p className="feat-desc">
              A comprehensive travel management dashboard built for airlines and travel agencies — real-time
              booking analytics, route management and revenue tracking in one elegant interface.
            </p>
            <div className="feat-tags">
              <span className="tag">React</span>
              <span className="tag">Node.js</span>
              <span className="tag">MongoDB</span>
              <span className="tag">Tailwind CSS</span>
              <span className="tag">Chart.js</span>
            </div>
            <div className="feat-links">
              <a href="#" className="feat-link feat-link-primary">
                <i className="ti ti-external-link" /> Live Demo
              </a>
              <a href="#" className="feat-link feat-link-ghost">
                <i className="ti ti-brand-github" /> Source
              </a>
            </div>
          </div>
        </div>
      )}

      <div className="proj-cards-label">More Projects</div>
      <div className="proj-grid">
        {content
          .filter((p) => p.kind !== 'featured')
          .map((p, i) => (
            <div key={i} className="proj-card">
              <div className={`pcard-img ${p.cls}`}>
                <div className="pcard-overlay">
                  <a href="#" className="pcard-link" aria-label="External link">
                    <i className="ti ti-external-link" />
                  </a>
                  <a href="#" className="pcard-link" aria-label="GitHub">
                    <i className="ti ti-brand-github" />
                  </a>
                </div>
                <span className="pcat">{p.cat}</span>
              </div>
              <div className="pcard-body">
                <h3>{p.name}</h3>
                <p>{p.desc}</p>
                <div className="pcard-tags">
                  {p.tech?.map((t, j) => (
                    <span key={j} className="tag">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
      </div>

    </section>
  )
}
