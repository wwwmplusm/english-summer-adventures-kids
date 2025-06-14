import React from 'react';
import { Card, CardContent } from '@/components/ui/card';

export const ProgramTimeline = () => {
  const courseContent = [
    {
      weeks: "1–2",
      topic: "Мой класс и день",
      result: "Попросить/дать предмет (Can I have…?), назвать 6 школьных вещей и 3 ежедневных действия с временем «о'clock»."
    },
    {
      weeks: "3–4",
      topic: "Еда и вкусы",
      result: "Сказать 'I like / don't like' о 3-4 продуктах, вежливо попросить напиток (Some juice, please)."
    },
    {
      weeks: "5–6",
      topic: "Животные и сравнения",
      result: "Описать животное (It can run), сравнить два, используя простую сравнительную конструкцию (A cheetah is faster than a turtle)."
    },
    {
      weeks: "7–8",
      topic: "Дом, погода и одежда",
      result: "Описать свою комнату (назвав 3-4 предмета), прокомментировать погоду за окном и сказать, какую одежду следует надеть."
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-purple-50 to-blue-50" id="program">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-800">
            Программа 8 недель
          </h2>
        </div>

        <div className="max-w-6xl mx-auto">
          <Card className="overflow-hidden shadow-2xl border-0">
            <CardContent className="p-0">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-gradient-to-r from-purple-500 to-blue-500 text-white">
                    <tr>
                      <th className="p-4 text-left font-bold">Недели</th>
                      <th className="p-4 text-left font-bold">Темы</th>
                      <th className="p-4 text-left font-bold">Что научится делать ребёнок</th>
                    </tr>
                  </thead>
                  <tbody>
                    {courseContent.map((item, index) => (
                      <tr key={index} className={index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                        <td className="p-4">
                          <div className="bg-gradient-to-r from-purple-500 to-blue-500 text-white px-3 py-2 rounded-lg flex items-center justify-center font-bold text-sm min-w-[60px]">
                            {item.weeks}
                          </div>
                        </td>
                        <td className="p-4 font-semibold text-gray-800">{item.topic}</td>
                        <td className="p-4 text-gray-600 text-sm">{item.result}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>
          
          <div className="text-center text-sm text-gray-500 mt-4">
            *2 урока (55 мин) + увлекательные задания для закрепления каждую неделю
          </div>
        </div>
      </div>
    </section>
  );
};
