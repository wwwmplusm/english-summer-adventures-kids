
import React, { useEffect } from 'react';
import { Hero } from '@/components/Hero';
import { ComparisonTable } from '@/components/ComparisonTable';
import { ProgramTimeline } from '@/components/ProgramTimeline';
import { Methodology } from '@/components/Methodology';
import { Testimonials } from '@/components/Testimonials';
import { Pricing } from '@/components/Pricing';
import { FAQ } from '@/components/FAQ';
import { DiagnosticForm } from '@/components/DiagnosticForm';
import { FinalCTA } from '@/components/FinalCTA';
import { Footer } from '@/components/Footer';
import { StickyHeader } from '@/components/StickyHeader';
import { BottomBar } from '@/components/BottomBar';

const Index = () => {
  useEffect(() => {
    // VK Retarget pixel
    (window as any).VK = (window as any).VK || {};
    (window as any).VK.Retargeting = (window as any).VK.Retargeting || {};
    (window as any).VK.Retargeting.Init("VK-RTRG-XXXXXX-XXXXX");
    (window as any).VK.Retargeting.Hit();

    // Yandex Metrica
    (window as any).ym = (window as any).ym || function(a: any, b: any, c: any, d: any) {
      ((window as any).ym.a = (window as any).ym.a || []).push(arguments);
    };
    (window as any).ym.l = 1 * new Date().getTime();
    const script = document.createElement('script');
    script.async = true;
    script.src = 'https://mc.yandex.ru/metrika/tag.js';
    document.head.appendChild(script);
    
    // Initialize Yandex Metrica
    (window as any).ym(88888888, 'init', {
      clickmap: true,
      trackLinks: true,
      accurateTrackBounce: true,
      webvisor: true
    });

    // Track page view
    (window as any).ym(88888888, 'hit', window.location.href);
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <StickyHeader />
      <main>
        <Hero />
        <ComparisonTable />
        <ProgramTimeline />
        <Methodology />
        <Testimonials />
        <Pricing />
        <FAQ />
        <DiagnosticForm />
        <FinalCTA />
      </main>
      <Footer />
      <BottomBar />
    </div>
  );
};

export default Index;
