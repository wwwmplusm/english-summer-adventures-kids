
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Check, X } from 'lucide-react';

export const ComparisonTable = () => {
  const features = [
    {
      feature: 'Цена за 24 урока',
      intensive: '29 990 ₽',
      online: '36 000 ₽',
      tutor: '36 000 ₽',
      intensiveHighlight: true
    },
    {
      feature: 'Геймификация',
      intensive: true,
      online: false,
      tutor: false
    },
    {
      feature: 'Командная динамика',
      intensive: true,
      online: false,
      tutor: false
    },
    {
      feature: 'Гибкая оплата',
      intensive: true,
      online: false,
      tutor: true
    },
    {
      feature: 'Сертификат',
      intensive: true,
      online: true,
      tutor: false
    },
    {
      feature: 'Индивидуальный подход',
      intensive: true,
      online: false,
      tutor: true
    }
  ];

  const renderCell = (value: any, highlight = false) => {
    if (typeof value === 'boolean') {
      return value ? (
        <Check className="w-6 h-6 text-green-500 mx-auto" />
      ) : (
        <X className="w-6 h-6 text-red-400 mx-auto" />
      );
    }
    
    return (
      <span className={`font-semibold ${highlight ? 'text-[#FF6B00] text-lg' : ''}`}>
        {value}
      </span>
    );
  };

  return (
    <section className="py-20 bg-gray-50" id="comparison">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-800">
            Сравнение форматов обучения
          </h2>
          <p className="text-xl text-gray-600">
            Почему родители выбирают наш интенсив
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          <Card className="overflow-hidden shadow-2xl">
            <CardHeader className="bg-gradient-to-r from-[#FF6B00] to-orange-500 text-white">
              <div className="grid grid-cols-4 gap-4 text-center">
                <div className="font-semibold">Характеристика</div>
                <div className="relative">
                  <Badge className="absolute -top-2 left-1/2 transform -translate-x-1/2 bg-yellow-400 text-black text-xs">
                    Best Value
                  </Badge>
                  <div className="font-bold mt-4">Наш интенсив</div>
                  <div className="text-sm opacity-90">экономия 17%</div>
                </div>
                <div className="font-semibold">Онлайн-школы</div>
                <div className="font-semibold">Репетиторы</div>
              </div>
            </CardHeader>
            <CardContent className="p-0">
              {features.map((row, index) => (
                <div 
                  key={index} 
                  className={`grid grid-cols-4 gap-4 p-4 text-center items-center ${
                    index % 2 === 0 ? 'bg-white' : 'bg-gray-50'
                  }`}
                >
                  <div className="font-medium text-left">{row.feature}</div>
                  <div className="bg-orange-50 rounded-lg p-3">
                    {renderCell(row.intensive, row.intensiveHighlight)}
                  </div>
                  <div>{renderCell(row.online)}</div>
                  <div>{renderCell(row.tutor)}</div>
                </div>
              ))}
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};
