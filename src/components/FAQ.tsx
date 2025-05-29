import React from 'react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Card, CardContent } from '@/components/ui/card';
import { Monitor, Wifi, Headphones } from 'lucide-react';

export const FAQ = () => {
  const faqs = [
    {
      question: "Он/она не сможет заниматься онлайн, ему/ей скучно!",
      answer: "Наши уроки насыщены активностями и сменой деятельности каждые 5-7 минут. Мы используем игры, песни, интерактивные задания - дети не успеют заскучать! Каждый урок - это маленькое приключение."
    },
    {
      question: "Он/она стесняется говорить на английском!",
      answer: "Маленькие группы до 4 человек и дружелюбная атмосфера помогают преодолеть стеснение. Мы начинаем с простых фраз и постепенно развиваем уверенность. Ошибки - это часть обучения, и мы это подчеркиваем!"
    },
    {
      question: "Он/она еще маленький, чтобы заниматься онлайн!",
      answer: "Мы адаптировали все методики специально для возраста 7-11 лет. Короткие активности, яркие материалы, частая смена деятельности - все продумано для комфортного онлайн-обучения детей."
    },
    {
      question: "Мы уезжаем на дачу/море, не будет стабильного интернета!",
      answer: "Мы предлагаем гибкий график занятий и записываем все уроки. Если пропустили занятие - всегда можно посмотреть запись. Также возможны индивидуальные переносы занятий."
    },
    {
      question: "Какой уровень английского нужен для участия?",
      answer: "Подойдет любой уровень! От полного нуля до начального уровня. На пробном уроке мы проведем диагностику уровня и подберем подходящую группу для вашего ребенка."
    },
    {
      question: "Сколько длится одно занятие?",
      answer: "Каждое занятие длится 45 минут - оптимальное время для концентрации детей 7-11 лет. Урок включает разминку, основную часть с играми и активностями, и закрепление материала."
    },
    {
      question: "Что делать, если ребенок пропустил урок?",
      answer: "Все занятия записываются! Вы всегда можете посмотреть пропущенный урок в удобное время. Также преподаватель даст краткую информацию перед следующим занятием."
    },
    {
      question: "Получит ли ребенок сертификат об окончании курса?",
      answer: "Да! По окончании интенсива каждый ребенок получает красочный сертификат с указанием пройденных тем и достигнутого уровня."
    },
    {
      question: "Не уверены, подойдет ли такой формат?",
      answer: "Запишитесь на ПРОБНЫЙ урок! Это бесплатно. Мы проведем диагностику уровня английского, покажем как проходят занятия, и вы сможете понять, подходит ли этот формат вашему ребенку."
    },
    {
      question: "У нас есть дополнительные вопросы. Как их задать?",
      answer: "Запишитесь на пробный урок через форму ниже и укажите ваши вопросы в комментариях. Мы обязательно все обсудим и ответим на все ваши вопросы!"
    }
  ];

  const techRequirements = [
    {
      icon: Monitor,
      title: "Устройство",
      description: "Компьютер или планшет с камерой и микрофоном"
    },
    {
      icon: Wifi,
      title: "Интернет",
      description: "Стабильное подключение для видеосвязи"
    },
    {
      icon: Headphones,
      title: "Поддержка",
      description: "Поможем настроить все необходимое для занятий"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-orange-50 to-red-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">
            Ответы на ваши вопросы
          </h2>
        </div>

        <div className="max-w-4xl mx-auto mb-16">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="bg-white border-0 rounded-lg shadow-lg animate-fade-in"
                style={{animationDelay: `${index * 0.1}s`}}
              >
                <AccordionTrigger className="px-6 py-4 text-left font-semibold text-gray-800 hover:no-underline">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4 text-gray-600 leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        <Card className="bg-white border-0 shadow-xl animate-fade-in" style={{animationDelay: '0.4s'}}>
          <CardContent className="p-8">
            <h3 className="text-2xl font-bold mb-8 text-center bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">
              Техническая сторона
            </h3>
            <div className="grid md:grid-cols-3 gap-6">
              {techRequirements.map((req, index) => {
                const Icon = req.icon;
                return (
                  <div key={index} className="text-center">
                    <div className="bg-gradient-to-r from-orange-500 to-red-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    <h4 className="font-bold text-gray-800 mb-2">{req.title}</h4>
                    <p className="text-gray-600">{req.description}</p>
                  </div>
                );
              })}
            </div>
            <div className="text-center mt-8">
              <p className="text-lg font-semibold text-gray-800 mb-2">Платформа: Zoom</p>
              <p className="text-gray-600">Простая и надежная платформа для онлайн-занятий</p>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};
