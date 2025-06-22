
import React from 'react';

const Testimonials = () => {
  const testimonials = [
    {
      quote: "Velynt Global made my dream of studying in Canada a reality. Their guidance through the visa process was exceptional, and I felt supported every step of the way.",
      author: "Sarah Chen"
    },
    {
      quote: "The mock interview sessions were incredibly helpful. I went into my actual visa interview feeling confident and prepared. Thank you for your professional service!",
      author: "Raj Patel"
    },
    {
      quote: "From university applications to visa approval, Velynt Global handled everything with expertise. Their transparent approach and constant communication gave me peace of mind.",
      author: "Maria Rodriguez"
    }
  ];

  return (
    <section id="testimonials" className="py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold text-velynt-white mb-8">
            What Our Students Say
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index} 
              className="bg-velynt-dark/50 border border-velynt-navy/30 rounded-lg p-6 backdrop-blur-sm hover:border-velynt-cyan/50 transition-all duration-200 animate-fade-in"
            >
              <p className="text-velynt-text italic mb-4 leading-relaxed">
                "{testimonial.quote}"
              </p>
              <p className="text-velynt-cyan text-right font-semibold">
                — {testimonial.author}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
