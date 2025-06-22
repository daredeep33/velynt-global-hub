
import React from 'react';

const Header = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-velynt-dark/80 backdrop-blur-glass border-b border-velynt-navy/20">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="text-2xl font-bold">
            <span className="text-velynt-white">Velynt</span>
            <span className="text-velynt-cyan ml-1">Global</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <button 
              onClick={() => scrollToSection('services')}
              className="text-velynt-text hover:text-velynt-cyan transition-colors duration-200"
            >
              Services
            </button>
            <button 
              onClick={() => scrollToSection('testimonials')}
              className="text-velynt-text hover:text-velynt-cyan transition-colors duration-200"
            >
              Blog
            </button>
            <button 
              onClick={() => scrollToSection('about')}
              className="text-velynt-text hover:text-velynt-cyan transition-colors duration-200"
            >
              About Us
            </button>
            <button 
              onClick={() => scrollToSection('cta')}
              className="text-velynt-text hover:text-velynt-cyan transition-colors duration-200"
            >
              Partner With Us
            </button>
            <button 
              onClick={() => scrollToSection('cta')}
              className="bg-velynt-navy border border-velynt-cyan text-velynt-white px-6 py-2 rounded-lg hover:bg-velynt-cyan hover:text-velynt-dark transition-all duration-200"
            >
              Contact Us
            </button>
          </nav>

          {/* Mobile Menu Button */}
          <button className="md:hidden text-velynt-white">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
