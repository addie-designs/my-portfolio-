import React, { useState, useEffect } from 'react';
import { Github, Linkedin, Facebook, Instagram, Code, Palette, Smartphone, Server, Database, Loader, Mail, Phone, MapPin, Menu, X, Sun, Moon } from 'lucide-react';

export default function Portfolio() {
  const [darkMode, setDarkMode] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'services', 'skills', 'projects', 'contact'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setMobileMenuOpen(false);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Thank you for your message! I will get back to you soon.');
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  const NavLink = ({ section, label }) => (
    <button
      onClick={() => scrollToSection(section)}
      className={`px-4 py-2 rounded-lg transition-all duration-300 ${
        activeSection === section
          ? 'text-white font-bold bg-purple-600'
          : darkMode
          ? 'text-gray-300 hover:text-white'
          : 'text-gray-700 hover:text-purple-600'
      }`}
    >
      {label}
    </button>
  );

  return (
    <div className={darkMode ? 'dark' : ''}>
      {/* Navigation */}
      <nav className={`fixed top-0 left-0 right-0 z-50 ${darkMode ? 'bg-gray-900' : 'bg-white'} shadow-lg`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className={`text-2xl font-bold ${darkMode ? 'text-white' : 'text-purple-600'}`}>
              Portfolio
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-2">
              <NavLink section="home" label="Home" />
              <NavLink section="about" label="About" />
              <NavLink section="services" label="Services" />
              <NavLink section="skills" label="Skills" />
              <NavLink section="projects" label="Projects" />
              <button
                onClick={() => scrollToSection('contact')}
                className="ml-4 px-6 py-2 bg-purple-600 text-white rounded-full hover:bg-purple-700 transition-all duration-300"
              >
                Contact
              </button>
              <button
                onClick={() => setDarkMode(!darkMode)}
                className={`ml-2 p-2 rounded-lg ${darkMode ? 'bg-gray-800 text-yellow-400' : 'bg-gray-200 text-gray-700'}`}
              >
                {darkMode ? <Sun size={20} /> : <Moon size={20} />}
              </button>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden flex items-center gap-2">
              <button
                onClick={() => setDarkMode(!darkMode)}
                className={`p-2 rounded-lg ${darkMode ? 'bg-gray-800 text-yellow-400' : 'bg-gray-200 text-gray-700'}`}
              >
                {darkMode ? <Sun size={20} /> : <Moon size={20} />}
              </button>
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className={darkMode ? 'text-white' : 'text-gray-700'}
              >
                {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className={`md:hidden ${darkMode ? 'bg-gray-800' : 'bg-white'} border-t`}>
            <div className="px-4 py-4 space-y-2">
              <NavLink section="home" label="Home" />
              <NavLink section="about" label="About" />
              <NavLink section="services" label="Services" />
              <NavLink section="skills" label="Skills" />
              <NavLink section="projects" label="Projects" />
              <NavLink section="contact" label="Contact" />
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className={`min-h-screen pt-20 ${darkMode ? 'bg-gray-900' : 'bg-white'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-12">
            <div className="flex-1 text-center md:text-left">
              <h1 className={`text-4xl sm:text-5xl lg:text-6xl font-black mb-4 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                Designer & Developer
              </h1>
              <p className={`text-lg sm:text-xl mb-8 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                I'm a passionate designer and developer creating modern, intuitive, and high-performing web applications. My focus is on bridging the gap between aesthetics and functionality to deliver exceptional user experiences.
              </p>
              <button
                onClick={() => scrollToSection('projects')}
                className="px-8 py-3 bg-purple-600 text-white rounded-full font-bold hover:bg-purple-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
              >
                View My Work
              </button>

              <div className="flex gap-6 mt-8 justify-center md:justify-start">
                <a href="https://github.com/addie-designs" target="_blank" rel="noopener noreferrer" className={`${darkMode ? 'text-gray-300 hover:text-purple-400' : 'text-gray-600 hover:text-purple-600'} transition-all duration-300 transform hover:scale-110`}>
                  <Github size={28} />
                </a>
                <a href="https://linkedin.com/in/akinjeji-adeola-7481a7343" target="_blank" rel="noopener noreferrer" className={`${darkMode ? 'text-gray-300 hover:text-purple-400' : 'text-gray-600 hover:text-purple-600'} transition-all duration-300 transform hover:scale-110`}>
                  <Linkedin size={28} />
                </a>
                {/* <a href="https://facebook.com/yourusername" target="_blank" rel="noopener noreferrer" className={`${darkMode ? 'text-gray-300 hover:text-purple-400' : 'text-gray-600 hover:text-purple-600'} transition-all duration-300 transform hover:scale-110`}>
                  <Facebook size={28} />
                </a> */}
                {/* <a href="https://instagram.com/yourusername" target="_blank" rel="noopener noreferrer" className={`${darkMode ? 'text-gray-300 hover:text-purple-400' : 'text-gray-600 hover:text-purple-600'} transition-all duration-300 transform hover:scale-110`}>
                  <Instagram size={28} />
                </a> */}
              </div>
            </div>

            <div className="flex-shrink-0">
              <div className="w-64 h-64 sm:w-80 sm:h-80 rounded-2xl overflow-hidden shadow-2xl transform rotate-6 hover:rotate-0 transition-all duration-500">
                <div className="w-full h-full bg-gradient-to-br from-purple-400 to-purple-600 flex items-center justify-center">
                  <span className="text-white text-6xl font-bold">AD</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className={`min-h-screen py-20 ${darkMode ? 'bg-gray-800' : 'bg-gray-50'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className={`text-4xl font-bold text-center mb-16 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
            About Me
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { icon: Code, title: 'Web Development', desc: 'Building responsive and scalable web applications using modern frameworks and best practices.' },
              { icon: Palette, title: 'UI/UX Design', desc: 'Creating beautiful, intuitive interfaces that prioritize user experience and engagement.' },
              { icon: Smartphone, title: 'Mobile Apps', desc: 'Developing cross-platform mobile applications with native performance and smooth animations.' },
              { icon: Server, title: 'Backend Development', desc: 'Architecting robust server-side solutions with efficient APIs and secure databases.' },
              { icon: Database, title: 'Database Design', desc: 'Designing and optimizing database schemas for performance and scalability.' },
              { icon: Loader, title: 'Modern Frameworks', desc: 'Expertise in React, Vue, Angular, and other cutting-edge technologies.' }
            ].map((specialty, idx) => (
              <div key={idx} className={`p-6 rounded-2xl ${darkMode ? 'bg-gray-900' : 'bg-white'} shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2`}>
                <specialty.icon className="w-12 h-12 text-purple-600 mb-4" strokeWidth={1.5} />
                <h3 className={`text-xl font-bold mb-3 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                  {specialty.title}
                </h3>
                <p className={darkMode ? 'text-gray-300' : 'text-gray-600'}>
                  {specialty.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className={`min-h-screen py-20 ${darkMode ? 'bg-gray-900' : 'bg-white'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className={`text-4xl font-bold text-center mb-16 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
            My Services
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              { title: 'Custom Web Development', desc: 'Tailored web solutions that meet your specific business needs with clean, maintainable code.' },
              { title: 'E-commerce Solutions', desc: 'Complete online store development with payment integration, inventory management, and analytics.' },
              { title: 'Brand Identity Design', desc: 'Creating cohesive brand experiences from logos to complete visual identity systems.' },
              { title: 'Consulting & Strategy', desc: 'Technical consultation to help you make informed decisions about your digital presence.' }
            ].map((service, idx) => (
              <div key={idx} className={`p-8 rounded-2xl ${darkMode ? 'bg-gray-800 border-gray-700' : 'bg-gray-50 border-gray-200'} border-2 hover:border-purple-600 transition-all duration-300`}>
                <h3 className={`text-2xl font-bold mb-4 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                  {service.title}
                </h3>
                <p className={`text-lg ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                  {service.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className={`min-h-screen py-20 ${darkMode ? 'bg-gray-800' : 'bg-gray-50'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className={`text-4xl font-bold text-center mb-16 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
            Technical Skills
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              { name: 'React & Next.js', level: 95 },
              { name: 'JavaScript & TypeScript', level: 90 },
              { name: 'UI/UX Design', level: 85 },
              { name: 'Node.js & Express', level: 88 },
              { name: 'MongoDB & PostgreSQL', level: 82 },
              { name: 'Tailwind CSS', level: 92 }
            ].map((skill, idx) => (
              <div key={idx}>
                <div className="flex justify-between mb-2">
                  <span className={`font-semibold ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                    {skill.name}
                  </span>
                  <span className={darkMode ? 'text-gray-300' : 'text-gray-600'}>
                    {skill.level}%
                  </span>
                </div>
                <div className={`h-3 rounded-full ${darkMode ? 'bg-gray-700' : 'bg-gray-200'} overflow-hidden`}>
                  <div
                    className="h-full bg-gradient-to-r from-purple-500 to-purple-600 rounded-full transition-all duration-1000"
                    style={{ width: `${skill.level}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className={`min-h-screen py-20 ${darkMode ? 'bg-gray-900' : 'bg-white'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className={`text-4xl font-bold text-center mb-16 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
            Featured Projects
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: 'E-commerce Platform Redesign', desc: 'A complete UI/UX overhaul for an online retail brand, focusing on improving conversion rates.', color: 'from-blue-400 to-blue-600' },
              { title: 'Fintech Mobile App', desc: 'Designing an intuitive and secure mobile banking experience for everyday users.', color: 'from-green-400 to-green-600' },
              { title: 'Analytics Dashboard', desc: 'A data-rich dashboard for a SaaS product, built with React and D3.js.', color: 'from-purple-400 to-purple-600' },
              { title: 'Social Media Platform', desc: 'Building a modern social networking app with real-time messaging and content sharing.', color: 'from-pink-400 to-pink-600' },
              { title: 'Healthcare Management System', desc: 'Comprehensive patient management system with appointment scheduling and records.', color: 'from-red-400 to-red-600' },
              { title: 'Real Estate Marketplace', desc: 'Property listing platform with advanced search, filters, and virtual tours.', color: 'from-yellow-400 to-yellow-600' }
            ].map((project, idx) => (
              <div key={idx} className={`rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 ${darkMode ? 'bg-gray-800' : 'bg-white'}`}>
                <div className={`h-48 bg-gradient-to-br ${project.color}`} />
                <div className="p-6">
                  <h3 className={`text-xl font-bold mb-3 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                    {project.title}
                  </h3>
                  <p className={darkMode ? 'text-gray-300' : 'text-gray-600'}>
                    {project.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className={`min-h-screen py-20 ${darkMode ? 'bg-gray-800' : 'bg-gray-50'}`}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className={`text-4xl font-bold text-center mb-16 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
            Get In Touch
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div className={`p-6 rounded-2xl ${darkMode ? 'bg-gray-900' : 'bg-white'} shadow-lg text-center`}>
              <Mail className="w-12 h-12 text-purple-600 mx-auto mb-4" strokeWidth={1.5} />
              <h3 className={`text-xl font-bold mb-2 ${darkMode ? 'text-white' : 'text-gray-900'}`}>Email</h3>
              <p className={darkMode ? 'text-gray-300' : 'text-gray-600'}>akinjejiadeola@gmail.com</p>
            </div>
            
            <div className={`p-6 rounded-2xl ${darkMode ? 'bg-gray-900' : 'bg-white'} shadow-lg text-center`}>
              <Phone className="w-12 h-12 text-purple-600 mx-auto mb-4" strokeWidth={1.5} />
              <h3 className={`text-xl font-bold mb-2 ${darkMode ? 'text-white' : 'text-gray-900'}`}>Phone</h3>
              <p className={darkMode ? 'text-gray-300' : 'text-gray-600'}>+234 916 870 5162</p>
            </div>
          </div>

          <div className={`p-8 rounded-2xl ${darkMode ? 'bg-gray-900' : 'bg-white'} shadow-lg`}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <input
                type="text"
                placeholder="Your Name"
                value={formData.name}
                onChange={(e) => setFormData({...formData, name: e.target.value})}
                className={`px-4 py-3 rounded-lg ${darkMode ? 'bg-gray-800 text-white border-gray-700' : 'bg-gray-50 text-gray-900 border-gray-200'} border-2 focus:border-purple-600 outline-none transition-all duration-300`}
              />
              <input
                type="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={(e) => setFormData({...formData, email: e.target.value})}
                className={`px-4 py-3 rounded-lg ${darkMode ? 'bg-gray-800 text-white border-gray-700' : 'bg-gray-50 text-gray-900 border-gray-200'} border-2 focus:border-purple-600 outline-none transition-all duration-300`}
              />
            </div>
            <input
              type="text"
              placeholder="Subject"
              value={formData.subject}
              onChange={(e) => setFormData({...formData, subject: e.target.value})}
              className={`w-full px-4 py-3 rounded-lg mb-6 ${darkMode ? 'bg-gray-800 text-white border-gray-700' : 'bg-gray-50 text-gray-900 border-gray-200'} border-2 focus:border-purple-600 outline-none transition-all duration-300`}
            />
            <textarea
              placeholder="Your Message"
              value={formData.message}
              onChange={(e) => setFormData({...formData, message: e.target.value})}
              rows="6"
              className={`w-full px-4 py-3 rounded-lg mb-6 ${darkMode ? 'bg-gray-800 text-white border-gray-700' : 'bg-gray-50 text-gray-900 border-gray-200'} border-2 focus:border-purple-600 outline-none transition-all duration-300`}
            />
            <button
              onClick={handleSubmit}
              className="w-full py-4 bg-purple-600 text-white rounded-lg font-bold hover:bg-purple-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
            >
              Send Message
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className={`py-8 ${darkMode ? 'bg-gray-900 border-gray-800' : 'bg-white border-gray-200'} border-t`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className={`mb-4 md:mb-0 ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
              © 2026 Portfolio. All rights reserved.
            </p>
            <div className="flex gap-6">
              <a href="https://github.com/addie-designs" target="_blank" rel="noopener noreferrer" className={`${darkMode ? 'text-gray-400 hover:text-purple-400' : 'text-gray-600 hover:text-purple-600'} transition-all duration-300`}>
                <Github size={24} />
              </a>
              <a href="www.linkedin.com/in/akinjeji-adeola-7481a7343" target="_blank" rel="noopener noreferrer" className={`${darkMode ? 'text-gray-400 hover:text-purple-400' : 'text-gray-600 hover:text-purple-600'} transition-all duration-300`}>
                <Linkedin size={24} />
              </a>
              {/* <a href="https://facebook.com/yourusername" target="_blank" rel="noopener noreferrer" className={`${darkMode ? 'text-gray-400 hover:text-purple-400' : 'text-gray-600 hover:text-purple-600'} transition-all duration-300`}>
                <Facebook size={24} />
              </a> */}
              {/* <a href="https://instagram.com/yourusername" target="_blank" rel="noopener noreferrer" className={`${darkMode ? 'text-gray-400 hover:text-purple-400' : 'text-gray-600 hover:text-purple-600'} transition-all duration-300`}>
                <Instagram size={24} />
              </a> */}
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}