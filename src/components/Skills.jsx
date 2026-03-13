import React, { useRef, useState } from 'react';
import SectionWrapper from './SectionWrapper';
import { motion } from 'framer-motion';

const SpotlightCard = ({ children, className = "" }) => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const cardRef = useRef(null);

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    setMousePosition({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className={`glass-card rounded-2xl p-8 relative overflow-hidden group ${className}`}
    >
      <div 
        className="pointer-events-none absolute -inset-px opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-0"
        style={{
          background: `radial-gradient(400px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(99,102,241,0.15), transparent 40%)`,
        }}
      />
      <div className="relative z-10 h-full flex flex-col">
        {children}
      </div>
    </motion.div>
  );
};

const Skills = () => {
  const skillCategories = [
    {
      title: "Backend Development",
      skills: ['Java', 'Spring Boot / Framework', 'RESTful APIs', 'Hibernate ORM', 'JDBC']
    },
    {
      title: "Frontend Development",
      skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Tailwind CSS']
    },
    {
      title: "Databases",
      skills: ['MySQL', 'MongoDB', 'Database Management']
    },
    {
      title: "Tools & Practices",
      skills: ['Git', 'GitHub', 'Postman', 'VS Code', 'Eclipse', 'Code Debugging', 'OOP']
    }
  ];

  const allSkillsFlat = [...skillCategories.flatMap(c => c.skills), ...skillCategories.flatMap(c => c.skills)];

  return (
    <SectionWrapper id="skills" className="section container max-w-6xl mx-auto py-24 relative overflow-hidden">
      
      {/* Infinite Marquee Background Loop */}
      <div className="absolute top-10 left-0 w-full overflow-hidden pointer-events-none select-none opacity-[0.03] z-0 flex whitespace-nowrap">
        <motion.div 
          className="flex gap-8 items-center"
          animate={{ x: [0, -1000] }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        >
          {allSkillsFlat.map((skill, i) => (
            <span key={i} className="text-6xl md:text-8xl font-black uppercase tracking-tighter">{skill}</span>
          ))}
        </motion.div>
      </div>

      <motion.h2 
        className="relative z-10 text-4xl md:text-6xl font-black mb-16 text-center tracking-tighter text-white"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-400 to-indigo-400">
          Skills
        </span> & Technologies
      </motion.h2>

      <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
        {skillCategories.map((category, idx) => (
          <SpotlightCard key={category.title}>
            <h3 className="text-xl font-semibold mb-6 text-white border-b border-white/5 pb-4">
              <span className="text-[var(--accent-primary)] mr-2 font-mono">{"//"}</span> 
              {category.title}
            </h3>
            <div className="flex flex-wrap gap-2 md:gap-3">
              {category.skills.map((skill) => (
                <span 
                  key={skill} 
                  className="px-3 py-1.5 md:px-4 md:py-2 bg-white/5 hover:bg-white/10 text-slate-300 hover:text-white border border-white/5 hover:border-indigo-500/30 rounded-lg text-sm md:text-base font-medium transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_4px_20px_rgba(99,102,241,0.2)] cursor-default"
                >
                  {skill}
                </span>
              ))}
            </div>
          </SpotlightCard>
        ))}
      </div>
    </SectionWrapper>
  );
};

export default Skills;
