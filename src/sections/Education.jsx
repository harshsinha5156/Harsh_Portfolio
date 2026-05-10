import React from 'react'
import { education, achievements } from '../utils/data'

export default function Education() {
  return (
    <section id="education" style={{ padding:'8rem 3rem', maxWidth:1200, margin:'0 auto', position:'relative', zIndex:2 }}>

      <div className="reveal">
        <div className="section-label">Education</div>
        <h2 className="section-title">Academic<br/><span className="gradient-text">journey.</span></h2>
      </div>

      {/* Education cards */}
      <div style={{ marginTop:'4rem', display:'flex', flexDirection:'column', gap:'1.5rem' }}>
        {education.map((edu, i) => (
          <div key={edu.id} className="edu-card glass" style={{ borderRadius:18, overflow:'hidden' }}
            onMouseEnter={e => e.currentTarget.style.borderColor=edu.color+'55'}
            onMouseLeave={e => e.currentTarget.style.borderColor='var(--border)'}>

            {/* Top colored strip */}
            <div style={{ height:4, background:`linear-gradient(90deg, ${edu.color}, var(--accent2))` }}/>

            <div style={{ padding:'2rem 2.5rem' }}>
              <div style={{ display:'flex', justifyContent:'space-between', alignItems:'flex-start', flexWrap:'wrap', gap:'1rem' }}>
                <div>
                  {/* Degree */}
                  <div style={{ display:'flex', alignItems:'center', gap:'0.75rem', marginBottom:'0.5rem' }}>
                    <div style={{ width:42, height:42, borderRadius:10, background:`${edu.color}18`, border:`1px solid ${edu.color}33`, display:'flex', alignItems:'center', justifyContent:'center', fontSize:'1.3rem' }}>
                      🎓
                    </div>
                    <div>
                      <div style={{ fontFamily:'Syne,sans-serif', fontSize:'1.3rem', fontWeight:800, color:'var(--text)' }}>{edu.degree}</div>
                      <div style={{ color:edu.color, fontWeight:600, fontSize:'0.9rem' }}>{edu.branch}</div>
                    </div>
                  </div>

                  <div style={{ marginLeft:'3.3rem' }}>
                    <div style={{ color:'var(--muted)', fontSize:'0.88rem', marginBottom:'0.2rem' }}>
                      📍 {edu.school}, {edu.location}
                    </div>
                    <div style={{ color:'var(--muted)', fontSize:'0.85rem' }}>
                      📅 {edu.period}
                    </div>
                  </div>
                </div>

                {/* Year badge */}
                <div style={{ textAlign:'center' }}>
                  <div style={{ fontFamily:'Syne,sans-serif', fontWeight:800, fontSize:'3.5rem', lineHeight:1, color:'var(--border2)', userSelect:'none' }}>{edu.year}</div>
                  <div style={{ fontSize:'0.7rem', color:'var(--muted)', letterSpacing:'0.1em', textTransform:'uppercase' }}>Graduated</div>
                </div>
              </div>

              {/* Highlights */}
              <div style={{ marginTop:'1.5rem', paddingTop:'1.5rem', borderTop:'1px solid var(--border)' }}>
                <div style={{ fontSize:'0.78rem', fontWeight:600, letterSpacing:'0.1em', textTransform:'uppercase', color:'var(--muted2)', marginBottom:'0.75rem' }}>Highlights</div>
                <div style={{ display:'flex', flexDirection:'column', gap:'0.45rem' }}>
                  {edu.highlights.map((h, j) => (
                    <div key={j} style={{ display:'flex', gap:'0.6rem', color:'var(--muted)', fontSize:'0.88rem', lineHeight:1.5 }}>
                      <span style={{ color:edu.color, flexShrink:0 }}>✦</span>
                      {h}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Achievements */}
      <div className="reveal" style={{ marginTop:'4rem' }}>
        <div style={{ fontFamily:'Syne,sans-serif', fontWeight:700, fontSize:'1.3rem', marginBottom:'1.5rem', color:'var(--text)' }}>
          🏅 Achievements & Milestones
        </div>
        <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fit,minmax(250px,1fr))', gap:'1rem' }}>
          {achievements.map((a, i) => (
            <div key={i} className="ach-item glass" style={{ borderRadius:12, padding:'1.4rem 1.5rem' }}
              onMouseEnter={e => { e.currentTarget.style.borderColor='rgba(6,255,165,0.3)'; e.currentTarget.style.transform='translateY(-3px)' }}
              onMouseLeave={e => { e.currentTarget.style.borderColor='var(--border)'; e.currentTarget.style.transform='none' }}>
              <div style={{ fontFamily:'Syne,sans-serif', fontWeight:800, fontSize:'1rem', color:'var(--accent3)', marginBottom:'0.4rem' }}>
                {a.icon} {a.title}
              </div>
              <div style={{ color:'var(--muted)', fontSize:'0.85rem', lineHeight:1.6 }}>{a.desc}</div>
            </div>
          ))}
        </div>
      </div>

    </section>
  )
}
