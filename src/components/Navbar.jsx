import React, { useEffect, useState } from 'react'
import { useTheme } from '../context/ThemeContext'
import { personalInfo } from '../utils/data'

const links = [
  { label: 'About', href: '#about' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Skills', href: '#skills' },
  { label: 'Education', href: '#education' },
  { label: 'Contact', href: '#contact' },
]

export default function Navbar() {
  const { theme, toggle } = useTheme()
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [active, setActive] = useState('')

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Highlight active section
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(e => { if (e.isIntersecting) setActive('#' + e.target.id) })
    }, { rootMargin: '-40% 0px -55% 0px' })
    links.forEach(l => {
      const el = document.querySelector(l.href)
      if (el) observer.observe(el)
    })
    return () => observer.disconnect()
  }, [])

  const navStyle = {
    position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100,
    padding: scrolled ? '0.7rem 3rem' : '1.1rem 3rem',
    display: 'flex', justifyContent: 'space-between', alignItems: 'center',
    backdropFilter: 'blur(24px)',
    background: 'var(--navbar)',
    borderBottom: scrolled ? '1px solid var(--border)' : '1px solid transparent',
    transition: 'all 0.35s',
  }

  return (
    <nav style={navStyle}>
      {/* Logo */}
      <a href="#hero" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
        <div style={{
          width: 36, height: 36, borderRadius: 10,
          background: 'linear-gradient(135deg, var(--accent), var(--accent2))',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          fontFamily: 'Syne,sans-serif', fontWeight: 800, fontSize: '0.95rem', color: '#fff',
        }}>{personalInfo.initials}</div>
      
      </a>

      {/* Desktop links */}
      <ul style={{ display: 'flex', gap: '0.25rem', listStyle: 'none', margin: 0 }}
        className="hidden md:flex">
        {links.map(l => (
          <li key={l.href}>
            <a href={l.href} style={{
              padding: '0.45rem 0.85rem',
              color: active === l.href ? 'var(--accent)' : 'var(--muted)',
              textDecoration: 'none', fontSize: '0.83rem', fontWeight: 500,
              letterSpacing: '0.04em', borderRadius: 8,
              background: active === l.href ? 'var(--surface2)' : 'transparent',
              transition: 'all 0.2s',
            }}
            onMouseEnter={e => { if (active !== l.href) e.target.style.color = 'var(--text)' }}
            onMouseLeave={e => { if (active !== l.href) e.target.style.color = 'var(--muted)' }}
            >{l.label}</a>
          </li>
        ))}
      </ul>

      {/* Right: theme toggle + mobile menu */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
        {/* Theme Toggle */}
        <button onClick={toggle} className="theme-toggle" aria-label="Toggle theme"
          style={{ display: 'flex', alignItems: 'center' }}>
          <div className="theme-toggle-thumb">
            {theme === 'dark' ? '🌙' : '☀️'}
          </div>
        </button>

        {/* Mobile hamburger */}
        <button onClick={() => setMenuOpen(!menuOpen)}
          style={{ background: 'none', border: 'none', cursor: 'none', padding: 4 }}
          className="flex md:hidden flex-col gap-1.5" aria-label="Menu">
          {[0,1,2].map(i => (
            <span key={i} style={{
              display: 'block', width: 22, height: 1.5,
              background: 'var(--text)', borderRadius: 1, transition: 'all 0.3s',
              transform: menuOpen
                ? i===0 ? 'rotate(45deg) translate(3.5px,3.5px)'
                  : i===2 ? 'rotate(-45deg) translate(3.5px,-3.5px)' : 'scaleX(0)'
                : 'none',
            }} />
          ))}
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div style={{
          position: 'fixed', top: 60, left: 0, right: 0,
          background: 'var(--navbar)', backdropFilter: 'blur(24px)',
          borderBottom: '1px solid var(--border)',
          padding: '1.5rem 2rem', display: 'flex', flexDirection: 'column', gap: '1rem',
          zIndex: 99,
        }}>
          {links.map(l => (
            <a key={l.href} href={l.href} onClick={() => setMenuOpen(false)}
              style={{ color: active === l.href ? 'var(--accent)' : 'var(--muted)', textDecoration: 'none', fontSize: '1.1rem', fontWeight: 500 }}>
              {l.label}
            </a>
          ))}
        </div>
      )}
    </nav>
  )
}
