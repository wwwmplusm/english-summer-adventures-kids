
import React from 'react';
import { Button } from '@/components/ui/button';
import { Star, Users, Clock, Trophy } from 'lucide-react';

export const Hero = () => {
  const scrollToForm = () => {
    document.getElementById('contact-form')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-blue-600 via-purple-600 to-pink-500 text-white">
      <div className="absolute inset-0 bg-black/20"></div>
      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          <div className="animate-fade-in">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white to-yellow-200 bg-clip-text text-transparent">
              Летний Онлайн Интенсив
            </h1>
            <h2 className="text-3xl md:text-4xl font-semibold mb-8 text-yellow-200">
              по Английскому Языку
            </h2>
            <p className="text-xl md:text-2xl mb-4 opacity-90">
              для детей 7-11 лет
            </p>
            <p className="text-lg md:text-xl mb-12 opacity-80 max-w-2xl mx-auto">
              Сделайте лето вашего ребенка ярким и полезным! 
              8 недель увлекательного обучения с результатом!
            </p>
          </div>
          
          <div className="flex flex-wrap justify-center gap-6 mb-12 animate-fade-in" style={{animationDelay: '0.3s'}}>
            <div className="flex items-center gap-2 bg-white/20 rounded-full px-4 py-2">
              <Users className="w-5 h-5" />
              <span>До 4 человек в группе</span>
            </div>
            <div className="flex items-center gap-2 bg-white/20 rounded-full px-4 py-2">
              <Clock className="w-5 h-5" />
              <span>2-3 занятия в неделю</span>
            </div>
            <div className="flex items-center gap-2 bg-white/20 rounded-full px-4 py-2">
              <Trophy className="w-5 h-5" />
              <span>Быстрый результат</span>
            </div>
          </div>

          <div className="animate-fade-in" style={{animationDelay: '0.6s'}}>
            <Button 
              onClick={scrollToForm}
              size="lg" 
              className="bg-yellow-400 hover:bg-yellow-500 text-black font-bold text-lg px-8 py-4 rounded-full shadow-2xl hover:scale-105 transition-all duration-300"
            >
              Записаться на пробный урок!
            </Button>
            <p className="mt-4 text-sm opacity-70">
              Первый урок - бесплатно!
            </p>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-white to-transparent"></div>
    </section>
  );
};
