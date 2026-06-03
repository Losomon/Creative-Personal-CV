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
      <div className="hero-glow" ref={glowRef} />
      <div className="bg-grid" />
      <div className="bg-glow-1" />
      <div className="bg-glow-2" />

      <div className="hero-layout">
        {/* LEFT: Text */}
        <div className="hero-text">
          <p className="hero-greeting">Hi, I'm</p>
          <h1>
            Solomon<br />
            Mwangi
          </h1>
          <p className="hero-role">Full-Stack Developer &amp; UI Enthusiast</p>
          <p className="hero-desc">
            I design and build premium digital experiences that are fast,
            scalable and unforgettable.
          </p>
          <div className="hero-btns">
            <button className="btn-primary">
              View My Work <i className="ti ti-arrow-right" />
            </button>
            <button className="btn-secondary">
              <i className="ti ti-send" /> Hire Me
            </button>
          </div>
          <div className="social-links">
            <a href="#" className="soc" aria-label="GitHub">
              <i className="ti ti-brand-github" />
            </a>
            <a href="#" className="soc" aria-label="LinkedIn">
              <i className="ti ti-brand-linkedin" />
            </a>
            <a href="#" className="soc" aria-label="Twitter">
              <i className="ti ti-brand-twitter" />
            </a>
            <a href="#" className="soc" aria-label="Email">
              <i className="ti ti-mail" />
            </a>
          </div>
        </div>

        {/* CENTER: Photo */}
        <div className="hero-photo">
          <div className="photo-container">
            <div className="photo-ring" />
            <svg className="circuit-svg" viewBox="0 0 300 300" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="150" cy="150" r="130" stroke="rgba(212,175,55,0.08)" strokeWidth="1" />
              <circle cx="150" cy="150" r="110" stroke="rgba(212,175,55,0.06)" strokeWidth="1" />
              <path d="M150 20 L150 40 M150 70 L150 80 M20 150 L40 150 M70 150 L80 150 M220 150 L230 150 M260 150 L280 150 M150 220 L150 230 M150 260 L150 280" stroke="rgba(212,175,55,0.12)" strokeWidth="1" />
              <circle cx="150" cy="20" r="3" fill="rgba(212,175,55,0.3)" />
              <circle cx="150" cy="70" r="3" fill="rgba(212,175,55,0.2)" />
              <circle cx="20" cy="150" r="3" fill="rgba(212,175,55,0.3)" />
              <circle cx="70" cy="150" r="3" fill="rgba(212,175,55,0.2)" />
              <circle cx="230" cy="150" r="3" fill="rgba(212,175,55,0.2)" />
              <circle cx="280" cy="150" r="3" fill="rgba(212,175,55,0.3)" />
              <circle cx="150" cy="220" r="3" fill="rgba(212,175,55,0.2)" />
              <circle cx="150" cy="260" r="3" fill="rgba(212,175,55,0.3)" />
              <path d="M40 150 L40 80 Q40 60 60 60 L100 60" stroke="rgba(212,175,55,0.1)" strokeWidth="1" />
              <circle cx="100" cy="60" r="3" fill="rgba(212,175,55,0.25)" />
              <path d="M260 150 L260 200 Q260 220 240 220 L200 220" stroke="rgba(212,175,55,0.1)" strokeWidth="1" />
              <circle cx="200" cy="220" r="3" fill="rgba(212,175,55,0.25)" />
              <path d="M150 40 Q180 40 180 70 L180 100" stroke="rgba(212,175,55,0.08)" strokeWidth="1" />
              <circle cx="180" cy="100" r="2.5" fill="rgba(212,175,55,0.2)" />
            </svg>
            <div className="photo-circle">
              <img
                className="profile-image"
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500&h=600&fit=crop&q=80"
                alt="Professional headshot of Solomon Mwangi"
              />
            </div>
            <div className="freelance-badge">
              <div className="pdot" /> Available for Freelance
            </div>
          </div>
        </div>

        {/* RIGHT: Stats */}
        <div className="hero-stats">
          <div className="stat-card">
            <div className="stat-ico"><i className="ti ti-rocket" /></div>
            <div>
              <div className="stat-num">20+</div>
              <div className="stat-lbl">Projects Completed</div>
            </div>
          </div>
          <div className="stat-card">
            <div className="stat-ico"><i className="ti ti-code" /></div>
            <div>
              <div className="stat-num">3+</div>
              <div className="stat-lbl">Years Experience</div>
            </div>
          </div>
          <div className="stat-card">
            <div className="stat-ico"><i className="ti ti-star" /></div>
            <div>
              <div className="stat-num">95%</div>
              <div className="stat-lbl">Client Satisfaction</div>
            </div>
          </div>
        </div>
      </div>

      <div className="hero-scroll">
        <span className="scroll-text">SCROLL TO EXPLORE</span>
        <span className="scroll-mouse">
          <span className="scroll-wheel" />
        </span>
      </div>
    </section>
  )
}
