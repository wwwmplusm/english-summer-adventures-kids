
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { MessageSquare, Gamepad2, Activity, Book, Globe, Users } from 'lucide-react';

export const Methodology = () => {
  const methods = [
    {
      icon: MessageSquare,
      title: "Разговорная практика с первых минут",
      description: "Дети учатся говорить, а не зубрить правила"
    },
    {
      icon: Gamepad2,
      title: "Игрофикация",
      description: "Обучение через игру - викторины, соревнования, баллы и награды"
    },
    {
      icon: Activity,
      title: "Учимся в движении (TPR)",
      description: "Команды типа \"Jump! Clap!\" делаем руками и ногами — язык запоминается телом"
    },
    {
      icon: Book,
      title: "Сторителлинг",
      description: "Истории увлекают и помогают учить язык в контексте"
    },
    {
      icon: Globe,
      title: "CLIL подход",
      description: "Изучаем английский, познавая мир вокруг нас"
    },
    {
      icon: Users,
      title: "Скэффолдинг",
      description: "Поддержка на каждом этапе с постепенным увеличением самостоятельности"
    }
  ];

  const environment = [
    "Малые группы по 4 человека",
    "Виртуальные доски для совместной работы", 
    "Сессионные залы для работы в парах",
    "Интерактивные игры Wordwall, Kahoot!",
    "Яркие презентации и видео",
    "Доброжелательная атмосфера без страха ошибок"
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-purple-50 to-pink-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
            Как мы учим
          </h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto bg-blue-50 rounded-lg p-4">
            Наш курс рассчитан на ребят 8–11 лет, уже освоивших школьную программу 1 класса (знают алфавит, умеют читать и писать простые слова).
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {methods.map((method, index) => {
            const Icon = method.icon;
            return (
              <Card 
                key={index}
                className="hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-0 bg-white animate-fade-in"
                style={{animationDelay: `${index * 0.1}s`}}
              >
                <CardContent className="p-6">
                  <div className="bg-gradient-to-r from-purple-500 to-pink-500 w-14 h-14 rounded-full flex items-center justify-center mb-4">
                    <Icon className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-lg font-bold mb-3 text-gray-800">{method.title}</h3>
                  <p className="text-gray-600">{method.description}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <Card className="bg-white border-0 shadow-xl animate-fade-in" style={{animationDelay: '0.6s'}}>
          <CardContent className="p-8">
            <h3 className="text-2xl font-bold mb-6 text-center bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              Интерактивная онлайн-среда
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {environment.map((item, index) => (
                <div key={index} className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full"></div>
                  <span className="text-gray-700">{item}</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};
