
import React from 'react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

export const FAQ = () => {
  const faqs = [
    {
      question: "Что нужно для участия?",
      answer: "Ноутбук или планшет, интернет и спокойное место дома. Ничего скачивать не нужно — игры и материалы встроены в урок."
    },
    {
      question: "Моему ребёнку сложно знакомиться с новыми детьми. Не будет ли дискомфорта?",
      answer: "Первый урок всегда игровой, учитель аккуратно вовлекает даже самых застенчивых."
    },
    {
      question: "А если не понравится?",
      answer: "Первый урок бесплатный и ни к чему не обязывает. Не зайдёт — просто не продолжаете."
    },
    {
      question: "Занятия полностью на английском?",
      answer: "Преимущественно да: убираем языковой барьер. Но при необходимости преподаватель подстрахует по-русски."
    },
    {
      question: "Можно ли с телефона?",
      answer: "Лучше ноутбук или планшет, чтобы удобно видеть доску и всех участников. Телефон — крайний вариант."
    },
    {
      question: "Нужна ли подготовка до начала?",
      answer: "Бесплатный вводный урок определит уровень и даст персональный план на лето. Домашние задания помогут закреплять материал."
    },
    {
      question: "В какое время проходят занятия?",
      answer: "Вторник и четверг, 12:00 (МСК) — дети высыпаются, занимаются и потом свободны для летних приключений."
    }
  ];

  return (
    <section className="py-20 bg-white" id="faq">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-800">
            Вопросы
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
