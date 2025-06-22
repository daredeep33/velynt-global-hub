
import React from 'react';

const Testimonials = () => {
  const testimonials = [
    {
      quote: "Velynt's mock interviews were exactly like the real university ones. I passed my Pre-CAS interview confidently in the first attempt.",
      author: "Arjun R., UK MSc Applicant"
    },
    {
      quote: "Their SOP writing support and fund guidance helped me avoid a visa refusal. I got my UK visa in 12 days!",
      author: "Nimisha M., MBA Student, London"
    },
    {
      quote: "They helped me structure the visit visa file for my parents in a way that was clear and strong. The visa was approved without any queries.",
      author: "Elizabeth Iype, UK (Visitor Visa)"
    },
    {
      quote: "The team at Velynt knew exactly what I needed for my PLAB visa — they reviewed everything with such clarity.",
      author: "Dr. Smyrna., PLAB Candidate"
    },
    {
      quote: "We've worked with Velynt since 2025 — our UK Pre-CAS success rate is 100% since we started using their service.",
      author: "Nandhini., Amaze Consultant, Tamil Nadu"
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
