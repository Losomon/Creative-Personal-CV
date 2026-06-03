export default function Cta() {
  return (
    <div className="cta-bar reveal">
      <div>
        <h2 className="cta-h">Have a project<br/>in <em>mind?</em></h2>
        <p className="cta-sub">Let's build something remarkable together. Get in touch.</p>
      </div>
      <div className="cta-ls">
        <a href="mailto:hello@solomonmwangi.dev" className="cl cl-p">
          <svg viewBox="0 0 24 24"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>hello@solomonmwangi.dev
        </a>
        <a href="#" className="cl">
          <svg viewBox="0 0 24 24"><path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg>github.com/solomon
        </a>
        <a href="#" className="cl">
          <svg viewBox="0 0 24 24"><path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg>linkedin.com/in/solomon
        </a>
      </div>
    </div>
  );
}