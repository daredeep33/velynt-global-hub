
import React from 'react';
import { Check } from 'lucide-react';

const WhyChoose = () => {
  const reasons = [
    "Personalized consultation approach",
    "High success rate with visa applications",
    "Expert knowledge of international requirements",
    "Comprehensive support throughout the process",
    "Transparent pricing with no hidden fees",
    "Dedicated support team available 24/7",
    "Strong partnerships with educational institutions",
    "Post-arrival support services"
  ];

  return (
    <section className="py-20 px-4 bg-black">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold text-velynt-white mb-8">
            Why Choose Velynt
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {reasons.map((reason, index) => (
            <div key={index} className="flex items-start space-x-3 animate-fade-in">
              <Check className="text-velynt-cyan mt-1 flex-shrink-0" size={20} />
              <span className="text-velynt-text text-lg">{reason}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChoose;
