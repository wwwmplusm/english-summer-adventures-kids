
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Check } from 'lucide-react';

export const Pricing = () => {
  const handlePayment = (plan: string) => {
    const utmParams = new URLSearchParams(window.location.search).toString();
    window.open(`/payment?plan=${plan}${utmParams ? `&${utmParams}` : ''}`, '_blank');
    
    // Analytics
    if (typeof window !== 'undefined') {
      (window as any).ym?.(88888888, 'reachGoal', 'Purchase');
      (window as any).VK?.Retargeting?.Event('payment_click');
    }
  };

  const handleDiagnostic = () => {
    const utmParams = new URLSearchParams(window.location.search).toString();
    const waMessage = `Хочу на диагностику!${utmParams ? `?${utmParams}` : ''}`;
    window.open(`https://wa.me/79XXXXXXXXX?text=${encodeURIComponent(waMessage)}`, '_blank');
    
    // Analytics
    if (typeof window !== 'undefined') {
      (window as any).ym?.(88888888, 'reachGoal', 'Lead_Diagnosis');
      (window as any).VK?.Retargeting?.Event('diagnosis_click');
    }
  };

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50" id="pricing">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-800">
            Тарифы
          </h2>
          <p className="text-xl text-gray-600">
            Выберите удобный способ оплаты
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8 mb-8">
            {/* Весь курс */}
            <Card className="border-0 shadow-2xl relative overflow-hidden">
              <Badge className="absolute top-4 right-4 bg-green-500 text-white font-bold px-3 py-1">
                ЭКОНОМИЯ 8 000 ₽
              </Badge>
              <CardHeader className="bg-gradient-to-r from-[#FF6B00] to-orange-500 text-white">
                <CardTitle className="text-2xl font-bold">Весь курс</CardTitle>
                <p className="text-white/90">16 уроков (8 недель × 2)</p>
                <p className="text-sm text-white/80">скидка 25%</p>
              </CardHeader>
              <CardContent className="p-8">
                <div className="text-center mb-6">
                  <div className="text-4xl font-bold text-[#FF6B00] mb-2">23 990 ₽</div>
                  <div className="text-gray-600">1 490 ₽ за урок*</div>
                </div>
                
                <div className="space-y-3 mb-8">
                  <div className="flex items-center gap-3">
                    <Check className="w-5 h-5 text-green-500" />
                    <span className="text-gray-700">Максимальная экономия</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Check className="w-5 h-5 text-green-500" />
                    <span className="text-gray-700">Гарантия результата</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Check className="w-5 h-5 text-green-500" />
                    <span className="text-gray-700">Сертификат об окончании</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Check className="w-5 h-5 text-green-500" />
                    <span className="text-gray-700">Возврат за неиспользованные уроки</span>
                  </div>
                </div>

                <div className="space-y-3">
                  <Button 
                    onClick={() => handlePayment('full')}
                    className="btn-secondary w-full bg-[#FF6B00] hover:bg-[#FF6B00]/90 text-white py-3 rounded-lg font-semibold text-lg"
                  >
                    Оплатить курс
                  </Button>
                  <Button 
                    onClick={handleDiagnostic}
                    variant="outline"
                    className="btn-primary w-full border-[#FF6B00] text-[#FF6B00] hover:bg-[#FF6B00] hover:text-white py-3 rounded-lg font-semibold"
                  >
                    Получить бесплатный урок и персональный план
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* По неделям */}
            <Card className="border-0 shadow-xl">
              <CardHeader className="bg-gradient-to-r from-blue-500 to-purple-500 text-white">
                <CardTitle className="text-2xl font-bold">По неделям</CardTitle>
                <p className="text-white/90">2 урока</p>
                <p className="text-sm text-white/80">гибко, оплачиваете каждую неделю</p>
              </CardHeader>
              <CardContent className="p-8">
                <div className="text-center mb-6">
                  <div className="text-4xl font-bold text-blue-600 mb-2">3 990 ₽</div>
                  <div className="text-gray-600">1 995 ₽ за урок</div>
                </div>
                
                <div className="space-y-3 mb-8">
                  <div className="flex items-center gap-3">
                    <Check className="w-5 h-5 text-green-500" />
                    <span className="text-gray-700">Гибкость оплаты</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Check className="w-5 h-5 text-green-500" />
                    <span className="text-gray-700">Можно приостановить в любой момент</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Check className="w-5 h-5 text-green-500" />
                    <span className="text-gray-700">Платите только за посещения</span>
                  </div>
                </div>

                <Button 
                  onClick={handleDiagnostic}
                  className="btn-primary w-full bg-[#FF6B00] hover:bg-[#FF6B00]/90 text-white py-3 rounded-lg font-semibold text-lg"
                >
                  Получить бесплатный урок и персональный план
                </Button>
              </CardContent>
            </Card>
          </div>

          <div className="bg-gradient-to-r from-green-100 to-blue-100 rounded-2xl p-6 text-center mb-4">
            <Badge className="bg-green-500 text-white text-lg font-bold px-4 py-2 mb-4">
              ЛУЧШИЙ ВЫБОР
            </Badge>
            <h3 className="text-2xl font-bold text-gray-800 mb-2">
              Весь курс = экономия 8 000 ₽
            </h3>
            <p className="text-gray-700 text-lg">
              При оплате всего курса вы экономите 25% и получаете максимальный результат для вашего ребёнка
            </p>
          </div>

          <div className="text-center text-sm text-gray-500 mb-4">
            *Цена 1 490 ₽ действует только при оплате всего курса целиком
          </div>

          <div className="text-center text-sm text-gray-600">
            При оплате по неделям действует предоплата: сумма вносится за предстоящую неделю вперёд.
          </div>
        </div>
      </div>
    </section>
  );
};
