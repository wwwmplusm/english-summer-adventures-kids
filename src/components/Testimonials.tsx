import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Star } from 'lucide-react';

export const Testimonials = () => {
  const testimonials = [
    {
      name: "Елена М.",
      child: "Дочь Алиса, 11 лет",
      text: "Занималась индивидуально на протяжении года, параллельно занималась в школе. Хочу сказать, что уровень определенно подтянулся за этот период — говорит на английском более свободно.",
      rating: 5
    },
    {
      name: "Татьяна К.",
      child: "Дочь Екатерина, 9 лет",
      text: "Эти курсы нам посоветовала наша знакомая. Не думала, что дочка так заинтересуется английским языком. Для меня образовался свободный час, а дочка очень увлечена уроком. Иногда заглядываю, чем они там заняты — а они танцуют, поют и играют в настольные игры на английском. Мы очень довольны.",
      rating: 5
    },
    {
      name: "Александр П.",
      child: "Сын Максим, 10 лет",
      text: "Мы занимаемся английским только пару месяцев. Да, бывает сложно — приходится отрабатывать часто одни и те же вещи, чтобы лучше закрепить грамматику. Но чувствую, что толк есть.",
      rating: 5
    },
    {
      name: "Ирина Л.",
      child: "Дочь Анастасия, 11 лет",
      text: "Обычно английский давался дочке тяжело — мы сидели иногда часами, чтобы подготовиться к самостоятельной в школе, просто даже чтобы выучить слова. Но преподаватель объясняет всё настолько понятно и легко, что у меня появилось ощущение, что дочке начал нравиться английский! Они смотрят фрагменты мультиков на английском и разбирают их. Дочь даже просит на досуге включить что-нибудь на английском))",
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
