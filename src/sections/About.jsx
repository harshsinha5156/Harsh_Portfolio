import React from 'react'
import { motion } from 'framer-motion'
import { personalInfo, aboutSkills } from '../utils/data'

export default function About() {
  return (
    <section id="about" style={{ padding:'8rem 3rem', maxWidth:1200, margin:'0 auto', position:'relative', zIndex:2 }}>

      <div className="reveal">
        <div className="section-label">About Me</div>
        <h2 className="section-title">
          Crafting digital<br/>experiences that <span className="gradient-text">matter.</span>
        </h2>
      </div>

      <div style={{ display:'grid', gridTemplateColumns:'minmax(0,1fr) minmax(0,1.45fr)', gap:'5rem', alignItems:'start', marginTop:'3.5rem' }}
        className="about-grid-r">

        {/* Image */}
        <div className="reveal-left" style={{ position:'relative' }}>
          <div style={{ position:'absolute', inset:-3, borderRadius:20, background:'linear-gradient(135deg,var(--accent),var(--accent2),var(--accent3))', zIndex:-1, animation:'rotateBorder 4s ease-in-out infinite' }}/>
          <div style={{ borderRadius:18, overflow:'hidden', aspectRatio:'3/4', background:'var(--bg3)', position:'relative' }}>
            <img src="/harsh-photo.jpg" alt="Harsh Kumar Sinha"
              style={{ width:'100%', height:'100%', objectFit:'cover', objectPosition:'top center', filter:'contrast(1.05)', display:'block' }}
              onError={e => { e.target.style.display='none'; e.target.parentElement.style.background='linear-gradient(135deg,var(--bg2),var(--bg3))' }}
            />
            <div style={{ position:'absolute', inset:0, background:'linear-gradient(to top, rgba(0,0,0,0.5) 0%, transparent 45%)' }}/>
            {/* Badge */}
            <div style={{ position:'absolute', bottom:'1.5rem', left:'1.5rem', zIndex:2, background:'rgba(0,0,0,0.7)', backdropFilter:'blur(12px)', border:'1px solid var(--border2)', borderRadius:10, padding:'0.75rem 1.1rem', fontSize:'0.78rem', color:'var(--muted)' }}>
              <strong style={{ display:'block', fontFamily:'Syne,sans-serif', fontSize:'1.5rem', color:'var(--text)' }}>1+</strong>
              Year Experience
            </div>
          </div>
        </div>

        {/* Text */}
        <div className="reveal-right">
          {personalInfo.bio.map((p, i) => (
            <p key={i} style={{ color:'var(--muted)', lineHeight:1.85, marginBottom:'1.2rem', fontSize:'0.95rem' }}>
              {i === 1
                ? <>Currently at <strong style={{ color:'var(--text)' }}>Keyideas Infotech</strong>, building web apps with React, Next.js, Node.js, and customizing e-commerce on Shopify & WordPress.</>
                : p}
            </p>
          ))}

          <p style={{ color:'var(--text)', fontFamily:'Syne,sans-serif', fontWeight:600, fontSize:'0.9rem', marginBottom:'1rem', marginTop:'0.5rem', letterSpacing:'0.04em' }}>
            Core Skills
          </p>
          <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:'0.55rem', marginBottom:'2rem' }}>
            {aboutSkills.map(skill => (
              <div key={skill} style={{
                padding:'0.65rem 1rem', background:'var(--surface)', border:'1px solid var(--border)',
                borderRadius:8, fontSize:'0.82rem', color:'var(--muted)',
                display:'flex', alignItems:'center', gap:'0.5rem', transition:'all 0.2s',
              }}
              onMouseEnter={e => { e.currentTarget.style.borderColor='rgba(0,212,255,0.3)'; e.currentTarget.style.color='var(--text)'; e.currentTarget.style.background='var(--surface2)' }}
              onMouseLeave={e => { e.currentTarget.style.borderColor='var(--border)'; e.currentTarget.style.color='var(--muted)'; e.currentTarget.style.background='var(--surface)' }}
              >
                <span style={{ width:5, height:5, borderRadius:'50%', background:'var(--accent3)', flexShrink:0 }}/>
                {skill}
              </div>
            ))}
          </div>

          <a href={`mailto:${personalInfo.email}`}
            style={{ display:'inline-flex', alignItems:'center', gap:'0.5rem', color:'var(--accent)', textDecoration:'none', fontSize:'0.9rem', fontWeight:600, letterSpacing:'0.04em', fontFamily:'Syne,sans-serif' }}
            onMouseEnter={e => e.currentTarget.style.gap='0.8rem'}
            onMouseLeave={e => e.currentTarget.style.gap='0.5rem'}>
            Say hello → <span style={{ fontSize:'1.1rem' }}>✉</span>
          </a>
        </div>
      </div>

      <style>{`
        @media(max-width:768px){ .about-grid-r{ grid-template-columns:1fr !important; gap:2.5rem !important; } }
      `}</style>
    </section>
  )
}
