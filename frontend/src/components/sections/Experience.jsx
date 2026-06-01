import '../../styles/components/Experience.css'

const experiences = [
  {
    year: '2024',
    role: 'Freelance Frontend Developer',
    company: 'Self-Employed',
    desc: 'Building premium web applications for clients worldwide, focusing on modern React architectures and pixel-perfect implementations.'
  },
  {
    year: '2023',
    role: 'Web Development Intern',
    company: 'Tech Academy',
    desc: 'Developed interactive learning platforms and contributed to real-world client projects using React and Node.js.'
  },
  {
    year: '2022',
    role: 'UI/UX Design Student',
    company: 'Digital Design Institute',
    desc: 'Mastered the fundamentals of user-centered design, creating wireframes, prototypes, and high-fidelity mockups for mobile and web.'
  }
]

export default function Experience() {
  return (
    <section className="experience" id="experience">
      <div className="container">
        <div className="experience-header">
          <span className="section-label">Journey</span>
          <h2 className="section-title">Professional path</h2>
        </div>

        <div className="timeline">
          <div className="timeline-line" />
          {experiences.map((exp, index) => (
            <div key={index} className="timeline-item">
              <div className="timeline-year">{exp.year}</div>
              <div className="timeline-content glass-card">
                <span className="timeline-role">{exp.role}</span>
                <span className="timeline-company">{exp.company}</span>
                <p className="timeline-desc">{exp.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}