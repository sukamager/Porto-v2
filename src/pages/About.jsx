import { useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'
import PillNav from '../components/PillNav.jsx'
import './About.css'

const spotifyTracks = [
  '1imyB3ufkQTtOnD2PYUSuu',
  '2vzpoecVhBE1pKtHzKONaN',
  '5xtZ0Zz2J2ugaO6w6yC48w',
  '5MIpcd16T59wFeqAChSYwC',
  '4HPxh6IkRxCkb3T06Pltch',
  '3z2Kcl9Oz1IxSgVoKN6RXo',
]

export default function About() {
  useEffect(() => {
    AOS.init({ offset: 0, easing: 'ease-out-cubic', once: true })
  }, [])

  return (
    <div className="about-page">
      <PillNav />

      <div className="about-container">
        <div className="about-content" id="aboutContent">
          <div className="about-header" data-aos="fade-down" data-aos-duration="1200">
            <h1>About Me</h1>
            <div className="divider"></div>
          </div>

          <div className="about-grid">
            <div className="about-image" data-aos="fade-right" data-aos-duration="1400">
              <img src="/img/logo2.jpeg" alt="About Image" />
            </div>

            <div
              className="about-text"
              data-aos="fade-left"
              data-aos-duration="1400"
              data-aos-delay="100"
            >
              <h2>Who Am I?</h2>
              <p>
                Halo, saya Khoirul Basyar. Saya memiliki fokus pada bidang seni visual dan
                teknologi jaringan. Saya terbiasa mengembangkan karya desain grafis, baik secara
                manual maupun digital, untuk menghasilkan materi visual yang komunikatif,
                informatif, dan fungsional.
              </p>
              <p>
                Selain itu, saya memiliki ketertarikan pada sistem jaringan komputer, khususnya
                dalam perancangan dan pengelolaan jaringan lokal. Saya terbiasa menggunakan
                perangkat jaringan serta software simulasi seperti Cisco Packet Tracer, dan terus
                mengembangkan kemampuan teknis serta kreatif melalui pembelajaran mandiri dan
                pengerjaan proyek.
              </p>

              <div className="info-badges">
                <span className="badge" data-aos="zoom-in" data-aos-delay="200">
                  <i className="fa-solid fa-network-wired"></i> Network
                </span>
                <span className="badge" data-aos="zoom-in" data-aos-delay="280">
                  <i className="fa-solid fa-pen-nib"></i> Graphic Design
                </span>
                <span className="badge" data-aos="zoom-in" data-aos-delay="360">
                  <i className="fa-solid fa-code"></i> Programmer
                </span>
                <span className="badge" data-aos="zoom-in" data-aos-delay="440">
                  <i className="fa-solid fa-layer-group"></i> Cisco Packet Tracer
                </span>
              </div>
            </div>
          </div>

          <div
            className="spotify-section"
            data-aos="fade-up"
            data-aos-duration="1400"
            data-aos-delay="100"
          >
            <h2>🎧 Music I Listen To</h2>
            <div className="spotify-list">
              {spotifyTracks.map((id, index) => (
                <div
                  className="spotify-card"
                  key={id}
                  data-aos="fade-up"
                  data-aos-delay={index * 80}
                >
                  <iframe
                    src={`https://open.spotify.com/embed/track/${id}`}
                    loading="lazy"
                    title={`spotify-track-${id}`}
                  ></iframe>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
