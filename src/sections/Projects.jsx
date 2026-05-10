import React, { useState } from 'react'
import { projects } from '../utils/data'

export default function Projects() {
  const [hovered, setHovered] = useState(null)
  const featured = projects.filter(p => p.featured)
  const others = projects.filter(p => !p.featured)

  return (
    <section id="projects" style={{ padding:'8rem 3rem', maxWidth:1200, margin:'0 auto', position:'relative', zIndex:2 }}>
      <div className="reveal">
        <div className="section-label">Projects</div>
        <h2 className="section-title">Things I've<br/><span className="gradient-text">built.</span></h2>
      </div>

      {/* Featured — large 2-col */}
      <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:'1.5rem', marginTop:'3.5rem' }} className="proj-grid-r">
        {featured.map(p => <ProjectCard key={p.id} p={p} hovered={hovered} setHovered={setHovered} large/>)}
      </div>

      {/* Others — 2-col smaller */}
      <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:'1.5rem', marginTop:'1.5rem' }} className="proj-grid-r">
        {others.map(p => <ProjectCard key={p.id} p={p} hovered={hovered} setHovered={setHovered}/>)}
      </div>

      <style>{`
        @media(max-width:768px){ .proj-grid-r{ grid-template-columns:1fr !important; } }
      `}</style>
    </section>
  )
}

function ProjectCard({ p, hovered, setHovered, large }) {
  const isHov = hovered === p.id
  return (
    <div className="project-card glass"
      onMouseEnter={() => setHovered(p.id)}
      onMouseLeave={() => setHovered(null)}
      style={{
        borderRadius:16, overflow:'hidden', position:'relative',
        borderColor: isHov ? 'var(--border2)' : 'var(--border)',
        transform: isHov ? 'translateY(-6px)' : 'none',
        boxShadow: isHov ? `0 24px 60px var(--shadow), 0 0 0 1px var(--border2)` : 'none',
        transition:'transform 0.35s cubic-bezier(0.16,1,0.3,1), box-shadow 0.35s, border-color 0.35s',
      }}>

      {/* Top band */}
      <div style={{
        padding: large ? '2rem 2rem 1.5rem' : '1.5rem 1.8rem 1.2rem',
        background:`linear-gradient(135deg, ${p.accentFrom}, ${p.accentTo})`,
        borderBottom:'1px solid var(--border)',
        minHeight: large ? 150 : 120,
        display:'flex', flexDirection:'column', justifyContent:'space-between',
        position:'relative', overflow:'hidden',
        transition:'background 0.35s',
      }}>
        {/* Big watermark icon */}
        <div style={{
          position:'absolute', right:'-0.5rem', top:'-0.8rem',
          fontSize: large ? '5rem' : '4rem', opacity:0.12,
          filter:'blur(1px)', userSelect:'none', lineHeight:1,
          transform: isHov ? 'scale(1.15) rotate(5deg)' : 'scale(1)',
          transition:'transform 0.5s',
        }}>{p.icon}</div>

        <div style={{ display:'flex', alignItems:'center', gap:'0.75rem', position:'relative', zIndex:1 }}>
          <span style={{ fontSize: large ? '2rem' : '1.6rem' }}>{p.icon}</span>
          <span style={{ fontSize:'0.72rem', fontWeight:600, letterSpacing:'0.1em', textTransform:'uppercase', color:'var(--accent)', background:'var(--surface2)', border:'1px solid var(--border)', borderRadius:100, padding:'0.25rem 0.75rem' }}>
            {p.category}
          </span>
        </div>

        <div style={{ display:'flex', gap:'0.6rem', position:'relative', zIndex:1 }}>
          {[['GitHub', p.github], ['Live ↗', p.live]].map(([label, href]) => (
            <a key={label} href={href} target="_blank" rel="noopener noreferrer"
              style={{ padding:'0.38rem 0.85rem', borderRadius:6, fontSize:'0.75rem', fontWeight:600, textDecoration:'none', border:'1px solid var(--border2)', color:'var(--muted)', background:'var(--surface)', transition:'all 0.2s', cursor:'none' }}
              onMouseEnter={e => { e.currentTarget.style.borderColor='var(--accent)'; e.currentTarget.style.color='var(--accent)'; e.currentTarget.style.background='rgba(0,212,255,0.08)' }}
              onMouseLeave={e => { e.currentTarget.style.borderColor='var(--border2)'; e.currentTarget.style.color='var(--muted)'; e.currentTarget.style.background='var(--surface)' }}
            >{label}</a>
          ))}
        </div>
      </div>

      {/* Body */}
      <div style={{ padding: large ? '1.6rem 2rem 2rem' : '1.4rem 1.8rem 1.8rem' }}>
        <div style={{ fontFamily:'Syne,sans-serif', fontSize: large ? '1.2rem' : '1.05rem', fontWeight:800, marginBottom:'0.5rem', color:'var(--text)' }}>{p.title}</div>
        <div style={{ color:'var(--muted)', fontSize:'0.85rem', lineHeight:1.75, marginBottom:'1.1rem' }}>{p.description}</div>
        <div style={{ display:'flex', gap:'0.45rem', flexWrap:'wrap' }}>
          {p.tags.map(t => (
            <span key={t} style={{ padding:'0.28rem 0.7rem', borderRadius:100, fontSize:'0.7rem', fontWeight:600, letterSpacing:'0.04em', background:'rgba(0,212,255,0.07)', border:'1px solid rgba(0,212,255,0.15)', color:'var(--accent)' }}>{t}</span>
          ))}
        </div>
      </div>
    </div>
  )
}
