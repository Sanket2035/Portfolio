import React from 'react';
import { Download } from 'lucide-react';
import { motion } from 'framer-motion';

const ResumeButton = ({ variant = 'primary', className = '' }) => {
  const baseStyles = "inline-flex items-center gap-2 px-5 py-2.5 rounded-full font-semibold transition-all duration-300";
  
  const variants = {
    primary: `${baseStyles} bg-[var(--accent-primary)] text-white shadow-[0_4px_14px_0_rgba(99,102,241,0.39)] hover:-translate-y-0.5 hover:shadow-[0_6px_20px_rgba(99,102,241,0.23)]`,
    outline: `${baseStyles} border border-[rgba(255,255,255,0.2)] text-[var(--text-primary)] hover:border-[var(--text-primary)] hover:bg-[rgba(255,255,255,0.05)]`
  };

  return (
    <motion.a 
      href="/Sanket Shinde Resume.pdf" 
      download="Sanket_Shinde_Resume.pdf"
      className={`${variants[variant]} ${className}`}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      <Download size={18} />
      <span>Resume</span>
    </motion.a>
  );
};

export default ResumeButton;
