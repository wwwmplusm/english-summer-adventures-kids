import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Check } from 'lucide-react';
import { trackEvent } from "@/lib/analytics";

export const Pricing = () => {
  const handlePayment = (plan: string) => {
    const utmParams = new URLSearchParams(window.location.search).toString();
    window.open(`/payment?plan=${plan}${utmParams ? `&${utmParams}` : ''}`, '_blank');
    
    // Analytics
    trackEvent.ym(88888888, 'Purchase', { plan });
    trackEvent.vk('payment_click');
  };

  const handleDiagnostic = () => {
    // Плавный скролл к форме заявки
    document.getElementById('diagnostic')?.scrollIntoView({ behavior: 'smooth' });
    
    // Analytics
    trackEvent.ym(88888888, 'Scroll_To_Form_Pricing');
    trackEvent.vk('scroll_to_form_pricing');
  };

  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-gray-50 to-blue-50" id="pricing">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8 sm:mb-12 lg:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 text-gray-800">
            Тарифы
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-gray-600">
            Выберите удобный способ оплаты
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-6 sm:gap-8 mb-6 sm:mb-8">
            {/* Весь курс */}
            <Card className="border-0 shadow-2xl relative overflow-hidden">
              <Badge className="absolute top-3 sm:top-4 right-3 sm:right-4 bg-green-500 text-white font-bold px-2 sm:px-3 py-1 text-xs sm:text-sm">
                ЭКОНОМИЯ 8 000 ₽
              </Badge>
              <CardHeader className="bg-gradient-to-r from-[#FF6B00] to-orange-500 text-white p-4 sm:p-6">
                <CardTitle className="text-xl sm:text-2xl font-bold">Весь курс</CardTitle>
                <p className="text-white/90 text-sm sm:text-base">16 уроков (8 недель × 2)</p>
                <p className="text-xs sm:text-sm text-white/80">скидка 25%</p>
              </CardHeader>
              <CardContent className="p-4 sm:p-6 lg:p-8">
                <div className="text-center mb-4 sm:mb-6">
                  <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#FF6B00] mb-2">23 990 ₽</div>
                  <div className="text-gray-600 text-sm sm:text-base">1 490 ₽ за урок*</div>
                </div>
                
                <div className="space-y-2 sm:space-y-3 mb-6 sm:mb-8">
                  <div className="flex items-center gap-2 sm:gap-3">
                    <Check className="w-4 h-4 sm:w-5 sm:h-5 text-green-500 flex-shrink-0" />
                    <span className="text-gray-700 text-sm sm:text-base">Максимальная экономия</span>
                  </div>
                  <div className="flex items-center gap-2 sm:gap-3">
                    <Check className="w-4 h-4 sm:w-5 sm:h-5 text-green-500 flex-shrink-0" />
                    <span className="text-gray-700 text-sm sm:text-base">Гарантия результата</span>
                  </div>
                  <div className="flex items-center gap-2 sm:gap-3">
                    <Check className="w-4 h-4 sm:w-5 sm:h-5 text-green-500 flex-shrink-0" />
                    <span className="text-gray-700 text-sm sm:text-base">Сертификат об окончании</span>
                  </div>
                  <div className="flex items-center gap-2 sm:gap-3">
                    <Check className="w-4 h-4 sm:w-5 sm:h-5 text-green-500 flex-shrink-0" />
                    <span className="text-gray-700 text-sm sm:text-base">Возврат за неиспользованные уроки</span>
                  </div>
                </div>

                <div className="space-y-2 sm:space-y-3">
                  <Button 
                    onClick={() => handlePayment('full')}
                    className="btn-primary w-full bg-[#FF6B00] hover:bg-[#FF6B00]/90 text-white py-2.5 sm:py-3 rounded-lg font-semibold text-sm sm:text-base lg:text-lg"
                  >
                    Оплатить курс (23 990 ₽)
                  </Button>
                  
                  <Button 
                    onClick={handleDiagnostic}
                    variant="outline"
                    className="btn-primary w-full border-[#FF6B00] text-[#FF6B00] hover:bg-[#FF6B00] hover:text-white py-2.5 sm:py-3 rounded-lg font-semibold text-sm sm:text-base"
                  >
                    Получить бесплатный урок и персональный план
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* По неделям */}
            <Card className="border-0 shadow-xl">
              <CardHeader className="bg-gradient-to-r from-blue-500 to-purple-500 text-white p-4 sm:p-6">
                <CardTitle className="text-xl sm:text-2xl font-bold">По неделям</CardTitle>
                <p className="text-white/90 text-sm sm:text-base">2 урока</p>
                <p className="text-xs sm:text-sm text-white/80">гибко, оплачиваете каждую неделю</p>
              </CardHeader>
              <CardContent className="p-4 sm:p-6 lg:p-8">
                <div className="text-center mb-4 sm:mb-6">
                  <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-blue-600 mb-2">3 990 ₽</div>
                  <div className="text-gray-600 text-sm sm:text-base">1 995 ₽ за урок</div>
                </div>
                
                <div className="space-y-2 sm:space-y-3 mb-6 sm:mb-8">
                  <div className="flex items-center gap-2 sm:gap-3">
                    <Check className="w-4 h-4 sm:w-5 sm:h-5 text-green-500 flex-shrink-0" />
                    <span className="text-gray-700 text-sm sm:text-base">Гибкость оплаты</span>
                  </div>
                  <div className="flex items-center gap-2 sm:gap-3">
                    <Check className="w-4 h-4 sm:w-5 sm:h-5 text-green-500 flex-shrink-0" />
                    <span className="text-gray-700 text-sm sm:text-base">Можно приостановить в любой момент</span>
                  </div>
                  <div className="flex items-center gap-2 sm:gap-3">
                    <Check className="w-4 h-4 sm:w-5 sm:h-5 text-green-500 flex-shrink-0" />
                    <span className="text-gray-700 text-sm sm:text-base">Платите только за посещения</span>
                  </div>
                </div>

                <Button 
                  onClick={() => handlePayment('weekly')}
                  className="btn-primary w-full bg-blue-600 hover:bg-blue-700 text-white py-2.5 sm:py-3 rounded-lg font-semibold text-sm sm:text-base lg:text-lg mb-2 sm:mb-3"
                >
                  Оплатить неделю (3 990 ₽)
                </Button>

                <Button 
                  onClick={handleDiagnostic}
                  className="btn-primary w-full bg-[#FF6B00] hover:bg-[#FF6B00]/90 text-white py-2.5 sm:py-3 rounded-lg font-semibold text-sm sm:text-base lg:text-lg"
                >
                  Получить бесплатный урок и персональный план
                </Button>
              </CardContent>
            </Card>
          </div>

          <div className="bg-gradient-to-r from-green-100 to-blue-100 rounded-2xl p-4 sm:p-6 text-center mb-3 sm:mb-4">
            <Badge className="bg-green-500 text-white text-sm sm:text-base lg:text-lg font-bold px-3 sm:px-4 py-1 sm:py-2 mb-3 sm:mb-4">
              ЛУЧШИЙ ВЫБОР
            </Badge>
            <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-800 mb-2">
              Весь курс = экономия 8 000 ₽
            </h3>
            <p className="text-gray-700 text-sm sm:text-base lg:text-lg">
              При оплате всего курса вы экономите 25% и получаете максимальный результат для вашего ребёнка
            </p>
          </div>

          <div className="text-center text-xs sm:text-sm text-gray-500 mb-3 sm:mb-4">
            *Цена 1 490 ₽ действует только при оплате всего курса целиком
          </div>

          <div className="text-center text-xs sm:text-sm text-gray-600">
            При оплате по неделям действует предоплата: сумма вносится за предстоящую неделю вперёд.
          </div>
        </div>
      </div>
    </section>
  );
};
