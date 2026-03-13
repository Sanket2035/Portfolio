import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, useScroll, useMotionValueEvent } from 'framer-motion';
import ResumeButton from './ResumeButton';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [hidden, setHidden] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious();
    if (latest > 150 && latest > previous) {
      setHidden(true);
    } else {
      setHidden(false);
    }
  });

  const navLinks = [
    { href: '#home', label: 'Home' },
    { href: '#about', label: 'About' },
    { href: '#skills', label: 'Skills' },
    { href: '#projects', label: 'Projects' },
    { href: '#contact', label: 'Contact' },
  ];

  return (
    <motion.nav 
      className="fixed top-6 left-0 right-0 mx-auto z-50 w-[92%] max-w-4xl rounded-full border border-white/5 bg-[#0a0f1d]/70 backdrop-blur-xl shadow-[0_8px_32px_0_rgba(0,0,0,0.3)] transition-all"
      variants={{
        visible: { y: 0, opacity: 1 },
        hidden: { y: -100, opacity: 0 }
      }}
      animate={hidden ? "hidden" : "visible"}
      transition={{ duration: 0.35, ease: "easeInOut" }}
    >
      <div className="flex items-center justify-between px-6 py-3">
        <a href="#" className="text-xl font-bold tracking-tight text-white flex items-center gap-1 hover:scale-105 transition-transform">
          Sanket<span className="text-[var(--accent-primary)]">.</span>
        </a>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a 
              key={link.label} 
              href={link.href} 
              className="text-sm font-medium text-slate-400 hover:text-white transition-colors"
            >
              {link.label}
            </a>
          ))}
          <div className="h-4 w-[1px] bg-white/10 mx-2" />
          <ResumeButton variant="primary" className="!py-2 !px-5 text-sm rounded-full" />
        </div>

        {/* Mobile Menu Button */}
        <button 
          onClick={() => setIsOpen(!isOpen)} 
          className="md:hidden text-slate-300 hover:text-white transition-colors"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <motion.div 
          initial={{ opacity: 0, scale: 0.95, y: -10 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          className="absolute top-[calc(100%+1rem)] left-0 w-full rounded-2xl border border-white/5 bg-[#0a0f1d]/95 backdrop-blur-xl p-4 flex flex-col gap-2 shadow-2xl md:hidden"
        >
           {navLinks.map((link) => (
            <a 
              key={link.label} 
              href={link.href} 
              onClick={() => setIsOpen(false)} 
              className="text-slate-300 hover:text-white hover:bg-white/5 px-4 py-3 rounded-xl transition-all font-medium"
            >
              {link.label}
            </a>
          ))}
          <div className="mt-2 pt-4 border-t border-white/10">
            <ResumeButton variant="primary" className="w-full justify-center !py-3 rounded-xl" />
          </div>
        </motion.div>
      )}
    </motion.nav>
  );
};

export default Navbar;
