import React from 'react';
import { motion } from 'framer-motion';

const SectionWrapper = ({ children, id, className, style }) => {
  return (
    <motion.section
      id={id}
      className={className}
      style={style}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.25 }}
      variants={{
        hidden: { opacity: 0, y: 50 },
        show: { 
          opacity: 1, 
          y: 0, 
          transition: { 
            duration: 0.8, 
            staggerChildren: 0.1,
            ease: "easeOut" 
          } 
        }
      }}
    >
      {children}
    </motion.section>
  );
};

export default SectionWrapper;
