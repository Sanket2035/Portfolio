import React from 'react';
import { Mail, Linkedin, Github } from 'lucide-react';
import SectionWrapper from './SectionWrapper';
import { motion } from 'framer-motion';

const Contact = () => {
  return (
    <SectionWrapper id="contact" className="section container" style={{ textAlign: 'center', paddingBottom: '4rem' }}>
      <motion.h2 
        style={{ fontSize: '2.5rem', marginBottom: '1rem' }}
        variants={{ hidden: { opacity: 0, y: -20 }, show: { opacity: 1, y: 0 } }}
      >
        Get In Touch
      </motion.h2>
      <motion.p 
        style={{ color: 'var(--text-secondary)', maxWidth: '600px', margin: '0 auto 3rem auto', fontSize: '1.2rem' }}
        variants={{ hidden: { opacity: 0 }, show: { opacity: 1 } }}
      >
        I'm currently accessible for new opportunities. Feel free to reach out to me via phone or email.
      </motion.p>

      <motion.div 
        style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1rem', marginBottom: '3rem' }}
        variants={{ hidden: { opacity: 0, scale: 0.9 }, show: { opacity: 1, scale: 1 } }}
      >
        <a href="mailto:sanketks200305@gmail.com" style={{ 
          display: 'inline-flex', alignItems: 'center', gap: '0.5rem', 
          color: 'var(--text-primary)', fontSize: '1.1rem', fontWeight: 500
        }}>
          <Mail size={20} color="var(--accent-primary)" /> sanketks200305@gmail.com
        </a>
        <span style={{ color: 'var(--text-secondary)', fontSize: '1.1rem' }}>
           +91 7498236362
        </span>
      </motion.div>
      
      <motion.div 
        style={{  paddingTop: '2rem', borderTop: '1px solid rgba(255,255,255,0.1)', display: 'flex', justifyContent: 'center', gap: '2rem' }}
        variants={{ hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0 } }}
      >
        <a href="https://github.com/Sanket2035" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--text-secondary)' }}><Github size={32} /></a>
        <a href="https://www.linkedin.com/in/sanket-shinde2035" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--text-secondary)' }}><Linkedin size={32} /></a>
      </motion.div>
      
      <p style={{ marginTop: '2rem', color: 'var(--text-secondary)', fontSize: '0.9rem' }}>
        © 2026 Sanket Shinde. All rights reserved.
      </p>
    </SectionWrapper>
  );
};

export default Contact;
