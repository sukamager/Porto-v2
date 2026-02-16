import React from 'react';
import { motion } from 'framer-motion';

const Navigation = ({ currentPage, setCurrentPage }) => {
  const navItems = ['Home', 'About', 'Show', 'Projects', 'Contact'];

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, type: "spring" }}
      className="pill-nav"
    >
      {navItems.map((item) => (
        <motion.a
          key={item}
          className={currentPage === item ? 'active' : ''}
          onClick={() => setCurrentPage(item)}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          {item}
        </motion.a>
      ))}
    </motion.nav>
  );
};

export default Navigation;
