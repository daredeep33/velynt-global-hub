
import React from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const Contact = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Form submission logic will be added later
    console.log('Form submitted');
  };

  return (
    <div className="min-h-screen bg-velynt-dark">
      <Header />
      
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4 max-w-2xl">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-velynt-white mb-6">
              Contact Us
            </h1>
            <p className="text-lg text-velynt-text">
              Have a question or want to discuss your journey? Fill out the form below, and our team will get back to you within 24 hours.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <Label htmlFor="fullName" className="text-velynt-white mb-2 block">
                Full Name
              </Label>
              <Input
                id="fullName"
                type="text"
                required
                className="bg-velynt-navy/50 border-velynt-cyan/30 text-velynt-white placeholder:text-velynt-text/60 focus:border-velynt-cyan"
                placeholder="Enter your full name"
              />
            </div>

            <div>
              <Label htmlFor="email" className="text-velynt-white mb-2 block">
                Email Address
              </Label>
              <Input
                id="email"
                type="email"
                required
                className="bg-velynt-navy/50 border-velynt-cyan/30 text-velynt-white placeholder:text-velynt-text/60 focus:border-velynt-cyan"
                placeholder="Enter your email address"
              />
            </div>

            <div>
              <Label htmlFor="message" className="text-velynt-white mb-2 block">
                Your Message
              </Label>
              <Textarea
                id="message"
                required
                rows={6}
                className="bg-velynt-navy/50 border-velynt-cyan/30 text-velynt-white placeholder:text-velynt-text/60 focus:border-velynt-cyan resize-none"
                placeholder="Tell us about your project or question..."
              />
            </div>

            <Button
              type="submit"
              className="w-full bg-velynt-navy border border-velynt-cyan text-velynt-white hover:bg-velynt-cyan hover:text-velynt-dark hover:scale-105 transition-all duration-200 py-6 text-lg"
            >
              Send Message
            </Button>
          </form>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Contact;
