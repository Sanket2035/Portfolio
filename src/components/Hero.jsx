import React, { useState, useEffect } from 'react';
import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

const Typewriter = ({ text, delay = 0, infinite = false }) => {
  const [currentText, setCurrentText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    let timeout;
    
    if (currentIndex < text.length) {
      timeout = setTimeout(() => {
        setCurrentText(prev => prev + text[currentIndex]);
        setCurrentIndex(prev => prev + 1);
      }, 100); // Typing speed
    } else if (infinite) {
      setTimeout(() => {
        setCurrentIndex(0);
        setCurrentText('');
      }, 2000); // Pause before restarting
    }

    return () => clearTimeout(timeout);
  }, [currentIndex, delay, infinite, text]);

  return <span>{currentText}</span>;
};

const Hero = () => {
  return (
    <section id="home" className="container" style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', paddingTop: '80px' }}>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap-reverse', gap: '4rem', width: '100%' }}>
        <motion.div 
          style={{ flex: '1', minWidth: '320px', maxWidth: '650px' }}
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <motion.div 
            style={{ 
              display: 'inline-block', padding: '0.5rem 1rem', marginBottom: '1.5rem',
              backgroundColor: 'rgba(99, 102, 241, 0.1)', color: 'var(--accent-primary)',
              borderRadius: '50px', fontWeight: 600, fontSize: '0.9rem', letterSpacing: '0.05em'
            }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            👋 HELLO, I'M
          </motion.div>
          <h1 style={{ fontSize: 'clamp(3.5rem, 6vw, 5.5rem)', fontWeight: 800, marginBottom: '1.5rem', lineHeight: 1.1, letterSpacing: '-0.02em' }}>
            Sanket Shinde <br />
            <span className="text-gradient">
              <Typewriter text="Java Full Stack Developer" delay={1000} />
            </span>
          </h1>
          <motion.p 
            style={{ color: 'var(--text-secondary)', fontSize: '1.25rem', marginBottom: '2.5rem', lineHeight: 1.7, maxWidth: '90%' }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            Accomplished software development course in <strong style={{ color: 'var(--text-primary)' }}>Spring framework</strong> and <strong style={{ color: 'var(--text-primary)' }}>RESTful APIs</strong>. Skilled in <strong style={{ color: 'var(--text-primary)' }}>code debugging</strong> and <strong style={{ color: 'var(--text-primary)' }}>object-oriented programming</strong>. Hands-on experience gained through academic projects. Demonstrates strong teamwork, problem-solving, and time-management skills.
          </motion.p>
          <motion.div 
            style={{ display: 'flex', gap: '1.5rem' }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.5 }}
          >
            <a href="#projects" style={{ 
              display: 'inline-flex', alignItems: 'center', gap: '0.5rem', 
              padding: '1rem 2.5rem', backgroundColor: 'var(--accent-primary)', 
              color: 'white', borderRadius: '50px', fontWeight: 600,
              boxShadow: '0 4px 14px 0 rgba(99, 102, 241, 0.39)', transition: 'transform 0.2s ease'
            }}
            onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-2px)'}
            onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}
            >
              View Work <ArrowRight size={20} />
            </a>
            <a href="#contact" style={{ 
              display: 'inline-flex', alignItems: 'center', gap: '0.5rem', 
              padding: '1rem 2.5rem', border: '1px solid rgba(255,255,255,0.2)', 
              color: 'var(--text-primary)', borderRadius: '50px', fontWeight: 600,
              transition: 'all 0.2s ease'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = 'var(--text-primary)';
              e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.05)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = 'rgba(255,255,255,0.2)';
              e.currentTarget.style.backgroundColor = 'transparent';
            }}
            >
              Contact Me
            </a>
          </motion.div>
        </motion.div>
        
        <motion.div 
          style={{ flex: '1', display: 'flex', justifyContent: 'flex-end', alignItems: 'center' }}
          initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 0.8, ease: "backOut" }}
        >
            <motion.div style={{ 
              width: 'clamp(300px, 35vw, 450px)', 
              height: 'clamp(300px, 35vw, 450px)', 
              borderRadius: '50%', 
              overflow: 'hidden',
              border: '4px solid var(--bg-card)',
              boxShadow: '0 20px 80px rgba(99, 102, 241, 0.2)',
              position: 'relative',
              marginRight: '2rem'
            }}
            whileHover={{ scale: 1.02, rotate: 2, boxShadow: '0 30px 100px rgba(99, 102, 241, 0.4)' }}
            transition={{ duration: 0.5 }}
            >
              <img 
                src="/Profile Image1.jpeg" 
                alt="Sanket Shinde" 
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />
            </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;

