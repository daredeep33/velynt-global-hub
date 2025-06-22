
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
              At Velynt Global, we understand that pursuing international education or relocating 
              for professional opportunities can be overwhelming. Our mission is to simplify this 
              journey by providing personalized, expert guidance every step of the way.
            </p>
            
            <p className="text-lg text-velynt-text leading-relaxed">
              With years of experience in student and visa consultancy, our team has successfully 
              helped thousands of individuals achieve their dreams of studying and working abroad. 
              We pride ourselves on our commitment to transparency, reliability, and results-driven 
              approach to every client relationship.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
