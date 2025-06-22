
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
    <section className="py-24 px-4 bg-velynt-dark">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-velynt-white mb-8">
            Why Choose Velynt
          </h2>
        </div>

        <div className="bg-zinc-900/50 backdrop-blur-sm border border-zinc-800 rounded-xl p-8 max-w-4xl mx-auto hover:border-velynt-cyan/30 transition-all duration-300 hover:shadow-lg hover:shadow-velynt-cyan/10">
          <div className="grid md:grid-cols-2 gap-6">
            {reasons.map((reason, index) => (
              <div key={index} className="flex items-start space-x-3 hover:text-velynt-cyan transition-all duration-300 group cursor-pointer">
                <Check className="text-velynt-cyan mt-1 flex-shrink-0 group-hover:scale-110 transition-transform duration-200" size={20} />
                <span className="text-velynt-text text-lg group-hover:text-velynt-cyan transition-colors duration-300">{reason}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChoose;
