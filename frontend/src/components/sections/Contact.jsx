import '../../styles/components/Contact.css'

export default function Contact() {
  return (
    <section className="contact" id="contact">
      <div className="container">
        <div className="contact-content">
          <span className="section-label">GET IN TOUCH</span>
          <h2 className="contact-title">Let's build something exceptional</h2>
          <p className="contact-subtitle">
            Ready to bring your vision to life? Let's create something extraordinary together.
          </p>

          <div className="contact-cta">
            <button className="btn btn-primary">Start a Project</button>
          </div>
        </div>
      </div>

      <footer className="footer">
        <div className="container">
          <div className="footer-content">
            <div className="footer-left">
              © 2026 Solomon Mwangi. All rights reserved.
            </div>
            <div className="footer-right">
              <span className="footer-signature">Designed & Developed with ❤️ by Solomon</span>
              <span className="footer-logo">&lt;SM/&gt;</span>
            </div>
          </div>
        </div>
      </footer>
    </section>
  )
}