import { useEffect, useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import './Splash.css'

const codeSymbols = ['<', '>', '{', '}', '(', ')', '[', ']', '/', '\\', '0', '1']

export default function Splash() {
  const navigate = useNavigate()
  const particlesRef = useRef(null)
  const codeRainRef = useRef(null)

  useEffect(() => {
    // Particles
    const particlesContainer = particlesRef.current
    for (let i = 0; i < 25; i++) {
      const particle = document.createElement('div')
      particle.className = 'particle'
      const size = Math.random() * 4 + 2
      particle.style.width = size + 'px'
      particle.style.height = size + 'px'
      particle.style.left = Math.random() * 100 + '%'
      particle.style.animationDelay = Math.random() * 4 + 's'
      particle.style.animationDuration = Math.random() * 2 + 3 + 's'
      particlesContainer.appendChild(particle)
    }

    // Code rain
    const codeRainContainer = codeRainRef.current
    for (let i = 0; i < 20; i++) {
      const code = document.createElement('div')
      code.className = 'code-rain'
      code.textContent = codeSymbols[Math.floor(Math.random() * codeSymbols.length)]
      code.style.left = Math.random() * 100 + '%'
      code.style.animationDelay = Math.random() * 3 + 's'
      code.style.animationDuration = Math.random() * 2 + 2 + 's'
      codeRainContainer.appendChild(code)
    }

    // Redirect ke halaman home setelah 3 detik
    const timer = setTimeout(() => {
      navigate('/home')
    }, 3000)

    return () => clearTimeout(timer)
  }, [navigate])

  return (
    <div className="splash-screen">
      <div className="particles" ref={particlesRef}></div>
      <div ref={codeRainRef}></div>
      <div className="content">
        <div className="logo-container">
          <div className="code-logo">
            <img src="/img/logo-wayang.png" alt="Logo Wayang" />
          </div>
        </div>
        <div className="tagline">SUKAMAGER</div>
        <div className="subtitle">Selamat datang &amp; Tunggu sebentar</div>
        <div className="loader">
          <div className="loader-bar"></div>
        </div>
      </div>
    </div>
  )
}
