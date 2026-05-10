import React from 'react'
import { experience } from '../utils/data'

export default function Experience() {
  return (
    <section id="experience" className="section-sep"
      style={{ padding:'8rem 3rem', background:'var(--bg2)', position:'relative', zIndex:2 }}>
      <div style={{ maxWidth:1000, margin:'0 auto' }}>

        <div className="reveal">
          <div className="section-label">Work Experience</div>
          <h2 className="section-title">Where I've<br/><span className="gradient-text">worked.</span></h2>
        </div>

        <div style={{ marginTop:'4rem', position:'relative', paddingLeft:'2.5rem' }}>
          {/* Vertical line */}
          <div style={{ position:'absolute', left:0, top:0, bottom:0, width:2, borderRadius:1, background:'linear-gradient(to bottom,var(--accent),var(--accent2),transparent)' }}/>

          {experience.map((job, i) => (
            <div key={job.id} className="timeline-item" data-delay={i * 120}
              style={{ position:'relative', paddingBottom:'3rem', paddingLeft:'2.5rem' }}>

              {/* Dot */}
              <div style={{ position:'absolute', left:-8, top:6, width:14, height:14, borderRadius:'50%', background:job.color, border:'2.5px solid var(--bg2)', boxShadow:`0 0 16px ${job.color}` }}/>

              {/* Card */}
              <div className="glass" style={{ padding:'1.8rem 2rem' }}
                onMouseEnter={e => e.currentTarget.style.borderColor=job.color+'55'}
                onMouseLeave={e => e.currentTarget.style.borderColor='var(--border)'}>

                {/* Header */}
                <div style={{ display:'flex', justifyContent:'space-between', alignItems:'flex-start', flexWrap:'wrap', gap:'0.5rem', marginBottom:'0.8rem' }}>
                  <div>
                    <div style={{ fontFamily:'Syne,sans-serif', fontSize:'1.25rem', fontWeight:800, color:'var(--text)', marginBottom:'0.2rem' }}>{job.role}</div>
                    <div style={{ fontSize:'0.95rem', color:'var(--muted)' }}>{job.company}</div>
                  </div>
                  <div style={{ display:'flex', flexDirection:'column', alignItems:'flex-end', gap:'0.4rem' }}>
                    <span style={{ fontSize:'0.75rem', color:job.color, fontWeight:600, letterSpacing:'0.06em', background:`${job.color}18`, border:`1px solid ${job.color}33`, borderRadius:100, padding:'0.25rem 0.75rem' }}>
                      {job.type}
                    </span>
                    <span style={{ fontSize:'0.78rem', color:'var(--muted)', fontFamily:'Syne,sans-serif' }}>{job.period}</span>
                  </div>
                </div>

                {/* Divider */}
                <div style={{ height:1, background:'var(--border)', margin:'1rem 0' }}/>

                {/* Points */}
                <ul style={{ listStyle:'none', padding:0, display:'flex', flexDirection:'column', gap:'0.6rem' }}>
                  {job.points.map((pt, j) => (
                    <li key={j} style={{ display:'flex', gap:'0.75rem', color:'var(--muted)', fontSize:'0.88rem', lineHeight:1.65 }}>
                      <span style={{ color:job.color, flexShrink:0, fontWeight:700, marginTop:2 }}>→</span>
                      {pt}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
