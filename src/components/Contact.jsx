import React, { useState, useRef } from 'react';
import { Mail, Linkedin, Github, Send, Loader2, CheckCircle2 } from 'lucide-react';
import SectionWrapper from './SectionWrapper';
import { motion, AnimatePresence } from 'framer-motion';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const formRef = useRef();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState('');

  const [form, setForm] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError('');

    // NOTE: In a real production app, move these keys to .env
    // Currently using a demo generic service ID structure for the portfolio
    emailjs.send(
      'service_default', // Replace with your actual service ID
      'template_default', // Replace with your actual template ID
      {
        from_name: form.name,
        to_name: 'Sanket',
        from_email: form.email,
        to_email: 'sanketks200305@gmail.com',
        message: form.message,
      },
      'public_key_here' // Replace with your actual public key
    )
    .then(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      setForm({ name: '', email: '', message: '' });
      setTimeout(() => setIsSuccess(false), 5000);
    })
    .catch((err) => {
      setIsSubmitting(false);
      console.error(err);
      setError('Something went wrong. Please try again or email me directly.');
    });
  };

  return (
    <SectionWrapper id="contact" className="section container max-w-6xl mx-auto py-24">
      <motion.div 
        className="text-center mb-16"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <h2 className="text-4xl md:text-6xl font-black mb-6 tracking-tighter text-white">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-cyan-400">
            Let's Connect
          </span>
        </h2>
        <p className="text-slate-300 max-w-2xl mx-auto text-lg md:text-xl font-light">
          I'm currently accessible for new opportunities. Whether you have a question or just want to say hi, I'll try my best to get back to you!
        </p>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-start">
        
        {/* Contact Information & Socials */}
        <motion.div 
          className="glass-card p-10 rounded-[2rem] flex flex-col h-full bg-gradient-to-br from-[#0a0f1d] to-indigo-900/10"
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-bold text-white mb-8 border-b border-white/5 pb-4">Contact Information</h3>
          
          <div className="space-y-6 flex-1">
            <a href="mailto:sanketks200305@gmail.com" className="group flex items-center gap-4 p-4 rounded-2xl bg-white/5 border border-white/5 hover:border-indigo-500/30 transition-all hover:-translate-y-1">
              <div className="w-12 h-12 bg-indigo-500/20 rounded-full flex items-center justify-center text-indigo-400 group-hover:bg-indigo-500 group-hover:text-white transition-colors">
                <Mail size={24} />
              </div>
              <div className="flex flex-col">
                <span className="text-sm text-slate-400 mb-1">Email Me At</span>
                <span className="text-slate-200 font-medium group-hover:text-indigo-300 transition-colors">sanketks200305@gmail.com</span>
              </div>
            </a>

            <div className="flex items-center gap-4 p-4 rounded-2xl bg-white/5 border border-white/5">
              <div className="w-12 h-12 bg-fuchsia-500/20 rounded-full flex items-center justify-center text-fuchsia-400">
                <span className="font-bold text-xl">+</span>
              </div>
              <div className="flex flex-col">
                <span className="text-sm text-slate-400 mb-1">Call Me At</span>
                <span className="text-slate-200 font-medium">+91 7498236362</span>
              </div>
            </div>
          </div>

          <div className="pt-8 border-t border-white/5 mt-8 flex justify-start gap-4">
            <a href="https://github.com/Sanket2035" target="_blank" rel="noopener noreferrer" className="w-12 h-12 bg-white/5 border border-white/10 rounded-full flex items-center justify-center text-slate-300 hover:text-white hover:bg-white/10 hover:border-white/20 transition-all hover:scale-110">
              <Github size={24} />
            </a>
            <a href="https://www.linkedin.com/in/sanket-shinde2035" target="_blank" rel="noopener noreferrer" className="w-12 h-12 bg-white/5 border border-white/10 rounded-full flex items-center justify-center text-slate-300 hover:text-[#0A66C2] hover:bg-[#0A66C2]/10 hover:border-[#0A66C2]/30 transition-all hover:scale-110">
              <Linkedin size={24} />
            </a>
          </div>
        </motion.div>

        {/* EmailJS Form */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <form 
            ref={formRef}
            onSubmit={handleSubmit}
            className="glass-card p-10 rounded-[2rem] flex flex-col gap-6 relative"
          >
            <div className="flex flex-col gap-2">
              <label className="text-sm font-medium text-slate-300 ml-1">Your Name</label>
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                required
                placeholder="John Doe"
                className="bg-[#0a0f1d]/50 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-slate-600 focus:outline-none focus:ring-2 focus:ring-indigo-500/50 focus:border-indigo-500 transition-all"
              />
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-sm font-medium text-slate-300 ml-1">Your Email</label>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                required
                placeholder="john@example.com"
                className="bg-[#0a0f1d]/50 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-slate-600 focus:outline-none focus:ring-2 focus:ring-indigo-500/50 focus:border-indigo-500 transition-all"
              />
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-sm font-medium text-slate-300 ml-1">Your Message</label>
              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                required
                rows="5"
                placeholder="What do you want to build?"
                className="bg-[#0a0f1d]/50 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-slate-600 focus:outline-none focus:ring-2 focus:ring-indigo-500/50 focus:border-indigo-500 transition-all resize-none"
              />
            </div>

            <button
              type="submit"
              disabled={isSubmitting || isSuccess}
              className="mt-2 w-full bg-gradient-to-r from-indigo-500 to-cyan-500 text-white font-bold py-4 rounded-xl flex items-center justify-center gap-2 hover:shadow-[0_0_20px_rgba(99,102,241,0.4)] transition-all disabled:opacity-70 disabled:cursor-not-allowed group relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-white/20 translate-y-[100%] group-hover:translate-y-[0%] transition-transform duration-300 ease-out" />
              
              <AnimatePresence mode="wait">
                {isSubmitting ? (
                  <motion.div key="loading" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
                    <Loader2 className="animate-spin" size={20} />
                  </motion.div>
                ) : isSuccess ? (
                  <motion.div key="success" initial={{ scale: 0 }} animate={{ scale: 1 }} exit={{ scale: 0 }} className="flex items-center gap-2">
                    <CheckCircle2 size={20} /> Sent Successfully!
                  </motion.div>
                ) : (
                  <motion.div key="send" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="flex items-center gap-2 z-10">
                    Send Message <Send size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                  </motion.div>
                )}
              </AnimatePresence>
            </button>

            {error && (
              <p className="text-red-400 text-sm text-center mt-2">{error}</p>
            )}
          </form>
        </motion.div>

      </div>
      
      <p className="mt-24 text-center text-slate-600 text-sm">
        © 2026 Sanket Shinde. All rights reserved. Built with React & <span className="text-indigo-500">Antigravity AI</span>.
      </p>
    </SectionWrapper>
  );
};

export default Contact;
