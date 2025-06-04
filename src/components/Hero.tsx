import React from 'react';
import { Button } from '@/components/ui/button';
import { trackEvent } from "@/lib/analytics";

export const Hero = () => {
  const handleDiagnostic = () => {
    // Плавный скролл к форме заявки
    document.getElementById('diagnostic')?.scrollIntoView({ behavior: 'smooth' });
    
    // Analytics
    trackEvent.ym(88888888, 'Scroll_To_Form_Hero');
    trackEvent.vk('scroll_to_form_hero');
  };

  const scrollToProgram = () => {
    document.getElementById('program')?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToForm = () => {
    document.getElementById('diagnostic')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden" style={{
      backgroundImage: 'url(/space-background.jpg)',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat'
    }}>
      {/* Overlay для лучшей читабельности текста */}
      <div className="absolute inset-0 bg-gradient-to-br from-orange-400/30 via-yellow-400/20 to-orange-500/30"></div>
      
      {/* Дополнительные анимированные элементы, гармонирующие с фоном */}
      <div className="absolute top-20 left-10 w-12 h-12 bg-white/20 rounded-full opacity-60 animate-pulse hidden sm:block"></div>
      <div className="absolute top-40 right-20 w-8 h-8 bg-white/30 rounded-full opacity-50 animate-bounce hidden sm:block"></div>
      <div className="absolute bottom-32 left-20 w-16 h-16 bg-white/15 rounded-full opacity-40 animate-pulse hidden sm:block" style={{animationDelay: '1s'}}></div>

      <div className="container mx-auto px-4 text-center relative z-10 pt-16 sm:pt-20">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-4 sm:mb-6 text-white leading-tight drop-shadow-lg">
            Онлайн интенсив английского: лето с пользой за 8 недель
          </h1>
          
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-white/90 mb-6 sm:mb-8 leading-relaxed drop-shadow-md px-2">
            2 урока в неделю по 55 минут + домашнее задание · вт и чт в 12:00 (МСК)
          </p>

          <div className="bg-white/95 backdrop-blur-sm rounded-2xl p-4 sm:p-6 mb-6 sm:mb-8 shadow-xl">
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-6 text-gray-700">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                <span className="font-medium text-sm sm:text-base">Живые занятия online</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                <span className="font-medium text-sm sm:text-base">Возраст 8-11 лет</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-orange-500 rounded-full"></div>
                <span className="font-medium text-sm sm:text-base">Игровой формат</span>
              </div>
            </div>
          </div>

          <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-4 sm:p-6 mb-6 sm:mb-8 shadow-lg">
            <p className="text-sm sm:text-base md:text-lg text-gray-700 font-medium leading-relaxed">
              Запишитесь на первое бесплатное занятие и получите персональный план занятий на всё лето — без обязательств
            </p>
          </div>

          <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-4 sm:p-6 mb-8 sm:mb-12 shadow-lg">
            <p className="text-sm sm:text-base md:text-lg text-gray-700 font-medium leading-relaxed">
              Набор идёт в две группы: 8–9 лет и 10–11 лет. Точное распределение делаем на первом бесплатном уроке.
            </p>
          </div>

          <div className="flex flex-col gap-4 justify-center items-center mb-8 sm:mb-12">
            <Button 
              onClick={handleDiagnostic}
              className="btn-primary bg-[#FF6B00] hover:bg-[#FF6B00]/90 text-white px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg font-bold rounded-xl shadow-2xl hover:scale-105 transition-all duration-300 w-full sm:w-auto"
              size="lg"
            >
              Получить бесплатный урок и план
            </Button>
            <Button 
              onClick={scrollToProgram}
              variant="outline"
              className="border-2 border-white bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg font-bold rounded-xl shadow-2xl hover:scale-105 transition-all duration-300 w-full sm:w-auto"
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
