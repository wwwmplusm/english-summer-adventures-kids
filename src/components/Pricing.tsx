import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Check } from 'lucide-react';
import { trackEvent } from "@/lib/analytics";

export const Pricing = () => {
  const handleDiagnostic = () => {
    // Плавный скролл к форме заявки
    document.getElementById('diagnostic')?.scrollIntoView({ behavior: 'smooth' });
    
    // Analytics
    trackEvent.ym(88888888, 'Scroll_To_Form_Pricing');
    trackEvent.vk('scroll_to_form_pricing');
  };

  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-gray-50 to-blue-50 overflow-x-hidden" id="pricing">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8 sm:mb-12 lg:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 text-gray-800">
            Тарифы
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-gray-600">
            Выберите удобный способ оплаты
          </p>
        </div>

        <div className="max-w-5xl mx-auto w-full">
          <div className="grid md:grid-cols-2 gap-6 sm:gap-8 mb-6 sm:mb-8">
            
            {/* Тариф "Все включено" */}
            <Card className="border-0 shadow-2xl relative overflow-hidden w-full">
              <Badge className="absolute top-3 sm:top-4 right-3 sm:right-4 bg-green-500 text-white font-bold px-2 sm:px-3 py-1 text-xs sm:text-sm">
                ЛУЧШАЯ ЦЕНА
              </Badge>
              <CardHeader className="bg-gradient-to-r from-[#FF6B00] to-orange-500 text-white p-4 sm:p-6">
                <CardTitle className="text-xl sm:text-2xl font-bold">Все включено</CardTitle>
                <p className="text-white/90 text-sm sm:text-base">Полный курс (8 недель)</p>
              </CardHeader>
              <CardContent className="p-4 sm:p-6 lg:p-8">
                <div className="text-center mb-4 sm:mb-6">
                  <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#FF6B00] mb-2">23 990 ₽</div>
                  <div className="text-gray-600 text-sm sm:text-base">Всего 1 500 ₽ за урок</div>
                </div>
                
                <div className="space-y-2 sm:space-y-3 mb-6 sm:mb-8">
                  <div className="flex items-center gap-2 sm:gap-3">
                    <Check className="w-4 h-4 sm:w-5 sm:h-5 text-green-500 flex-shrink-0" />
                    <span className="text-gray-700 text-sm sm:text-base">Экономия 8 000 ₽</span>
                  </div>
                  <div className="flex items-center gap-2 sm:gap-3">
                    <Check className="w-4 h-4 sm:w-5 sm:h-5 text-green-500 flex-shrink-0" />
                    <span className="text-gray-700 text-sm sm:text-base">Гарантия полного погружения</span>
                  </div>
                  <div className="flex items-center gap-2 sm:gap-3">
                    <Check className="w-4 h-4 sm:w-5 sm:h-5 text-green-500 flex-shrink-0" />
                    <span className="text-gray-700 text-sm sm:text-base">Единый платеж на всё лето</span>
                  </div>
                  <div className="flex items-center gap-2 sm:gap-3">
                    <Check className="w-4 h-4 sm:w-5 sm:h-5 text-green-500 flex-shrink-0" />
                    <span className="text-gray-700 text-sm sm:text-base">Возврат за неиспользованные уроки</span>
                  </div>
                </div>

                <div className="space-y-2 sm:space-y-3">
                  <Button 
                    onClick={handleDiagnostic}
                    className="btn-primary w-full bg-[#FF6B00] hover:bg-[#FF6B00]/90 text-white py-2.5 sm:py-3 rounded-lg font-semibold text-sm sm:text-base lg:text-lg"
                  >
                    Выбрать этот тариф
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Тариф "Гибкий старт" */}
            <Card className="border-0 shadow-xl w-full">
              <CardHeader className="bg-gradient-to-r from-blue-500 to-purple-500 text-white p-4 sm:p-6">
                <CardTitle className="text-xl sm:text-2xl font-bold">Гибкий старт</CardTitle>
                <p className="text-white/90 text-sm sm:text-base">Предоплата по неделям</p>
              </CardHeader>
              <CardContent className="p-4 sm:p-6 lg:p-8">
                <div className="text-center mb-4 sm:mb-6">
                  <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-blue-600 mb-2">3 980 ₽</div>
                  <div className="text-gray-600 text-sm sm:text-base">в неделю (2 урока)</div>
                </div>
                
                <div className="space-y-2 sm:space-y-3 mb-6 sm:mb-8">
                  <div className="flex items-center gap-2 sm:gap-3">
                    <Check className="w-4 h-4 sm:w-5 sm:h-5 text-green-500 flex-shrink-0" />
                    <span className="text-gray-700 text-sm sm:text-base">Идеально для летних поездок</span>
                  </div>
                  <div className="flex items-center gap-2 sm:gap-3">
                    <Check className="w-4 h-4 sm:w-5 sm:h-5 text-green-500 flex-shrink-0" />
                    <span className="text-gray-700 text-sm sm:text-base">Управляйте расходами еженедельно</span>
                  </div>
                  <div className="flex items-center gap-2 sm:gap-3">
                    <Check className="w-4 h-4 sm:w-5 sm:h-5 text-green-500 flex-shrink-0" />
                    <span className="text-gray-700 text-sm sm:text-base">Начните с небольшой суммы</span>
                  </div>
                </div>

                <div className="space-y-2 sm:space-y-3">
                  <Button 
                    onClick={handleDiagnostic}
                    className="btn-primary w-full bg-blue-600 hover:bg-blue-700 text-white py-2.5 sm:py-3 rounded-lg font-semibold text-sm sm:text-base lg:text-lg"
                  >
                    Выбрать этот тариф
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
          
          <div className="text-center mt-8">
            <p className="text-lg text-gray-700 mb-4">Не уверены, что выбрать?</p>
            <Button 
              onClick={handleDiagnostic}
              variant="outline"
              className="btn-primary border-2 border-[#FF6B00] text-[#FF6B00] hover:bg-[#FF6B00] hover:text-white py-3 px-8 rounded-lg font-semibold text-base"
            >
              <span className="hidden sm:inline">Пройти бесплатную диагностику</span>
              <span className="sm:hidden">Бесплатная диагностика</span>
            </Button>
          </div>

        </div>
      </div>
    </section>
  );
};
