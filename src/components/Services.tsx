
import React from 'react';
import { Check } from 'lucide-react';

const Services = () => {
  const services = [
    "Student visa applications and guidance",
    "University application support",
    "Document preparation and verification",
    "Mock interview sessions",
    "Pre-departure orientation programs",
    "Scholarship and funding guidance",
    "Work permit applications",
    "Family visa consultations"
  ];

  return (
    <section id="services" className="py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold text-velynt-white mb-8">
            What We Offer
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {services.map((service, index) => (
            <div key={index} className="flex items-start space-x-3 animate-fade-in">
              <Check className="text-velynt-cyan mt-1 flex-shrink-0" size={20} />
              <span className="text-velynt-text text-lg">{service}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
