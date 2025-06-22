import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const Contact = () => {
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [feedbackMessage, setFeedbackMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('loading');
    setFeedbackMessage('');

    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData.entries());

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (response.ok) {
        setStatus('success');
        setFeedbackMessage(result.success);
        (e.target as HTMLFormElement).reset();
      } else {
        setStatus('error');
        setFeedbackMessage(result.error || 'An unexpected error occurred.');
      }
    } catch (error) {
      setStatus('error');
      setFeedbackMessage('Failed to connect to the server.');
    }
  };

  return (
    <div className="min-h-screen bg-velynt-dark">
      <Header />
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4 max-w-2xl">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-velynt-white mb-6">Contact Us</h1>
            <p className="text-lg text-velynt-text">Have a question or want to discuss your journey? Fill out the form below, and our team will get back to you within 24 hours.</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <Label htmlFor="fullName" className="text-velynt-white mb-2 block">Full Name</Label>
              <Input id="fullName" name="name" type="text" required className="bg-velynt-navy/50 border-velynt-cyan/30..." placeholder="Enter your full name" />
            </div>
            <div>
              <Label htmlFor="email" className="text-velynt-white mb-2 block">Email Address</Label>
              <Input id="email" name="email" type="email" required className="bg-velynt-navy/50 border-velynt-cyan/30..." placeholder="Enter your email address" />
            </div>
            <div>
              <Label htmlFor="message" className="text-velynt-white mb-2 block">Your Message</Label>
              <Textarea id="message" name="message" required rows={6} className="bg-velynt-navy/50 border-velynt-cyan/30..." placeholder="Tell us about your project or question..." />
            </div>

            <Button type="submit" disabled={status === 'loading'} className="w-full bg-velynt-navy border ...">
              {status === 'loading' ? 'Sending...' : 'Send Message'}
            </Button>
            
            {status === 'success' && <p className="text-green-500 text-center">{feedbackMessage}</p>}
            {status === 'error' && <p className="text-red-500 text-center">{feedbackMessage}</p>}
          </form>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Contact;