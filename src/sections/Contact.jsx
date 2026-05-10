import React, { useState } from 'react'
import { personalInfo } from '../utils/data'
import { FaEnvelope, FaLinkedin, FaGithub } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";

const socials = [
  { label: 'Email', icon: <FaEnvelope />, href: `mailto:${personalInfo.email}` },
  { label: 'LinkedIn', icon: <FaLinkedin />, href: personalInfo.linkedin },
  { label: 'GitHub', icon: <FaGithub />, href: personalInfo.github },
  { label: 'LeetCode', icon: <SiLeetcode />, href: personalInfo.leetcode },
];

export default function Contact() {
  const [status, setStatus] = useState('idle')

  async function handleSubmit(e) {
    e.preventDefault()
    setStatus('sending')

    const formData = new FormData(e.target)

    const data = {
      name: formData.get("name"),
      email: formData.get("email"),
      subject: formData.get("subject"),
      message: formData.get("message"),
    }

    try {
      const res = await fetch("http://localhost:5001/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      })

      if (res.ok) {
        setStatus('sent')
        e.target.reset()
        setTimeout(() => setStatus('idle'), 4000)
      } else {
        setStatus('idle')
        alert("Failed ❌")
      }
    } catch (err) {
      console.log(err)
      setStatus('idle')
      alert("Error ❌")
    }
  }

  return (
    <section id="contact" className="section-sep"
      style={{ padding:'8rem 3rem', background:'var(--bg2)', position:'relative', zIndex:2 }}>
      <div style={{ maxWidth:860, margin:'0 auto' }}>

        <div className="reveal" style={{ textAlign:'center', marginBottom:'3rem' }}>
          <div className="section-label" style={{ justifyContent:'center' }}>Contact</div>
          <h2 className="section-title" style={{ textAlign:'center' }}>
            Let's build something<br/><span className="gradient-text">great together.</span>
          </h2>
          <p style={{ color:'var(--muted)', maxWidth:480, margin:'1.2rem auto 0', lineHeight:1.8 }}>
            Open to full-time roles, freelance projects, and collaborations. Drop me a message!
          </p>
        </div>

        <div className="reveal glass" style={{ borderRadius:20, padding:'2.5rem' }}>
          <form onSubmit={handleSubmit}>
            <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:'1rem', marginBottom:'1rem' }} className="form-r">
              <Field label="Name" name="name" type="text" placeholder="Your full name" required/>
              <Field label="Email" name="email" type="email" placeholder="your@email.com" required/>
            </div>

            <Field label="Subject" name="subject" type="text" placeholder="What's this about?" style={{ marginBottom:'1rem' }}/>
            <Field label="Message" name="message" type="textarea" placeholder="Tell me about your project or opportunity..." style={{ marginBottom:'1.5rem' }}/>

            <button type="submit" style={{
              width:'100%', padding:'1rem', borderRadius:8,
              background: status==='sent' ? 'linear-gradient(135deg,var(--accent3),var(--accent))' : 'linear-gradient(135deg,var(--accent),var(--accent2))',
              color:'#fff', border:'none', fontFamily:'Syne,sans-serif',
              fontWeight:700, fontSize:'1rem', letterSpacing:'0.04em',
              cursor:'none', transition:'all 0.4s',
              boxShadow: status==='sent' ? '0 0 40px rgba(6,255,165,0.3)' : '0 0 30px rgba(0,212,255,0.2)',
            }}>
              {status==='idle' && 'Send Message →'}
              {status==='sending' && '⟳ Sending...'}
              {status==='sent' && '✓ Message Sent! I\'ll be in touch.'}
            </button>
          </form>

          <div style={{ display:'flex', alignItems:'center', gap:'1rem', margin:'2rem 0' }}>
            <div style={{ flex:1, height:1, background:'var(--border)' }}/>
            <span style={{ color:'var(--muted)', fontSize:'0.8rem' }}>or reach me directly</span>
            <div style={{ flex:1, height:1, background:'var(--border)' }}/>
          </div>

          <div style={{ display:'flex', justifyContent:'center', gap:'0.75rem', flexWrap:'wrap' }}>
            {socials.map(s => (
              <a key={s.label} href={s.href} title={s.label}
                target={s.href.startsWith('mailto') ? '_self' : '_blank'} rel="noopener noreferrer"
                style={{ width:50, height:50, border:'1px solid var(--border)', borderRadius:12, display:'flex', alignItems:'center', justifyContent:'center', color:'var(--muted)', textDecoration:'none', fontSize:'1.1rem', transition:'all 0.2s', cursor:'none' }}>
                {s.icon}
              </a>
            ))}
          </div>
        </div>
      </div>
      <style>{`@media(max-width:600px){.form-r{grid-template-columns:1fr !important;}}`}</style>
    </section>
  )
}

function Field({ label, name, type='text', placeholder, required, style={} }) {
  const base = {
    width:'100%', padding:'0.85rem 1.1rem',
    background:'var(--surface)', border:'1px solid var(--border)',
    borderRadius:8, color:'var(--text)', fontFamily:'DM Sans,sans-serif',
    fontSize:'0.93rem', outline:'none',
    resize:'vertical',
  }

  return (
    <div style={{ marginBottom:'1rem', ...style }}>
      <label style={{ display:'block', fontSize:'0.75rem', fontWeight:600 }}>{label}</label>

      {type==='textarea'
        ? <textarea name={name} placeholder={placeholder} required={required} rows={5} style={base} />
        : <input name={name} type={type} placeholder={placeholder} required={required} style={base} />
      }
    </div>
  )
}