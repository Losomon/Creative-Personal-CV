import { useEffect, useRef } from 'react'
import '../../styles/components/Hero.css'

export default function Hero() {
  const heroRef = useRef(null)
  const glowRef = useRef(null)

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (!glowRef.current || !heroRef.current) return
      const rect = heroRef.current.getBoundingClientRect()
      const x = e.clientX - rect.left
      const y = e.clientY - rect.top
      glowRef.current.style.left = `${x}px`
      glowRef.current.style.top = `${y}px`
    }

    const hero = heroRef.current
    if (hero) {
      hero.addEventListener('mousemove', handleMouseMove)
    }

    return () => {
      if (hero) {
        hero.removeEventListener('mousemove', handleMouseMove)
      }
    }
  }, [])

  return (
    <section className="hero" ref={heroRef}>
      {/* LEFT */}
      <div className="h-left">
        <div className="h-eyebrow">
          <span className="h-eyebrow-line"></span>
          <span>Full-Stack Developer &amp; UI Enthusiast</span>
        </div>
        <h1 className="h-title">
          Designing digital<br />products that<br />
          <em>create impact.</em>
        </h1>
        <p className="h-desc">
          I combine modern technologies, clean architecture, and thoughtful design to build premium web experiences that users love.
        </p>
        <div className="h-btns">
          <button className="btn-gold" onClick={() => document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' })}>
            View My Work
            <svg viewBox="0 0 24 24"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
          </button>
          <button className="btn-ghost" onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}>
            <svg viewBox="0 0 24 24"><line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/></svg>
            Hire Me
          </button>
        </div>
        <div className="h-socials">
          <a href="#" className="h-soc" aria-label="GitHub"><svg viewBox="0 0 24 24"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 00-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0020 4.77 5.07 5.07 0 0019.91 1S18.73.65 16 2.48a13.38 13.38 0 00-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 005 4.77a5.44 5.44 0 00-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 009 18.13V22"/></svg></a>
          <a href="#" className="h-soc" aria-label="LinkedIn"><svg viewBox="0 0 24 24"><path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg></a>
          <a href="#" className="h-soc" aria-label="Twitter"><svg viewBox="0 0 24 24"><path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"/></svg></a>
          <a href="#" className="h-soc" aria-label="Email"><svg viewBox="0 0 24 24"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg></a>
        </div>
      </div>

      {/* CENTER */}
      <div className="h-center">
        <div className="h-glow" ref={glowRef}></div>
        <div className="h-ring-outer"></div>
        <div className="h-ring"></div>
        <div className="cir cir-1"></div>
        <div className="cir cir-2"></div>
        <div className="cir cir-3"></div>
        <div className="cir cir-4"></div>
        <div className="cir cir-5"></div>
        <div className="cir cir-6"></div>
        <div className="cir cir-7"></div>
        <div className="h-photo">
          <div className="h-mono">SM</div>
        </div>
        <div className="h-avail">
          <span className="h-avail-dot"></span>
          Available for Freelance
        </div>
      </div>

      {/* RIGHT */}
      <div className="h-right">
        <div className="h-stat">
          <div className="h-stat-ico"><svg viewBox="0 0 24 24"><path d="M12 2L2 7l10 5 10-5-10-5z"/><path d="M2 17l10 5 10-5"/><path d="M2 12l10 5 10-5"/></svg></div>
          <div><div className="h-stat-num">20+</div><div className="h-stat-lbl">Projects Completed</div></div>
        </div>
        <div className="h-stat">
          <div className="h-stat-ico"><svg viewBox="0 0 24 24"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg></div>
          <div><div className="h-stat-num">3+</div><div className="h-stat-lbl">Years Experience</div></div>
        </div>
        <div className="h-stat">
          <div className="h-stat-ico"><svg viewBox="0 0 24 24"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg></div>
          <div><div className="h-stat-num">95%</div><div className="h-stat-lbl">Client Satisfaction</div></div>
        </div>
      </div>
    </section>
  )
}
