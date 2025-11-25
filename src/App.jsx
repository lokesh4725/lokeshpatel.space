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
      
      // Update active section based on scroll position
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

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center pt-20 relative overflow-hidden">
        {/* Background Grid Decoration */}
        <div className="absolute inset-0 z-0 opacity-10" 
             style={{ backgroundImage: 'radial-gradient(#3b82f6 1px, transparent 1px)', backgroundSize: '40px 40px' }}>
        </div>

        <div className="max-w-6xl mx-auto px-6 relative z-10 w-full">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="flex-1 space-y-6">
              <div className="inline-flex items-center px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-sm font-medium">
                <Terminal size={14} className="mr-2" />
                Data Architect | 12+ Years Experience
              </div>
              <h1 className="text-5xl md:text-7xl font-bold text-white leading-tight">
                Architecting <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">
                  Data Futures
                </span>
              </h1>
              <p className="text-xl text-slate-400 max-w-xl leading-relaxed">
                Designing scalable, enterprise-grade data solutions. 
                Specializing in Cloud Architecture (AWS), Modern Data Warehousing, 
                and ETL Transformations for Fortune 500 clients.
              </p>
              
              <div className="flex flex-wrap gap-4 pt-4">
                <button onClick={() => scrollTo('contact')} className="px-8 py-3 bg-blue-600 hover:bg-blue-500 text-white rounded-lg font-medium transition-all shadow-lg shadow-blue-500/25">
                  Contact Me
                </button>
                <button onClick={() => scrollTo('experience')} className="px-8 py-3 border border-slate-600 hover:border-slate-400 text-slate-300 rounded-lg font-medium transition-all">
                  View Work
                </button>
              </div>

              <div className="flex gap-6 pt-6 text-slate-400">
                <a href="https://linkedin.com/in/lokesh-patel4725" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition-colors">
                  <Linkedin size={24} />
                </a>
                <a href="mailto:lokesh4725@gmail.com" className="hover:text-blue-400 transition-colors">
                  <Mail size={24} />
                </a>
                <span className="flex items-center gap-2 text-sm">
                  <MapPin size={16} /> Bengaluru, India
                </span>
              </div>
            </div>

            {/* Abstract Visual Representation of Data Architecture */}
            <div className="flex-1 hidden md:flex justify-center">
              <div className="relative w-96 h-96">
                <div className="absolute inset-0 bg-blue-500/20 rounded-full blur-3xl animate-pulse"></div>
                <div className="relative z-10 grid grid-cols-2 gap-4">
                  <div className="bg-slate-800/50 backdrop-blur-sm p-6 rounded-2xl border border-slate-700 shadow-xl translate-y-8">
                    <Database className="text-blue-400 mb-4" size={32} />
                    <div className="h-2 w-16 bg-slate-600 rounded mb-2"></div>
                    <div className="h-2 w-24 bg-slate-700 rounded"></div>
                  </div>
                  <div className="bg-slate-800/50 backdrop-blur-sm p-6 rounded-2xl border border-slate-700 shadow-xl">
                    <Cloud className="text-cyan-400 mb-4" size={32} />
                    <div className="h-2 w-16 bg-slate-600 rounded mb-2"></div>
                    <div className="h-2 w-24 bg-slate-700 rounded"></div>
                  </div>
                  <div className="bg-slate-800/50 backdrop-blur-sm p-6 rounded-2xl border border-slate-700 shadow-xl translate-y-8">
                    <Server className="text-indigo-400 mb-4" size={32} />
                    <div className="h-2 w-16 bg-slate-600 rounded mb-2"></div>
                    <div className="h-2 w-24 bg-slate-700 rounded"></div>
                  </div>
                  <div className="bg-slate-800/50 backdrop-blur-sm p-6 rounded-2xl border border-slate-700 shadow-xl">
                    <Code className="text-purple-400 mb-4" size={32} />
                    <div className="h-2 w-16 bg-slate-600 rounded mb-2"></div>
                    <div className="h-2 w-24 bg-slate-700 rounded"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce text-slate-500">
            <ChevronDown size={24} />
          </div>
        </div>
      </section>

      {/* About Summary */}
      <section id="about" className="py-24 bg-slate-900">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-white">About Me</h2>
          <p className="text-lg text-slate-300 leading-relaxed">
            I am a results-driven <span className="text-blue-400 font-semibold">Data Architect</span> with over a decade of progressive experience in designing and optimizing enterprise-scale data engineering and integration solutions. 
            My expertise lies in translating complex business requirements into scalable, performant architectures using modern cloud stacks and legacy systems alike.
            I have successfully led data modernization, automation, and multi-million-dollar transformation projects across Fortune 500 clients in Healthcare, Retail, and Finance.
          </p>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-24 bg-slate-800/50">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold mb-16 text-center text-white">Technical Expertise</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Skill Card 1 */}
            <div className="bg-slate-800 p-8 rounded-xl border border-slate-700 hover:border-blue-500/50 transition-all hover:-translate-y-1 shadow-lg group">
              <div className="bg-blue-500/10 w-14 h-14 rounded-lg flex items-center justify-center mb-6 group-hover:bg-blue-500/20 transition-colors">
                <Database className="text-blue-400" size={28} />
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Data Architecture</h3>
              <ul className="space-y-2 text-slate-400">
                <li className="flex items-center"><span className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-2"></span>OLAP & OLTP Modeling</li>
                <li className="flex items-center"><span className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-2"></span>Data Warehousing</li>
                <li className="flex items-center"><span className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-2"></span>SCD & Schema Design</li>
                <li className="flex items-center"><span className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-2"></span>Solution Design</li>
              </ul>
            </div>

            {/* Skill Card 2 */}
            <div className="bg-slate-800 p-8 rounded-xl border border-slate-700 hover:border-cyan-500/50 transition-all hover:-translate-y-1 shadow-lg group">
              <div className="bg-cyan-500/10 w-14 h-14 rounded-lg flex items-center justify-center mb-6 group-hover:bg-cyan-500/20 transition-colors">
                <Cloud className="text-cyan-400" size={28} />
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Cloud & Platforms</h3>
              <ul className="space-y-2 text-slate-400">
                <li className="flex items-center"><span className="w-1.5 h-1.5 bg-cyan-500 rounded-full mr-2"></span>AWS (S3, Redshift, Glue, EC2)</li>
                <li className="flex items-center"><span className="w-1.5 h-1.5 bg-cyan-500 rounded-full mr-2"></span>Google Cloud Platform (GCP)</li>
                <li className="flex items-center"><span className="w-1.5 h-1.5 bg-cyan-500 rounded-full mr-2"></span>Databricks</li>
                <li className="flex items-center"><span className="w-1.5 h-1.5 bg-cyan-500 rounded-full mr-2"></span>Healthcare & Finance Domain</li>
              </ul>
            </div>

            {/* Skill Card 3 */}
            <div className="bg-slate-800 p-8 rounded-xl border border-slate-700 hover:border-purple-500/50 transition-all hover:-translate-y-1 shadow-lg group">
              <div className="bg-purple-500/10 w-14 h-14 rounded-lg flex items-center justify-center mb-6 group-hover:bg-purple-500/20 transition-colors">
                <Layers className="text-purple-400" size={28} />
              </div>
              <h3 className="text-xl font-bold text-white mb-4">ETL & Integration</h3>
              <ul className="space-y-2 text-slate-400">
                <li className="flex items-center"><span className="w-1.5 h-1.5 bg-purple-500 rounded-full mr-2"></span>Informatica PowerCenter 10.6</li>
                <li className="flex items-center"><span className="w-1.5 h-1.5 bg-purple-500 rounded-full mr-2"></span>SQL Server Integration (SSIS)</li>
                <li className="flex items-center"><span className="w-1.5 h-1.5 bg-purple-500 rounded-full mr-2"></span>Teradata & DB2</li>
                <li className="flex items-center"><span className="w-1.5 h-1.5 bg-purple-500 rounded-full mr-2"></span>Pipelines Automation</li>
              </ul>
            </div>

            {/* Skill Card 4 */}
            <div className="bg-slate-800 p-8 rounded-xl border border-slate-700 hover:border-green-500/50 transition-all hover:-translate-y-1 shadow-lg group">
              <div className="bg-green-500/10 w-14 h-14 rounded-lg flex items-center justify-center mb-6 group-hover:bg-green-500/20 transition-colors">
                <Code className="text-green-400" size={28} />
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Programming & DevOps</h3>
              <ul className="space-y-2 text-slate-400">
                <li className="flex items-center"><span className="w-1.5 h-1.5 bg-green-500 rounded-full mr-2"></span>Advanced SQL</li>
                <li className="flex items-center"><span className="w-1.5 h-1.5 bg-green-500 rounded-full mr-2"></span>Python & Shell Scripting</li>
                <li className="flex items-center"><span className="w-1.5 h-1.5 bg-green-500 rounded-full mr-2"></span>Control-M Scheduling</li>
                <li className="flex items-center"><span className="w-1.5 h-1.5 bg-green-500 rounded-full mr-2"></span>Bitbucket & Agile Methodology</li>
              </ul>
            </div>
            
            {/* Awards Card */}
            <div className="md:col-span-2 bg-gradient-to-br from-slate-800 to-slate-900 p-8 rounded-xl border border-slate-700 shadow-lg">
              <div className="flex items-center gap-4 mb-6">
                <div className="bg-yellow-500/10 w-14 h-14 rounded-lg flex items-center justify-center">
                  <Award className="text-yellow-500" size={28} />
                </div>
                <h3 className="text-xl font-bold text-white">Key Achievements</h3>
              </div>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="flex items-start gap-3">
                  <div className="mt-1.5 w-2 h-2 rounded-full bg-yellow-500 flex-shrink-0"></div>
                  <p className="text-slate-300">8-time Impact Award Winner for outstanding technical leadership at Legato Health.</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="mt-1.5 w-2 h-2 rounded-full bg-yellow-500 flex-shrink-0"></div>
                  <p className="text-slate-300">Driven major transformation projects resulting in a $500M revenue uplift.</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="mt-1.5 w-2 h-2 rounded-full bg-yellow-500 flex-shrink-0"></div>
                  <p className="text-slate-300">Multiple Spot & Applause Awards at Deloitte for excellence in project delivery.</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="mt-1.5 w-2 h-2 rounded-full bg-yellow-500 flex-shrink-0"></div>
                  <p className="text-slate-300">Enabled 80% reduction in manual data validation through automation pipelines.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-24 bg-slate-900 relative">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold mb-16 text-center text-white">Professional Journey</h2>
          
          <div className="space-y-12">
            {/* Job 1 */}
            <div className="relative pl-8 md:pl-0">
              <div className="md:w-1/2 md:ml-auto pl-0 md:pl-12 relative">
                {/* Timeline Line */}
                <div className="absolute top-0 bottom-[-48px] left-[-2px] md:left-0 w-0.5 bg-slate-700"></div>
                {/* Timeline Dot */}
                <div className="absolute top-0 left-[-9px] md:left-[-7px] w-4 h-4 rounded-full bg-blue-500 border-4 border-slate-900"></div>
                
                <div className="bg-slate-800 p-6 rounded-xl border border-slate-700 shadow-sm">
                  <div className="flex justify-between items-start flex-wrap gap-2 mb-2">
                    <h3 className="text-xl font-bold text-white">Associate Technical Architect</h3>
                    <span className="text-sm px-3 py-1 bg-blue-500/10 text-blue-400 rounded-full font-medium">Feb 2019 - Present</span>
                  </div>
                  <h4 className="text-slate-400 mb-4 font-medium">Carelon Global Solutions (Legato Health Tech)</h4>
                  <ul className="space-y-2 text-slate-300 text-sm list-disc pl-4 marker:text-blue-500">
                    <li>Architected end-to-end data integration platforms for US healthcare clients with annual revenue exceeding $900M.</li>
                    <li>Designed scalable ETL/data pipelines using Informatica & AWS, achieving 80% reduction in manual validation.</li>
                    <li>Spearheaded transition of major engagements from vendor delivery to in-house ownership.</li>
                    <li>Increased business delivery throughput by 40% via improved design patterns and frameworks.</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Job 2 */}
            <div className="relative pl-8 md:pl-0">
              <div className="md:w-1/2 md:mr-auto pr-0 md:pr-12 md:text-right relative">
                 {/* Timeline Line */}
                 <div className="absolute top-0 bottom-[-48px] left-[-2px] md:left-auto md:right-0 w-0.5 bg-slate-700"></div>
                {/* Timeline Dot */}
                <div className="absolute top-0 left-[-9px] md:left-auto md:right-[-7px] w-4 h-4 rounded-full bg-cyan-500 border-4 border-slate-900"></div>
                
                <div className="bg-slate-800 p-6 rounded-xl border border-slate-700 shadow-sm">
                  <div className="flex justify-between items-start flex-wrap gap-2 mb-2 md:flex-row-reverse">
                    <h3 className="text-xl font-bold text-white">Consultant</h3>
                    <span className="text-sm px-3 py-1 bg-cyan-500/10 text-cyan-400 rounded-full font-medium">Dec 2015 - Feb 2019</span>
                  </div>
                  <h4 className="text-slate-400 mb-4 font-medium">Deloitte Consulting US Pvt Ltd</h4>
                  <ul className="space-y-2 text-slate-300 text-sm list-disc pl-4 marker:text-cyan-500 inline-block text-left">
                    <li>Delivered large-scale data warehousing and BI solutions for top-tier US healthcare providers.</li>
                    <li>Designed and tuned ETL workflows improving overall performance by 25%.</li>
                    <li>Automated job scheduling and workflow dependencies in Control-M to streamline nightly loads.</li>
                    <li>Contributed to internal hiring and mentoring of junior consultants.</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Job 3 */}
            <div className="relative pl-8 md:pl-0">
              <div className="md:w-1/2 md:ml-auto pl-0 md:pl-12 relative">
                {/* Timeline Line */}
                <div className="absolute top-0 bottom-0 left-[-2px] md:left-0 w-0.5 bg-slate-700"></div>
                {/* Timeline Dot */}
                <div className="absolute top-0 left-[-9px] md:left-[-7px] w-4 h-4 rounded-full bg-purple-500 border-4 border-slate-900"></div>
                
                <div className="bg-slate-800 p-6 rounded-xl border border-slate-700 shadow-sm">
                  <div className="flex justify-between items-start flex-wrap gap-2 mb-2">
                    <h3 className="text-xl font-bold text-white">Technology Consultant</h3>
                    <span className="text-sm px-3 py-1 bg-purple-500/10 text-purple-400 rounded-full font-medium">Oct 2012 - Dec 2015</span>
                  </div>
                  <h4 className="text-slate-400 mb-4 font-medium">Hewlett Packard Global Soft Pvt Ltd</h4>
                  <ul className="space-y-2 text-slate-300 text-sm list-disc pl-4 marker:text-purple-500">
                    <li>Designed and developed ETL processes using Informatica and Teradata for global reporting solutions.</li>
                    <li>Performed unit, QA, and integration testing ensuring zero-defect production releases.</li>
                    <li>Collaborated with cross-functional business teams to deliver actionable data insights.</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <section id="certifications" className="py-24 bg-slate-800/50">
        <div className="max-w-4xl mx-auto px-6">
          <div className="flex flex-col md:flex-row gap-12">
            
            {/* Certs List */}
            <div className="flex-1">
              <h2 className="text-3xl font-bold mb-8 text-white flex items-center gap-3">
                <GraduationCap className="text-blue-400" /> Certifications
              </h2>
              <div className="space-y-4">
                {[
                  "Databricks Generative AI Fundamentals",
                  "Google Cloud Digital Leader Specialization",
                  "Teradata Certified Professional & Technical Expert",
                  "CURES Enterprise Problem Solving Framework (White Belt)"
                ].map((cert, index) => (
                  <div key={index} className="flex items-center p-4 bg-slate-800 rounded-lg border border-slate-700">
                    <div className="w-2 h-2 bg-green-400 rounded-full mr-4"></div>
                    <span className="text-slate-200 font-medium">{cert}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Education */}
            <div className="flex-1">
              <h2 className="text-3xl font-bold mb-8 text-white flex items-center gap-3">
                <Briefcase className="text-blue-400" /> Education
              </h2>
              <div className="bg-slate-800 p-6 rounded-xl border border-slate-700">
                <h3 className="text-xl font-bold text-white mb-2">Bachelor of Engineering in IT</h3>
                <p className="text-slate-400 mb-2">CSVTU Bhilai, Chhattisgarh</p>
                <div className="flex justify-between items-center mt-4">
                  <span className="text-slate-500 text-sm">Graduated 2012</span>
                  <span className="px-3 py-1 bg-green-500/10 text-green-400 rounded-full text-sm font-medium">Grade: 8.37/10</span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 bg-slate-900 border-t border-slate-800">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-white">Let's Connect</h2>
          <p className="text-slate-400 mb-12 max-w-xl mx-auto">
            I'm always open to discussing data architecture, cloud modernization, and new opportunities.
          </p>

          <div className="flex flex-col md:flex-row justify-center gap-6">
            <a href="mailto:lokesh4725@gmail.com" 
               className="flex items-center justify-center gap-3 px-8 py-4 bg-slate-800 hover:bg-slate-700 border border-slate-700 hover:border-blue-500/50 text-white rounded-xl transition-all group">
              <Mail className="group-hover:text-blue-400 transition-colors" />
              <span>lokesh4725@gmail.com</span>
            </a>
            
            <a href="https://linkedin.com/in/lokesh-patel4725" target="_blank" rel="noopener noreferrer"
               className="flex items-center justify-center gap-3 px-8 py-4 bg-slate-800 hover:bg-slate-700 border border-slate-700 hover:border-blue-500/50 text-white rounded-xl transition-all group">
              <Linkedin className="group-hover:text-blue-400 transition-colors" />
              <span>LinkedIn Profile</span>
            </a>

            <div className="flex items-center justify-center gap-3 px-8 py-4 bg-slate-800 border border-slate-700 text-white rounded-xl cursor-default">
              <Phone className="text-slate-500" />
              <span>+91 9632102347</span>
            </div>
          </div>

          <footer className="mt-20 pt-8 border-t border-slate-800 text-slate-500 text-sm">
            <p>&copy; {new Date().getFullYear()} Lokesh Patel. All rights reserved.</p>
          </footer>
        </div>
      </section>
    </div>
  );
};

export default Portfolio;