
import React from 'react';

const PartnerBadge = () => {
  return (
    <section className="py-24 px-4 bg-velynt-dark">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center animate-fade-in">
          <div className="inline-block bg-white rounded-full p-8 shadow-2xl">
            <img 
              src="/partner-badge.png" 
              alt="Enroly CAS Shield Certified User Agent" 
              className="w-32 h-32 object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default PartnerBadge;
