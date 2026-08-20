import { useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'
import PillNav from '../components/PillNav.jsx'
import './Contact.css'

export default function Contact() {
  useEffect(() => {
    AOS.init({ offset: 0, easing: 'ease-out-cubic', once: true })
  }, [])

  return (
    <div className="contact-page">
      <PillNav />

      <div className="contact-container">
        <div className="contact-content">
          {/* LEFT: Info */}
          <div className="contact-info">
            <div className="contact-header" data-aos="fade-right" data-aos-duration="1200">
              <h1>Mengenal Lebih Dalam</h1>
              <div className="divider"></div>
              <p>Silahkan untuk bertanya lebih dalam mengenai saya, atau sekadar menyapa.</p>
            </div>

            <div className="contact-details">
              <div
                className="contact-item"
                data-aos="fade-right"
                data-aos-duration="1000"
                data-aos-delay="100"
              >
                <div className="contact-icon">
                  <i className="fas fa-phone"></i>
                </div>
                <div className="contact-text">
                  <h3>Phone</h3>
                  <p>+62 857 9146 4989</p>
                </div>
              </div>

              <div
                className="contact-item"
                data-aos="fade-right"
                data-aos-duration="1000"
                data-aos-delay="200"
              >
                <div className="contact-icon">
                  <i className="fas fa-envelope"></i>
                </div>
                <div className="contact-text">
                  <h3>Email</h3>
                  <p>basyarmuhammad13@gmail.com</p>
                </div>
              </div>

              <div
                className="contact-item"
                data-aos="fade-right"
                data-aos-duration="1000"
                data-aos-delay="300"
              >
                <div className="contact-icon">
                  <i className="fas fa-location-dot"></i>
                </div>
                <div className="contact-text">
                  <h3>Lokasi</h3>
                  <p>Jember, Indonesia</p>
                </div>
              </div>
            </div>

            <div
              className="social-links"
              data-aos="fade-up"
              data-aos-duration="1000"
              data-aos-delay="400"
            >
              <a href="https://instagram.com/_ilulmagerbgt">
                <i className="fa-brands fa-instagram"></i>
              </a>
              <a href="https://github.com/sukamager">
                <i className="fa-brands fa-github"></i>
              </a>
              <a href="https://tiktok.com/@ilulsukamager">
                <i className="fa-brands fa-tiktok"></i>
              </a>
              <a href="https://x.com/ilulsukamager">
                <i className="fa-brands fa-x-twitter"></i>
              </a>
            </div>
          </div>

          {/* RIGHT: Form */}
          <div
            className="contact-form"
            data-aos="fade-left"
            data-aos-duration="1200"
            data-aos-delay="100"
          >
            <p className="form-title">Kirim Pesan ✉️</p>

            <form action="https://formsubmit.co/basyarmuhammad13%40gmail.com" method="POST">
              <input type="hidden" name="_captcha" value="false" />
              {/* Ganti URL berikut sesuai domain hasil deploy React app kamu */}
              <input type="hidden" name="_next" value="https://sukamager.github.io/Portofolio/thanks.html" />

              <div className="form-group">
                <input type="text" name="name" id="name" placeholder=" " required />
                <label htmlFor="name">Nama</label>
              </div>

              <div className="form-group">
                <input type="text" name="whatsapp" id="wa" placeholder=" " required />
                <label htmlFor="wa">No WhatsApp Kamu</label>
              </div>

              <div className="form-group">
                <textarea name="message" id="message" placeholder=" " required></textarea>
                <label htmlFor="message">Pesan</label>
              </div>

              <button type="submit" className="submit-btn">
                Kirim Pesan
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}
