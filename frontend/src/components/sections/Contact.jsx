import '../../styles/components/Contact.css'

export default function Contact() {
  return (
    <section className="contact" id="contact">
      <div className="contact-glow" />

      <div className="container">
        <div className="contact-content">
          <span className="section-label">Get In Touch</span>
          <h2 className="contact-title">Let's build something exceptional</h2>
          <p className="contact-subtitle">
            Ready to bring your vision to life? Let's create something extraordinary together.
          </p>

          <div className="contact-links">
            <a href="mailto:solomon@example.com" className="contact-link glass-card">
              <div className="link-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                  <polyline points="22,6 12,13 2,6"/>
                </svg>
              </div>
              <div className="link-info">
                <span className="link-label">Email</span>
                <span className="link-value">solomon@example.com</span>
              </div>
              <div className="link-arrow">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <line x1="5" y1="12" x2="19" y2="12"/>
                  <polyline points="12 5 19 12 12 19"/>
                </svg>
              </div>
            </a>

            <a href="https://github.com/solomonmwangi" target="_blank" rel="noopener noreferrer" className="contact-link glass-card">
              <div className="link-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.85-.3 6.35-.92 7.47-2.07A7.95 7.95 0 0 0 19 12.87V17"/>
                </svg>
              </div>
              <div className="link-info">
                <span className="link-label">GitHub</span>
                <span className="link-value">@solomonmwangi</span>
              </div>
              <div className="link-arrow">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <line x1="5" y1="12" x2="19" y2="12"/>
                  <polyline points="12 5 19 12 12 19"/>
                </svg>
              </div>
            </a>

            <a href="https://linkedin.com/in/solomonmwangi" target="_blank" rel="noopener noreferrer" className="contact-link glass-card">
              <div className="link-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
                  <rect x="2" y="9" width="4" height="12"/>
                  <circle cx="4" cy="4" r="2"/>
                </svg>
              </div>
              <div className="link-info">
                <span className="link-label">LinkedIn</span>
                <span className="link-value">Solomon Mwangi</span>
              </div>
              <div className="link-arrow">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <line x1="5" y1="12" x2="19" y2="12"/>
                  <polyline points="12 5 19 12 12 19"/>
                </svg>
              </div>
            </a>

            <button className="contact-link glass-card resume-btn">
              <div className="link-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
                  <polyline points="7 10 12 15 17 10"/>
                  <line x1="12" y1="15" x2="12" y2="3"/>
                </svg>
              </div>
              <div className="link-info">
                <span className="link-label">Resume</span>
                <span className="link-value">Download PDF</span>
              </div>
              <div className="link-arrow">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <line x1="5" y1="12" x2="19" y2="12"/>
                  <polyline points="12 5 19 12 12 19"/>
                </svg>
              </div>
            </button>
          </div>
        </div>
      </div>

      <footer className="footer">
        <div className="container">
          <p>Designed & Built by Solomon Mwangi © 2024</p>
        </div>
      </footer>
    </section>
  )
}