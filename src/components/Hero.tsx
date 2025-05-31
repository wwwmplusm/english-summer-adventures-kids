
import React, { useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { Calendar, Users, Clock } from 'lucide-react';

export const Hero = () => {
  const parallaxRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (parallaxRef.current) {
        const scrolled = window.pageYOffset;
        parallaxRef.current.style.transform = `translateY(${scrolled * 0.5}px)`;
      }
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
      (window as any).ym?.(88888888, 'reachGoal', 'diagnostic_click_hero');
      (window as any).VK?.Retargeting?.Event('diagnostic_click');
    }
  };

  const scrollToProgram = () => {
    document.getElementById('program')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div 
        ref={parallaxRef}
        className="absolute inset-0 bg-gradient-to-br from-blue-100 via-purple-50 to-orange-100"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1581091226825-a6a2a5aee158')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          filter: 'brightness(0.3)'
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-black/40" />
      
      <div className="relative z-10 container mx-auto px-4 text-center text-white pt-20">
        <div className="max-w-4xl mx-auto animate-fade-in">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            Летний интенсив: 
            <span className="text-[#FF6B00] block">+2 уровня английского</span>
            <span className="block text-3xl md:text-5xl mt-2">за 24 занятия</span>
          </h1>
          
          <div className="flex flex-wrap justify-center gap-4 md:gap-6 mb-8 text-lg">
            <div className="flex items-center gap-2 bg-white/20 rounded-full px-4 py-2 backdrop-blur-sm">
              <Calendar className="w-5 h-5" />
              <span>Старт 10 июня</span>
            </div>
            <div className="flex items-center gap-2 bg-white/20 rounded-full px-4 py-2 backdrop-blur-sm">
              <Clock className="w-5 h-5" />
              <span>3 × 60 мин в неделю</span>
            </div>
            <div className="flex items-center gap-2 bg-white/20 rounded-full px-4 py-2 backdrop-blur-sm">
              <Users className="w-5 h-5" />
              <span>Группа ≤ 10 детей</span>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
            <Button 
              onClick={handleDiagnostic}
              size="lg"
              className="btn-primary bg-[#FF6B00] hover:bg-[#FF6B00]/90 text-white px-8 py-4 text-lg font-semibold rounded-lg shadow-xl hover:scale-105 transition-all duration-300"
            >
              Бесплатная диагностика
            </Button>
            <Button 
              onClick={scrollToProgram}
              variant="outline"
              size="lg"
              className="btn-secondary border-white text-white hover:bg-white hover:text-gray-800 px-8 py-4 text-lg font-semibold rounded-lg transition-all duration-300"
            >
              Смотреть программу
            </Button>
          </div>

          <p className="text-xl opacity-90 max-w-2xl mx-auto">
            Интерактивные занятия в Zoom + Miro • Живая обратная связь • Проектная работа • Сертификат
          </p>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-white to-transparent" />
    </section>
  );
};
