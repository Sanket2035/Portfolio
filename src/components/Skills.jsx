import React from 'react';

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
    <section id="skills" className="section container" style={{ backgroundColor: 'var(--bg-card)', padding: '4rem 2rem', borderRadius: '1rem', marginTop: '2rem' }}>
      <h2 style={{ fontSize: '2.5rem', marginBottom: '2rem', textAlign: 'center' }}>Skills & Technologies</h2>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', justifyContent: 'center' }}>
        {skills.map((skill) => (
           <div key={skill.name} style={{ 
             padding: '1rem 2rem', backgroundColor: 'var(--bg-dark)', 
             borderRadius: '50px', border: '1px solid rgba(255,255,255,0.1)',
             color: 'var(--text-primary)', fontWeight: 500,
             boxShadow: 'var(--shadow-sm)'
           }}>
             {skill.name}
           </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
