import React from 'react';
import SectionWrapper from './SectionWrapper';
import { motion } from 'framer-motion';

const Skills = () => {
  const skills = [
    { name: 'Java', level: 'Upper Intermediate' },
    { name: 'Spring Framework', level: 'Intermediate' },
    { name: 'RESTful APIs', level: 'Intermediate' },
    { name: 'Hibernate ORM', level: 'Intermediate' },
    { name: 'JDBC', level: 'Intermediate' },
    { name: 'HTML', level: 'Upper Intermediate' },
    { name: 'CSS', level: 'Intermediate' },
    { name: 'JavaScript', level: 'Intermediate' },
    { name: 'Database Management', level: 'Upper Intermediate' },
    { name: 'Postman API Testing', level: 'Intermediate' },
    { name: 'Object-Oriented Programming', level: 'Advanced' },
    { name: 'Code Debugging', level: 'Advanced' },
  ];

  return (
    <SectionWrapper id="skills" className="section container" style={{ backgroundColor: 'var(--bg-card)', padding: '4rem 2rem', borderRadius: '1rem', marginTop: '2rem' }}>
      <motion.h2 
        style={{ fontSize: '2.5rem', marginBottom: '2rem', textAlign: 'center' }}
        variants={{ hidden: { opacity: 0 }, show: { opacity: 1 } }}
      >
        Skills & Technologies
      </motion.h2>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', justifyContent: 'center' }}>
        {skills.map((skill) => (
           <motion.div 
             key={skill.name} 
             className="glass-card"
             style={{ 
               padding: '1rem 2rem', 
               borderRadius: '50px',
               color: 'var(--text-primary)', fontWeight: 500,
             }}
             variants={{ 
               hidden: { opacity: 0, scale: 0.8 }, 
               show: { opacity: 1, scale: 1 } 
             }}
             whileHover={{ scale: 1.05, borderColor: 'var(--accent-primary)' }}
           >
             {skill.name}
           </motion.div>
        ))}
      </div>
    </SectionWrapper>
  );
};

export default Skills;
