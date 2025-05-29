
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Zap, Users, Target, Calendar, Trophy } from 'lucide-react';

export const Features = () => {
  const features = [
    {
      icon: Zap,
      title: "Эффективно",
      description: "Проверенные методики онлайн-обучения, адаптированные для детей 7-11 лет"
    },
    {
      icon: Users,
      title: "Интерактивно", 
      description: "Увлекательные игры, песни, истории и онлайн-инструменты"
    },
    {
      icon: Target,
      title: "Персонализированно",
      description: "Маленькие группы до 4 человек для внимания к каждому ребенку"
    },
    {
      icon: Calendar,
      title: "Гибко",
      description: "Удобное расписание совместимое с летним отдыхом"
    },
    {
      icon: Trophy,
      title: "Результативно",
      description: "За 8 недель значительное улучшение английского и преодоление языкового барьера"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Почему именно наш интенсив?
          </h2>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <Card 
                key={index} 
                className="text-center hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-0 bg-gradient-to-br from-blue-50 to-purple-50 animate-fade-in"
                style={{animationDelay: `${index * 0.1}s`}}
              >
                <CardContent className="p-6">
                  <div className="bg-gradient-to-r from-blue-500 to-purple-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-gray-800">{feature.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};
