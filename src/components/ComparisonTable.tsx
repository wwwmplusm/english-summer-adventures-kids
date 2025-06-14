import React from 'react';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Check, X } from 'lucide-react';

export const ComparisonTable = () => {
  return (
    <section className="py-12 sm:py-20 bg-white" id="comparison">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 text-gray-800 leading-tight">
            Почему наш курс — лучший выбор этим летом
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-gray-700 font-medium bg-blue-50 rounded-lg p-3 sm:p-4 max-w-2xl mx-auto">
            Наш курс идеально подходит для детей 8-11 лет. Уровень знаний мы определим на бесплатном пробном уроке и подберем подходящую группу
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Единая таблица с улучшенной адаптивностью */}
          <div className="w-full overflow-x-auto">
            <Card className="overflow-hidden shadow-2xl border-0 w-full">
              <CardHeader className="bg-gradient-to-r from-[#FF6B00] to-orange-500 text-white p-0">
                <div className="grid grid-cols-3 gap-2 sm:gap-4 text-center p-3 sm:p-4 md:p-6">
                  <div className="font-semibold text-xs sm:text-sm md:text-lg">Критерий</div>
                  <div className="flex flex-col items-center">
                    <div className="font-bold text-sm sm:text-lg md:text-xl mb-2">🧡 НАШ ЛЕТНИЙ КУРС</div>
                    <Badge className="bg-yellow-400 text-black text-xs font-bold px-2 sm:px-3 py-1">
                      Лучший выбор
                    </Badge>
                  </div>
                  <div className="font-semibold text-xs sm:text-sm md:text-lg">😴 Скучные уроки по учебнику</div>
                </div>
              </CardHeader>
              <CardContent className="p-0 mt-4 sm:mt-6 md:mt-8">
                <div className="grid grid-cols-3 gap-1 sm:gap-2 md:gap-4 p-2 sm:p-3 md:p-4 text-center items-center border-b">
                  <div className="font-medium text-left text-xs sm:text-sm md:text-base">Цена за урок</div>
                  <div className="bg-orange-50 rounded-lg p-1 sm:p-2 md:p-3">
                    <span className="font-bold text-[#FF6B00] text-sm sm:text-lg md:text-xl">от 1 250 ₽*</span>
                  </div>
                  <div className="text-gray-600 text-xs sm:text-sm md:text-base">2 500 ₽</div>
                </div>
                
                <div className="grid grid-cols-3 gap-1 sm:gap-2 md:gap-4 p-2 sm:p-3 md:p-4 text-center items-center bg-gray-50 border-b">
                  <div className="font-medium text-left text-xs sm:text-sm md:text-base">Эффект вовлечения</div>
                  <div className="bg-orange-50 rounded-lg p-1 sm:p-2 md:p-3">
                    <div className="text-xs sm:text-sm font-medium">Играем, шутим, двигаемся, используем технологии</div>
                  </div>
                  <div className="text-gray-600 text-xs sm:text-sm">Монотонное выполнение упражнений, зубрежка правил</div>
                </div>



                <div className="grid grid-cols-3 gap-1 sm:gap-2 md:gap-4 p-2 sm:p-3 md:p-4 text-center items-center bg-gray-50 border-b">
                  <div className="font-medium text-left text-xs sm:text-sm md:text-base">Социализация</div>
                  <div className="bg-orange-50 rounded-lg p-1 sm:p-2 md:p-3">
                    <div className="text-xs sm:text-sm font-medium">Ребёнок учится в команде, заводит друзей, соревнуется</div>
                  </div>
                  <div className="text-gray-600 text-xs sm:text-sm">Нет командной работы и здоровой конкуренции</div>
                </div>

                <div className="grid grid-cols-3 gap-1 sm:gap-2 md:gap-4 p-2 sm:p-3 md:p-4 text-center items-center border-b">
                  <div className="font-medium text-left text-xs sm:text-sm md:text-base">Всестороннее развитие в английском</div>
                  <div className="bg-orange-50 rounded-lg p-1 sm:p-2 md:p-3">
                    <div className="text-xs sm:text-sm font-medium">Говорение, аудирование, чтение, лексика — через практику</div>
                  </div>
                  <div className="text-gray-600 text-xs sm:text-sm">Упор на грамматику и тесты</div>
                </div>

                <div className="grid grid-cols-3 gap-1 sm:gap-2 md:gap-4 p-2 sm:p-3 md:p-4 text-center items-center">
                  <div className="font-medium text-left text-xs sm:text-sm md:text-base">Интерактив</div>
                  <div className="bg-orange-50 rounded-lg p-1 sm:p-2 md:p-3">
                    <div className="text-xs sm:text-sm font-medium">Игры, песни, викторины и мини-проекты на каждом уроке</div>
                  </div>
                  <div className="text-gray-600 text-xs sm:text-sm">В основном работа с текстом и тестами</div>
                </div>
              </CardContent>
            </Card>
          </div>
          
          <div className="text-center text-xs sm:text-sm text-gray-500 mt-4">
            *Цена 1 250 ₽ только при оплате всего курса целиком. При помесячной оплате — 1 500 ₽.
          </div>
        </div>
      </div>
    </section>
  );
};
