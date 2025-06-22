import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import RevealOnScroll from '@/components/animations/RevealOnScroll';

const AboutPage = () => {
  return (
    <div className="min-h-screen bg-velynt-dark">
      <Header />
      
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4 max-w-4xl">
          {/* Page Header */}
          <RevealOnScroll>
            <div className="text-center mb-16">
              <h1 className="text-4xl md:text-5xl font-bold text-velynt-white mb-6">
                Our Mission & Purpose
              </h1>
              <p className="text-lg text-velynt-text max-w-3xl mx-auto">
                Discover the core values and commitment that drive Velynt Global to deliver exceptional guidance for every client's international journey.
              </p>
            </div>
          </RevealOnScroll>

          {/* Scraped Content Section */}
          <RevealOnScroll delay={0.2}>
            <div className="bg-zinc-900/50 border border-zinc-800 rounded-xl p-8 md:p-12 space-y-6 text-lg text-velynt-text leading-relaxed">
              <p>
                Velynt Global is a clarity-driven student and visa support consultancy committed to guiding individuals through every step of their international journey — with precision, preparation, and purpose.
              </p>
              <p>
                From university shortlisting and SOP crafting to Pre-CAS and CAS Shield interview training, complete visa support, and financial documentation compliance, we help you move forward with confidence. We're not just a service — we're your strategic partner, here to simplify the process, strengthen your profile, and walk with you, every step of the way.
              </p>
            </div>
          </RevealOnScroll>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default AboutPage;