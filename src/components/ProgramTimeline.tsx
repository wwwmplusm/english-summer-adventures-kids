
import React, { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Calendar, BookOpen, Users, Trophy } from 'lucide-react';

export const ProgramTimeline = () => {
  const [hoveredWeek, setHoveredWeek] = useState<number | null>(null);

  const weeks = [
    {
      week: 1,
      title: "Знакомство и основы",
      topic: "Алфавит, числа, цвета",
      details: "Интерактивные игры, командная работа, первые диалоги",
      icon: BookOpen
    },
    {
      week: 2,
      title: "Семья и друзья",
      topic: "Описание внешности, характер",
      details: "Проектная работа: создание семейного древа",
      icon: Users
    },
    {
      week: 3,
      title: "Мой дом",
      topic: "Комнаты, мебель, предлоги места",
      details: "Виртуальная экскурсия по дому мечты",
      icon: BookOpen
    },
    {
      week: 4,
      title: "Еда и напитки",
      topic: "Продукты, рецепты, культура питания",
      details: "Кулинарное шоу на английском языке",
      icon: BookOpen
    },
    {
      week: 5,
      title: "Животные",
      topic: "Дикие и домашние животные, среда обитания",
      details: "Создание презентации о любимом животном",
      icon: BookOpen
    },
    {
      week: 6,
      title: "Путешествия",
      topic: "Страны, транспорт, достопримечательности",
      details: "Планирование виртуального путешествия",
      icon: BookOpen
    },
    {
      week: 7,
      title: "Хобби и спорт",
      topic: "Увлечения, спортивные игры, досуг",
      details: "Интервью о хобби одноклассников",
      icon: BookOpen
    },
    {
      week: 8,
      title: "Итоговый проект",
      topic: "Презентация финального проекта",
      details: "Защита проекта, вручение сертификатов",
      icon: Trophy
    }
  ];

  return (
    <section className="py-20 bg-white" id="program">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-800">
            Программа курса
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            8 недель структурированного обучения с проектной работой
          </p>
          <div className="flex flex-wrap justify-center gap-6 text-sm">
            <div className="flex items-center gap-2 bg-blue-50 rounded-full px-4 py-2">
              <Calendar className="w-4 h-4 text-blue-600" />
              <span>Zoom + Miro интерактив</span>
            </div>
            <div className="flex items-center gap-2 bg-green-50 rounded-full px-4 py-2">
              <Users className="w-4 h-4 text-green-600" />
              <span>Живые занятия, без записей</span>
            </div>
            <div className="flex items-center gap-2 bg-purple-50 rounded-full px-4 py-2">
              <Trophy className="w-4 h-4 text-purple-600" />
              <span>Группа ≤ 10 детей</span>
            </div>
          </div>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-[#FF6B00] to-orange-300" />
            
            <div className="space-y-8">
              {weeks.map((week, index) => {
                const Icon = week.icon;
                return (
                  <div 
                    key={week.week}
                    className="relative flex items-start gap-6"
                    onMouseEnter={() => setHoveredWeek(week.week)}
                    onMouseLeave={() => setHoveredWeek(null)}
                  >
                    {/* Timeline dot */}
                    <div className="relative z-10 flex-shrink-0">
                      <div className={`w-16 h-16 rounded-full flex items-center justify-center transition-all duration-300 ${
                        hoveredWeek === week.week 
                          ? 'bg-[#FF6B00] scale-110' 
                          : 'bg-orange-100'
                      }`}>
                        <Icon className={`w-8 h-8 ${
                          hoveredWeek === week.week ? 'text-white' : 'text-[#FF6B00]'
                        }`} />
                      </div>
                    </div>

                    {/* Content card */}
                    <Card className={`flex-1 transition-all duration-300 hover:shadow-xl ${
                      hoveredWeek === week.week ? 'transform -translate-y-2 shadow-2xl' : ''
                    }`}>
                      <CardContent className="p-6">
                        <div className="flex items-start justify-between mb-4">
                          <div>
                            <h3 className="text-xl font-bold text-gray-800 mb-2">
                              Неделя {week.week}: {week.title}
                            </h3>
                            <p className="text-[#FF6B00] font-semibold">{week.topic}</p>
                          </div>
                          <div className="bg-[#FF6B00] text-white text-sm font-bold px-3 py-1 rounded-full">
                            3 занятия
                          </div>
                        </div>
                        <p className="text-gray-600 leading-relaxed">
                          {week.details}
                        </p>
                      </CardContent>
                    </Card>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
