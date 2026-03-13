import React, { useRef } from 'react';
import { ExternalLink, Github } from 'lucide-react';
import SectionWrapper from './SectionWrapper';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';

const TiltCard = ({ project, index }) => {
  const cardRef = useRef(null);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);

  // Reduced rotation since cards are smaller
  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["5deg", "-5deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-5deg", "5deg"]);

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    
    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX,
        rotateY,
        transformStyle: "preserve-3d",
      }}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="glass-card rounded-[1.5rem] overflow-hidden flex flex-col group h-full relative cursor-crosshair border border-white/5 bg-[#0a0f1d]/40 backdrop-blur-md"
    >
      
      {/* 3D Inner Content Wrapper to create depth */}
      <div 
        style={{ transform: "translateZ(20px)", transformStyle: "preserve-3d" }}
        className="h-full flex flex-col"
      >
        {/* Project Image */}
        <div className="h-48 w-full overflow-hidden relative bg-black/40 rounded-t-[1.5rem]">
            <motion.img 
              src={project.image} 
              alt={project.title} 
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0a0f1d] to-transparent opacity-80" />
            
            {/* Hover Glow on Image */}
            <div 
              className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
              style={{ background: 'radial-gradient(circle at center, rgba(99,102,241,0.2) 0%, transparent 60%)' }}
            />
        </div>
        
        <div className="p-6 flex-1 flex flex-col bg-gradient-to-b from-[#0a0f1d] to-transparent">
          <div className="flex justify-between items-start mb-3">
            <h3 className="text-xl font-bold tracking-tight text-white group-hover:text-[var(--accent-primary)] transition-colors line-clamp-1">
              {project.title}
            </h3>
            <div className="flex gap-2">
              <a href={project.links.github} target="_blank" rel="noreferrer" className="text-slate-400 hover:text-white transition-colors bg-white/5 p-1.5 rounded-full hover:bg-white/10 shrink-0">
                <Github size={18} />
              </a>
              <a href={project.links.demo} target="_blank" rel="noreferrer" className="text-slate-400 hover:text-white transition-colors bg-white/5 p-1.5 rounded-full hover:bg-white/10 shrink-0">
                <ExternalLink size={18} />
              </a>
            </div>
          </div>
          
          <p className="text-slate-300 mb-6 flex-1 text-sm leading-relaxed font-light line-clamp-3">
            {project.description}
          </p>
          
          <div className="flex flex-wrap gap-2 mt-auto pt-4 border-t border-white/5">
            {project.tech.map((t) => (
              <span key={t} className="text-xs font-medium px-2.5 py-1 bg-indigo-500/10 text-indigo-300 rounded-md border border-indigo-500/20 backdrop-blur-sm whitespace-nowrap">
                {t}
              </span>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const Projects = () => {
  const projects = [
    {
      title: 'TailorShop',
      description: 'An enterprise-grade application developed for maintaining order metrics, styling preferences, and complex measurement details of a professional tailor shop.',
      tech: ['Java', 'Eclipse Link'],
      links: { demo: '#', github: 'https://github.com/Sanket2035/TailorShop' },
      image: '/PoshTailors.png'
    },
    {
      title: 'WeatherWise',
      description: 'A beautiful, highly-responsive weather forecasting application built with strict TypeScript typing and real-time Weather API integration.',
      tech: ['TypeScript', 'Weather API', 'React'],
      links: { demo: 'https://v0-weather-app-features.vercel.app', github: 'https://github.com/Sanket2035/WeatherWise' },
      image: '/WeatherWise.jpg'
    },
    {
      title: 'EduNavigator',
      description: 'A centralized educational platform bridging the gap between students and teachers for structured sharing of course materials and notes.',
      tech: ['JavaScript', 'HTML', 'CSS'],
      links: { demo: 'https://edu-navigator-ashy.vercel.app', github: 'https://github.com/Sanket2035/EduNavigator' },
      image: '/EduNaviggator.png'
    },
    {
      title: 'Fitness Club',
      description: 'Comprehensive management system engineered for gym administrators to allocate resources, monitor training sessions, and track memberships.',
      tech: ['PHP', 'MySQL', 'Web'],
      links: { demo: '#', github: 'https://github.com/Sanket2035/Fitness_club' },
      image: '/FitnessClub.jpg'
    },
    {
      title: 'NetMon Tool',
      description: 'A low-level Python-based application designed to deeply monitor network interfaces, analyze traffic patterns, and report anomalies.',
      tech: ['Python', 'Networking'],
      links: { demo: 'https://network-monitoring-tool.vercel.app', github: 'https://github.com/Sanket2035/Network-monitoring-tool' },
      image: '/NMT.jpg'
    }
  ];

  return (
    <SectionWrapper id="projects" className="section container max-w-7xl mx-auto py-24">
      <motion.h2 
        className="text-4xl md:text-6xl font-black mb-16 text-center tracking-tighter text-white"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        Featured <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-cyan-400">Projects</span>
      </motion.h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 perspective-1000">
        {projects.map((project, index) => (
          <div key={index}>
            <TiltCard project={project} index={index} />
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
};

export default Projects;
