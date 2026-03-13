import React, { useRef, useState } from 'react';
import SectionWrapper from './SectionWrapper';
import { motion } from 'framer-motion';
import { MapPin, GraduationCap, Award, Languages, Github } from 'lucide-react';
import { GitHubCalendar } from 'react-github-calendar';

const BentoCard = ({ children, className = "", delay = 0 }) => {
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
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay }}
      className={`glass-card rounded-3xl p-8 relative overflow-hidden group ${className}`}
    >
      <div 
        className="pointer-events-none absolute -inset-px opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-0"
        style={{
          background: `radial-gradient(600px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(99,102,241,0.1), transparent 40%)`,
        }}
      />
      <div className="relative z-10 h-full flex flex-col">
        {children}
      </div>
    </motion.div>
  );
};

const About = () => {
  // Select a theme for the github calendar that matches our deep space aesthetic
  const explicitTheme = {
    light: ['#0f172a', '#312e81', '#4338ca', '#4f46e5', '#6366f1'],
    dark: ['#ffffff10', '#312e81', '#4338ca', '#4f46e5', '#6366f1'],
  };

  return (
    <SectionWrapper id="about" className="section container max-w-7xl mx-auto py-24">
      <motion.h2 
        className="text-4xl md:text-6xl font-black mb-16 text-center tracking-tighter text-white"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-fuchsia-400">
          About
        </span> Me
      </motion.h2>
      
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 auto-rows-[280px]">
        
        {/* Large Bio Card */}
        <BentoCard className="md:col-span-2 lg:col-span-2 row-span-2" delay={0.1}>
          <h3 className="text-2xl font-bold mb-4 text-white flex items-center gap-2">
            <span className="w-8 h-1 bg-indigo-500 rounded-full" /> Who I Am
          </h3>
          <p className="text-slate-300 text-lg leading-relaxed flex-1">
            I am a highly driven software developer specializing in <strong className="text-white font-semibold">Java</strong> and modern architectures like <strong className="text-white font-semibold">Spring Boot</strong> and <strong className="text-white font-semibold">RESTful APIs</strong>. 
            <br/><br/>
            I possess strong problem-solving skills in code debugging and object-oriented programming. 
            Prepared to kickstart my career by making meaningful contributions through commitment, robust architectural thinking, and a passion for clean code.
          </p>
        </BentoCard>

        {/* Location Map Card */}
        <BentoCard className="md:col-span-1 lg:col-span-1 row-span-1 bg-[url('/grid.svg')] bg-cover relative" delay={0.2}>
          <div className="absolute inset-0 bg-[#0a0f1d]/60 backdrop-blur-[2px]" />
          <div className="relative z-10 h-full flex flex-col justify-between">
            <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center backdrop-blur-md border border-white/20">
              <MapPin className="text-indigo-400" />
            </div>
            
            <div>
              <p className="text-sm text-slate-400 font-medium mb-1">Located in</p>
              <h4 className="text-xl font-bold text-white flex items-center gap-2">
                Pune, India
                <span className="relative flex h-3 w-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500"></span>
                </span>
              </h4>
            </div>
          </div>
        </BentoCard>

        {/* Languages Card */}
        <BentoCard className="md:col-span-1 lg:col-span-1 row-span-1" delay={0.3}>
          <div className="flex items-center gap-2 mb-6 text-white font-bold text-xl">
             <Languages className="text-fuchsia-400" /> Languages
          </div>
          <div className="space-y-4 w-full">
            <div>
              <div className="flex justify-between text-sm mb-1"><span className="text-slate-200">Marathi</span><span className="text-indigo-300">Native</span></div>
              <div className="h-2 w-full bg-white/10 rounded-full overflow-hidden"><div className="h-full bg-gradient-to-r from-indigo-500 to-fuchsia-500 w-full rounded-full" /></div>
            </div>
            <div>
              <div className="flex justify-between text-sm mb-1"><span className="text-slate-200">Hindi</span><span className="text-indigo-300">Advanced</span></div>
              <div className="h-2 w-full bg-white/10 rounded-full overflow-hidden"><div className="h-full bg-gradient-to-r from-indigo-500 to-fuchsia-500 w-[85%] rounded-full" /></div>
            </div>
            <div>
              <div className="flex justify-between text-sm mb-1"><span className="text-slate-200">English</span><span className="text-indigo-300">Intermediate</span></div>
              <div className="h-2 w-full bg-white/10 rounded-full overflow-hidden"><div className="h-full bg-gradient-to-r from-indigo-500 to-fuchsia-500 w-[60%] rounded-full" /></div>
            </div>
          </div>
        </BentoCard>

        {/* Education Card */}
        <BentoCard className="md:col-span-2 lg:col-span-2 row-span-1 bg-gradient-to-br from-[#0a0f1d] to-indigo-900/20" delay={0.4}>
            <div className="flex items-center gap-3 mb-4">
              <div className="p-3 bg-indigo-500/20 rounded-xl text-indigo-400">
                <GraduationCap size={24} />
              </div>
              <h3 className="text-2xl font-bold text-white">Education</h3>
            </div>
            <div className="flex-1 flex flex-col justify-center gap-4">
              <div>
                <h4 className="text-lg font-semibold text-slate-100">MCA (Management)</h4>
                <p className="text-indigo-300 font-medium text-sm my-1">Sinhgad Institute of Management, Vadgaon</p>
                <p className="text-slate-400 text-xs">2025 - 2027</p>
              </div>
              <div className="h-[1px] w-full bg-white/10" />
              <div>
                <h4 className="text-lg font-semibold text-slate-100">B.Sc Computer Science</h4>
                <p className="text-indigo-300 font-medium text-sm my-1">Samarth College of Computer Science</p>
                <p className="text-slate-400 text-xs">Graduated: April 2025</p>
              </div>
            </div>
        </BentoCard>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 mt-6">
         {/* Certifications Card */}
         <BentoCard className="lg:col-span-4 h-auto" delay={0.5}>
            <div className="flex flex-col md:flex-row items-start md:items-center gap-6 h-full text-left">
              <div className="flex items-center gap-3 md:w-1/4">
                <div className="p-3 bg-fuchsia-500/20 rounded-xl text-fuchsia-400">
                  <Award size={28} />
                </div>
                <h3 className="text-2xl font-bold text-white">Certifications</h3>
              </div>
              <div className="flex flex-col md:flex-row gap-4 w-full md:w-3/4">
                <div className="flex-1 flex items-start gap-4 p-4 rounded-2xl bg-white/5 border border-white/5 hover:border-white/10 transition-colors">
                  <div className="h-2 w-2 rounded-full bg-fuchsia-500 mt-2 shrink-0" />
                  <div>
                    <h4 className="text-slate-200 font-medium">Fundamentals of Digital Marketing</h4>
                    <p className="text-sm text-slate-400 mt-1">December 2023</p>
                  </div>
                </div>
                <div className="flex-1 flex items-start gap-4 p-4 rounded-2xl bg-white/5 border border-white/5 hover:border-white/10 transition-colors">
                  <div className="h-2 w-2 rounded-full bg-indigo-500 mt-2 shrink-0" />
                  <div>
                    <h4 className="text-slate-200 font-medium">Cyber Security Course Completion</h4>
                    <p className="text-sm text-slate-400 mt-1">June 2024</p>
                  </div>
                </div>
              </div>
            </div>
        </BentoCard>

        {/* GitHub Contributions Span */}
        <BentoCard className="lg:col-span-4 h-auto bg-[#0a0f1d]/50 flex items-center p-4 md:p-8" delay={0.6}>
          <div className="w-full max-w-5xl mx-auto flex flex-col h-full">
            <h3 className="text-xl font-bold text-white mb-8 flex items-center gap-2 self-start">
              <Github className="text-indigo-400" /> Days I Code
            </h3>
            <div className="w-full flex justify-center">
              <div className="w-full max-w-full overflow-visible">
                <GitHubCalendar 
                  username="Sanket2035" 
                  theme={explicitTheme}
                  blockSize={14}
                  blockMargin={6}
                  fontSize={14}
                  colorScheme="dark"
                  style={{ width: '100%' }}
                />
              </div>
            </div>
          </div>
        </BentoCard>
      </div>
    </SectionWrapper>
  );
};

export default About;
