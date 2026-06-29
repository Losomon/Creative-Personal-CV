import '../../styles/components/Contact.css'

export default function Contact() {
  return (
    <section id="contact" className="reveal">
      <div className="contact-wrap">
        <div className="contact-left">
          <div className="sec-ew">Get In Touch</div>
          <h2 className="sec-ttl">Let's build something<br /><em>remarkable.</em></h2>
          <p className="contact-sub">Have a project in mind, want to collaborate, or just want to say hi? My inbox is always open — I'll get back to you within 24 hours.</p>
          <div className="contact-info-row">
            <div className="ci">
              <div className="ci-icon">
                <svg viewBox="0 0 24 24"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
              </div>
              <div>
                <div className="ci-lbl">Email</div>
                <div className="ci-val">hello@solomonmwangi.dev</div>
              </div>
            </div>
            <div className="ci">
              <div className="ci-icon">
                <svg viewBox="0 0 24 24"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/></svg>
              </div>
              <div>
                <div className="ci-lbl">Location</div>
                <div className="ci-val">Nairobi, Kenya — GMT+3</div>
              </div>
            </div>
            <div className="ci">
              <div className="ci-icon">
                <svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
              </div>
              <div>
                <div className="ci-lbl">Response Time</div>
                <div className="ci-val">Within 24 hours</div>
              </div>
            </div>
          </div>
          <div className="contact-socials">
            <a href="#" className="cs" aria-label="GitHub">
              <svg viewBox="0 0 24 24"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 00-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0020 4.77 5.07 5.07 0 0019.91 1S18.73.65 16 2.48a13.38 13.38 0 00-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 005 4.77a5.44 5.44 0 00-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 009 18.13V22"/></svg>
            </a>
            <a href="#" className="cs" aria-label="LinkedIn">
              <svg viewBox="0 0 24 24"><path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg>
            </a>
            <a href="#" className="cs" aria-label="Twitter">
              <svg viewBox="0 0 24 24"><path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"/></svg>
            </a>
          </div>
        </div>
        <div className="contact-form reveal d1">
          <div className="cf-row">
            <div className="cf-group">
              <label>First Name</label>
              <input type="text" placeholder="Solomon" />
            </div>
            <div className="cf-group">
              <label>Last Name</label>
              <input type="text" placeholder="Mwangi" />
            </div>
          </div>
          <div className="cf-group">
            <label>Email Address</label>
            <input type="email" placeholder="hello@example.com" />
          </div>
          <div className="cf-group">
            <label>Subject</label>
            <input type="text" placeholder="Project discussion, collaboration..." />
          </div>
          <div className="cf-group">
            <label>Message</label>
            <textarea placeholder="Tell me about your project, timeline, and budget..." />
          </div>
          <button className="cf-submit">
            Send Message
            <svg viewBox="0 0 24 24">
              <line x1="22" y1="2" x2="11" y2="13" />
              <polygon points="22 2 15 22 11 13 2 9 22 2" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}