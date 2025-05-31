
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

export const ProgramTimeline = () => {
  const weeks = [
    {
      week: 1,
      title: "All About Me!",
      vocabulary: "Имя, возраст, увлечения, семья",
      activity: "Игра 'Guess Who?' с карточками персонажей",
      grammar: "I am..., My name is..., I like..."
    },
    {
      week: 2,
      title: "My Family & Friends",
      vocabulary: "Члены семьи, друзья, описание внешности",
      activity: "Семейное древо с фотографиями и рассказами",
      grammar: "This is my..., He/She is..., Have got"
    },
    {
      week: 3,
      title: "My Toys",
      vocabulary: "Игрушки, цвета, размеры",
      activity: "Виртуальная выставка любимых игрушек",
      grammar: "It's a..., What colour is...?, Big/small"
    },
    {
      week: 4,
      title: "My House",
      vocabulary: "Комнаты, мебель, предметы дома",
      activity: "Виртуальная экскурсия по дому",
      grammar: "There is/are..., In/on/under, Where is...?"
    },
    {
      week: 5,
      title: "Animals",
      vocabulary: "Домашние и дикие животные, звуки",
      activity: "Зоопарк онлайн с звуками и движениями",
      grammar: "Can/can't, What does it eat?, Where does it live?"
    },
    {
      week: 6,
      title: "Food I Like",
      vocabulary: "Еда, напитки, вкусы",
      activity: "Кулинарное шоу 'MasterChef Kids'",
      grammar: "I like/don't like..., Do you like...?, Some/any"
    },
    {
      week: 7,
      title: "Clothes & Weather",
      vocabulary: "Одежда, погода, времена года",
      activity: "Модный показ по временам года",
      grammar: "I'm wearing..., It's sunny/rainy, What's the weather like?"
    },
    {
      week: 8,
      title: "My Day & Fun Activities",
      vocabulary: "Распорядок дня, хобби, время",
      activity: "Итоговый праздник с презентациями и играми",
      grammar: "I get up at..., What time is it?, Present Simple"
    }
  ];

  return (
    <section className="py-20 bg-white" id="program">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-800">
            Программа 8 недель
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Пошаговый план изучения английского языка
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {weeks.map((weekData, index) => (
              <AccordionItem 
                key={index} 
                value={`week-${weekData.week}`}
                className="border border-gray-200 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow"
              >
                <AccordionTrigger className="px-6 py-4 bg-gradient-to-r from-[#FF6B00]/5 to-orange-500/5 hover:from-[#FF6B00]/10 hover:to-orange-500/10 transition-all">
                  <div className="flex items-center gap-4 text-left">
                    <div className="bg-[#FF6B00] text-white rounded-full w-10 h-10 flex items-center justify-center font-bold">
                      {weekData.week}
                    </div>
                    <div>
                      <h3 className="font-bold text-lg text-gray-800">{weekData.title}</h3>
                      <p className="text-sm text-gray-600 mt-1">Неделя {weekData.week}</p>
                    </div>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-6">
                  <div className="grid md:grid-cols-3 gap-6 mt-4">
                    <Card className="border-0 bg-blue-50">
                      <CardContent className="p-4">
                        <h4 className="font-semibold text-blue-800 mb-2">📚 Ключевая лексика</h4>
                        <p className="text-blue-700 text-sm">{weekData.vocabulary}</p>
                      </CardContent>
                    </Card>
                    <Card className="border-0 bg-green-50">
                      <CardContent className="p-4">
                        <h4 className="font-semibold text-green-800 mb-2">🎮 Игровая активность</h4>
                        <p className="text-green-700 text-sm">{weekData.activity}</p>
                      </CardContent>
                    </Card>
                    <Card className="border-0 bg-purple-50">
                      <CardContent className="p-4">
                        <h4 className="font-semibold text-purple-800 mb-2">📝 Грамматический фокус</h4>
                        <p className="text-purple-700 text-sm">{weekData.grammar}</p>
                      </CardContent>
                    </Card>
                  </div>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};
