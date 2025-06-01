
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';

export const ProgramTimeline = () => {
  const weeks = [
    {
      week: 1,
      title: "School & Classroom",
      grammar: "have got, this/that, мн. число -s"
    },
    {
      week: 2,
      title: "Daily Routines & Time",
      grammar: "Present Simple (I/He), at/on"
    },
    {
      week: 3,
      title: "Seasons & Weather",
      grammar: "What's the weather like?, wear vs wearing"
    },
    {
      week: 4,
      title: "Food & Healthy Habits",
      grammar: "like/don't like, some/any"
    },
    {
      week: 5,
      title: "Wild & Farm Animals",
      grammar: "can/can't, сравн. прилагательные"
    },
    {
      week: 6,
      title: "My House & Furniture",
      grammar: "there is/are, in/on/under, a/an→the"
    },
    {
      week: 7,
      title: "Hobbies & Sports",
      grammar: "Present Simple ?/-, often/never"
    },
    {
      week: 8,
      title: "Holidays & Traditions",
      grammar: "was/were (intro), going to"
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
                      <th className="p-4 text-left font-bold">Грамматика / фонетика</th>
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
