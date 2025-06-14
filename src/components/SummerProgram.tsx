
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Calendar, Users, Globe, Sparkles } from 'lucide-react';

export const SummerProgram = () => {
  const benefits = [
    {
      icon: Calendar,
      title: "24 занятия за 2 месяца",
      description: "Структурированная программа для быстрого прогресса"
    },
    {
      icon: Users,
      title: "Избавление от стеснения",
      description: "Мой ребенок перестанет бояться говорить на английском"
    },
    {
      icon: Globe,
      title: "Погружение в среду",
      description: "Полное погружение в английскую языковую среду"
    },
    {
      icon: Sparkles,
      title: "Развлечение и обучение",
      description: "Учеба через игру и веселые активности"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-amber-50 via-orange-50 to-red-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">
            Идеальное лето для вашего ребенка!
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            2 месяца увлекательного обучения английскому языку. 24 занятия, за которые мой ребенок 
            избавится от стеснения в разговорах на английском, погрузится в языковую среду и будет получать удовольствие от процесса!
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <Card key={index} className="border-0 shadow-xl animate-fade-in" style={{animationDelay: `${index * 0.1}s`}}>
                <CardContent className="p-6 text-center">
                  <div className="bg-gradient-to-r from-orange-500 to-red-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="font-bold text-gray-800 mb-2">{benefit.title}</h3>
                  <p className="text-gray-600 text-sm">{benefit.description}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <Card className="border-0 shadow-xl bg-gradient-to-r from-orange-100 to-red-100">
          <CardContent className="p-8 text-center">
            <h3 className="text-2xl font-bold mb-4 text-gray-800">
              Превратите лето в время продуктивного развития!
            </h3>
            <p className="text-lg text-gray-700 mb-6">
              Вместо бесцельного времяпрепровождения - качественное обучение в игровой форме. 
              Мой ребенок получит навыки, которые пригодятся всю жизнь, и при этом будет в восторге от каждого занятия!
            </p>
            <div className="grid md:grid-cols-3 gap-6 text-center">
              <div>
                <div className="text-3xl font-bold text-orange-600 mb-2">2</div>
                <div className="text-gray-600">месяца летнего курса</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-orange-600 mb-2">24</div>
                <div className="text-gray-600">увлекательных занятия</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-orange-600 mb-2">100%</div>
                <div className="text-gray-600">удовольствия от учебы</div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};
