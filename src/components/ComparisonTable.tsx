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
            Почему интенсив — лучший выбор этим летом
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-gray-700 font-medium bg-blue-50 rounded-lg p-3 sm:p-4 max-w-2xl mx-auto">
            Курс подходит только детям освоившим 1 класс школьной программы
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Мобильная версия - показываем карточки друг под другом */}
          <div className="md:hidden space-y-6">
            {/* Наш интенсив */}
            <Card className="overflow-hidden shadow-xl border-2 border-[#FF6B00]">
              <CardHeader className="bg-gradient-to-r from-[#FF6B00] to-orange-500 text-white text-center relative">
                <div className="font-bold text-xl">🧡 НАШ ИНТЕНСИВ</div>
                <Badge className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 bg-yellow-400 text-black text-xs font-bold px-3 py-1 z-10">
                  Лучший выбор
                </Badge>
              </CardHeader>
              <CardContent className="p-4 pt-8 space-y-4">
                <div className="bg-orange-50 rounded-lg p-3 text-center">
                  <div className="text-sm font-medium text-gray-600 mb-1">Цена за урок</div>
                  <div className="font-bold text-[#FF6B00] text-xl">от 1 250 ₽*</div>
                </div>
                
                <div className="bg-orange-50 rounded-lg p-3">
                  <div className="text-sm font-medium text-gray-600 mb-2">Эффект вовлечения</div>
                  <div className="text-sm font-medium">Играем, шутим, двигаемся, используем технологии</div>
                </div>

                <div className="bg-orange-50 rounded-lg p-3">
                  <div className="text-sm font-medium text-gray-600 mb-2">Формат общения</div>
                  <div className="text-sm font-medium">Мини-группа из 4 детей: общение и взаимодействие</div>
                </div>

                <div className="bg-orange-50 rounded-lg p-3">
                  <div className="text-sm font-medium text-gray-600 mb-2">Социализация</div>
                  <div className="text-sm font-medium">Ребёнок учится в команде, заводит друзей</div>
                </div>

                <div className="bg-orange-50 rounded-lg p-3">
                  <div className="text-sm font-medium text-gray-600 mb-2">Всестороннее развитие</div>
                  <div className="text-sm font-medium">Говорение, аудирование, чтение, лексика — через практику</div>
                </div>

                <div className="bg-orange-50 rounded-lg p-3">
                  <div className="text-sm font-medium text-gray-600 mb-2">Интерактив</div>
                  <div className="text-sm font-medium">Игры, песни, викторины и мини-проекты на каждом уроке</div>
                </div>
              </CardContent>
            </Card>

            {/* Обычный репетитор */}
            <Card className="overflow-hidden shadow-lg border border-gray-200">
              <CardHeader className="bg-gray-100 text-center">
                <div className="font-semibold text-lg text-gray-600">🙄 Обычный репетитор</div>
              </CardHeader>
              <CardContent className="p-4 space-y-4">
                <div className="bg-gray-50 rounded-lg p-3 text-center">
                  <div className="text-sm font-medium text-gray-600 mb-1">Цена за урок</div>
                  <div className="text-gray-600 text-lg font-semibold">2 500 ₽</div>
                </div>
                
                <div className="bg-gray-50 rounded-lg p-3">
                  <div className="text-sm font-medium text-gray-600 mb-2">Эффект вовлечения</div>
                  <div className="text-gray-600 text-sm">Объяснения и задания</div>
                </div>

                <div className="bg-gray-50 rounded-lg p-3">
                  <div className="text-sm font-medium text-gray-600 mb-2">Формат общения</div>
                  <div className="text-gray-600 text-sm">Один на один — меньше естественной речи</div>
                </div>

                <div className="bg-gray-50 rounded-lg p-3">
                  <div className="text-sm font-medium text-gray-600 mb-2">Социализация</div>
                  <div className="text-gray-600 text-sm">Общается только со взрослым</div>
                </div>

                <div className="bg-gray-50 rounded-lg p-3">
                  <div className="text-sm font-medium text-gray-600 mb-2">Всестороннее развитие</div>
                  <div className="text-gray-600 text-sm">Упор на грамматику и тесты</div>
                </div>

                <div className="bg-gray-50 rounded-lg p-3">
                  <div className="text-sm font-medium text-gray-600 mb-2">Интерактив</div>
                  <div className="text-gray-600 text-sm">Часто сухие упражнения и тесты</div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Десктопная версия - таблица */}
          <Card className="overflow-hidden shadow-2xl border-0 hidden md:block">
            <CardHeader className="bg-gradient-to-r from-[#FF6B00] to-orange-500 text-white p-0">
              <div className="grid grid-cols-3 gap-4 text-center p-6 relative">
                <div className="font-semibold text-lg">Критерий</div>
                <div className="relative">
                  <div className="font-bold text-xl">🧡 НАШ ИНТЕНСИВ</div>
                  <Badge className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 bg-yellow-400 text-black text-xs font-bold px-3 py-1">
                    Лучший выбор
                  </Badge>
                </div>
                <div className="font-semibold text-lg">🙄 Обычный репетитор</div>
              </div>
            </CardHeader>
            <CardContent className="p-0 mt-8">
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

              <div className="grid grid-cols-3 gap-4 p-4 text-center items-center border-b">
                <div className="font-medium text-left">Всестороннее развитие в английском</div>
                <div className="bg-orange-50 rounded-lg p-3">
                  <div className="text-sm font-medium">Говорение, аудирование, чтение, лексика — через практику</div>
                </div>
                <div className="text-gray-600 text-sm">Упор на грамматику и тесты</div>
              </div>

              <div className="grid grid-cols-3 gap-4 p-4 text-center items-center">
                <div className="font-medium text-left">Интерактив</div>
                <div className="bg-orange-50 rounded-lg p-3">
                  <div className="text-sm font-medium">Игры, песни, викторины и мини-проекты на каждом уроке</div>
                </div>
                <div className="text-gray-600 text-sm">Часто сухие упражнения и тесты</div>
              </div>
            </CardContent>
          </Card>
          
          <div className="text-center text-xs sm:text-sm text-gray-500 mt-4">
            *Цена 1 250 ₽ только при оплате всего курса целиком. При помесячной оплате — 1 500 ₽.
          </div>
        </div>
      </div>
    </section>
  );
};
