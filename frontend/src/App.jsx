import Layout from './components/layout/Layout'
import { useEffect } from 'react'
import Hero from './components/sections/Hero'
import Approach from './components/sections/Approach'
import About from './components/sections/About'
import Skills from './components/sections/Skills'
import Projects from './components/sections/Projects'
import Experience from './components/sections/Experience'
import Testimonials from './components/sections/Testimonials'
import Contact from './components/sections/Contact'
import Cta from './components/sections/Cta'

const handleIntersection = (entry) => {
  const id = entry.target.getAttribute('id')
  if (!id) return

  document.querySelectorAll('.nav-links a').forEach((link) => {
    link.classList.remove('active')
    if (link.getAttribute('href') === `#${id}`) {
      link.classList.add('active')
    }
  })
}

function useActiveSection() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) handleIntersection(entry)
        })
      },
      { threshold: 0.4 }
    )

    document.querySelectorAll('section[id]').forEach((section) => observer.observe(section))
    return () => observer.disconnect()
  }, [])
}

function useSkillBars() {
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
    if (skillsSection) observer.observe(skillsSection)

    return () => observer.disconnect()
  }, [])
}

export default function App() {
  useActiveSection()
  useSkillBars()

  return (
    <Layout onIntersect={handleIntersection}>
      <Hero />
      <Approach />
      <About />
      <Skills />
      <Projects />
      <Experience />
      <Testimonials />
      <Contact />
      <Cta />
    </Layout>
  )
}
