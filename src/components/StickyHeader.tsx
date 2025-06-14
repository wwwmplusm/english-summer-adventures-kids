import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { trackEvent } from "@/lib/analytics";

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
    // Плавный скролл к форме заявки
    document.getElementById('diagnostic')?.scrollIntoView({ behavior: 'smooth' });
    
    // Analytics
    trackEvent.ym(88888888, 'Scroll_To_Form_Header');
    trackEvent.vk('scroll_to_form_header');
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white shadow-lg' : 'bg-white/90 backdrop-blur-sm'
    }`}>
      <div className="container mx-auto px-4 py-2 sm:py-3 flex items-center justify-between">
        <div className="font-bold text-base sm:text-lg lg:text-xl text-gray-800 flex-shrink-0">
          <span className="text-[#FF6B00]">Летний</span> 
          <span className="hidden sm:inline"> курс английского</span>
          <span className="sm:hidden"> англ.</span>
        </div>
        <Button 
          onClick={handleDiagnostic}
          className="btn-primary bg-[#FF6B00] hover:bg-[#FF6B00]/90 text-white px-3 sm:px-4 lg:px-6 py-1.5 sm:py-2 rounded-lg font-semibold transition-all text-xs sm:text-sm lg:text-base"
        >
          <span className="hidden sm:inline">Получить бесплатный урок и план</span>
          <span className="sm:hidden">Бесплатный урок</span>
        </Button>
      </div>
    </header>
  );
};