import '../styles/components/About.css'

const stats = [
  { value: '20+', label: 'Projects Completed' },
  { value: '3+', label: 'Years Learning' },
  { value: 'Frontend', label: 'Specialist' },
  { value: 'UI/UX', label: 'Focused' }
]

export default function About() {
  return (
    <section className="about" id="about">
      <div className="container">
        <div className="about-grid">
          <div className="about-story">
            <span className="section-label">About Me</span>
            <h2 className="section-title">Designing digital experiences that matter</h2>
            <p className="about-text">
              I design and develop modern web experiences focused on elegance, usability, and performance.
              With a passion for clean code and intuitive interfaces, I transform complex problems into seamless digital solutions.
            </p>
            <p className="about-text">
              Every pixel matters. Every interaction tells a story. I believe great software should feel as good as it looks.
            </p>

            <div className="about-highlights">
              <div className="highlight-item">
                <div className="highlight-icon">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
                  </svg>
                </div>
                <div>
                  <h4>Premium Quality</h4>
                  <p>Every project exceeds industry standards</p>
                </div>
              </div>
              <div className="highlight-item">
                <div className="highlight-icon">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <circle cx="12" cy="12" r="10"/>
                    <polyline points="12 6 12 12 16 14"/>
                  </svg>
                </div>
                <div>
                  <h4>On-Time Delivery</h4>
                  <p>Reliable timelines, every time</p>
                </div>
              </div>
            </div>
          </div>

          <div className="about-stats">
            {stats.map((stat, index) => (
              <div key={index} className="stat-card glass-card">
                <span className="stat-value">{stat.value}</span>
                <span className="stat-label">{stat.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}