
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Calendar, Book, Target } from 'lucide-react';

export const Program = () => {
  const topics = [
    "Приветствие и все обо мне",
    "Моя семья и друзья", 
    "Мои игрушки",
    "Мой дом",
    "Животные",
    "Еда, которую я люблю",
    "Одежда и погода",
    "Мой день и развлечения"
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent">
            Учебная программа на 8 недель
          </h2>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          <Card className="border-0 bg-gradient-to-br from-blue-50 to-blue-100 shadow-xl hover:shadow-2xl transition-all duration-300 animate-fade-in">
            <CardContent className="p-8">
              <div className="bg-gradient-to-r from-blue-500 to-blue-600 w-16 h-16 rounded-full flex items-center justify-center mb-6 mx-auto">
                <Calendar className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-center text-gray-800">Темы курса</h3>
              <div className="space-y-3">
                {topics.map((topic, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="bg-blue-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mt-0.5">
                      {index + 1}
                    </div>
                    <span className="text-gray-700">{topic}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card className="border-0 bg-gradient-to-br from-green-50 to-green-100 shadow-xl hover:shadow-2xl transition-all duration-300 animate-fade-in" style={{animationDelay: '0.2s'}}>
            <CardContent className="p-8">
              <div className="bg-gradient-to-r from-green-500 to-green-600 w-16 h-16 rounded-full flex items-center justify-center mb-6 mx-auto">
                <Book className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-center text-gray-800">Материалы</h3>
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-gray-800 mb-2">Основные УМК:</h4>
                  <ul className="space-y-1 text-gray-700">
                    <li>• Kid's Box</li>
                    <li>• Family and Friends</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800 mb-2">Цифровые ресурсы:</h4>
                  <ul className="space-y-1 text-gray-700">
                    <li>• British Council LearnEnglish Kids</li>
                    <li>• Специализированные YouTube каналы</li>
                    <li>• Интерактивные онлайн платформы</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-0 bg-gradient-to-br from-purple-50 to-purple-100 shadow-xl hover:shadow-2xl transition-all duration-300 animate-fade-in" style={{animationDelay: '0.4s'}}>
            <CardContent className="p-8">
              <div className="bg-gradient-to-r from-purple-500 to-purple-600 w-16 h-16 rounded-full flex items-center justify-center mb-6 mx-auto">
                <Target className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-center text-gray-800">Результат</h3>
              <div className="space-y-4 text-gray-700">
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-purple-500 rounded-full mt-2"></div>
                  <span>Освоение базовой лексики и грамматики</span>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-purple-500 rounded-full mt-2"></div>
                  <span>Умение общаться на простые темы</span>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-purple-500 rounded-full mt-2"></div>
                  <span>Преодоление языкового барьера</span>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-purple-500 rounded-full mt-2"></div>
                  <span>Любовь к английскому языку</span>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-purple-500 rounded-full mt-2"></div>
                  <span>Уверенность в себе</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};
