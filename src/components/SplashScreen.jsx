import React, { useEffect } from 'react';
import { motion } from 'framer-motion';

const SplashScreen = ({ onComplete }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      onComplete();
    }, 3000);
    return () => clearTimeout(timer);
  }, [onComplete]);

  const particles = Array.from({ length: 25 }, (_, i) => i);
  const codeSymbols = ['<', '>', '{', '}', '(', ')', '[', ']', '/', '\\', '0', '1'];

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="splash-screen"
    >
      <div className="particles-container">
        {particles.map((i) => (
          <motion.div
            key={i}
            className="particle"
            initial={{ 
              x: `${Math.random() * 100}vw`,
              y: '0vh',
              opacity: 0 
            }}
            animate={{ 
              y: '-100vh',
              opacity: [0, 0.5, 0],
              x: `${Math.random() * 100}vw`
            }}
            transition={{
              duration: Math.random() * 2 + 3,
              repeat: Infinity,
              delay: Math.random() * 4
            }}
          />
        ))}
      </div>

      <div className="code-rain">
        {Array.from({ length: 20 }, (_, i) => (
          <motion.div
            key={i}
            className="code-symbol"
            initial={{ y: '-100%', opacity: 0 }}
            animate={{ 
              y: '100vh', 
              opacity: [0, 0.3, 0] 
            }}
            transition={{
              duration: Math.random() * 2 + 2,
              repeat: Infinity,
              delay: Math.random() * 3
            }}
            style={{ left: `${Math.random() * 100}%` }}
          >
            {codeSymbols[Math.floor(Math.random() * codeSymbols.length)]}
          </motion.div>
        ))}
      </div>

      <div className="splash-content">
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ 
            duration: 1,
            type: "spring",
            stiffness: 100
          }}
          className="logo-container"
        >
          <motion.div
            animate={{ y: [0, -20, 0] }}
            transition={{ 
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="code-logo"
          >
            <img src="/img/logo-wayang.png" alt="Logo" />
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
          className="tagline"
        >
          SUKAMAGER
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          className="subtitle"
        >
          Selamat datang & Tunggu sebentar
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 1 }}
          className="loader"
        >
          <motion.div
            className="loader-bar"
            initial={{ width: 0 }}
            animate={{ width: '100%' }}
            transition={{ duration: 3, ease: "easeInOut" }}
          />
        </motion.div>
      </div>
    </motion.div>
  );
};

export default SplashScreen;
