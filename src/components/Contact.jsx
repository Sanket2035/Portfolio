import React from 'react';
import { Mail, Linkedin, Github } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="section container" style={{ textAlign: 'center', paddingBottom: '4rem' }}>
      <h2 style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>Get In Touch</h2>
      <p style={{ color: 'var(--text-secondary)', maxWidth: '600px', margin: '0 auto 3rem auto', fontSize: '1.2rem' }}>
        I'm currently accessible for new opportunities. Feel free to reach out to me via phone or email.
      </p>

      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1rem', marginBottom: '3rem' }}>
        <a href="mailto:sanketks200305@gmail.com" style={{ 
          display: 'inline-flex', alignItems: 'center', gap: '0.5rem', 
          color: 'var(--text-primary)', fontSize: '1.1rem', fontWeight: 500
        }}>
          <Mail size={20} color="var(--accent-primary)" /> sanketks200305@gmail.com
        </a>
        <span style={{ color: 'var(--text-secondary)', fontSize: '1.1rem' }}>
           +91 7498236362
        </span>
      </div>
      
      <div style={{  paddingTop: '2rem', borderTop: '1px solid rgba(255,255,255,0.1)', display: 'flex', justifyContent: 'center', gap: '2rem' }}>
        <a href="https://github.com/Sanket2035" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--text-secondary)' }} className="hover:text-white"><Github size={32} /></a>
        <a href="https://www.linkedin.com/in/sanket-shinde2035" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--text-secondary)' }} className="hover:text-white"><Linkedin size={32} /></a>
      </div>
      
      <p style={{ marginTop: '2rem', color: 'var(--text-secondary)', fontSize: '0.9rem' }}>
        © 2026 Sanket Shinde. All rights reserved.
      </p>
    </section>
  );
};

export default Contact;
