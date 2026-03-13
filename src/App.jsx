import React, { useState } from 'react';
import { motion, useScroll, useSpring, AnimatePresence } from 'framer-motion';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import TechnicalBackground from './components/TechnicalBackground';
import CustomCursor from './components/CustomCursor';
import LoadingScreen from './components/LoadingScreen';
import './App.css';

function App() {
  const [isLoading, setIsLoading] = useState(true);
  
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <div className="app relative min-h-screen text-white cursor-none selection:bg-indigo-500/30 selection:text-indigo-200">
      
      {isLoading ? (
        <LoadingScreen onComplete={() => setIsLoading(false)} />
      ) : (
        <>
          <CustomCursor />
          <TechnicalBackground />
          
          {/* Top Reading Progress Bar */}
          <motion.div
            className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-cyan-400 to-indigo-500 origin-left z-[9999]"
            style={{ scaleX }}
          />
          
          <motion.div 
            className="relative z-10 w-full overflow-hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <Navbar />
            <Hero />
            <About />
            <Skills />
            <Projects />
            <Contact />
          </motion.div>
        </>
      )}
    </div>
  );
}

export default App;
