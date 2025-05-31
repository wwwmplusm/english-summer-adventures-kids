
import React from 'react';
import { Hero } from '@/components/Hero';
import { Features } from '@/components/Features';
import { ComparisonTable } from '@/components/ComparisonTable';
import { Program } from '@/components/Program';
import { FAQ } from '@/components/FAQ';
import { Testimonials } from '@/components/Testimonials';
import { ContactForm } from '@/components/ContactForm';
import { Footer } from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50">
      <Hero />
      <Features />
      <ComparisonTable />
      <Program />
      <FAQ />
      <Testimonials />
      <ContactForm />
      <Footer />
    </div>
  );
};

export default Index;
