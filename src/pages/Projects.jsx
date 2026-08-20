import { useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'
import PillNav from '../components/PillNav.jsx'
import './Projects.css'

const projects = [
  {
    img: '/img/project0.png',
    title: 'Project – Website Biodata Pribadi',
    desc: 'Membuat website biodata pribadi sebagai media pengenalan diri, kemudahan kontak, dan penyajian informasi CV secara ringkas.',
    url: 'https://sukamager.github.io/Portofolio/',
  },
  {
    img: '/img/project1.png',
    title: 'Project – Website PT. Proxinet Jember',
    desc: 'Website ini dibuat sebagai media informasi dan komunikasi PT. Proxinet Jember. Tujuannya untuk memudahkan penyampaian profil perusahaan dan akses kontak.',
    url: 'https://proxinetjember.github.io/proxinet.jember/',
  },
  {
    img: '/img/project2.png',
    title: 'Project – Website Portofolio Pribadi',
    desc: 'Website portofolio ini dibuat sebagai media pengenalan diri dan kemudahan presentasi. Tampilan dirancang sederhana dan rapi agar informasi mudah disampaikan.',
    url: 'https://dwiagustiav.github.io/Portofolio/',
  },
  {
    img: '/img/project3.jpeg',
    title: 'Project – Konfigurasi Jaringan Mitra Baru PT. Proxinet',
    desc: 'Project ini berisi pengalaman membantu proses konfigurasi jaringan pada mitra baru PT. Proxinet. Fokus kegiatan adalah memastikan jaringan dapat digunakan dengan normal.',
    url: 'https://proxinetjember.github.io/proxinet.jember/hubungi.html',
  },
  {
    img: '/img/project4.jpeg',
    title: 'Project – Pemasangan ODP dan Client Baru FTTH',
    desc: 'Project ini berisi pengalaman pemasangan ODP dan penyambungan client baru pada jaringan FTTH. Fokus kegiatan adalah memastikan koneksi berjalan normal.',
    url: 'https://proxinetjember.github.io/proxinet.jember/hubungi.html',
  },
  {
    img: '/img/project5.png',
    title: 'Project – Website Bio Link Pribadi',
    desc: 'Website bio link ini dibuat untuk mengumpulkan berbagai tautan media sosial dan informasi dalam satu halaman. Tujuannya untuk memudahkan akses dan berbagi profil secara praktis.',
    url: 'https://sukamager.github.io/Bio-saya/',
  },
  {
    img: '/img/project6.png',
    title: 'Project – Website Hobi Pendaki Gunung',
    desc: 'Pembuatan website yang menyajikan informasi seputar hobi mendaki gunung sebagai media berbagi minat, dokumentasi, dan penyampaian konten secara visual.',
    url: 'https://sukamager.github.io/mountain/',
  },
  {
    img: '/img/project7.png',
    title: 'Project – Update Website Bio Link Sosial Media (V2)',
    desc: 'Pengembangan lanjutan website bio link sosial media dengan pembaruan tampilan dan struktur untuk meningkatkan kemudahan akses informasi dan kontak.',
    url: 'https://sukamager.github.io/Bio-Me/',
  },
  {
    img: '/img/project8.png',
    title: 'Project – Website Angkatan Sekolah',
    desc: 'Website ini dibuat sebagai media informasi dan dokumentasi angkatan sekolah. Menyajikan data siswa, kegiatan, serta momen kebersamaan dalam satu platform digital.',
    url: 'https://abhipryaanagata.github.io/angkatan21/',
  },
]

export default function Projects() {
  useEffect(() => {
    AOS.init({ offset: 60, easing: 'ease-out-cubic', once: true })
  }, [])

  return (
    <div className="projects-page">
      <PillNav />

      <div className="projects-container">
        <h1 className="projects-title" data-aos="fade-down" data-aos-duration="1200">
          My Projects
        </h1>
        <div
          className="title-divider"
          data-aos="fade-down"
          data-aos-duration="1200"
          data-aos-delay="100"
        ></div>

        <div className="content-grid">
          {projects.map((project, index) => (
            <div
              className="content-card"
              key={project.title}
              data-aos="fade-up"
              data-aos-duration="700"
              data-aos-delay={index * 80}
            >
              <div className="card-image">
                <img src={project.img} alt={project.title} />
              </div>
              <div className="card-info">
                <h3>{project.title}</h3>
                <p>{project.desc}</p>
                <a href={project.url} target="_blank" rel="noreferrer" className="visit-btn">
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
