import React from 'react';
import { motion } from 'framer-motion';

const ContactPage = () => {
  const socialLinks = [
    { icon: 'fa-instagram', url: 'https://instagram.com/_ilulmagerbgt' },
    { icon: 'fa-github', url: 'https://github.com/sukamager' },
    { icon: 'fa-tiktok', url: 'https://tiktok.com/@ilulsukamager' },
    { icon: 'fa-x-twitter', url: 'https://x.com/ilulsukamager' }
  ];

  return (
    <div className="contact-container">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
        className="contact-content"
      >
        <div className="contact-info">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="contact-header"
          >
            <h1>Mengenal Lebih Dalam</h1>
            <p>Silahkan untuk bertanya lebih dalam mengenai saya.</p>
          </motion.div>

          <div className="contact-details">
            {[
              { icon: 'fa-phone', title: 'Phone', text: '+62 857 9146 4989', delay: 0.4 },
              { icon: 'fa-envelope', title: 'Email', text: 'basyarmuhammad13@gmail.com', delay: 0.5 },
              { icon: 'fa-location-dot', title: 'Lokasi', text: 'Jember, Indonesia', delay: 0.6 }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: item.delay, duration: 0.5 }}
                className="contact-item"
              >
                <div className="contact-icon">
                  <i className={`fas ${item.icon}`}></i>
                </div>
                <div className="contact-text">
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.5 }}
            className="social-links"
          >
            {socialLinks.map((link, index) => (
              <motion.a
                key={index}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ 
                  scale: 1.2,
                  y: -5,
                  transition: { duration: 0.2 }
                }}
                whileTap={{ scale: 0.9 }}
              >
                <i className={`fa-brands ${link.icon}`}></i>
              </motion.a>
            ))}
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="contact-form"
        >
          <form action="https://formsubmit.co/basyarmuhammad13@gmail.com" method="POST">
            <input type="hidden" name="_captcha" value="false" />
            <input type="hidden" name="_next" value="https://sukamager.github.io/Portofolio/thanks.html" />

            {[
              { name: 'name', label: 'Nama', type: 'text' },
              { name: 'whatsapp', label: 'No WhatsApp Kamu', type: 'text' },
              { name: 'message', label: 'Pesan', type: 'textarea' }
            ].map((field, index) => (
              <motion.div
                key={field.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 + (index * 0.1), duration: 0.4 }}
                className="form-group"
              >
                {field.type === 'textarea' ? (
                  <textarea name={field.name} id={field.name} placeholder=" " required />
                ) : (
                  <input type={field.type} name={field.name} id={field.name} placeholder=" " required />
                )}
                <label htmlFor={field.name}>{field.label}</label>
              </motion.div>
            ))}

            <motion.button
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1, duration: 0.4 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              type="submit"
              className="submit-btn"
            >
              Kirim
            </motion.button>
          </form>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default ContactPage;
