
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
import RevealOnScroll from '../components/animations/RevealOnScroll';
import BackgroundGlow from '../components/animations/BackgroundGlow';

const Index = () => {
  return (
    <div className="min-h-screen bg-zinc-950 relative">
      <BackgroundGlow />
      <Header />
      <Hero />
      
      <RevealOnScroll delay={0.1}>
        <Services />
      </RevealOnScroll>
      
      <RevealOnScroll delay={0.2}>
        <WhyChoose />
      </RevealOnScroll>
      
      <RevealOnScroll delay={0.1}>
        <Testimonials />
      </RevealOnScroll>
      
      <RevealOnScroll delay={0.2}>
        <CTA />
      </RevealOnScroll>
      
      <RevealOnScroll delay={0.1}>
        <PartnerBadge />
      </RevealOnScroll>
      
      <Footer />
    </div>
  );
};

export default Index;
