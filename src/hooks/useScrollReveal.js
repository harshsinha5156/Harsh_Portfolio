import { useEffect } from 'react'

export function useScrollReveal() {
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const delay = Number(entry.target.dataset.delay || 0)
          setTimeout(() => entry.target.classList.add('visible'), delay)
          observer.unobserve(entry.target)
        }
      })
    }, { threshold: 0.1 })

    const selectors = [
      '.reveal', '.reveal-left', '.reveal-right',
      '.timeline-item', '.project-card', '.skill-cat-card',
      '.edu-card', '.ach-item',
    ]
    const elements = document.querySelectorAll(selectors.join(','))

    elements.forEach((el) => {
      // stagger siblings
      const siblings = el.parentElement?.querySelectorAll('.project-card, .skill-cat-card, .ach-item') || []
      const idx = Array.from(siblings).indexOf(el)
      if (idx > 0) el.dataset.delay = idx * 110
      observer.observe(el)
    })

    return () => observer.disconnect()
  }, [])
}
