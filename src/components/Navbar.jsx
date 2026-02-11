import React from 'react';
import { Menu, X, Github, Linkedin, Mail } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  const navLinks = [
    { href: '#home', label: 'Home' },
    { href: '#about', label: 'About' },
    { href: '#skills', label: 'Skills' },
    { href: '#projects', label: 'Projects' },
    { href: '#contact', label: 'Contact' },
  ];

  return (
    <nav className="fixed w-full z-50 bg-opacity-90 backdrop-blur-sm" style={{ backgroundColor: 'rgba(15, 23, 42, 0.8)', borderBottom: '1px solid rgba(255,255,255,0.1)' }}>
      <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', height: '80px' }}>
        <a href="#" style={{ fontSize: '1.5rem', fontWeight: 'bold', color: 'var(--text-primary)' }}>
          Sanket<span style={{ color: 'var(--accent-primary)' }}>.</span>
        </a>

        {/* Desktop Menu */}
        <div style={{ display: 'flex', gap: '2rem' }} className="hidden md:flex">
          {navLinks.map((link) => (
            <a key={link.label} href={link.href} style={{ color: 'var(--text-secondary)', fontWeight: '500' }} className="hover:text-white transition-colors">
              {link.label}
            </a>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button onClick={() => setIsOpen(!isOpen)} style={{ display: 'none', background: 'none', border: 'none', color: 'white' }} className="md:hidden block">
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div style={{ position: 'absolute', top: '80px', left: 0, width: '100%', backgroundColor: 'var(--bg-card)', padding: '1rem', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
           {navLinks.map((link) => (
            <a key={link.label} href={link.href} onClick={() => setIsOpen(false)} style={{ color: 'var(--text-primary)', padding: '0.5rem' }}>
              {link.label}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
