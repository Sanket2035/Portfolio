import React, { useState, useEffect } from 'react';
import { ArrowRight, Code2, Database, Terminal } from 'lucide-react';
import { motion } from 'framer-motion';
import ResumeButton from './ResumeButton';

const Typewriter = ({ text, delay = 0, infinite = false }) => {
  const [currentText, setCurrentText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    let timeout;
    
    if (currentIndex < text.length) {
      timeout = setTimeout(() => {
        setCurrentText(prev => prev + text[currentIndex]);
        setCurrentIndex(prev => prev + 1);
      }, 80); // Typing speed
    } else if (infinite) {
      setTimeout(() => {
        setCurrentIndex(0);
        setCurrentText('');
      }, 3000); // Pause before restarting
    }

    return () => clearTimeout(timeout);
  }, [currentIndex, delay, infinite, text]);

  return <span>{currentText}</span>;
};

// Orbital Icon Component
const FloatingIcon = ({ icon: Icon, delay, top, left, right, bottom, color }) => (
  <motion.div
    className="absolute z-20 flex items-center justify-center w-12 h-12 md:w-16 md:h-16 rounded-2xl glass-card border border-white/10 shadow-2xl"
    style={{ top, left, right, bottom, color }}
    initial={{ scale: 0, opacity: 0 }}
    animate={{ 
      scale: 1, 
      opacity: 1,
      y: [0, -15, 0],
    }}
    transition={{ 
      scale: { duration: 0.5, delay },
      opacity: { duration: 0.5, delay },
      y: { duration: 4, repeat: Infinity, ease: "easeInOut", delay: delay + 0.5 }
    }}
  >
    <Icon size={28} strokeWidth={1.5} />
  </motion.div>
);

const Hero = () => {
  return (
    <section id="home" className="container min-h-screen flex flex-col justify-center pt-24 pb-12 relative">
      <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-12 lg:gap-8 w-full max-w-7xl mx-auto">
        
        {/* Text Content */}
        <motion.div 
          className="flex-1 max-w-2xl text-center lg:text-left z-10"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <motion.div 
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-[var(--accent-primary)] font-medium text-sm mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-500"></span>
            </span>
            Available for New Opportunities
          </motion.div>

          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tighter mb-6 leading-[1.1]">
            <span className="block text-white">Sanket Shinde</span>
            <span className="block mt-2 text-gradient">
              <Typewriter text="Java Full Stack Developer." delay={500} />
            </span>
          </h1>

          <motion.p 
            className="text-slate-400 text-lg md:text-xl mb-10 leading-relaxed max-w-xl mx-auto lg:mx-0"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            Building robust web applications with a focus on clean code, 
            scalable <strong className="text-slate-200">Spring Boot</strong> architectures, 
            and pixel-perfect <strong className="text-slate-200">React</strong> interfaces.
          </motion.p>
          
          <motion.div 
            className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.5 }}
          >
            <ResumeButton className="w-full sm:w-auto text-lg !px-8 !py-4 rounded-xl shadow-[0_0_40px_rgba(99,102,241,0.3)] hover:shadow-[0_0_60px_rgba(99,102,241,0.5)]" />
            
            <a href="#projects" className="group relative w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 bg-white/5 border border-white/10 text-white rounded-xl font-semibold overflow-hidden transition-all hover:bg-white/10 hover:scale-[1.02]">
              View My Work 
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </a>
          </motion.div>
        </motion.div>
        
        {/* Orbital Profile Image */}
        <motion.div 
          className="flex-1 w-full max-w-lg lg:max-w-none flex justify-center lg:justify-end items-center relative"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
            <div className="relative w-[300px] h-[300px] sm:w-[400px] sm:h-[400px] lg:w-[450px] lg:h-[450px] lg:mr-8 mt-8 lg:mt-0">
              
              {/* Decorative Background Glow behind image */}
              <div className="absolute inset-0 bg-gradient-to-tr from-indigo-500/20 to-fuchsia-500/20 rounded-full blur-3xl animate-pulse" />
              
              <motion.div 
                className="relative w-full h-full rounded-full p-2 bg-gradient-to-tr from-indigo-500/30 to-slate-800/30 backdrop-blur-sm border border-white/10 z-10"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.4 }}
              >
                <div className="w-full h-full rounded-full overflow-hidden border-2 border-[#0a0f1d] bg-[#0a0f1d]">
                  <img 
                    src="/Profile Image1.jpeg" 
                    alt="Sanket Shinde" 
                    className="w-full h-full object-cover opacity-90 hover:opacity-100 transition-opacity duration-500"
                  />
                </div>
              </motion.div>

              {/* Orbital Icons */}
              <FloatingIcon icon={Terminal} delay={0.8} top="-5%" left="15%" color="#38bdf8" />
              <FloatingIcon icon={Database} delay={1.1} bottom="15%" left="-10%" color="#f43f5e" />
              <FloatingIcon icon={Code2} delay={1.4} top="40%" right="-5%" color="#a78bfa" />
              
            </div>
        </motion.div>

      </div>
    </section>
  );
};

export default Hero;

