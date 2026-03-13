import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';

// --- Code Snippets Logic ---
const CodeSnippets = () => {
  const snippets = [
    'const App = () => {', 'public static void main', 'import React from "react";',
    '{ status: 200, data: [] }', '<SectionWrapper>', 'try { await fetch()',
    'System.out.println()', 'flex items-center justify-center', 'module.exports = {}',
    'SELECT * FROM users', '@RestController', 'npm run dev', 'git commit -m "update"',
    'border: 1px solid rgba(255, 255, 255, 0.1);'
  ];

  const [activeSnippets, setActiveSnippets] = useState([]);

  useEffect(() => {
    // Generate initial snippets
    const createSnippet = (id) => ({
      id,
      text: snippets[Math.floor(Math.random() * snippets.length)],
      x: Math.random() * 100, // percentage string
      duration: Math.random() * 15 + 20, // 20-35s fall time
      delay: Math.random() * 5,
      opacity: Math.random() * 0.15 + 0.05, // very faint 0.05 to 0.2
      scale: Math.random() * 0.5 + 0.5,
    });

    const initial = Array.from({ length: 15 }).map((_, i) => createSnippet(i));
    setActiveSnippets(initial);
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none select-none z-0">
      {activeSnippets.map((snippet) => (
        <motion.div
          key={snippet.id}
          className="absolute text-indigo-400 font-mono text-sm tracking-wider whitespace-nowrap blur-[1px]"
          style={{ 
            left: `${snippet.x}%`, 
            opacity: snippet.opacity,
            transform: `scale(${snippet.scale})`
          }}
          initial={{ y: '-10vh' }}
          animate={{ y: '110vh' }}
          transition={{
            duration: snippet.duration,
            delay: snippet.delay,
            repeat: Infinity,
            ease: "linear",
          }}
        >
          {snippet.text}
        </motion.div>
      ))}
    </div>
  );
};

// --- Neural Network Canvas Logic ---
const NodeNetwork = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    
    let width = window.innerWidth;
    let height = window.innerHeight;
    canvas.width = width;
    canvas.height = height;

    let particles = [];
    const maxParticles = window.innerWidth > 768 ? 60 : 30; // Responsive count
    const connectionDistance = 150;

    class Particle {
      constructor() {
        this.x = Math.random() * width;
        this.y = Math.random() * height;
        this.vx = (Math.random() - 0.5) * 0.5; // Very slow movement
        this.vy = (Math.random() - 0.5) * 0.5;
        this.radius = Math.random() * 1.5 + 0.5;
        // Cyan and Indigo palette
        this.color = Math.random() > 0.5 ? 'rgba(99, 102, 241, 0.4)' : 'rgba(6, 182, 212, 0.4)';
      }

      update() {
        this.x += this.vx;
        this.y += this.vy;

        // Bounce horizontally
        if (this.x < 0 || this.x > width) this.vx = -this.vx;
        // Bounce vertically
        if (this.y < 0 || this.y > height) this.vy = -this.vy;
      }

      draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        ctx.fillStyle = this.color;
        ctx.fill();
      }
    }

    const init = () => {
      particles = [];
      for (let i = 0; i < maxParticles; i++) {
        particles.push(new Particle());
      }
    };

    const animate = () => {
      ctx.clearRect(0, 0, width, height);

      // Update and draw particles
      particles.forEach(p => {
        p.update();
        p.draw();
      });

      // Draw connections
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < connectionDistance) {
            ctx.beginPath();
            // Opacity based on distance
            const opacity = 1 - (distance / connectionDistance);
            ctx.strokeStyle = `rgba(99, 102, 241, ${opacity * 0.15})`; // Faint indigo lines
            ctx.lineWidth = 0.5;
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.stroke();
          }
        }
      }

      requestAnimationFrame(animate);
    };

    init();
    animate();

    const handleResize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width;
      canvas.height = height;
      init(); // Reinitialize to spread out
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return <canvas ref={canvasRef} className="absolute inset-0 z-0 pointer-events-none opacity-50" />;
};


// --- Main Component Assembly ---
const TechnicalBackground = () => {
  return (
    <div className="fixed inset-0 z-[-1] overflow-hidden bg-[#020617]"> {/* Slate 950 Base */}
      
      {/* Deep Space Core Radial Glows */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-indigo-900/20 via-transparent to-transparent opacity-60" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))] from-fuchsia-900/10 via-[#0a0f1d]/50 to-transparent" />

      {/* Interactive Elements */}
      <NodeNetwork />
      <CodeSnippets />

      {/* Film Grain Texture Overlay to keep it looking premium */}
      <div className="absolute inset-0 opacity-[0.02]" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.65%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E")' }} />
    </div>
  );
};

export default TechnicalBackground;
