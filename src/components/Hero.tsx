
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

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-orange-50 to-yellow-50 overflow-hidden">
      {/* Background parallax effect */}
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1500673922987-e212871fec22?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')] bg-cover bg-center bg-fixed opacity-20"></div>
      
      {/* Floating elements */}
      <div className="absolute top-20 left-10 w-16 h-16 bg-yellow-300 rounded-full opacity-60 animate-bounce"></div>
      <div className="absolute top-40 right-20 w-12 h-12 bg-orange-400 rounded-full opacity-50 animate-pulse"></div>
      <div className="absolute bottom-32 left-20 w-20 h-20 bg-blue-300 rounded-full opacity-40 animate-bounce" style={{animationDelay: '1s'}}></div>

      <div className="container mx-auto px-4 text-center relative z-10 pt-20">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-gray-800 leading-tight">
            Лето с пользой: говорим по-английски 
            <span className="text-[#FF6B00]"> уже через 8 недель</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-600 mb-8 leading-relaxed">
            3 урока в неделю по 55 минут · Группа до 4 детей
          </p>

          <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-6 mb-8 shadow-xl">
            <div className="flex flex-col md:flex-row items-center justify-center gap-6 text-gray-700">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                <span className="font-medium">Живые занятия online</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                <span className="font-medium">Возраст 7-11 лет</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-orange-500 rounded-full"></div>
                <span className="font-medium">Игровой формат</span>
              </div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button 
              onClick={handleDiagnostic}
              className="btn-primary bg-[#FF6B00] hover:bg-[#FF6B00]/90 text-white px-8 py-4 text-lg font-bold rounded-xl shadow-2xl hover:scale-105 transition-all duration-300"
              size="lg"
            >
              Получить бесплатную 15-минутную диагностику уровня
            </Button>
            <Button 
              onClick={scrollToProgram}
              variant="outline"
              className="border-2 border-[#FF6B00] text-[#FF6B00] hover:bg-[#FF6B00] hover:text-white px-8 py-4 text-lg font-semibold rounded-xl transition-all duration-300"
              size="lg"
            >
              Узнать программу на 8 недель
            </Button>
          </div>

          <div className="text-center">
            <p className="text-sm text-gray-500 mb-2">🔥 Запись открыта! Осталось мест в группах:</p>
            <div className="bg-red-500 text-white px-4 py-2 rounded-full inline-block font-bold">
              7 из 30
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
