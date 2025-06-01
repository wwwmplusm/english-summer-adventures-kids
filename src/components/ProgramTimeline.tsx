
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

export const ProgramTimeline = () => {
  const weeks = [
    {
      week: 1,
      title: "All About Me!",
      description: "Знакомство, рассказ о себе, семье и увлечениях"
    },
    {
      week: 2,
      title: "My Family & Friends",
      description: "Семья, дружба и близкие люди"
    },
    {
      week: 3,
      title: "My Toys",
      description: "Игрушки, любимые предметы и игры"
    },
    {
      week: 4,
      title: "My House",
      description: "Дом, комнаты и предметы интерьера"
    },
    {
      week: 5,
      title: "Animals",
      description: "Животные, их характеристики и звуки"
    },
    {
      week: 6,
      title: "Food I Like",
      description: "Еда, напитки и предпочтения в питании"
    },
    {
      week: 7,
      title: "Clothes & Weather",
      description: "Одежда, погода и времена года"
    },
    {
      week: 8,
      title: "My Day & Fun Activities",
      description: "Распорядок дня, хобби и итоговый праздник"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-purple-50 to-blue-50" id="program">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-800">
            Программа 8 недель
          </h2>
          <p className="text-xl text-gray-600 mb-4">
            Пошаговый план изучения английского от простого к сложному
          </p>
          <p className="text-sm text-gray-500">
            Каждую неделю — 2 живых урока и домашнее задание для закрепления.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {weeks.map((week, index) => (
              <AccordionItem 
                key={index} 
                value={`week-${week.week}`}
                className="border border-gray-200 rounded-lg px-6 shadow-sm hover:shadow-md transition-shadow"
              >
                <AccordionTrigger className="text-left py-6">
                  <div className="flex items-center gap-4">
                    <div className="bg-gradient-to-r from-purple-500 to-blue-500 text-white w-12 h-12 rounded-full flex items-center justify-center font-bold">
                      {week.week}
                    </div>
                    <div>
                      <h3 className="font-bold text-lg text-gray-800">{week.title}</h3>
                      <p className="text-gray-600 text-left">{week.description}</p>
                    </div>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="pb-6">
                  <div className="ml-16 space-y-4">
                    <div>
                      <h4 className="font-semibold text-gray-800 mb-2">Ключевая лексика:</h4>
                      <p className="text-gray-600">Основные слова и выражения по теме недели</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800 mb-2">Игровая активность:</h4>
                      <p className="text-gray-600">Интерактивные игры и упражнения для закрепления материала</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800 mb-2">Грамматический фокус:</h4>
                      <p className="text-gray-600">Изучение базовых грамматических конструкций через практику</p>
                    </div>
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
