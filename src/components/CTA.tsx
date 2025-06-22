import React from 'react';
import { Link } from 'react-router-dom';

const CTA = () => {
  return (
    <section id="cta" className="py-24 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold text-velynt-white mb-6">
            Ready to Begin?
          </h2>
          
          <p className="text-lg text-velynt-text mb-12 max-w-2xl mx-auto">
            Take the first step towards your international journey. Our expert team is here 
            to guide you through every stage of the process.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            {/* 1. WhatsApp Link - Now functional */}
            <a 
              href="https://wa.me/918921575628" // Your actual WhatsApp number
              target="_blank"
              rel="noopener noreferrer"
              className="bg-whatsapp-green text-white px-8 py-4 rounded-lg font-semibold hover:bg-green-600 hover:scale-105 transition-all duration-200"
            >
              Chat on WhatsApp
            </a>
            
            {/* 2. Book Mock Link - Now functional, points to Calendly */}
            <a 
              href="https://calendly.com/deepakdinesh330/30min" // Replace with your Calendly link
              target="_blank"
              rel="noopener noreferrer"
              className="bg-velynt-navy border border-velynt-cyan text-velynt-white px-8 py-4 rounded-lg font-semibold hover:bg-velynt-cyan hover:text-velynt-dark hover:scale-105 transition-all duration-200"
            >
              Book Your First Mock
            </a>
            
            {/* 3. Checklist Link - Points to the Free Resources page for now */}
            <Link 
              to="/resources"
              className="bg-gray-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-gray-500 hover:scale-105 transition-all duration-200"
            >
              Free CAS Interview Checklist
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;