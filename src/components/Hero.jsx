import React from 'react';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="container" style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', paddingTop: '80px' }}>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap-reverse', gap: '4rem', width: '100%' }}>
        <div style={{ flex: '1', minWidth: '320px', maxWidth: '650px' }}>
          <div style={{ 
            display: 'inline-block', padding: '0.5rem 1rem', marginBottom: '1.5rem',
            backgroundColor: 'rgba(99, 102, 241, 0.1)', color: 'var(--accent-primary)',
            borderRadius: '50px', fontWeight: 600, fontSize: '0.9rem', letterSpacing: '0.05em'
          }}>
            👋 HELLO, I'M
          </div>
          <h1 style={{ fontSize: 'clamp(3.5rem, 6vw, 5.5rem)', fontWeight: 800, marginBottom: '1.5rem', lineHeight: 1.1, letterSpacing: '-0.02em' }}>
            Sanket Shinde <br />
            <span className="text-gradient">Java Full Stack Developer</span>
          </h1>
          <p style={{ color: 'var(--text-secondary)', fontSize: '1.25rem', marginBottom: '2.5rem', lineHeight: 1.7, maxWidth: '90%' }}>
            Accomplished software development course in <strong style={{ color: 'var(--text-primary)' }}>Spring framework</strong> and <strong style={{ color: 'var(--text-primary)' }}>RESTful APIs</strong>. Skilled in <strong style={{ color: 'var(--text-primary)' }}>code debugging</strong> and <strong style={{ color: 'var(--text-primary)' }}>object-oriented programming</strong>. Hands-on experience gained through academic projects. Demonstrates strong teamwork, problem-solving, and time-management skills.
          </p>
          <div style={{ display: 'flex', gap: '1.5rem' }}>
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
          </div>
        </div>
        
        <div style={{ flex: '1', display: 'flex', justifyContent: 'flex-end', alignItems: 'center' }}>
            <div style={{ 
              width: 'clamp(300px, 35vw, 450px)', 
              height: 'clamp(300px, 35vw, 450px)', 
              borderRadius: '50%', 
              overflow: 'hidden',
              border: '4px solid var(--bg-card)',
              boxShadow: '0 20px 80px rgba(99, 102, 241, 0.2)',
              position: 'relative',
              transition: 'transform 0.5s ease, box-shadow 0.5s ease',
              marginRight: '2rem'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'scale(1.02) rotate(2deg)';
              e.currentTarget.style.boxShadow = '0 30px 100px rgba(99, 102, 241, 0.4)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'scale(1) rotate(0deg)';
              e.currentTarget.style.boxShadow = '0 20px 80px rgba(99, 102, 241, 0.2)';
            }}
            >
              <img 
                src="/Profile Image1.jpeg" 
                alt="Sanket Shinde" 
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />
            </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
