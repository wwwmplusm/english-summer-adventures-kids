
import React, { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Star, ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

export const Testimonials = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const testimonials = [
    {
      parentName: "Елена Васильева",
      childName: "Маша",
      childAge: 8,
      text: "Дочка с нетерпением ждала каждого урока! Преподаватели создали такую дружескую атмосферу, что стеснительная Маша стала активно участвовать в играх и даже шутить на английском.",
      rating: 5
    },
    {
      parentName: "Анна Петрова",
      childName: "Артем", 
      childAge: 9,
      text: "Сын начал использовать английские слова в повседневной речи уже после второй недели! Методика действительно работает — никакой зубрёжки, только игры и живое общение.",
      rating: 5
    },
    {
      parentName: "Мария Козлова",
      childName: "София",
      childAge: 7,
      text: "Очень довольна форматом малых групп. София получает достаточно внимания преподавателя, но при этом учится работать в команде. Летние каникулы прошли с огромной пользой!",
      rating: 5
    },
    {
      parentName: "Ирина Смирнова",
      childName: "Денис",
      childAge: 10,
      text: "Денис стал намного увереннее в себе. На итоговом празднике он рассказывал стихотворение на английском — я была в восторге! Планируем продолжать обучение осенью.",
      rating: 5
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-800">
            Отзывы родителей
          </h2>
          <p className="text-xl text-gray-600">Что говорят о нас семьи наших учеников</p>
        </div>

        <div className="max-w-4xl mx-auto">
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
              className="absolute left-4 top-1/2 transform -translate-y-1/2 rounded-full w-12 h-12 p-0 bg-white shadow-lg"
            >
              <ChevronLeft className="w-6 h-6" />
            </Button>
            <Button
              onClick={nextSlide}
              variant="outline"
              className="absolute right-4 top-1/2 transform -translate-y-1/2 rounded-full w-12 h-12 p-0 bg-white shadow-lg"
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
      </div>
    </section>
  );
};
