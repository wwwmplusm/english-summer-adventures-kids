
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Star } from 'lucide-react';

export const Testimonials = () => {
  const testimonials = [
    {
      name: "Анна К.",
      child: "Дочь 9 лет",
      text: "После курса дочка перестала стесняться говорить на английском. Теперь даже пытается переводить мультфильмы!",
      rating: 5
    },
    {
      name: "Михаил С.",
      child: "Сын 8 лет",
      text: "Отличная альтернатива скучным урокам! Сын ждёт каждое занятие и рассказывает новые слова всей семье.",
      rating: 5
    },
    {
      name: "Елена Р.",
      child: "Дочь 10 лет",
      text: "Удобный формат для работающих родителей. Никуда не нужно ехать, а результат заметен уже через месяц.",
      rating: 5
    },
    {
      name: "Дмитрий В.",
      child: "Сын 11 лет",
      text: "Преподаватели находят подход к каждому ребёнку. Сын стал более уверенным и начал интересоваться языками.",
      rating: 5
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-yellow-50 to-orange-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-800">
            Что говорят родители
          </h2>
          <p className="text-xl text-gray-600">
            Реальные отзывы о результатах наших учеников
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={index}
              className="border-0 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
            >
              <CardContent className="p-6">
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-700 mb-4 leading-relaxed">"{testimonial.text}"</p>
                <div className="border-t pt-4">
                  <p className="font-semibold text-gray-800">{testimonial.name}</p>
                  <p className="text-sm text-gray-600">{testimonial.child}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
