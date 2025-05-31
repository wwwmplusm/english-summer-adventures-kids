
import React from 'react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

export const FAQ = () => {
  const faqs = [
    {
      question: "Для какого возраста подходит курс?",
      answer: "Курс разработан для детей 7-11 лет. Минимальные требования: знание алфавита, умение читать и писать на уровне 1 класса."
    },
    {
      question: "Можно ли вернуть деньги, если курс не подойдет?",
      answer: "Да, мы предоставляем гарантию возврата в течение первых 2 занятий. Если курс не подойдет вашему ребенку, мы вернем 100% оплаченной суммы."
    },
    {
      question: "Что если ребенок пропустит занятие?",
      answer: "Все занятия записываются и остаются доступными в личном кабинете. Также возможны индивидуальные переносы занятий при предварительном уведомлении."
    },
    {
      question: "Какие технические требования?",
      answer: "Нужен компьютер или планшет с камерой, микрофоном и стабильным интернетом (от 5 Мбит/с). Мы используем Zoom и Miro — все программы бесплатны."
    },
    {
      question: "Есть ли у вас образовательная лицензия?",
      answer: "Да, у нас есть официальная образовательная лицензия. Все документы предоставляются по запросу."
    },
    {
      question: "Какие способы оплаты доступны?",
      answer: "Принимаем оплату банковскими картами, через СБП, PayPal. Возможна рассрочка и оплата материнским капиталом."
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
