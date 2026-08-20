import { useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'
import PillNav from '../components/PillNav.jsx'
import './Show.css'

const achievements = [
  {
    img: '/img/show.jpg',
    alt: 'Peringkat 3',
    title: '🏆 Peringkat 3 Juara Paralel',
    desc: 'Meraih peringkat 3 juara paralel di SMK Nuris Jember sebagai hasil dari konsistensi belajar dan kedisiplinan selama proses pembelajaran.',
    url: 'https://pesantrennuris.net/2025/06/kunci-raih-peringkat-3-paralel-di-smk-nuris-basyar-sukai-dulu-mata-pelajarannya/',
    delay: 0,
  },
  {
    img: '/img/show2.jpg',
    alt: 'LKS ITNSA',
    title: '🏅 5 Besar Lomba LKS ITNSA 2025',
    desc: 'Masuk 5 besar dalam kejuaraan LKS bidang IT Network System Administration (ITNSA) sebagai pengalaman kompetisi dan pengembangan kemampuan.',
    url: 'https://www.instagram.com/p/DGQTe8yy6Ta/',
    delay: 80,
  },
  {
    img: '/img/show3.jpg',
    alt: 'PKL Proxinet',
    title: '🛠️ Teknisi Jaringan PKL – PT. Proxinet',
    desc: 'Mengikuti kegiatan PKL sebagai teknisi jaringan di PT. Proxinet dan terlibat dalam berbagai aktivitas lapangan serta pendukung layanan jaringan.',
    url: 'https://proxinetjember.github.io/proxinet.jember/#activity',
    delay: 160,
  },
  {
    img: '/img/show4.jpg',
    alt: 'Robotika',
    title: '🤖 Lomba Robotika Line Follower – Universitas Jember',
    desc: 'Mengikuti lomba robotika line follower yang diselenggarakan di Universitas Jember sebagai pengalaman pengembangan minat dan kemampuan di bidang teknologi.',
    url: 'https://ft.unej.ac.id/jlt-vii-futuristic-war/',
    delay: 240,
  },
  {
    img: '/img/show5.jpeg',
    alt: 'OSIS',
    title: '📋 Pengurus OSIS – Sekretaris',
    desc: 'Menjadi anggota OSIS dan menjabat sebagai sekretaris dalam mendukung kegiatan organisasi dan administrasi sekolah.',
    url: 'https://smknurisjember.sch.id/article/16/ldk-dan-makesta-2025-pengurus-osis-smk-nuris-teguhkan-komitmen-pelajar-nu-yang-berintegritas',
    delay: 320,
  },
  {
    img: '/img/show7.jpeg',
    alt: 'OSIS',
    title: '🏅 Partisipasi – LKS ITNSA 2026',
    desc: 'Mengikuti kembali lomba LKS bidang IT Network System Administration (ITNSA) sebagai bentuk konsistensi dalam pengembangan kemampuan di bidang jaringan.',
    url: 'https://www.instagram.com/p/DUKRnF7Abkp/',
    delay: 320,
  },
  {
    img: '/img/show6.png',
    alt: 'OSIS',
    title: '🎓 Lulus SNBP – Politeknik Negeri Jember',
    desc: 'Dinyatakan lulus melalui jalur SNBP di Politeknik Negeri Jember sebagai bagian dari pencapaian akademik.',
    url: '/img/show6.png',
    delay: 320,
  },
]

export default function Show() {
  useEffect(() => {
    AOS.init({ offset: 60, easing: 'ease-out-cubic', once: true })
  }, [])

  return (
    <div className="show-page">
      <PillNav />

      <div className="projects-container">
        <h1 className="projects-title" data-aos="fade-down" data-aos-duration="1200">
          Show Me
        </h1>
        <div
          className="title-divider"
          data-aos="fade-down"
          data-aos-duration="1200"
          data-aos-delay="100"
        ></div>

        <div className="content-grid">
          {achievements.map((item) => (
            <div
              className="content-card"
              key={item.title}
              data-aos="fade-up"
              data-aos-duration="700"
              data-aos-delay={item.delay}
            >
              <div className="card-image">
                <img src={item.img} alt={item.alt} />
              </div>
              <div className="card-info">
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
                <a href={item.url} target="_blank" rel="noreferrer" className="visit-btn">
                  <i className="fa-solid fa-arrow-up-right-from-square"></i> Kunjungi
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
