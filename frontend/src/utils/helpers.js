export const scrollToSection = (e, href) => {
  e.preventDefault()
  const element = document.querySelector(href)
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' })
  }
}

export const triggerSkillBars = () => {
  document.querySelectorAll('.sk-card').forEach((card) => {
    const bars = card.querySelectorAll('.sk-bar-fill')
    bars.forEach((bar) => {
      setTimeout(() => {
        bar.style.width = bar.dataset.w + '%'
      }, 200)
    })
  })
}

export const cn = (...classes) => {
  return classes.filter(Boolean).join(' ')
}
