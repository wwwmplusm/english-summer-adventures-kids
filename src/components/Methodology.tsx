
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Gamepad2, PresentationChart, MessageCircle, Award } from 'lucide-react';

export const Methodology = () => {
  const features = [
    {
      icon: Gamepad2,
      title: "Геймификация",
      description: "Обучение через игру, квесты и интерактивные задания. Мой ребенок даже не заметит, как изучает английский!"
    },
    {
      icon: PresentationChart,
      title: "Проект-финал",
      description: "Каждый ребенок создает и презентует собственный проект на английском языке. Развиваем уверенность в себе."
    },
    {
      icon: MessageCircle,
      title: "Живая обратная связь",
      description: "Преподаватель работает с каждым ребенком индивидуально во время групповых занятий."
    },
    {
      icon: Award,
      title: "Сертификат",
      description: "По окончании курса каждый участник получает именной сертификат о прохождении интенсива."
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-blue-50 to-purple-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-800">
            Наша методика и результат
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Уникальный подход, который делает изучение английского увлекательным и эффективным
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <Card 
                key={index}
                className="border-0 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 animate-fade-in bg-white"
                style={{animationDelay: `${index * 0.1}s`}}
              >
                <CardContent className="p-6 text-center">
                  <div className="bg-gradient-to-r from-[#FF6B00] to-orange-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="font-bold text-gray-800 mb-3 text-lg">{feature.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{feature.description}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="max-w-4xl mx-auto">
          <Card className="border-0 shadow-2xl bg-gradient-to-r from-orange-100 to-red-100">
            <CardContent className="p-8 text-center">
              <h3 className="text-3xl font-bold mb-6 text-gray-800">
                Результат: +2 уровня английского за 8 недель
              </h3>
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <h4 className="text-xl font-semibold mb-4 text-gray-700">До курса:</h4>
                  <ul className="text-left space-y-2 text-gray-600">
                    <li>• Знает алфавит и может читать</li>
                    <li>• Стесняется говорить на английском</li>
                    <li>• Ограниченный словарный запас</li>
                    <li>• Боится делать ошибки</li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-xl font-semibold mb-4 text-[#FF6B00]">После курса:</h4>
                  <ul className="text-left space-y-2 text-gray-800">
                    <li>• Свободно общается на базовые темы</li>
                    <li>• Уверенно выступает перед группой</li>
                    <li>• Активный словарь 300+ слов</li>
                    <li>• Не боится экспериментировать с языком</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};
