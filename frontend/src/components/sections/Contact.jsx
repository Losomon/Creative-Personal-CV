import '../../styles/components/Contact.css'

export default function Contact() {
  return (
    <>
      <div className="cta-bar reveal" id="contact">
        <div>
          <h2 className="cta-heading">Have a project<br />in <em>mind?</em></h2>
          <p className="cta-sub">Let's build something remarkable together. Get in touch.</p>
        </div>
        <div className="cta-links">
          <a href="mailto:hello@solomonmwangi.dev" className="cta-link cta-link-primary">
            <i className="ti ti-mail" /> hello@solomonmwangi.dev
          </a>
          <a href="#" className="cta-link">
            <i className="ti ti-brand-github" /> github.com/solomon
          </a>
          <a href="#" className="cta-link">
            <i className="ti ti-brand-linkedin" /> linkedin.com/in/solomon
          </a>
        </div>
      </div>

      <footer>
        <div className="foot-inner">
          <div className="foot-logo">&lt;SM/&gt;</div>
          <p className="foot-copy">© 2025 Solomon Mwangi. Designed &amp; built with care in Nairobi.</p>
          <div className="foot-socs">
            <a href="#" className="fsoc" aria-label="GitHub"><i className="ti ti-brand-github" /></a>
            <a href="#" className="fsoc" aria-label="LinkedIn"><i className="ti ti-brand-linkedin" /></a>
            <a href="#" className="fsoc" aria-label="Twitter"><i className="ti ti-brand-twitter" /></a>
          </div>
        </div>
      </footer>
    </>
  )
}
