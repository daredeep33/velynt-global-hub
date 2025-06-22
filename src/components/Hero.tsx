
import React from 'react';

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center px-4 py-20">
      <div className="text-center max-w-4xl mx-auto animate-fade-in">
        <h1 className="text-4xl md:text-6xl font-bold text-velynt-white mb-6 leading-tight">
          Velynt Global - Student & Visa Support Experts
        </h1>
        
        <p className="text-lg md:text-xl text-velynt-text mb-8 max-w-3xl mx-auto leading-relaxed">
          We specialize in helping international students, professionals, and families navigate 
          the complex world of global mobility — with confidence, clarity, and expert guidance.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button 
            onClick={() => scrollToSection('cta')}
            className="bg-velynt-navy border border-velynt-cyan text-velynt-white px-8 py-4 rounded-lg font-semibold hover:bg-velynt-cyan hover:text-velynt-dark transition-all duration-200 hover:scale-105"
          >
            Book Your First Mock Session
          </button>
          
          <button 
            onClick={() => scrollToSection('cta')}
            className="border border-velynt-cyan text-velynt-cyan px-8 py-4 rounded-lg font-semibold hover:bg-velynt-cyan hover:text-velynt-dark transition-all duration-200 hover:scale-105"
          >
            Contact Us
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
