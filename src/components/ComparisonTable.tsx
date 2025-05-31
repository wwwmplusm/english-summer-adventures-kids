
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
            Почему это лучший летний вариант
          </h2>
          <p className="text-xl text-[#FF6B00] font-semibold mb-8">
            Интенсив = каникулы с пользой, а не скучные репетиторы
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Card className="overflow-hidden shadow-2xl border-0">
            <CardHeader className="bg-gradient-to-r from-[#FF6B00] to-orange-500 text-white p-0">
              <div className="grid grid-cols-3 gap-4 text-center p-6">
                <div className="font-semibold text-lg">Характеристика</div>
                <div className="relative">
                  <Badge className="absolute -top-2 left-1/2 transform -translate-x-1/2 bg-yellow-400 text-black text-xs font-bold">
                    ЛУЧШИЙ ВЫБОР
                  </Badge>
                  <div className="font-bold text-xl mt-4">Наш интенсив</div>
                  <div className="text-sm opacity-90">экономия 25%</div>
                </div>
                <div className="font-semibold text-lg">Репетитор</div>
              </div>
            </CardHeader>
            <CardContent className="p-0">
              <div className="grid grid-cols-3 gap-4 p-4 text-center items-center border-b">
                <div className="font-medium text-left">Цена за урок</div>
                <div className="bg-orange-50 rounded-lg p-3">
                  <span className="font-bold text-[#FF6B00] text-xl">1 500 ₽</span>
                </div>
                <div className="text-gray-600">2 000 ₽</div>
              </div>
              
              <div className="grid grid-cols-3 gap-4 p-4 text-center items-center bg-gray-50 border-b">
                <div className="font-medium text-left">Летняя атмосфера</div>
                <div className="bg-orange-50 rounded-lg p-3">
                  <span className="text-2xl">☀️</span>
                  <div className="text-sm font-medium">игры и песни</div>
                </div>
                <div className="text-gray-600">
                  <X className="w-6 h-6 text-red-400 mx-auto mb-1" />
                  <div className="text-sm">фронтальное объяснение</div>
                </div>
              </div>

              <div className="grid grid-cols-3 gap-4 p-4 text-center items-center border-b">
                <div className="font-medium text-left">Группа = мини-команда</div>
                <div className="bg-orange-50 rounded-lg p-3">
                  <Check className="w-6 h-6 text-green-500 mx-auto mb-1" />
                  <div className="text-sm font-medium">4 ребёнка</div>
                </div>
                <div className="text-gray-600">1 × 1</div>
              </div>

              <div className="grid grid-cols-3 gap-4 p-4 text-center items-center bg-gray-50 border-b">
                <div className="font-medium text-left">Записи занятий</div>
                <div className="bg-orange-50 rounded-lg p-3">
                  <X className="w-6 h-6 text-red-400 mx-auto mb-1" />
                  <div className="text-sm font-medium">нет — живое общение</div>
                </div>
                <div className="text-gray-600">Возможно</div>
              </div>

              <div className="grid grid-cols-3 gap-4 p-4 text-center items-center">
                <div className="font-medium text-left">Скидки на курс</div>
                <div className="bg-orange-50 rounded-lg p-3">
                  <Check className="w-6 h-6 text-green-500 mx-auto mb-1" />
                  <div className="text-sm font-medium">есть (17%)</div>
                </div>
                <div className="text-gray-600">
                  <X className="w-6 h-6 text-red-400 mx-auto mb-1" />
                  <div className="text-sm">нет</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};
