
import React from 'react';

const CTA = () => {
  const handleWhatsApp = () => {
    window.open('https://wa.me/918921575628', '_blank');
  };

  const handleBookMock = () => {
    // This would typically open a booking form or redirect to a booking page
    console.log('Book Mock Session clicked');
  };

  const handleChecklist = () => {
    // This would typically download a PDF or open a form
    console.log('Free CAS Interview Checklist clicked');
  };

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
            <button 
              onClick={handleWhatsApp}
              className="bg-whatsapp-green text-white px-8 py-4 rounded-lg font-semibold hover:bg-green-600 hover:scale-105 transition-all duration-200"
            >
              Chat on WhatsApp
            </button>
            
            <button 
              onClick={handleBookMock}
              className="bg-velynt-navy border border-velynt-cyan text-velynt-white px-8 py-4 rounded-lg font-semibold hover:bg-velynt-cyan hover:text-velynt-dark hover:scale-105 transition-all duration-200"
            >
              Book Your First Mock
            </button>
            
            <button 
              onClick={handleChecklist}
              className="bg-gray-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-gray-500 hover:scale-105 transition-all duration-200"
            >
              Free CAS Interview Checklist
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
