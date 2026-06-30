import '../../styles/components/Projects.css'
import { FEATURED_PROJECT, MORE_PROJECTS } from '../../constants/projects.js'
export default function Projects() {
  const TABS = [
    { key: 'featured', label: 'Featured', paths: '<rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/><rect x="14" y="14" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/>' },
    { key: 'dashboard', label: 'Dashboard', paths: '<rect x="2" y="3" width="20" height="14" rx="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/>' },
    { key: 'database', label: 'Database', paths: '<ellipse cx="12" cy="5" rx="9" ry="3"/><path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"/><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"/>' },
    { key: 'uiux', label: 'UI/UX Design', paths: '<circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="3"/>' },
    { key: 'tools', label: 'Tools & Others', paths: '<path d="M14.7 6.3a1 1 0 000 1.4l1.6 1.6a1 1 0 001.4 0l3.77-3.77a6 6 0 01-7.94 7.94l-6.91 6.91a2.12 2.12 0 01-3-3l6.91-6.91a6 6 0 017.94-7.94l-3.76 3.76z"/>' }
  ];

  return (
    <section id="projects" className="reveal">
      <div className="sec-header">
        <div>
          <div className="sec-ew">Portfolio</div>
          <h2 className="sec-ttl" style={{ marginTop: 10 }}>
            Projects that<br /><em>continue to evolve</em>
          </h2>
        </div>
        <a href="#" className="btn-outline">
          View All
          <svg viewBox="0 0 24 24">
            <line x1="5" y1="12" x2="19" y2="12" />
            <polyline points="12 5 19 12 12 19" />
          </svg>
        </a>
      </div>

      <div className="ptabs">
        {TABS.map((tab, index) => (
          <button key={tab.key} className={`ptab${index === 0 ? ' on' : ''}`}>
            <svg viewBox="0 0 24 24" width="13" height="13" stroke="currentColor" strokeWidth="2" fill="none">
              <g dangerouslySetInnerHTML={{ __html: tab.paths }} />
            </svg>
            {tab.label}
          </button>
        ))}
      </div>

      <div className="feat reveal">
        <div className="feat-vis">
          <img src={FEATURED_PROJECT.image} alt={FEATURED_PROJECT.title} style={{ width: '100%', height: '100%', objectFit: 'cover', opacity: 0.85 }} />
          <div className="mock">
            <div className="mock-bar">
              <div className="mdot" style={{ background: '#e74c3c' }} />
              <div className="mdot" style={{ background: '#f39c12' }} />
              <div className="mdot" style={{ background: '#2ecc71' }} />
            </div>
            <div className="mock-body">
              <div className="mrow w7" />
              <div className="mrow w4" />
              <div className="mchart">
                <div className="mbar" style={{ height: '30%' }} />
                <div className="mbar" style={{ height: '55%' }} />
                <div className="mbar" style={{ height: '42%' }} />
                <div className="mbar hi" style={{ height: '88%' }} />
                <div className="mbar" style={{ height: '60%' }} />
                <div className="mbar" style={{ height: '72%' }} />
                <div className="mbar" style={{ height: '45%' }} />
                <div className="mbar hi" style={{ height: '92%' }} />
              </div>
              <div className="mrow w3" />
            </div>
          </div>
        </div>
        <div className="feat-info">
          <div className="feat-pill">
            <svg viewBox="0 0 24 24">
              <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
            </svg>
          </div>
          <h3 className="feat-ttl">{FEATURED_PROJECT.title.split(' ').map((word, i) => i === 1 ? <><br />{word}</> : word)}</h3>
          <p className="feat-desc">{FEATURED_PROJECT.description}</p>
          <div className="feat-tags">
            {FEATURED_PROJECT.tags.map(tag => (
              <span key={tag} className="ftag">{tag}</span>
            ))}
          </div>
          <div className="feat-links">
            <a href={FEATURED_PROJECT.liveUrl} className="fl-p">
              <svg viewBox="0 0 24 24">
                <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6" />
                <polyline points="15 3 21 3 21 9" />
                <line x1="10" y1="14" x2="21" y2="3" />
              </svg>
              Live Demo
            </a>
            <a href={FEATURED_PROJECT.sourceUrl} className="fl-g">
              <svg viewBox="0 0 24 24">
                <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 00-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0020 4.77 5.07 5.07 0 0019.91 1S18.73.65 16 2.48a13.38 13.38 0 00-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 005 4.77a5.44 5.44 0 00-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 009 18.13V22" />
              </svg>
              Source Code
            </a>
          </div>
        </div>
      </div>

      <div className="pcards-lbl">More Projects</div>
      <div className="pcards-grid">
        {MORE_PROJECTS.map((project, index) => (
          <div key={project.id} className={`pc reveal${index > 0 ? ` d${index}` : ''}`}>
            <div className="pc-img" style={{ backgroundImage: `url(${project.image})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
              <div className="pc-ov">
                <a href={project.liveUrl} className="pc-lnk">
                  <svg viewBox="0 0 24 24">
                    <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6" />
                    <polyline points="15 3 21 3 21 9" />
                    <line x1="10" y1="14" x2="21" y2="3" />
                  </svg>
                </a>
                <a href={project.sourceUrl} className="pc-lnk">
                  <svg viewBox="0 0 24 24">
                    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 00-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0020 4.77 5.07 5.07 0 0019.91 1S18.73.65 16 2.48a13.38 13.38 0 00-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 005 4.77a5.44 5.44 0 00-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 009 18.13V22" />
                  </svg>
                </a>
              </div>
              <span className="pc-cat">{project.category}</span>
            </div>
            <div className="pc-body">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <div className="pc-tags">
                {project.tags.map(tag => (
                  <span key={tag} className="pctag">{tag}</span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="proj-cta">
        <a href="#" className="btn-outline">
          View All Projects
          <svg viewBox="0 0 24 24">
            <line x1="5" y1="12" x2="19" y2="12" />
            <polyline points="12 5 19 12 12 19" />
          </svg>
        </a>
      </div>
    </section>
  );
}