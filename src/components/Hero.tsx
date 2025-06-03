
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
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-[#FFEAD0] via-[#FFD4A3] to-[#FFA500] overflow-hidden">
      {/* English learning themed decorative elements */}
      <div className="absolute top-16 left-8 text-6xl opacity-25 font-bold text-amber-700 rotate-12">
        ABC
      </div>
      <div className="absolute top-32 right-12 text-4xl opacity-30 font-semibold text-orange-800 -rotate-12">
        Hello!
      </div>
      <div className="absolute bottom-20 left-12 text-5xl opacity-25 font-bold text-amber-700 rotate-6">
        Cat
      </div>
      <div className="absolute top-1/2 left-4 text-3xl opacity-20 font-medium text-orange-900 -rotate-45">
        Book
      </div>
      <div className="absolute bottom-32 right-16 text-4xl opacity-30 font-semibold text-orange-800 rotate-15">
        Fun!
      </div>
      <div className="absolute top-24 left-1/3 text-3xl opacity-25 font-medium text-amber-700">
        🇬🇧
      </div>
      <div className="absolute bottom-40 left-1/4 text-3xl opacity-25 font-medium text-amber-700">
        🇺🇸
      </div>
      <div className="absolute top-1/3 right-8 text-4xl opacity-20 font-bold text-orange-900 rotate-12">
        Dog
      </div>
      <div className="absolute bottom-1/3 left-16 text-3xl opacity-25 font-semibold text-amber-800 -rotate-6">
        Play
      </div>
      <div className="absolute top-40 right-1/3 text-2xl opacity-30 font-medium text-orange-800">
        📚
      </div>
      <div className="absolute bottom-24 right-8 text-2xl opacity-30 font-medium text-orange-800">
        ✏️
      </div>
      <div className="absolute top-2/3 left-1/3 text-3xl opacity-20 font-bold text-amber-900 rotate-8">
        Sun
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
