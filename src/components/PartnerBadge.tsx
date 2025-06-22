
import React from 'react';

const PartnerBadge = () => {
  return (
    <section className="py-20 px-4 bg-black">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center animate-fade-in">
          <div className="inline-block bg-white rounded-full p-8 shadow-2xl">
            <img 
              src="https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=200&h=200&fit=crop&crop=center" 
              alt="Partner Logo" 
              className="w-32 h-32 object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default PartnerBadge;
