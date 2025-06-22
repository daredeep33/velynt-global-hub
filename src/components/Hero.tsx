
import React from 'react';
import AnimatedHero from './animations/AnimatedHero';

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center px-4 py-32">
      <AnimatedHero>
        <h1 className="text-4xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-white to-gray-300 mb-8 leading-tight">
          Velynt Global - Student & Visa Support Experts
        </h1>
        
        <p className="text-lg md:text-xl text-velynt-text mb-12 max-w-3xl mx-auto leading-relaxed">
          We specialize in helping international students, professionals, and families navigate 
          the complex world of global mobility — with confidence, clarity, and expert guidance.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button 
            onClick={() => scrollToSection('cta')}
            className="bg-velynt-navy border border-velynt-cyan text-velynt-white px-8 py-4 rounded-lg font-semibold hover:bg-velynt-cyan hover:text-velynt-dark hover:scale-105 transition-all duration-200"
          >
            Book Your First Mock Session
          </button>
          
          <button 
            onClick={() => scrollToSection('cta')}
            className="border border-velynt-cyan text-velynt-cyan px-8 py-4 rounded-lg font-semibold hover:bg-velynt-cyan hover:text-velynt-dark hover:scale-105 transition-all duration-200"
          >
            Contact Us
          </button>
        </div>
      </AnimatedHero>
    </section>
  );
};

export default Hero;
