
import React from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import About from '../components/About';
import Services from '../components/Services';
import WhyChoose from '../components/WhyChoose';
import Testimonials from '../components/Testimonials';
import CTA from '../components/CTA';
import PartnerBadge from '../components/PartnerBadge';
import Footer from '../components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-velynt-dark">
      <Header />
      <Hero />
      <About />
      <Services />
      <WhyChoose />
      <Testimonials />
      <CTA />
      <PartnerBadge />
      <Footer />
    </div>
  );
};

export default Index;
