import React from 'react';
import { Card, CardContent } from '@/components/ui/card';

export const ProgramTimeline = () => {
  const weeks = [
    {
      week: 1,
      title: "School & Classroom",
      grammar: "Ребёнок сможет назвать школьные предметы, попросить нужную вещь на уроке (ручку, карандаш) и описать, что находится в классе."
    },
    {
      week: 2,
      title: "Daily Routines & Time",
      grammar: "Научится рассказывать о своём распорядке дня (когда встаёт, завтракает, идёт в школу) и называть время простых действий."
    },
    {
      week: 3,
      title: "Seasons & Weather",
      grammar: "Сможет описать погоду за окном, назвать любимое время года и сказать, во что он одет или что нужно надеть."
    },
    {
      week: 4,
      title: "Food & Healthy Habits",
      grammar: "Ребёнок расскажет о своих любимых и нелюбимых продуктах, сможет попросить еду или напиток и поговорить о здоровом питании."
    },
    {
      week: 5,
      title: "Wild & Farm Animals",
      grammar: "Научится называть разных животных, описывать, что они умеют делать (прыгать, бегать), и сравнивать их по размеру или скорости."
    },
    {
      week: 6,
      title: "My House & Furniture",
      grammar: "Сможет описать свой дом или комнату, рассказать, какая там есть мебель и где находятся разные предметы."
    },
    {
      week: 7,
      title: "Hobbies & Sports",
      grammar: "Ребёнок расскажет о своих увлечениях и любимых видах спорта, сможет задать вопросы о хобби друга и сказать, как часто он чем-то занимается."
    },
    {
      week: 8,
      title: "Holidays & Traditions",
      grammar: "Поговорит о прошедших праздниках, поделится впечатлениями и расскажет о планах на будущие каникулы или выходные."
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
                      <th className="p-4 text-left font-bold">Неделя</th>
                      <th className="p-4 text-left font-bold">Темы</th>
                      <th className="p-4 text-left font-bold">Что научится делать ребёнок</th>
                    </tr>
                  </thead>
                  <tbody>
                    {weeks.map((week, index) => (
                      <tr key={index} className={index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                        <td className="p-4">
                          <div className="bg-gradient-to-r from-purple-500 to-blue-500 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm">
                            {week.week}
                          </div>
                        </td>
                        <td className="p-4 font-semibold text-gray-800">{week.title}</td>
                        <td className="p-4 text-gray-600 text-sm">{week.grammar}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>
          
          <div className="text-center text-sm text-gray-500 mt-4">
            *2 живых урока + домашнее задание каждую неделю
          </div>
        </div>
      </div>
    </section>
  );
};
