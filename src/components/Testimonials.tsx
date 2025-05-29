
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Star } from 'lucide-react';

export const Testimonials = () => {
  const testimonials = [
    {
      name: "Елена Петрова",
      text: "Моя дочь Маша (8 лет) прошла курс прошлым летом. Результат превзошел все ожидания! Теперь она с удовольствием говорит на английском и даже учит младшего брата.",
      rating: 5
    },
    {
      name: "Анна Смирнова", 
      text: "Сын Артем (9 лет) был очень стеснительным, но преподаватели создали такую дружелюбную атмосферу! Теперь он не боится говорить и даже поет английские песни.",
      rating: 5
    },
    {
      name: "Ирина Козлова",
      text: "Очень довольна гибким расписанием - мы смогли совместить курс с отпуском на море. Занятия проходили весело, дочь всегда ждала их с нетерпением!",
      rating: 5
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">
            Отзывы родителей
          </h2>
          <p className="text-xl text-gray-600">Что говорят о нас семьи наших учеников</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={index}
              className="border-0 bg-gradient-to-br from-green-50 to-blue-50 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 animate-fade-in"
              style={{animationDelay: `${index * 0.2}s`}}
            >
              <CardContent className="p-6">
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-700 mb-4 italic leading-relaxed">"{testimonial.text}"</p>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-blue-500 rounded-full flex items-center justify-center mr-3">
                    <span className="text-white font-bold text-lg">
                      {testimonial.name.split(' ').map(n => n[0]).join('')}
                    </span>
                  </div>
                  <div>
                    <p className="font-semibold text-gray-800">{testimonial.name}</p>
                    <p className="text-sm text-gray-600">Мама ученика</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
