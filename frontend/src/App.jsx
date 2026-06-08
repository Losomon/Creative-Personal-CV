import { useState, useEffect } from 'react'
import './styles/App.css'
import Hero from './components/sections/Hero'
import About from './components/sections/About'
import Skills from './components/sections/Skills'
import Projects from './components/sections/Projects'
import Experience from './components/sections/Experience'
import Testimonials from './components/sections/Testimonials'
import Contact from './components/sections/Contact'
import Cta from './components/sections/Cta'
import Approach from './components/sections/Approach'


const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Experience', href: '#experience' },
  { label: 'Testimonials', href: '#testimonials' },
  { label: 'Contact', href: '#contact' }
]

export default function App() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (e, href) => {
    e.preventDefault()
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  useEffect(() => {
    const elements = document.querySelectorAll('.reveal')
    if (!elements.length) return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add('in')
        })
      },
      { threshold: 0.08 }
    )

    elements.forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const id = entry.target.getAttribute('id')
            document.querySelectorAll('.nav-links a').forEach((link) => {
              link.classList.remove('active')
              if (link.getAttribute('href') === `#${id}`) {
                link.classList.add('active')
              }
            })
          }
        })
      },
      { threshold: 0.4 }
    )

    document.querySelectorAll('section[id]').forEach((section) => {
      observer.observe(section)
    })

    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    const triggerSkillBars = () => {
      document.querySelectorAll('.sk-card').forEach((card) => {
        const bars = card.querySelectorAll('.sk-bar-fill')
        bars.forEach((bar) => {
          setTimeout(() => {
            bar.style.width = bar.dataset.w + '%'
          }, 200)
        })
      })
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            triggerSkillBars()
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.3 }
    )

    const skillsSection = document.querySelector('#skills')
    if (skillsSection) {
      observer.observe(skillsSection)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <div className="app">
      <div className="bg-grid" />
      <div className="noise-overlay" />


      <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
        <div className="container navbar-inner">
          <a href="#" className="logo">&lt;SM/&gt;</a>

          <div className={`nav-links`}>
            {navLinks.map(link => (
              <a key={link.href} href={link.href} onClick={(e) => scrollToSection(e, link.href)}>
                {link.label}
              </a>
            ))}
          </div>

          <button className="nav-cv" onClick={() => {}}>
            <svg viewBox="0 0 24 24"><path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>
            Download CV
          </button>
        </div>
      </nav>

      <main>
        <Hero />
        <About />
        <Approach />
        <Skills />
        <Projects />
        <Experience />
        <Testimonials />
        <Contact />
        <Cta />
      </main>

      <footer>
        <div className="foot-inner">
          <div className="f-logo">&lt;SM/&gt;</div>
          <p className="f-copy">© 2025 Solomon Mwangi — Designed &amp; built with care in Nairobi, Kenya.</p>
          <div className="f-socs">
            <a href="#" className="fsoc" aria-label="GitHub">
              <svg viewBox="0 0 24 24"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 00-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0020 4.77 5.07 5.07 0 0019.91 1S18.73.65 16 2.48a13.38 13.38 0 00-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 005 4.77a5.44 5.44 0 00-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 009 18.13V22"/></svg>
            </a>
            <a href="#" className="fsoc" aria-label="LinkedIn">
              <svg viewBox="0 0 24 24"><path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg>
            </a>
            <a href="#" className="fsoc" aria-label="Twitter">
              <svg viewBox="0 0 24 24"><path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"/></svg>
            </a>
          </div>
        </div>
      </footer>
    </div>
  )
}
