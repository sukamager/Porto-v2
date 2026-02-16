import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const HomePage = () => {
  const [displayText, setDisplayText] = useState('');
  const [textIndex, setTextIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  
  const texts = ["NETWORK ENGINEER", "PROGRAMMER", "DESIGNER GRAPHIC"];

  useEffect(() => {
    const speed = isDeleting ? 50 : 100;
    
    const timer = setTimeout(() => {
      if (!isDeleting && charIndex < texts[textIndex].length) {
        setDisplayText(texts[textIndex].substring(0, charIndex + 1));
        setCharIndex(charIndex + 1);
      } else if (!isDeleting && charIndex === texts[textIndex].length) {
        setTimeout(() => setIsDeleting(true), 1000);
      } else if (isDeleting && charIndex > 0) {
        setDisplayText(texts[textIndex].substring(0, charIndex - 1));
        setCharIndex(charIndex - 1);
      } else if (isDeleting && charIndex === 0) {
        setIsDeleting(false);
        setTextIndex((textIndex + 1) % texts.length);
      }
    }, speed);

    return () => clearTimeout(timer);
  }, [charIndex, isDeleting, textIndex, texts]);

  const socialLinks = [
    { icon: 'fa-instagram', url: 'https://instagram.com/_ilulmagerbgt', delay: 0 },
    { icon: 'fa-github', url: 'https://github.com/sukamager', delay: 0.1 },
    { icon: 'fa-tiktok', url: 'https://tiktok.com/@ilulsukamager', delay: 0.2 },
    { icon: 'fa-x-twitter', url: 'https://x.com/ilulsukamager', delay: 0.3 }
  ];

  return (
    <section className="home-section">
      <div className="main-container">
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="content"
        >
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            Hey I'm <span>Ilul</span>
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="typewriter"
          >
            I'm a <span>{displayText}</span>
            <motion.label
              animate={{ opacity: [1, 0, 1] }}
              transition={{ duration: 0.8, repeat: Infinity }}
            >
              |
            </motion.label>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.6 }}
          >
            Saya memiliki fokus pada bidang desain grafis dan teknologi jaringan. 
            Saya menuangkan ide kreatif ke dalam berbagai karya visual seperti poster, 
            logo, dan konten digital dengan pendekatan yang fungsional dan komunikatif.
          </motion.p>

          <div className="social-links">
            {socialLinks.map((link, index) => (
              <motion.a
                key={index}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1 + link.delay, duration: 0.4 }}
                whileHover={{ 
                  scale: 1.3,
                  rotate: 360,
                  transition: { duration: 0.3 }
                }}
                whileTap={{ scale: 0.9 }}
              >
                <i className={`fa-brands ${link.icon}`}></i>
              </motion.a>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1.4, duration: 0.5 }}
            className="btn"
          >
            <motion.button
              whileHover={{ 
                scale: 1.1,
                boxShadow: "0 0 40px 5px rgb(50, 132, 255)"
              }}
              whileTap={{ scale: 0.95 }}
            >
              Seputar Saya
            </motion.button>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.5, rotate: -180 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ 
            duration: 1,
            type: "spring",
            stiffness: 80
          }}
          className="image"
        >
          <motion.img
            src="/img/logo1.jpg"
            alt="Profile"
            whileHover={{ scale: 1.05 }}
            animate={{ 
              boxShadow: [
                "0 0 50px rgb(50, 132, 255)",
                "0 0 80px rgb(50, 132, 255)",
                "0 0 50px rgb(50, 132, 255)"
              ]
            }}
            transition={{ 
              boxShadow: { duration: 2, repeat: Infinity }
            }}
          />
        </motion.div>
      </div>
    </section>
  );
};

export default HomePage;
