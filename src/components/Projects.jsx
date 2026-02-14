import React from 'react';
import { ExternalLink, Github } from 'lucide-react';
import SectionWrapper from './SectionWrapper';
import { motion } from 'framer-motion';

const Projects = () => {
  const projects = [
    {
      title: 'TailorShop',
      description: 'An application developed for maintaining the order and measurement details of a tailor shop.',
      tech: ['Java', 'Eclipse Link'],
      links: { demo: '#', github: 'https://github.com/Sanket2035/TailorShop' },
      image: '/PoshTailors.png'
    },
    {
      title: 'WeatherWise',
      description: 'A simple weather forecasting application built with TypeScript.',
      tech: ['TypeScript', 'Weather API'],
      links: { demo: 'https://v0-weather-app-features.vercel.app', github: 'https://github.com/Sanket2035/WeatherWise' },
      image: '/WeatherWise.jpg'
    },
    {
      title: 'Fitness Club',
      description: 'Management system for a gym to manage resources, training sessions, and memberships.',
      tech: ['PHP', 'MySQL', 'Web'],
      links: { demo: '#', github: 'https://github.com/Sanket2035/Fitness_club' },
      image: '/FitnessClub.jpg'
    },
    {
      title: 'EduNavigator',
      description: 'A centralized location for students and teachers for sharing educational contents.',
      tech: ['JavaScript', 'HTML', 'CSS'],
      links: { demo: 'https://edu-navigator-ashy.vercel.app', github: 'https://github.com/Sanket2035/EduNavigator' },
      image: '/EduNaviggator.png'
    },
    {
      title: 'Network Monitoring Tool',
      description: 'A Python-based application to monitor network interfaces and analyze traffic.',
      tech: ['Python', 'Networking'],
      links: { demo: 'https://network-monitoring-tool.vercel.app', github: 'https://github.com/Sanket2035/Network-monitoring-tool' },
      image: '/NMT.jpg'
    }
  ];

  return (
    <SectionWrapper id="projects" className="section container">
      <motion.h2 
        style={{ fontSize: '2.5rem', marginBottom: '3rem' }}
        variants={{ hidden: { opacity: 0, x: -20 }, show: { opacity: 1, x: 0 } }}
      >
        Featured Projects
      </motion.h2>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
        {projects.map((project, index) => (
          <motion.div 
            key={index} 
            className="glass-card"
            style={{ 
              borderRadius: '12px', overflow: 'hidden',
              height: '100%', display: 'flex', flexDirection: 'column'
            }}
            variants={{ 
               hidden: { opacity: 0, y: 30 }, 
               show: { opacity: 1, y: 0 } 
            }}
            whileHover={{ y: -10, transition: { duration: 0.2 } }}
          >
            {/* Project Image */}
            <div style={{ height: '200px', width: '100%', overflow: 'hidden' }}>
               <motion.img 
                 src={project.image} 
                 alt={project.title} 
                 style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                 whileHover={{ scale: 1.1 }}
                 transition={{ duration: 0.5 }}
               />
            </div>
            
            <div style={{ padding: '2rem', flex: 1, display: 'flex', flexDirection: 'column' }}>
              <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>{project.title}</h3>
              <p style={{ color: 'var(--text-secondary)', marginBottom: '1.5rem', flex: 1 }}>{project.description}</p>
              
              <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap', marginBottom: '2rem' }}>
                {project.tech.map((t) => (
                  <span key={t} style={{ fontSize: '0.875rem', color: 'var(--accent-primary)' }}>{t}</span>
                ))}
              </div>

              <div style={{ display: 'flex', gap: '1rem' }}>
                <a href={project.links.github} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--text-secondary)' }}><Github size={20} /> Code</a>
                <a href={project.links.demo} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--text-primary)' }}><ExternalLink size={20} /> Live Demo</a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  );
};

export default Projects;
