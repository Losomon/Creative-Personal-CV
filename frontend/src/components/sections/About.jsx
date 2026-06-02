import '../../styles/components/About.css'

export default function About() {
  return (
    <section className="about-section" id="about">
      <div className="about-grid">
        <div>
          <div className="eyebrow">About Me</div>
          <h2 className="about-heading">
            Turning ideas into<br />
            <em>digital solutions.</em>
          </h2>
        </div>
        <div>
          <p className="about-body">
            As a passionate full-stack developer with expertise in creating elegant
            and high-performing web applications, I bring technical precision and
            creative thinking to every project. With a focus on delivering modern,
            scalable solutions, I have collaborated with startups and enterprises
            to transform complex challenges into seamless digital experiences.
          </p>
          <div className="about-meta">
            <div className="meta-row"><i className="ti ti-map-pin" /> Nairobi, Kenya</div>
            <div className="meta-row"><i className="ti ti-world" /> Available Worldwide</div>
            <div className="meta-row"><i className="ti ti-language" /> English, Swahili</div>
            <div className="meta-row"><i className="ti ti-clock" /> GMT+3</div>
          </div>
        </div>
      </div>
      <div className="tech-strip">
        <span className="ts-label">Tech Stack</span>
        <div className="pills">
          {['React', 'Node.js', 'TypeScript', 'Next.js', 'Python', 'PostgreSQL', 'MongoDB', 'Docker', 'AWS', 'Figma', 'Tailwind CSS', 'GraphQL'].map((tech, i) => (
            <span key={i} className={`pill ${i === 0 ? 'pill-g' : ''}`}>{tech}</span>
          ))}
        </div>
      </div>
    </section>
  )
}
