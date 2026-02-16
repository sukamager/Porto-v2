import React from 'react';
import { motion } from 'framer-motion';

const ShowPage = () => {
  const achievements = [
    {
      img: "/img/show.jpg",
      title: "🏆 Peringkat 3 Juara Paralel",
      desc: "Meraih peringkat 3 juara paralel di SMK Nuris Jember sebagai hasil dari konsistensi belajar dan kedisiplinan selama proses pembelajaran.",
      url: "https://pesantrennuris.net/2025/06/kunci-raih-peringkat-3-paralel-di-smk-nuris-basyar-sukai-dulu-mata-pelajarannya/"
    },
    {
      img: "/img/show2.jpg",
      title: "🥉 5 Besar Lomba LKS ITNSA 2025",
      desc: "Masuk 5 besar dalam kejuaraan LKS bidang IT Network System Administration (ITNSA) sebagai pengalaman kompetisi dan pengembangan kemampuan.",
      url: "https://www.instagram.com/p/DGQTe8yy6Ta/"
    },
    {
      img: "/img/show3.jpg",
      title: "🛠️ Teknisi Jaringan PKL – PT. Proxinet",
      desc: "Mengikuti kegiatan PKL sebagai teknisi jaringan di PT. Proxinet dan terlibat dalam berbagai aktivitas lapangan serta pendukung layanan jaringan.",
      url: "https://proxinetjember.github.io/proxinet.jember/#activity"
    },
    {
      img: "/img/show4.jpg",
      title: "🤖 Lomba Robotika Line Follower – Universitas Jember",
      desc: "Mengikuti lomba robotika line follower yang diselenggarakan di Universitas Jember sebagai pengalaman pengembangan minat dan kemampuan di bidang teknologi.",
      url: "https://ft.unej.ac.id/jlt-vii-futuristic-war/"
    },
    {
      img: "/img/show5.jpeg",
      title: "📋 Pengurus OSIS – Sekretaris",
      desc: "Menjadi anggota OSIS dan menjabat sebagai sekretaris dalam mendukung kegiatan organisasi dan administrasi sekolah.",
      url: "https://smknurisjember.sch.id/article/16/ldk-dan-makesta-2025-pengurus-osis-smk-nuris-teguhkan-komitmen-pelajar-nu-yang-berintegritas"
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
        Show Me
      </motion.h1>

      <div className="content-grid">
        {achievements.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1, duration: 0.5 }}
            whileHover={{ 
              y: -10,
              transition: { duration: 0.3 }
            }}
            className="content-card"
          >
            <div className="card-image">
              <motion.img
                src={item.img}
                alt={item.title}
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.3 }}
              />
            </div>
            <div className="card-info">
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
              <motion.a
                href={item.url}
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

export default ShowPage;
