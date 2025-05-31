
import React from 'react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

export const FAQ = () => {
  const faqs = [
    {
      question: "Есть ли записи занятий?",
      answer: "Нет, записей занятий нет. Мы считаем, что живое интерактивное общение гораздо важнее для изучения языка. Дети учатся говорить только через практику в реальном времени."
    },
    {
      question: "Нужна ли лицензия для проведения таких занятий?",
      answer: "Нет, лицензия не требуется. Это репетиторские занятия в мини-группах по 4 человека, которые не подпадают под образовательную деятельность, требующую лицензирования."
    },
    {
      question: "Что если ребёнок пропустил занятие?",
      answer: "При оплате по неделям вы платите только за посещённые занятия. При оплате всего курса — возможен перенос или компенсация пропущенного урока."
    },
    {
      question: "Можно ли уйти раньше окончания курса?",
      answer: "Да, конечно! Мы вернём деньги за все неиспользованные уроки. Ваше удовлетворение — наш приоритет."
    },
    {
      question: "Какой уровень английского нужен ребёнку?",
      answer: "Курс подходит детям с любым уровнем — от полного нуля до базового. Мы проводим бесплатную диагностику и формируем группы по уровням."
    },
    {
      question: "Какое техническое оборудование нужно?",
      answer: "Компьютер или планшет с камерой, микрофоном и стабильным интернетом (от 5 Мбит/с). Мы используем Zoom — программа бесплатная и простая в использовании."
    }
  ];

  return (
    <section className="py-20 bg-white" id="faq">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-800">
            Часто задаваемые вопросы
          </h2>
          <p className="text-xl text-gray-600">
            Ответы на популярные вопросы родителей
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="border border-gray-200 rounded-lg px-6 shadow-sm hover:shadow-md transition-shadow"
              >
                <AccordionTrigger className="text-left font-semibold text-gray-800 hover:text-[#FF6B00] py-6">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-gray-600 leading-relaxed pb-6">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};
