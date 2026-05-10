import { useState, useEffect } from 'react'

export function useTypewriter(phrases, speed = 80, deleteSpeed = 50, pauseTime = 1900) {
  const [text, setText] = useState('')
  const [pi, setPi] = useState(0)
  const [ci, setCi] = useState(0)
  const [deleting, setDeleting] = useState(false)

  useEffect(() => {
    const phrase = phrases[pi]
    const timeout = setTimeout(() => {
      if (!deleting) {
        setText(phrase.slice(0, ci + 1))
        if (ci + 1 === phrase.length) { setTimeout(() => setDeleting(true), pauseTime); return }
        setCi(c => c + 1)
      } else {
        setText(phrase.slice(0, ci - 1))
        if (ci - 1 === 0) { setDeleting(false); setPi(p => (p+1) % phrases.length); setCi(0); return }
        setCi(c => c - 1)
      }
    }, deleting ? deleteSpeed : speed)
    return () => clearTimeout(timeout)
  }, [ci, deleting, pi, phrases, speed, deleteSpeed, pauseTime])

  return text
}
