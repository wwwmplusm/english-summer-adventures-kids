
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { MessageCircle, Gamepad2, Users, BookOpen } from 'lucide-react';

export const Methodology = () => {
  const methods = [
    {
      icon: MessageCircle,
      title: "Communicative CLT",
      description: "Общение с первого урока — никаких скучных правил, только живая речь и диалоги"
    },
    {
      icon: Gamepad2,
      title: "Gamification",
      description: "Wordwall, Kahoot, квесты и соревнования — учимся играя и соревнуясь"
    },
    {
      icon: Users,
      title: "TPR-движение",
      description: "Изучаем через движения и жесты — запоминается в 3 раза лучше"
    },
    {
      icon: BookOpen,
      title: "Storytelling",
      description: "Истории и сказки на английском — развиваем воображение и память"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-800">
            Наша методика
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-4">
            Современные методы преподавания для максимального результата
          </p>
          <p className="text-lg text-[#FF6B00] font-semibold">
            Проектов и скучных презентаций нет — только живое общение и игры
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {methods.map((method, index) => {
            const Icon = method.icon;
            return (
              <Card 
                key={index}
                className="border-0 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 group"
              >
                <CardContent className="p-6 text-center h-full flex flex-col">
                  <div className="bg-gradient-to-r from-[#FF6B00] to-orange-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="font-bold text-gray-800 mb-3 text-lg">{method.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed flex-grow">{method.description}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="max-w-3xl mx-auto text-center">
          <div className="bg-gradient-to-r from-orange-100 to-yellow-100 rounded-2xl p-8">
            <h3 className="text-2xl font-bold mb-4 text-gray-800">
              ☀️ Летний формат = удовольствие от учёбы
            </h3>
            <p className="text-gray-700 text-lg leading-relaxed">
              Забудьте про домашние задания и зубрёжку! Ваш ребёнок будет с нетерпением ждать каждого урока, 
              потому что мы превратили изучение английского в увлекательную летнюю игру.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
