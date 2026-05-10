import React from 'react'
import { personalInfo } from '../utils/data'

export default function Footer() {
  return (
    <footer style={{
      padding: '2rem 3rem', borderTop: '1px solid var(--border)',
      display: 'flex', justifyContent: 'space-between', alignItems: 'center',
      color: 'var(--muted)', fontSize: '0.8rem', flexWrap: 'wrap', gap: '0.5rem',
      position: 'relative', zIndex: 2,
      background: 'var(--bg2)',
    }}>
      <span>© 2025 <span style={{ color: 'var(--text)' }}>{personalInfo.name}</span></span>
      <span>Designed & built with ♥</span>
      <a href={`mailto:${personalInfo.email}`}
        style={{ color: 'var(--accent)', textDecoration: 'none' }}>
        {personalInfo.email}
      </a>
    </footer>
  )
}
