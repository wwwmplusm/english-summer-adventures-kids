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
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-6 sm:mb-8 text-white leading-tight drop-shadow-lg">
            Онлайн интенсив английского
          </h1>
          
          <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-white/90 mb-8 sm:mb-12 leading-relaxed drop-shadow-md">
            8 недель летнего обучения для детей 8-11 лет
          </p>

          {/* Компактная информационная карточка */}
          <div className="bg-white/95 backdrop-blur-sm rounded-2xl p-4 sm:p-6 mb-8 sm:mb-12 shadow-xl max-w-2xl mx-auto">
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-6 text-gray-700">
              <div className="flex items-center gap-2 text-center sm:text-left">
                <div className="w-3 h-3 bg-green-500 rounded-full flex-shrink-0"></div>
                <span className="font-medium text-sm sm:text-base">Живые занятия online</span>
              </div>
              <div className="flex items-center gap-2 text-center sm:text-left">
                <div className="w-3 h-3 bg-orange-500 rounded-full flex-shrink-0"></div>
                <span className="font-medium text-sm sm:text-base">2 урока в неделю (55 мин) + ДЗ</span>
              </div>
              <div className="flex items-center gap-2 text-center sm:text-left">
                <div className="w-3 h-3 bg-blue-500 rounded-full flex-shrink-0"></div>
                <span className="font-medium text-sm sm:text-base">Первый урок бесплатно!</span>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-4 justify-center items-center">
            <Button 
              onClick={handleDiagnostic}
              className="btn-primary bg-[#FF6B00] hover:bg-[#FF6B00]/90 text-white px-8 sm:px-12 py-4 sm:py-5 text-lg sm:text-xl font-bold rounded-xl shadow-2xl hover:scale-105 transition-all duration-300 w-full sm:w-auto max-w-md"
              size="lg"
            >
              Получить бесплатный урок
            </Button>
            <Button 
              onClick={scrollToProgram}
              variant="outline"
              className="border-2 border-white bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white px-8 sm:px-12 py-4 sm:py-5 text-lg sm:text-xl font-bold rounded-xl shadow-2xl hover:scale-105 transition-all duration-300 w-full sm:w-auto max-w-md"
              size="lg"
            >
              Смотреть программу
            </Button>
          </div>

          {/* Дополнительная информация - менее заметная */}
          <div className="mt-12 sm:mt-16">
            <p className="text-white/70 text-sm sm:text-base max-w-2xl mx-auto">
              Расписание: вторник и четверг в 12:00 (МСК) · Группы 8-9 и 10-11 лет
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
