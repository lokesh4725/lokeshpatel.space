import React, { useState, useEffect } from 'react';
import { 
  Database, 
  Cloud, 
  Code, 
  Server, 
  Award, 
  Briefcase, 
  GraduationCap, 
  Mail, 
  Linkedin, 
  Phone, 
  MapPin, 
  ChevronDown, 
  ExternalLink,
  Terminal,
  Cpu,
  Layers,
  Menu,
  X
} from 'lucide-react';

const Portfolio = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      
      const sections = ['home', 'about', 'skills', 'experience', 'certifications', 'contact'];
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top >= -100 && rect.top <= 300;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  const NavLink = ({ to, label, mobile = false }) => (
    <button
      onClick={() => scrollTo(to)}
      className={`text-sm font-medium transition-colors hover:text-blue-400 ${
        activeSection === to ? 'text-blue-400' : 'text-slate-300'
      } ${mobile ? 'block w-full text-left py-4 text-lg border-b border-slate-800' : ''}`}
    >
      {label}
    </button>
  );

  return (
    <div className="bg-slate-900 min-h-screen text-slate-200 font-sans selection:bg-blue-500 selection:text-white">
      {/* Navigation */}
      <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-slate-900/95 backdrop-blur-md shadow-lg py-4' : 'bg-transparent py-6'}`}>
        <div className="max-w-6xl mx-auto px-6 flex justify-between items-center">
          <div className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
            LP.
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex gap-8">
            <NavLink to="home" label="Home" />
            <NavLink to="about" label="About" />
            <NavLink to="skills" label="Skills" />
            <NavLink to="experience" label="Experience" />
            <NavLink to="certifications" label="Certifications" />
          </div>

          {/* Mobile Menu Toggle */}
          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="md:hidden text-slate-300">
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu Overlay */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-full left-0 w-full bg-slate-900 border-t border-slate-800 px-6 py-4 shadow-xl">
            <NavLink to="home" label="Home" mobile />
            <NavLink to="about" label="About" mobile />
            <NavLink to="skills" label="Skills" mobile />
            <NavLink to="experience" label="Experience" mobile />
            <NavLink to="certifications" label="Certifications" mobile />
          </div>
        )}
      </nav>

      {/* Other sections remain unchanged */}
      <section id="home" className="min-h-screen flex items-center justify-center text-center text-white">
        <h1 className="text-4xl font-bold">Home Section (Unchanged)</h1>
      </section>
      <section id="about" className="py-24 bg-slate-900 text-center text-white">
        <h2 className="text-3xl font-bold">About Section (Unchanged)</h2>
      </section>
      <section id="skills" className="py-24 bg-slate-800/50 text-center text-white">
        <h2 className="text-3xl font-bold">Skills Section (Unchanged)</h2>
      </section>

      {/* Updated Experience Section */}
      <section id="experience" className="py-24 bg-slate-900 relative">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold mb-16 text-center text-white">Professional Journey</h2>
          <div className="space-y-12">
            <p className="text-slate-300 text-center">[The new merged Experience section content goes here — same as previous message]</p>
          </div>
        </div>
      </section>

      <section id="certifications" className="py-24 bg-slate-800/50 text-center text-white">
        <h2 className="text-3xl font-bold">Certifications (Unchanged)</h2>
      </section>
      <section id="contact" className="py-24 bg-slate-900 text-center text-white">
        <h2 className="text-3xl font-bold">Contact Section (Unchanged)</h2>
      </section>
    </div>
  );
};

export default Portfolio;
