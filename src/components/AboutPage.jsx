import React from 'react';
import { motion } from 'framer-motion';

const AboutPage = () => {
  const spotifyTracks = [
    "1imyB3ufkQTtOnD2PYUSuu",
    "2vzpoecVhBE1pKtHzKONaN",
    "5xtZ0Zz2J2ugaO6w6yC48w",
    "5MIpcd16T59wFeqAChSYwC",
    "4HPxh6IkRxCkb3T06Pltch",
    "3z2Kcl9Oz1IxSgVoKN6RXo"
  ];

  return (
    <div className="about-container">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="about-content"
      >
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="about-header"
        >
          <h1>About Me</h1>
        </motion.div>

        <div className="about-grid">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            whileHover={{ scale: 1.05 }}
            className="about-image"
          >
            <img src="/img/logo2.jpg" alt="About" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="about-text"
          >
            <h2>Who Am I?</h2>
            <p>
              Halo, saya Khoirul Basyar. Saya memiliki fokus pada bidang seni visual 
              dan teknologi jaringan. Saya terbiasa mengembangkan karya desain grafis, 
              baik secara manual maupun digital, untuk menghasilkan materi visual yang 
              komunikatif, informatif, dan fungsional.
            </p>
            <p>
              Selain itu, saya memiliki ketertarikan pada sistem jaringan komputer, 
              khususnya dalam perancangan dan pengelolaan jaringan lokal. Saya terbiasa 
              menggunakan perangkat jaringan serta software simulasi seperti Cisco Packet 
              Tracer, dan terus mengembangkan kemampuan teknis serta kreatif melalui 
              pembelajaran mandiri dan pengerjaan proyek.
            </p>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="spotify-section"
        >
          <h2>🎧 Music I Listen To</h2>
          <div className="spotify-list">
            {spotifyTracks.map((trackId, index) => (
              <motion.iframe
                key={trackId}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.8 + (index * 0.1), duration: 0.4 }}
                whileHover={{ scale: 1.05 }}
                src={`https://open.spotify.com/embed/track/${trackId}`}
                loading="lazy"
                title={`Spotify Track ${index + 1}`}
              />
            ))}
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default AboutPage;
