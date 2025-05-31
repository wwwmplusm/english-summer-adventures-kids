
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Check } from 'lucide-react';

export const Pricing = () => {
  const handlePayment = (plan: string) => {
    const utmParams = new URLSearchParams(window.location.search).toString();
    // Redirect to payment page with UTM parameters
    window.open(`/payment?plan=${plan}${utmParams ? `&${utmParams}` : ''}`, '_blank');
    
    // Analytics
    if (typeof window !== 'undefined') {
      (window as any).ym?.(88888888, 'reachGoal', 'payment_click');
      (window as any).VK?.Retargeting?.Event('payment_click');
    }
  };

  const handleDiagnostic = () => {
    const utmParams = new URLSearchParams(window.location.search).toString();
    const waMessage = `Диагностика${utmParams ? `?${utmParams}` : ''}`;
    window.open(`https://wa.me/79XXXXXXXXX?text=${encodeURIComponent(waMessage)}`, '_blank');
    
    // Analytics
    if (typeof window !== 'undefined') {
      (window as any).ym?.(88888888, 'reachGoal', 'diagnostic_click_pricing');
      (window as any).VK?.Retargeting?.Event('diagnostic_click');
    }
  };

  const plans = [
    {
      id: 'full',
      title: 'Весь курс',
      price: '29 990',
      originalPrice: '36 000',
      savings: 'экономия 17%',
      popular: true,
      features: [
        '24 живых занятия',
        'Доступ к материалам',
        'Сертификат',
        'Поддержка в чате',
        'Запись занятий'
      ]
    },
    {
      id: 'weekly',
      title: 'По неделям',
      price: '4 500',
      period: '/ неделя',
      features: [
        '3 занятия в неделю',
        'Доступ к материалам',
        'Поддержка в чате'
      ]
    },
    {
      id: 'single',
      title: 'По занятию',
      price: '1 500',
      period: '/ занятие',
      features: [
        'Разовое посещение',
        'Доступ к материалам урока'
      ]
    }
  ];

  return (
    <section className="py-20 bg-gray-50" id="pricing">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-800">
            Тарифы
          </h2>
          <p className="text-xl text-gray-600 mb-4">
            Выберите удобный способ оплаты
          </p>
          <div className="bg-red-100 border border-red-300 rounded-lg p-4 max-w-md mx-auto">
            <p className="text-red-700 font-semibold">
              ⚡ Места заканчиваются — осталось 7 из 30
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan) => (
            <Card 
              key={plan.id}
              className={`relative border-0 shadow-xl hover:shadow-2xl transition-all duration-300 ${
                plan.popular ? 'ring-2 ring-[#FF6B00] scale-105' : ''
              }`}
            >
              {plan.popular && (
                <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-[#FF6B00] text-white px-4 py-1">
                  Лучшее предложение
                </Badge>
              )}
              
              <CardHeader className="text-center pb-4">
                <CardTitle className="text-2xl font-bold text-gray-800">
                  {plan.title}
                </CardTitle>
                <div className="mt-4">
                  <div className="flex items-center justify-center gap-2">
                    <span className="text-4xl font-bold text-[#FF6B00]">
                      {plan.price}
                    </span>
                    <span className="text-2xl text-gray-600">₽</span>
                    {plan.period && (
                      <span className="text-gray-500">{plan.period}</span>
                    )}
                  </div>
                  {plan.originalPrice && (
                    <div className="mt-2">
                      <span className="text-gray-400 line-through text-lg">
                        {plan.originalPrice} ₽
                      </span>
                      <Badge variant="secondary" className="ml-2 bg-green-100 text-green-700">
                        {plan.savings}
                      </Badge>
                    </div>
                  )}
                </div>
              </CardHeader>

              <CardContent className="space-y-6">
                <ul className="space-y-3">
                  {plan.features.map((feature, index) => (
                    <li key={index} className="flex items-center gap-3">
                      <Check className="w-5 h-5 text-green-500 flex-shrink-0" />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>

                <div className="space-y-3 pt-4">
                  {plan.id === 'full' ? (
                    <>
                      <Button 
                        onClick={() => handlePayment(plan.id)}
                        className="btn-secondary w-full bg-[#FF6B00] hover:bg-[#FF6B00]/90 text-white py-3 text-lg font-semibold"
                      >
                        Купить курс
                      </Button>
                      <Button 
                        onClick={handleDiagnostic}
                        variant="outline"
                        className="btn-primary w-full border-[#FF6B00] text-[#FF6B00] hover:bg-[#FF6B00] hover:text-white py-3"
                      >
                        Диагностика
                      </Button>
                    </>
                  ) : (
                    <Button 
                      onClick={handleDiagnostic}
                      className="btn-primary w-full bg-[#FF6B00] hover:bg-[#FF6B00]/90 text-white py-3 text-lg font-semibold"
                    >
                      Диагностика
                    </Button>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
