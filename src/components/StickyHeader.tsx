
import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';

export const StickyHeader = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleDiagnostic = () => {
    const utmParams = new URLSearchParams(window.location.search).toString();
    const waMessage = `Диагностика${utmParams ? `?${utmParams}` : ''}`;
    window.open(`https://wa.me/79XXXXXXXXX?text=${encodeURIComponent(waMessage)}`, '_blank');
    
    // Analytics
    if (typeof window !== 'undefined') {
      (window as any).ym?.(88888888, 'reachGoal', 'diagnostic_click');
      (window as any).VK?.Retargeting?.Event('diagnostic_click');
    }
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white shadow-lg' : 'bg-white/90 backdrop-blur-sm'
    }`}>
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        <div className="font-bold text-xl text-gray-800">
          English Intensive
        </div>
        <Button 
          onClick={handleDiagnostic}
          className="btn-primary bg-[#FF6B00] hover:bg-[#FF6B00]/90 text-white px-6 py-2 rounded-lg font-semibold transition-all"
        >
          Бесплатная диагностика
        </Button>
      </div>
    </header>
  );
};
