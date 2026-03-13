import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Terminal } from 'lucide-react';

const LoadingScreen = ({ onComplete }) => {
  const [text, setText] = useState('');
  const fullText = "sanket.init()";
  const [isTypingComplete, setIsTypingComplete] = useState(false);

  useEffect(() => {
    // Prevent scrolling while loading
    document.body.style.overflow = 'hidden';

    // Typewriter effect
    let currentIndex = 0;
    const typingInterval = setInterval(() => {
      if (currentIndex <= fullText.length) {
        setText(fullText.slice(0, currentIndex));
        currentIndex++;
      } else {
        clearInterval(typingInterval);
        setIsTypingComplete(true);
        // Wait a moment after typing finishes before dismissing the screen
        setTimeout(() => {
          onComplete();
          document.body.style.overflow = 'auto'; // Restore scroll
        }, 800);
      }
    }, 100);

    return () => {
      clearInterval(typingInterval);
      document.body.style.overflow = 'auto';
    };
  }, [onComplete]);

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 z-[10000] flex items-center justify-center bg-[#020617] text-white"
        initial={{ y: 0 }}
        exit={{ y: '-100%', borderBottomLeftRadius: '50%', borderBottomRightRadius: '50%' }}
        transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }} // smooth apple-like ease
      >
        <div className="flex flex-col items-center">
          <motion.div 
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="mb-6 p-4 bg-indigo-500/10 rounded-2xl border border-indigo-500/20 text-indigo-400"
          >
            <Terminal size={48} />
          </motion.div>
          
          <div className="flex items-center text-3xl md:text-5xl font-mono font-bold tracking-tight">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-indigo-500">
              {text}
            </span>
            <motion.span 
              animate={{ opacity: [1, 0] }}
              transition={{ duration: 0.8, repeat: Infinity, ease: "linear" }}
              className="ml-1 w-4 h-8 md:h-12 bg-indigo-500 inline-block"
            />
          </div>
          
          <div className="mt-8 text-slate-500 text-sm font-mono h-6 transition-opacity duration-300" style={{ opacity: isTypingComplete ? 1 : 0 }}>
            [System Environment Loaded]
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

export default LoadingScreen;
