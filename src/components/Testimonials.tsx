
import React, { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Star, ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

export const Testimonials = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const testimonials = [
    {
      parentName: "Елена Петрова",
      childName: "Маша",
      childAge: 8,
      text: "Результат превзошел все ожидания! Маша теперь с удовольствием говорит на английском и даже учит младшего брата. Особенно понравилась игровая форма обучения.",
      rating: 5
    },
    {
      parentName: "Анна Смирнова",
      childName: "Артем", 
      childAge: 9,
      text: "Сын был очень стеснительным, но преподаватели создали такую дружелюбную атмосферу! Теперь он не боится говорить и даже поет английские песни.",
      rating: 5
    },
    {
      parentName: "Ирина Козлова",
      childName: "София",
      childAge: 7,
      text: "Очень довольна гибким расписанием и качеством обучения. София всегда ждала занятий с нетерпением! Сертификат теперь висит в рамочке в детской.",
      rating: 5
    },
    {
      parentName: "Михаил Васильев",
      childName: "Денис",
      childAge: 10,
      text: "Интерактивный формат с Miro просто потрясающий! Денис говорит, что это лучшие уроки в его жизни. Планируем продолжить обучение осенью.",
      rating: 5
    },
    {
      parentName: "Ольга Николаева",
      childName: "Алиса",
      childAge: 8,
      text: "Алиса стала намного увереннее в себе. Финальный проект-презентация был просто великолепен! Спасибо за профессиональный подход.",
      rating: 5
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const schools = [
    "Школа №1",
    "Гимназия №5", 
    "Олимпиада по английскому",
    "Школа №12",
    "Лицей №3"
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-800">
            Отзывы родителей
          </h2>
          <p className="text-xl text-gray-600">Что говорят о нас семьи наших учеников</p>
        </div>

        <div className="max-w-4xl mx-auto mb-16">
          <div className="relative">
            <Card className="border-0 shadow-2xl">
              <CardContent className="p-8">
                <div className="flex mb-4">
                  {[...Array(testimonials[currentSlide].rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-700 mb-6 text-lg italic leading-relaxed">
                  "{testimonials[currentSlide].text}"
                </p>
                <div className="flex items-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-[#FF6B00] to-orange-500 rounded-full flex items-center justify-center mr-4">
                    <span className="text-white font-bold text-xl">
                      {testimonials[currentSlide].parentName.split(' ').map(n => n[0]).join('')}
                    </span>
                  </div>
                  <div>
                    <p className="font-semibold text-gray-800 text-lg">{testimonials[currentSlide].parentName}</p>
                    <p className="text-gray-600">
                      Мама {testimonials[currentSlide].childName} ({testimonials[currentSlide].childAge} лет)
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Button
              onClick={prevSlide}
              variant="outline"
              className="absolute left-4 top-1/2 transform -translate-y-1/2 rounded-full w-12 h-12 p-0"
            >
              <ChevronLeft className="w-6 h-6" />
            </Button>
            <Button
              onClick={nextSlide}
              variant="outline"
              className="absolute right-4 top-1/2 transform -translate-y-1/2 rounded-full w-12 h-12 p-0"
            >
              <ChevronRight className="w-6 h-6" />
            </Button>
          </div>

          <div className="flex justify-center mt-6 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-3 h-3 rounded-full transition-all ${
                  index === currentSlide ? 'bg-[#FF6B00]' : 'bg-gray-300'
                }`}
              />
            ))}
          </div>
        </div>

        <div className="text-center">
          <h3 className="text-2xl font-bold mb-8 text-gray-800">Наши выпускники учатся в</h3>
          <div className="flex flex-wrap justify-center gap-8 opacity-60">
            {schools.map((school, index) => (
              <div key={index} className="text-gray-600 font-medium text-lg">
                {school}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
