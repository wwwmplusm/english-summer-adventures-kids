import React from 'react';
import { Badge } from '@/components/ui/badge';
import { Clock, Trophy, Gamepad2, Check } from 'lucide-react';

export const FinalCTA = () => {
  const benefits = [
    "Уверенное общение на английском языке",
    "Словарный запас 300+ новых слов",
    "Правильное произношение без акцента",
    "Любовь к английскому на всю жизнь",
    "Уверенность в себе и мотивацию к учёбе",
    "Новых друзей и практику общения",
    "Список игр и мультфильмов для практики",
  ];

  return (
    <section className="bg-gradient-to-b from-orange-400 to-orange-500 text-white py-12 sm:py-20" id="final-cta">
      <div className="container mx-auto px-4">
        <div className="text-center">
          <Badge className="bg-white/20 text-white border-white/30 mb-4 font-normal">
            ПОСЛЕДНИЙ ШАНС НА ЛЕТО 2025
          </Badge>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 leading-tight">
            Пока другие тратят лето впустую, <br className="hidden sm:block" /> ваш ребёнок начинает говорить по-английски
          </h2>
          <p className="text-lg sm:text-xl text-white/90 mb-12 max-w-3xl mx-auto">
            Подарите своим детям полезные каникулы, которые принесут результат
          </p>
        </div>

        {/* Блок со статистикой */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto mb-12 sm:mb-20">
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center">
            <Gamepad2 className="w-10 h-10 mx-auto mb-3 text-yellow-300" />
            <div className="text-2xl font-bold">Игровой формат</div>
            <p className="text-white/80">Обучение, которое увлекает</p>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center">
            <Clock className="w-10 h-10 mx-auto mb-3 text-yellow-300" />
            <div className="text-2xl font-bold">8 недель</div>
            <p className="text-white/80">До уверенного общения на английском</p>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center">
            <Trophy className="w-10 h-10 mx-auto mb-3 text-yellow-300" />
            <div className="text-2xl font-bold">97%</div>
            <p className="text-white/80">Родителей рекомендуют нас друзьям</p>
          </div>
        </div>

        {/* Блок "Что получит ваш ребёнок" */}
        <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 sm:p-10 max-w-5xl mx-auto">
          <h3 className="text-2xl sm:text-3xl font-bold text-center mb-8">
            Что получит ваш ребёнок за эти 8 недель:
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-4">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-start gap-3">
                <Check className="w-6 h-6 text-yellow-300 mt-1 flex-shrink-0" />
                <span className="text-lg">{benefit}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
