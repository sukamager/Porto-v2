import React from 'react';
import { motion } from 'framer-motion';

const ProjectsPage = () => {
  const projects = [
    {
      img: "/img/project0.png",
      title: "Project – Website Biodata Pribadi",
      desc: "Membuat website biodata pribadi sebagai media pengenalan diri, kemudahan kontak, dan penyajian informasi CV secara ringkas.",
      url: "https://sukamager.github.io/Portofolio/"
    },
    {
      img: "/img/project1.png",
      title: "Project – Website PT. Proxinet Jember",
      desc: "Website ini dibuat sebagai media informasi dan komunikasi PT. Proxinet Jember. Tujuannya untuk memudahkan penyampaian profil perusahaan dan akses kontak.",
      url: "https://proxinetjember.github.io/proxinet.jember/"
    },
    {
      img: "/img/project2.png",
      title: "Project – Website Portofolio Pribadi",
      desc: "Website portofolio ini dibuat sebagai media pengenalan diri dan kemudahan presentasi. Tampilan dirancang sederhana dan rapi agar informasi mudah disampaikan.",
      url: "https://dwiagustiav.github.io/Portofolio/"
    },
    {
      img: "/img/project3.jpeg",
      title: "Project – Konfigurasi Jaringan Mitra Baru PT. Proxinet",
      desc: "Project ini berisi pengalaman membantu proses konfigurasi jaringan pada mitra baru PT. Proxinet. Fokus kegiatan adalah memastikan jaringan dapat digunakan dengan normal.",
      url: "https://proxinetjember.github.io/proxinet.jember/hubungi.html"
    },
    {
      img: "/img/project4.jpeg",
      title: "Project – Pemasangan ODP dan Client Baru FTTH",
      desc: "Project ini berisi pengalaman pemasangan ODP dan penyambungan client baru pada jaringan FTTH. Fokus kegiatan adalah memastikan koneksi berjalan normal.",
      url: "https://proxinetjember.github.io/proxinet.jember/hubungi.html"
    },
    {
      img: "/img/project5.png",
      title: "Project – Website Bio Link Pribadi",
      desc: "Website bio link ini dibuat untuk mengumpulkan berbagai tautan media sosial dan informasi dalam satu halaman. Tujuannya untuk memudahkan akses dan berbagi profil secara praktis.",
      url: "https://sukamager.github.io/Bio-saya/"
    },
    {
      img: "/img/project6.png",
      title: "Project – Website Hobi Pendaki Gunung",
      desc: "Pembuatan website yang menyajikan informasi seputar hobi mendaki gunung sebagai media berbagi minat, dokumentasi, dan penyampaian konten secara visual.",
      url: "https://sukamager.github.io/mountain/"
    }
  ];

  return (
    <div className="projects-container">
      <motion.h1
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="projects-title"
      >
        My Projects
      </motion.h1>

      <div className="content-grid">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: index * 0.1, duration: 0.5 }}
            whileHover={{ 
              y: -10,
              transition: { duration: 0.3 }
            }}
            className="content-card"
          >
            <div className="card-image">
              <motion.img
                src={project.img}
                alt={project.title}
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.3 }}
              />
            </div>
            <div className="card-info">
              <h3>{project.title}</h3>
              <p>{project.desc}</p>
              <motion.a
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className="visit-btn"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Kunjungi
              </motion.a>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default ProjectsPage;
