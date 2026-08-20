import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import AOS from 'aos'
import 'aos/dist/aos.css'
import PillNav from '../components/PillNav.jsx'
import './Home.css'

const texts = ['NETWORK ENGINEER', 'PROGRAMMER', 'DESIGNER GRAPHIC']

export default function Home() {
  const navigate = useNavigate()
  const [displayText, setDisplayText] = useState('')

  useEffect(() => {
    AOS.init({ offset: 0, easing: 'ease-out-cubic' })
  }, [])

  useEffect(() => {
    let textIndex = 0
    let charIndex = 0
    let timeoutId

    const speed = 100

    function typeWriter() {
      if (charIndex < texts[textIndex].length) {
        charIndex++
        setDisplayText(texts[textIndex].slice(0, charIndex))
        timeoutId = setTimeout(typeWriter, speed)
      } else {
        timeoutId = setTimeout(eraseText, 1000)
      }
    }

    function eraseText() {
      if (charIndex > 0) {
        charIndex--
        setDisplayText(texts[textIndex].slice(0, charIndex))
        timeoutId = setTimeout(eraseText, 50)
      } else {
        textIndex = (textIndex + 1) % texts.length
        timeoutId = setTimeout(typeWriter, 500)
      }
    }

    timeoutId = setTimeout(typeWriter, 0)
    return () => clearTimeout(timeoutId)
  }, [])

  return (
    <div className="home-page">
      <PillNav />

      <section>
        <div className="main-container">
          <div className="content">
            <h1 data-aos="fade-left" data-aos-duration="1500" data-aos-delay="700">
              Hey I'm <span>Ilul</span>
            </h1>

            <div
              data-aos="fade-right"
              data-aos-duration="1500"
              data-aos-delay="900"
              className="typewriter"
            >
              I'm a <span className="typewriter-text">{displayText}</span>
              <label>|</label>
            </div>

            <p data-aos="flip-down" data-aos-duration="1500" data-aos-delay="1100">
              Saya memiliki fokus pada bidang desain grafis dan teknologi jaringan. Saya
              menuangkan ide kreatif ke dalam berbagai karya visual seperti poster, logo, dan
              konten digital dengan pendekatan yang fungsional dan komunikatif.
            </p>

            <div className="social-links">
              <a
                href="https://instagram.com/_ilulmagerbgt"
                data-aos="fade-up"
                data-aos-duration="1500"
                data-aos-delay="1300"
              >
                <i className="fa-brands fa-instagram"></i>
              </a>
              <a
                href="https://github.com/sukamager"
                data-aos="fade-up"
                data-aos-duration="1500"
                data-aos-delay="1400"
              >
                <i className="fa-brands fa-github"></i>
              </a>
              <a
                href="https://tiktok.com/@ilulsukamager"
                data-aos="fade-up"
                data-aos-duration="1500"
                data-aos-delay="1500"
              >
                <i className="fa-brands fa-tiktok"></i>
              </a>
              <a
                href="https://x.com/ilulsukamager"
                data-aos="fade-up"
                data-aos-duration="1500"
                data-aos-delay="1600"
              >
                <i className="fa-brands fa-x-twitter"></i>
              </a>
            </div>

            <div className="btn" data-aos="zoom-out" data-aos-duration="1500" data-aos-delay="1800">
              <button onClick={() => navigate('/about')}>Seputar Saya</button>
            </div>
          </div>

          <div className="image" data-aos="zoom-in" data-aos-duration="3000">
            <img src="/img/logo1.jpeg" alt="" />
          </div>
        </div>
      </section>
    </div>
  )
}
