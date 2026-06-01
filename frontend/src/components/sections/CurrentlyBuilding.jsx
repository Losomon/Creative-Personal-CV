import '../../styles/components/CurrentlyBuilding.css'

export default function CurrentlyBuilding() {
  const projects = [
    'Hotel Management System',
    'Luxury Fashion Store',
    'Travel Dashboard'
  ];

  return (
    <section className="currently-building" id="currently-building">
      <div className="container">
        <div className="currently-building-header">
          <span className="section-label">Currently Building</span>
          <h2 className="section-title">What I'm working on</h2>
        </div>
        
        <div className="currently-building-grid">
          {projects.map((project, index) => (
            <div key={index} className="currently-building-item glass-card">
              <div className="project-icon">🏗️</div>
              <h3 className="project-title">{project}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}