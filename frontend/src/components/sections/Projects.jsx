import '../styles/components/Projects.css'

const projects = [
  {
    name: 'Savora Spice',
    desc: 'Luxury ecommerce UI featuring elegant product showcases, smooth animations, and premium checkout experience.',
    tech: ['React', 'Tailwind', 'Firebase'],
    gradient: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    featured: true
  },
  {
    name: 'Travela Admin',
    desc: 'Modern SaaS dashboard with real-time analytics, interactive charts, and comprehensive travel management tools.',
    tech: ['React', 'Node.js', 'Chart.js'],
    gradient: 'linear-gradient(135deg, #11998e 0%, #38ef7d 100%)',
    featured: true
  },
  {
    name: 'Coconut Saraih',
    desc: 'Premium hotel management dashboard with booking systems, guest profiles, and revenue analytics.',
    tech: ['React', 'Express', 'MongoDB'],
    gradient: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
    featured: true
  }
]

export default function Projects() {
  return (
    <section className="projects" id="projects">
      <div className="container">
        <div className="projects-header">
          <span className="section-label">Featured Work</span>
          <h2 className="section-title">Projects that showcase excellence</h2>
        </div>

        <div className="projects-grid">
          {projects.map((project, index) => (
            <article key={index} className={`project-card ${project.featured ? 'featured' : ''}`}>
              <div className="project-preview" style={{ background: project.gradient }}>
                <div className="project-overlay">
                  <div className="project-actions">
                    <button className="btn btn-primary">
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>
                        <polyline points="15 3 21 3 21 9"/>
                        <line x1="10" y1="14" x2="21" y2="3"/>
                      </svg>
                      Live Demo
                    </button>
                    <button className="btn btn-outline">
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.85-.3 6.35-.92 7.47-2.07A7.95 7.95 0 0 0 19 12.87V17"/>
                      </svg>
                      GitHub
                    </button>
                  </div>
                </div>
                <div className="project-mockup">
                  <div className="mockup-browser">
                    <div className="browser-bar">
                      <div className="browser-dots">
                        <span></span><span></span><span></span>
                      </div>
                    </div>
                    <div className="mockup-content">
                      <div className="mockup-header"></div>
                      <div className="mockup-body">
                        <div className="mockup-sidebar"></div>
                        <div className="mockup-main">
                          <div className="mockup-card"></div>
                          <div className="mockup-card short"></div>
                          <div className="mockup-chart"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="project-info">
                <h3 className="project-name">{project.name}</h3>
                <p className="project-desc">{project.desc}</p>
                <div className="project-tech">
                  {project.tech.map((t, i) => (
                    <span key={i} className="tech-tag">{t}</span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}