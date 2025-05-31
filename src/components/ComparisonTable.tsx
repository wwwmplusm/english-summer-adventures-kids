
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Check, X, Monitor, Wifi, Headphones, Users, Clock, Globe } from 'lucide-react';

export const ComparisonTable = () => {
  const comparisonData = [
    {
      feature: "Размер группы",
      onlineSchools: "15-20 детей",
      tutors: "1 ребенок",
      ourIntensive: "До 4 детей"
    },
    {
      feature: "Цена за занятие",
      onlineSchools: "От 800₽",
      tutors: "От 1500₽",
      ourIntensive: "От 600₽"
    },
    {
      feature: "Индивидуальный подход",
      onlineSchools: "Ограничен",
      tutors: "Максимальный",
      ourIntensive: "Высокий"
    },
    {
      feature: "Групповое общение",
      onlineSchools: "Есть",
      tutors: "Отсутствует",
      ourIntensive: "Есть"
    },
    {
      feature: "Игровой формат",
      onlineSchools: "Ограничен",
      tutors: "Зависит от репетитора",
      ourIntensive: "Основа программы"
    },
    {
      feature: "Запись уроков",
      onlineSchools: "Не всегда",
      tutors: "Редко",
      ourIntensive: "Все занятия"
    },
    {
      feature: "Техподдержка",
      onlineSchools: "Базовая",
      tutors: "Отсутствует",
      ourIntensive: "Полная"
    }
  ];

  const courseFormat = [
    {
      icon: Users,
      title: "Формат занятий",
      description: "Групповые онлайн-уроки до 4 человек"
    },
    {
      icon: Clock,
      title: "Длительность",
      description: "55 минут - оптимально для детей 7-11 лет"
    },
    {
      icon: Globe,
      title: "Платформа",
      description: "Zoom - простая и надежная"
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
      description: "Поможем настроить все необходимое"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-green-50 to-blue-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">
            Почему выбирают нас?
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Сравните наш интенсив с другими вариантами обучения
          </p>
        </div>

        <Card className="mb-16 border-0 shadow-xl animate-fade-in">
          <CardContent className="p-8">
            <div className="overflow-x-auto">
              <Table>
                <TableHeader>
                  <TableRow className="border-b-2">
                    <TableHead className="font-bold text-gray-800 text-lg">Характеристики</TableHead>
                    <TableHead className="font-bold text-gray-600 text-center">Другие онлайн школы</TableHead>
                    <TableHead className="font-bold text-gray-600 text-center">Репетиторы</TableHead>
                    <TableHead className="font-bold bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent text-center text-lg">
                      Наш интенсив
                    </TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {comparisonData.map((row, index) => (
                    <TableRow key={index} className="hover:bg-gray-50">
                      <TableCell className="font-semibold text-gray-800">{row.feature}</TableCell>
                      <TableCell className="text-center text-gray-600">{row.onlineSchools}</TableCell>
                      <TableCell className="text-center text-gray-600">{row.tutors}</TableCell>
                      <TableCell className="text-center font-bold text-green-600 bg-green-50 rounded">
                        {row.ourIntensive}
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          </CardContent>
        </Card>

        <div className="grid lg:grid-cols-2 gap-12">
          <Card className="border-0 shadow-xl animate-fade-in" style={{animationDelay: '0.2s'}}>
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold mb-8 text-center bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">
                Формат курса
              </h3>
              <div className="space-y-6">
                {courseFormat.map((item, index) => {
                  const Icon = item.icon;
                  return (
                    <div key={index} className="flex items-center gap-4">
                      <div className="bg-gradient-to-r from-green-500 to-blue-500 w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0">
                        <Icon className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h4 className="font-bold text-gray-800 mb-1">{item.title}</h4>
                        <p className="text-gray-600">{item.description}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-xl animate-fade-in" style={{animationDelay: '0.4s'}}>
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold mb-8 text-center bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">
                Технические требования
              </h3>
              <div className="space-y-6">
                {techRequirements.map((req, index) => {
                  const Icon = req.icon;
                  return (
                    <div key={index} className="flex items-center gap-4">
                      <div className="bg-gradient-to-r from-green-500 to-blue-500 w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0">
                        <Icon className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h4 className="font-bold text-gray-800 mb-1">{req.title}</h4>
                        <p className="text-gray-600">{req.description}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
              <div className="mt-8 p-4 bg-blue-50 rounded-lg text-center">
                <p className="text-lg font-semibold text-gray-800 mb-2">Мы используем Zoom</p>
                <p className="text-gray-600">Простая и надежная платформа, знакомая большинству родителей</p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};
