
import React from 'react';
import { Button } from '@/components/ui/button';

export const Hero = () => {
  const handleDiagnostic = () => {
    const utmParams = new URLSearchParams(window.location.search).toString();
    const waMessage = `Хочу на диагностику!${utmParams ? `?${utmParams}` : ''}`;
    window.open(`https://wa.me/79XXXXXXXXX?text=${encodeURIComponent(waMessage)}`, '_blank');
    
    // Analytics
    if (typeof window !== 'undefined') {
      (window as any).ym?.(88888888, 'reachGoal', 'Lead_Diagnosis');
      (window as any).VK?.Retargeting?.Event('diagnosis_click');
    }
  };

  const scrollToProgram = () => {
    document.getElementById('program')?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToForm = () => {
    document.getElementById('diagnostic')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-[#FFE8B6] via-[#FFBD69] to-[#FFBD69] overflow-hidden">
      {/* Background with children learning English theme */}
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1503676260728-1c00da094a0b?ixlib=rb-4.0.3&auto=format&fit=crop&w=2022&q=80')] bg-cover bg-center bg-fixed opacity-25"></div>
      
      {/* Educational elements floating animation */}
      <div className="absolute top-20 left-10 w-16 h-16 bg-white/80 rounded-full flex items-center justify-center text-2xl animate-bounce">
        📚
      </div>
      <div className="absolute top-40 right-20 w-12 h-12 bg-white/80 rounded-full flex items-center justify-center text-lg animate-pulse">
        🎯
      </div>
      <div className="absolute bottom-32 left-20 w-20 h-20 bg-white/80 rounded-full flex items-center justify-center text-3xl animate-bounce" style={{animationDelay: '1s'}}>
        🗣️
      </div>
      <div className="absolute top-60 left-1/3 w-14 h-14 bg-white/80 rounded-full flex items-center justify-center text-xl animate-pulse" style={{animationDelay: '2s'}}>
        🎭
      </div>
      <div className="absolute bottom-40 right-32 w-16 h-16 bg-white/80 rounded-full flex items-center justify-center text-2xl animate-bounce" style={{animationDelay: '0.5s'}}>
        🎮
      </div>

      <div className="container mx-auto px-4 text-center relative z-10 pt-20">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-[#1C1C1E] leading-tight">
            Лето с пользой: погружение в язык за 8 недель
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-600 mb-8 leading-relaxed">
            2 урока в неделю по 55 минут + домашнее задание · вт и чт в 12:00 (МСК)
          </p>

          <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-6 mb-8 shadow-xl">
            <div className="flex flex-col md:flex-row items-center justify-center gap-6 text-gray-700">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                <span className="font-medium">Живые занятия online</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                <span className="font-medium">Возраст 8-11 лет</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-orange-500 rounded-full"></div>
                <span className="font-medium">Игровой формат</span>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-r from-orange-100 to-yellow-100 rounded-2xl p-6 mb-8">
            <p className="text-lg text-gray-700 font-medium">
              30-мин вступительный урок-игра и персональный план занятий на всё лето — бесплатно и без обязательств
            </p>
          </div>

          <div className="bg-gradient-to-r from-purple-100 to-blue-100 rounded-2xl p-6 mb-8">
            <p className="text-lg text-gray-700 font-medium">
              Набор идёт в две группы: 8–9 лет и 10–11 лет. Точное распределение делаем на первом бесплатном уроке.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button 
              onClick={handleDiagnostic}
              className="btn-primary bg-[#FF6B00] hover:bg-[#FF6B00]/90 text-white px-8 py-4 text-lg font-bold rounded-xl shadow-2xl hover:scale-105 transition-all duration-300"
              size="lg"
            >
              Получить бесплатный урок и план
            </Button>
            <Button 
              onClick={scrollToProgram}
              variant="outline"
              className="border-2 border-[#FF6B00] text-[#FF6B00] hover:bg-[#FF6B00] hover:text-white px-8 py-4 text-lg font-semibold rounded-xl transition-all duration-300"
              size="lg"
            >
              Смотреть программу
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
