import React, { useEffect } from 'react'
import { skillCategories } from '../utils/data'

export default function Skills() {
  useEffect(() => {
    const obs = new MutationObserver(() => {
      document.querySelectorAll('.skill-cat-card.visible').forEach(card => {
        card.querySelectorAll('.skill-bar-fill-anim').forEach(bar => {
          const lv = bar.dataset.level
          if (lv && bar.style.width === '0%') {
            setTimeout(() => { bar.style.width = lv + '%' }, 80)
          }
        })
      })
    })
    document.querySelectorAll('.skill-cat-card').forEach(c => obs.observe(c, { attributes: true, attributeFilter: ['class'] }))
    return () => obs.disconnect()
  }, [])

  return (
    <section id="skills" className="section-sep"
      style={{ padding:'8rem 3rem', background:'var(--bg2)', position:'relative', zIndex:2 }}>
      <div style={{ maxWidth:1200, margin:'0 auto' }}>

        <div className="reveal">
          <div className="section-label">Skills</div>
          <h2 className="section-title">My tech<br/><span className="gradient-text">arsenal.</span></h2>
          <p style={{ color:'var(--muted)', maxWidth:500, fontSize:'0.95rem', lineHeight:1.7, marginTop:'0.5rem' }}>
            From frontend to backend, CMS to AI integration — here's the full stack I work with.
          </p>
        </div>

        <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fill,minmax(310px,1fr))', gap:'1.25rem', marginTop:'3.5rem' }}>
          {skillCategories.map((cat, i) => (
            <div key={cat.id} className="skill-cat-card glass"
              style={{
                borderRadius:16, padding:'1.8rem',
                borderLeft: `3px solid ${cat.color}`,
              }}
              onMouseEnter={e => { e.currentTarget.style.borderColor=cat.color }}
              onMouseLeave={e => { e.currentTarget.style.borderColor='var(--border)'; e.currentTarget.style.borderLeftColor=cat.color }}>

              {/* Header */}
              <div style={{ display:'flex', alignItems:'center', justifyContent:'space-between', marginBottom:'1.5rem' }}>
                <div style={{ display:'flex', alignItems:'center', gap:'0.6rem' }}>
                  <div style={{ width:36, height:36, borderRadius:9, background:`${cat.color}18`, border:`1px solid ${cat.color}33`, display:'flex', alignItems:'center', justifyContent:'center', fontSize:'1.1rem' }}>
                    {cat.icon}
                  </div>
                  <div style={{ fontFamily:'Syne,sans-serif', fontWeight:800, fontSize:'0.9rem', letterSpacing:'0.06em', textTransform:'uppercase', color:'var(--text)' }}>
                    {cat.title}
                  </div>
                </div>
                {cat.id === 4 && (
                  <span style={{ fontSize:'0.65rem', fontWeight:700, letterSpacing:'0.1em', textTransform:'uppercase', color:cat.color, background:`${cat.color}15`, border:`1px solid ${cat.color}33`, borderRadius:100, padding:'0.2rem 0.6rem' }}>
                    NEW
                  </span>
                )}
              </div>

              {/* Skill bars */}
              <div style={{ display:'flex', flexDirection:'column', gap:'0.9rem' }}>
                {cat.skills.map(skill => (
                  <div key={skill.name}>
                    <div style={{ display:'flex', justifyContent:'space-between', marginBottom:'0.35rem', fontSize:'0.82rem' }}>
                      <span style={{ color:'var(--muted)' }}>{skill.name}</span>
                      <span style={{ color:'var(--text2)', fontWeight:600 }}>{skill.level}%</span>
                    </div>
                    <div style={{ height:5, background:'var(--surface2)', borderRadius:3, overflow:'hidden' }}>
                      <div className="skill-bar-fill-anim"
                        data-level={skill.level}
                        style={{ height:'100%', borderRadius:3, width:'0%', background:`linear-gradient(90deg, ${cat.color}, ${cat.color}99)` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
