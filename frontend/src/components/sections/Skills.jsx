import '../../styles/components/Skills.css'

export default function Skills() {
  const skillsData = [
    { name: 'Frontend', level: 95 },
    { name: 'Backend', level: 90 },
    { name: 'Database', level: 85 },
    { name: 'UI/UX', level: 90 },
    { name: 'Tools', level: 85 }
  ]

  return (
    <section className="skills" id="skills">
      <div className="container">
        <span className="section-label">MY TECHNICAL ARSENAL</span>

        <div className="skills-grid">
          {skillsData.map((skill, index) => (
            <div key={index} className="skill-bar">
              <div className="skill-row">
                <span className="skill-name">{skill.name}</span>
                <span className="skill-percent">{skill.level}%</span>
              </div>
              <div className="skill-track">
                <div className="skill-fill" style={{ width: `${skill.level}%` }}></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}