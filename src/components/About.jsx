import React from 'react';
import SectionWrapper from './SectionWrapper';

const About = () => {
  return (
    <SectionWrapper id="about" className="section container">
      <h2 style={{ fontSize: '2.5rem', marginBottom: '2rem' }}>About Me</h2>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '3rem' }}>
        <div>
          <p style={{ color: 'var(--text-secondary)', marginBottom: '1.5rem', fontSize: '1.1rem', lineHeight: 1.7 }}>
            Accomplished software development course in Spring framework and RESTful APIs. Skilled in code debugging and object-oriented programming, with strong problem-solving abilities. Hands-on experience gained through academic projects and courses. Demonstrates strong teamwork, problem-solving, and time-management skills. Prepared to start career and make meaningful contributions with commitment and drive.
          </p>
          
          <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem', color: 'var(--text-primary)' }}>Education</h3>
          <div style={{ marginBottom: '1.5rem' }}>
             <h4 style={{ fontSize: '1.2rem', color: 'var(--accent-primary)' }}>Bachelor of Science: Computer Science</h4>
             <p style={{ color: 'var(--text-secondary)' }}>Samarth College of Computer Science, Belhe | Pune</p>
             <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>Graduated in April 2025</p>
          </div>

          <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem', color: 'var(--text-primary)' }}>Languages</h3>
           <p style={{ color: 'var(--text-secondary)', marginBottom: '0.5rem' }}>• Marathi (Native)</p>
           <p style={{ color: 'var(--text-secondary)', marginBottom: '0.5rem' }}>• Hindi (Advanced)</p>
           <p style={{ color: 'var(--text-secondary)', marginBottom: '1.5rem' }}>• English (Intermediate)</p>

        </div>
        <div>
           {/* Certification Section */}
           <div className="glass-card" style={{ padding: '2rem', borderRadius: '12px' }}>
              <h3 style={{ fontSize: '1.5rem', marginBottom: '1.5rem' }}>Certifications</h3>
              
              <div style={{ marginBottom: '1.5rem' }}>
                <h4 style={{ fontSize: '1.1rem', fontWeight: 600 }}>Fundamentals of Digital Marketing</h4>
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>December 2023</p>
              </div>
              
              <div style={{ marginBottom: '1.5rem' }}>
                <h4 style={{ fontSize: '1.1rem', fontWeight: 600 }}>Cyber Security Course Completion</h4>
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>June 2024</p>
              </div>
           </div>
        </div>
      </div>
    </SectionWrapper>
  );
};

export default About;
