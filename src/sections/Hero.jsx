import React from 'react'
import { motion } from 'framer-motion'
import { personalInfo, typewriterPhrases, stats } from '../utils/data'
import { useTypewriter } from '../hooks/useTypewriter'

export default function Hero() {
  const typed = useTypewriter(typewriterPhrases)

  const fadeUp = (delay = 0) => ({
    initial: { opacity: 0, y: 28 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.85, delay, ease: [0.16,1,0.3,1] },
  })

  return (
    <section id="hero" style={{
      minHeight: '100vh', display: 'flex', alignItems: 'center',
      padding: '6rem 3rem 5rem', overflow: 'hidden', position: 'relative',
    }}>
      {/* BG orbs */}
      <div style={{ position:'absolute', inset:0, zIndex:0, overflow:'hidden' }}>
        <div style={{
          position:'absolute', width:700, height:700, borderRadius:'50%',
          background:'radial-gradient(circle, var(--glow2) 0%, transparent 70%)',
          top:'-20%', left:'-10%', animation:'orb1 12s ease-in-out infinite',
        }}/>
        <div style={{
          position:'absolute', width:600, height:600, borderRadius:'50%',
          background:'radial-gradient(circle, var(--glow1) 0%, transparent 70%)',
          bottom:'-15%', right:'-5%', animation:'orb2 15s ease-in-out infinite',
        }}/>
        <div style={{
          position:'absolute', width:400, height:400, borderRadius:'50%',
          background:'radial-gradient(circle, var(--glow3) 0%, transparent 70%)',
          top:'40%', left:'40%', animation:'orb1 18s ease-in-out infinite reverse',
        }}/>
      </div>

      <div className="hero-grid" />

      <div style={{ position:'relative', zIndex:2, maxWidth:1100, width:'100%', margin:'0 auto' }}>
        <div style={{ display:'grid', gridTemplateColumns:'1.1fr 0.9fr', gap:'4rem', alignItems:'center' }}
          className="hero-grid-responsive">

          {/* Left */}
          <div>
           

            {/* Name heading */}
            <div style={{ overflow:'hidden', marginBottom:'0.3rem' }}>
              <motion.p
                initial={{ y:'110%', opacity:0 }}
                animate={{ y:0, opacity:1 }}
                transition={{ duration:0.9, delay:0.2, ease:[0.16,1,0.3,1] }}
                style={{ fontFamily:'Syne,sans-serif', fontWeight:600, fontSize:'1rem',
                  color:'var(--muted)', letterSpacing:'0.12em', textTransform:'uppercase' }}>
                Hi, I'm
              </motion.p>
            </div>

            {['Harsh Kumar', 'Sinha'].map((line, i) => (
              <div key={i} style={{ overflow:'hidden' }}>
                <motion.h1
                  initial={{ y:'110%', opacity:0 }}
                  animate={{ y:0, opacity:1 }}
                  transition={{ duration:0.95, delay:0.3 + i*0.12, ease:[0.16,1,0.3,1] }}
                  style={{
                    fontFamily:'Syne,sans-serif',
                    fontSize:'clamp(3rem,6.5vw,5.5rem)',
                    fontWeight:600, lineHeight:1.0,
                    letterSpacing:'-0.03em',
                    color: i===1 ? undefined : 'var(--text)',
                    display:'block',
                  }}
                  className={i===1 ? 'gradient-text' : ''}
                >
                  {line}
                </motion.h1>
              </div>
            ))}

            {/* Role typewriter */}
            <motion.div {...fadeUp(0.65)} style={{
              marginTop:'1rem', marginBottom:'1.5rem',
              fontFamily:'Syne,sans-serif', fontSize:'clamp(1.1rem,2.5vw,1.5rem)',
              fontWeight:600, color:'var(--text2)',
              display:'flex', alignItems:'center', gap:'0.4rem', flexWrap:'wrap',
            }}>
              <span style={{ color:'var(--muted)' }}>I'm a</span>
              <span style={{ color:'var(--accent)', borderRight:'2px solid var(--accent)', paddingRight:3, animation:'blink 0.85s infinite' }}>
                {typed}
              </span>
            </motion.div>

            <motion.p {...fadeUp(0.75)} style={{
              color:'var(--muted)', fontSize:'1rem', maxWidth:480,
              lineHeight:1.8, marginBottom:'2.2rem',
            }}>
              Results-driven full-stack developer building scalable web & e-commerce apps. I take products from idea to deployment with clean architecture & reliability.
            </motion.p>

            {/* CTAs */}
            <motion.div {...fadeUp(0.88)} style={{ display:'flex', gap:'1rem', flexWrap:'wrap' }}>
              <a href="#projects" style={btnPrimary}
                onMouseEnter={e => { e.currentTarget.style.transform='translateY(-3px)'; e.currentTarget.style.boxShadow='0 0 50px rgba(0,212,255,0.45)' }}
                onMouseLeave={e => { e.currentTarget.style.transform='none'; e.currentTarget.style.boxShadow='0 0 28px rgba(0,212,255,0.2)' }}>
                View My Work ↓
              </a>
              <a href="#contact" style={btnOutline}
                onMouseEnter={e => { e.currentTarget.style.borderColor='var(--accent)'; e.currentTarget.style.color='var(--accent)'; e.currentTarget.style.background='rgba(0,212,255,0.06)' }}
                onMouseLeave={e => { e.currentTarget.style.borderColor='var(--border2)'; e.currentTarget.style.color='var(--text)'; e.currentTarget.style.background='transparent' }}>
                Let's Talk →
              </a>
            </motion.div>

            {/* Stats */}
            <motion.div {...fadeUp(1.0)} style={{
              display:'grid', gridTemplateColumns:'repeat(4,1fr)',
              gap:'0.8rem', marginTop:'2.8rem',
            }} className="stats-grid-responsive">
              {stats.map(s => (
                <div key={s.label} style={{
                  padding:'0.9rem 0.5rem', textAlign:'center',
                  background:'var(--surface)', border:'1px solid var(--border)',
                  borderRadius:10, transition:'border-color 0.2s',
                }}
                onMouseEnter={e => e.currentTarget.style.borderColor='var(--accent)'}
                onMouseLeave={e => e.currentTarget.style.borderColor='var(--border)'}>
                  <div style={{ fontFamily:'Syne,sans-serif', fontWeight:800, fontSize:'1.3rem', color:'var(--accent)' }}>{s.value}</div>
                  <div style={{ fontSize:'0.68rem', color:'var(--muted)', marginTop:3, letterSpacing:'0.04em', lineHeight:1.3 }}>{s.label}</div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right — photo */}
          <motion.div
            initial={{ opacity:0, scale:0.9, x:30 }}
            animate={{ opacity:1, scale:1, x:0 }}
            transition={{ duration:1.0, delay:0.4, ease:[0.16,1,0.3,1] }}
            style={{ display:'flex', justifyContent:'center', alignItems:'center' }}
            className="hero-photo-wrap"
          >
            <div style={{ position:'relative', width:'min(380px,90vw)' }}>
              {/* Spinning ring */}
              <div style={{
                position:'absolute', inset:-14,
                border:'1.5px dashed rgba(0,212,255,0.25)',
                borderRadius:'50%', animation:'spinSlow 20s linear infinite',
              }}/>
              <div style={{
                position:'absolute', inset:-28,
                border:'1px dashed rgba(124,58,237,0.18)',
                borderRadius:'50%', animation:'spinSlow 30s linear infinite reverse',
              }}/>
              {/* Gradient blob behind */}
              <div style={{
                position:'absolute', inset:10,
                background:'linear-gradient(135deg, var(--glow2), var(--glow1))',
                borderRadius:'50%', filter:'blur(30px)',
              }}/>
              {/* Photo container */}
              <div style={{
                position:'relative', borderRadius:'50%', overflow:'hidden',
                border:'3px solid transparent',
                background:'linear-gradient(var(--bg3),var(--bg3)) padding-box, linear-gradient(135deg,var(--accent),var(--accent2),var(--accent3)) border-box',
                aspectRatio:'1/1',
                boxShadow:'0 30px 80px var(--shadow)',
              }}>
                <img
                  src="/harsh-photo.jpg"
                  alt="Harsh Kumar Sinha"
                  style={{ width:'100%', height:'100%', objectFit:'cover', objectPosition:'top center', display:'block' }}
                  onError={e => {
                    e.target.style.display='none'
                    e.target.parentElement.innerHTML='<div style="width:100%;height:100%;display:flex;align-items:center;justify-content:center;font-family:Syne,sans-serif;font-size:4rem;font-weight:800;background:linear-gradient(135deg,var(--accent),var(--accent2));-webkit-background-clip:text;-webkit-text-fill-color:transparent">HKS</div>'
                  }}
                />
              </div>
              {/* Floating badge */}
              <div style={{
                position:'absolute', bottom:'6%', right:'-8%',
                background:'var(--card)', backdropFilter:'blur(12px)',
                border:'1px solid var(--border2)', borderRadius:12,
                padding:'0.65rem 1rem', fontSize:'0.78rem', color:'var(--muted)',
                animation:'float 4s ease-in-out infinite',
                whiteSpace:'nowrap',
                boxShadow:'0 8px 30px var(--shadow)',
              }}>
                ⚡ <span style={{ color:'var(--text)', fontWeight:600 }}>1+ yrs experience</span>
              </div>
              <div style={{
                position:'absolute', top:'8%', left:'-10%',
                background:'var(--card)', backdropFilter:'blur(12px)',
                border:'1px solid var(--border2)', borderRadius:12,
                padding:'0.65rem 1rem', fontSize:'0.78rem', color:'var(--muted)',
                animation:'float 5s ease-in-out infinite 1.5s',
                whiteSpace:'nowrap',
                boxShadow:'0 8px 30px var(--shadow)',
              }}>
                🏆 <span style={{ color:'var(--text)', fontWeight:600 }}>428+ LeetCode</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div initial={{ opacity:0 }} animate={{ opacity:1 }} transition={{ delay:1.4 }}
        style={{
          position:'absolute', bottom:'2rem', left:'50%', transform:'translateX(-50%)',
          display:'flex', flexDirection:'column', alignItems:'center', gap:'0.5rem',
          color:'var(--muted)', fontSize:'0.7rem', letterSpacing:'0.12em', zIndex:2,
        }}>
        <span>SCROLL</span>
        <div className="scroll-line"/>
      </motion.div>

      <style>{`
        .hero-grid-responsive { }
        .stats-grid-responsive { }
        @media(max-width:900px) {
          .hero-grid-responsive { grid-template-columns:1fr !important; }
          .hero-photo-wrap { display:none !important; }
          .stats-grid-responsive { grid-template-columns:repeat(2,1fr) !important; }
        }
      `}</style>
    </section>
  )
}

const btnPrimary = {
  padding:'0.85rem 2rem', display:'inline-block',
  background:'linear-gradient(135deg, var(--accent), var(--accent2))',
  color:'#fff', border:'none', borderRadius:8,
  fontFamily:'Syne,sans-serif', fontWeight:700, fontSize:'0.9rem',
  letterSpacing:'0.04em', textDecoration:'none', cursor:'none',
  transition:'transform 0.2s, box-shadow 0.2s',
  boxShadow:'0 0 28px rgba(0,212,255,0.2)',
}
const btnOutline = {
  padding:'0.85rem 2rem', display:'inline-block',
  background:'transparent', color:'var(--text)',
  border:'1px solid var(--border2)', borderRadius:8,
  fontFamily:'Syne,sans-serif', fontWeight:700, fontSize:'0.9rem',
  letterSpacing:'0.04em', textDecoration:'none', cursor:'none',
  transition:'all 0.2s',
}
