
import React from 'react';

const About = () => {
  return (
    <section id="about" className="py-24 px-4 bg-velynt-dark">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold text-velynt-white mb-8">
            About Velynt Global
          </h2>
          
          <div className="max-w-4xl mx-auto space-y-6">
            <p className="text-lg text-velynt-text leading-relaxed">
              Velynt Global is a clarity-driven student and visa support consultancy committed to guiding individuals through every step of their international journey — with precision, preparation, and purpose.
            </p>
            <p className="text-lg text-velynt-text leading-relaxed">
              From university shortlisting and SOP crafting to Pre-CAS and CAS Shield interview training, complete visa support, and financial documentation compliance, we help you move forward with confidence. We're not just a service — we're your strategic partner, here to simplify the process, strengthen your profile, and walk with you, every step of the way.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
