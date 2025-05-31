
import React, { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { ChevronDown, ChevronRight } from 'lucide-react';

export const ProgramTimeline = () => {
  const [openWeek, setOpenWeek] = useState<number | null>(null);

  const weeks = [
    {
      week: 1,
      title: "All About Me!",
      vocabulary: "Имя, возраст, цвета, числа 1-10",
      activity: "Игра 'Угадай, кто я?' с картинками",
      grammar: "I am... / My name is..."
    },
    {
      week: 2,
      title: "My Family & Friends",
      vocabulary: "Семья, друзья, описание людей",
      activity: "Семейное древо с фотографиями",
      grammar: "This is my... / He/She is..."
    },
    {
      week: 3,
      title: "My Toys",
      vocabulary: "Игрушки, цвета, размеры",
      activity: "Виртуальный магазин игрушек",
      grammar: "I have... / I like..."
    },
    {
      week: 4,
      title: "My House",
      vocabulary: "Комнаты, мебель, предметы дома",
      activity: "Виртуальная экскурсия по дому",
      grammar: "There is/are... / Where is...?"
    },
    {
      week: 5,
      title: "Animals",
      vocabulary: "Животные, их звуки, места обитания",
      activity: "Зоопарк с движениями и звуками",
      grammar: "Animals can... / Where do they live?"
    },
    {
      week: 6,
      title: "Food I Like",
      vocabulary: "Еда, напитки, вкусы",
      activity: "Ресторан: заказываем и готовим",
      grammar: "I like/don't like... / Can I have...?"
    },
    {
      week: 7,
      title: "Clothes & Weather",
      vocabulary: "Одежда, погода, времена года",
      activity: "Модный показ по погоде",
      grammar: "I'm wearing... / It's sunny/rainy..."
    },
    {
      week: 8,
      title: "My Day & Fun Activities",
      vocabulary: "Время, действия, хобби",
      activity: "Итоговый праздник-презентация достижений",
      grammar: "I get up at... / I like to..."
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-blue-50 to-purple-50" id="program">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-800">
            План на 8 недель
          </h2>
          <p className="text-xl text-gray-600">
            Интерактивная программа: от знакомства до свободного общения
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-[#FF6B00] hidden md:block"></div>
            
            {weeks.map((week, index) => (
              <div key={week.week} className="relative mb-8">
                {/* Timeline dot */}
                <div className="absolute left-6 w-4 h-4 bg-[#FF6B00] rounded-full border-4 border-white shadow-lg hidden md:block"></div>
                
                <Card 
                  className="md:ml-16 border-0 shadow-xl hover:shadow-2xl transition-all duration-300 cursor-pointer"
                  onClick={() => setOpenWeek(openWeek === week.week ? null : week.week)}
                >
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-4">
                        <div className="bg-[#FF6B00] text-white w-12 h-12 rounded-full flex items-center justify-center font-bold text-lg">
                          {week.week}
                        </div>
                        <div>
                          <h3 className="text-xl font-bold text-gray-800 mb-1">
                            Неделя {week.week}
                          </h3>
                          <p className="text-[#FF6B00] font-semibold text-lg">
                            {week.title}
                          </p>
                        </div>
                      </div>
                      <div className="text-[#FF6B00]">
                        {openWeek === week.week ? (
                          <ChevronDown className="w-6 h-6" />
                        ) : (
                          <ChevronRight className="w-6 h-6" />
                        )}
                      </div>
                    </div>

                    {openWeek === week.week && (
                      <div className="mt-6 pt-6 border-t border-gray-200 animate-fade-in">
                        <div className="grid md:grid-cols-3 gap-4">
                          <div>
                            <h4 className="font-semibold text-gray-800 mb-2">📚 Ключевая лексика</h4>
                            <p className="text-gray-600 text-sm">{week.vocabulary}</p>
                          </div>
                          <div>
                            <h4 className="font-semibold text-gray-800 mb-2">🎮 Игровая активность</h4>
                            <p className="text-gray-600 text-sm">{week.activity}</p>
                          </div>
                          <div>
                            <h4 className="font-semibold text-gray-800 mb-2">📝 Грамматический фокус</h4>
                            <p className="text-gray-600 text-sm">{week.grammar}</p>
                          </div>
                        </div>
                      </div>
                    )}
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
