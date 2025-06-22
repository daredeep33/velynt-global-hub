import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import RevealOnScroll from '@/components/animations/RevealOnScroll';
import { Check, Handshake, Target, ShieldCheck } from 'lucide-react';
import { Link } from 'react-router-dom';

const PartnerPage = () => {
  const partnerServices = [
    "White-Labeled Mock Interview Sessions (Pre-CAS & CAS Shield)",
    "Comprehensive SOP Writing & Review",
    "End-to-End Visa Application Guidance",
    "Financial Document Compliance Checks"
  ];

  const whyPartner = [
    "Enhance your service offerings instantly.",
    "Increase student success rates with expert interview coaching.",
    "Maintain your brand identity with our white-labeled services.",
    "Access specialized expertise without the overhead."
  ];

  return (
    <div className="min-h-screen bg-velynt-dark">
      <Header />
      
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4 max-w-4xl">
          {/* Page Header */}
          <RevealOnScroll>
            <div className="text-center mb-16">
              <h1 className="text-4xl md:text-5xl font-bold text-velynt-white mb-6">
                Partner With Us
              </h1>
              <p className="text-lg text-velynt-text max-w-3xl mx-auto">
                Strengthen Your Consultancy with Velynt Global's White-Labeled Partner Services.
              </p>
            </div>
          </RevealOnScroll>

          {/* Main Content */}
          <RevealOnScroll delay={0.2} className="space-y-12">
            <div className="bg-zinc-900/50 border border-zinc-800 rounded-xl p-8">
              <h3 className="text-2xl font-bold text-velynt-cyan mb-4">Our Partner Services Include:</h3>
              <ul className="space-y-3">
                {partnerServices.map((service, index) => (
                  <li key={index} className="flex items-start">
                    <Check className="text-velynt-cyan mt-1 mr-3 flex-shrink-0" size={20} />
                    <span className="text-velynt-text text-lg">{service}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-zinc-900/50 border border-zinc-800 rounded-xl p-8">
              <h3 className="text-2xl font-bold text-velynt-cyan mb-4">Why Partner With Velynt Global?</h3>
               <ul className="space-y-3">
                {whyPartner.map((reason, index) => (
                  <li key={index} className="flex items-start">
                    <ShieldCheck className="text-velynt-cyan mt-1 mr-3 flex-shrink-0" size={20} />
                    <span className="text-velynt-text text-lg">{reason}</span>
                  </li>
                ))}
              </ul>
            </div>

             <div className="text-center bg-velynt-navy/30 border border-velynt-cyan/20 rounded-xl p-8">
              <h3 className="text-2xl font-bold text-velynt-white mb-4">Let's Grow Together</h3>
              <p className="text-velynt-text text-lg mb-6 max-w-2xl mx-auto">
                Ready to elevate your consultancy? We're committed to building strong, collaborative partnerships that drive mutual success.
              </p>
              <Link 
                to="/contact" 
                className="inline-block bg-velynt-navy border border-velynt-cyan text-velynt-white px-8 py-3 rounded-lg font-semibold hover:bg-velynt-cyan hover:text-velynt-dark hover:scale-105 transition-all duration-200"
              >
                Become a Partner Today
              </Link>
            </div>
          </RevealOnScroll>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default PartnerPage;