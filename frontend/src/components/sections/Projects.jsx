import '../../styles/components/Projects.css'

const projects = [
  {
    name: 'Sierra Suite',
    description: 'A comprehensive SaaS platform that simplifies complex business operations.',
    tech: ['Next.js', 'Node.js'],
    gradient: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)'
  },
  {
    name: 'Travela Admin',
    description: 'Comprehensive travel management dashboard for agencies.',
    tech: ['React', 'Node.js'],
    gradient: 'linear-gradient(135deg, #11998e 0%, #38ef7d 100%)'
  },
  {
    name: 'Connect Search',
    description: 'Advanced search platform with intelligent filtering capabilities.',
    tech: ['JS/API', 'Elasticsearch'],
    gradient: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)'
  }
]

export default function Projects() {
  return (
    <section className="projects" id="projects">
      <div className="container">
        <span className="section-label">PROJECTS THAT SHOWCASE EXCELLENCE</span>

        <div className="projects-grid">
          {projects.map((project, index) => (
            <article key={index} className="project-card glass-card">
              <div className="project-preview" style={{ background: project.gradient }}>
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
                <p className="project-description">{project.description}</p>
                <div className="project-tech">
                  {project.tech.map((t, i) => (
                    <span key={i} className="tech-badge">{t}</span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="projects-cta">
          <button className="btn btn-outline">VIEW ALL PROJECTS</button>
        </div>
      </div>
    </section>
  )
}