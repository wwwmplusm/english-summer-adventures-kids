
import React from 'react';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Check, X } from 'lucide-react';

export const ComparisonTable = () => {
  return (
    <section className="py-20 bg-white" id="comparison">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-800">
            Почему интенсив — лучший выбор этим летом
          </h2>
          <p className="text-lg text-gray-700 font-medium bg-blue-50 rounded-lg p-4 max-w-2xl mx-auto">
            Курс подходит только детям освоившим 1 класс школьной программы
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Card className="overflow-hidden shadow-2xl border-0">
            <CardHeader className="bg-gradient-to-r from-[#FF6B00] to-orange-500 text-white p-0">
              <div className="grid grid-cols-3 gap-4 text-center p-6">
                <div className="font-semibold text-lg">Критерий</div>
                <div className="relative">
                  <Badge className="absolute -top-2 left-1/2 transform -translate-x-1/2 bg-yellow-400 text-black text-xs font-bold">
                    🧡 НАШ ИНТЕНСИВ
                  </Badge>
                  <div className="font-bold text-xl mt-4">Лучший выбор</div>
                </div>
                <div className="font-semibold text-lg">🙄 Обычный репетитор</div>
              </div>
            </CardHeader>
            <CardContent className="p-0">
              <div className="grid grid-cols-3 gap-4 p-4 text-center items-center border-b">
                <div className="font-medium text-left">Цена за урок</div>
                <div className="bg-orange-50 rounded-lg p-3">
                  <span className="font-bold text-[#FF6B00] text-xl">от 1 250 ₽*</span>
                </div>
                <div className="text-gray-600">2 500 ₽</div>
              </div>
              
              <div className="grid grid-cols-3 gap-4 p-4 text-center items-center bg-gray-50 border-b">
                <div className="font-medium text-left">Эффект вовлечения</div>
                <div className="bg-orange-50 rounded-lg p-3">
                  <div className="text-sm font-medium">Играем, шутим, двигаемся, используем технологии</div>
                </div>
                <div className="text-gray-600 text-sm">Объяснения и задания</div>
              </div>

              <div className="grid grid-cols-3 gap-4 p-4 text-center items-center border-b">
                <div className="font-medium text-left">Формат общения</div>
                <div className="bg-orange-50 rounded-lg p-3">
                  <div className="text-sm font-medium">Мини-группа из 4 детей: общение и взаимодействие</div>
                </div>
                <div className="text-gray-600 text-sm">Один на один — меньше естественной речи</div>
              </div>

              <div className="grid grid-cols-3 gap-4 p-4 text-center items-center bg-gray-50 border-b">
                <div className="font-medium text-left">Социализация</div>
                <div className="bg-orange-50 rounded-lg p-3">
                  <div className="text-sm font-medium">Ребёнок учится в команде, заводит друзей</div>
                </div>
                <div className="text-gray-600 text-sm">Общается только со взрослым</div>
              </div>

              <div className="grid grid-cols-3 gap-4 p-4 text-center items-center">
                <div className="font-medium text-left">Всестороннее развитие в английском</div>
                <div className="bg-orange-50 rounded-lg p-3">
                  <div className="text-sm font-medium">Говорение, аудирование, чтение, лексика — через практику</div>
                </div>
                <div className="text-gray-600 text-sm">Упор на грамматику и тесты</div>
              </div>
            </CardContent>
          </Card>
          
          <div className="text-center text-sm text-gray-500 mt-4">
            *Цена 1 250 ₽ только при оплате всего курса целиком. При помесячной оплате — 1 500 ₽.
          </div>
        </div>
      </div>
    </section>
  );
};
