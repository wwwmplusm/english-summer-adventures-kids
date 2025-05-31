
import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

export const FinalCTA = () => {
  const handlePayment = () => {
    const utmParams = new URLSearchParams(window.location.search).toString();
    window.open(`/payment?plan=full${utmParams ? `&${utmParams}` : ''}`, '_blank');
    
    // Analytics
    if (typeof window !== 'undefined') {
      (window as any).ym?.(88888888, 'reachGoal', 'Purchase');
      (window as any).VK?.Retargeting?.Event('payment_click');
    }
  };

  const handleTelegram = () => {
    window.open('https://t.me/english_intensive_kids_parents', '_blank');
    
    // Analytics
    if (typeof window !== 'undefined') {
      (window as any).ym?.(88888888, 'reachGoal', 'telegram_click');
      (window as any).VK?.Retargeting?.Event('telegram_click');
    }
  };

  return (
    <section className="py-20 bg-gradient-to-br from-[#FF6B00] via-orange-500 to-red-500 text-white">
      <div className="container mx-auto px-4">
        <Card className="max-w-4xl mx-auto border-0 bg-white/10 backdrop-blur-sm">
          <CardContent className="p-8 md:p-12 text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Пока другие тратят лето впустую,
            </h2>
            <h3 className="text-3xl md:text-4xl font-bold mb-8 text-yellow-200">
              ваш ребёнок начинает говорить по-английски
            </h3>
            
            <p className="text-xl md:text-2xl mb-12 opacity-90">
              Не упустите возможность сделать это лето незабываемым и полезным!
            </p>

            <div className="grid md:grid-cols-3 gap-6 mb-12 text-center">
              <div className="bg-white/20 rounded-lg p-6">
                <div className="text-3xl font-bold mb-2">7 мест</div>
                <div className="text-sm opacity-80">осталось в группах</div>
              </div>
              <div className="bg-white/20 rounded-lg p-6">
                <div className="text-3xl font-bold mb-2">8 недель</div>
                <div className="text-sm opacity-80">до свободного общения</div>
              </div>
              <div className="bg-white/20 rounded-lg p-6">
                <div className="text-3xl font-bold mb-2">6 000 ₽</div>
                <div className="text-sm opacity-80">экономия при оплате курса</div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button 
                onClick={handlePayment}
                size="lg"
                className="btn-secondary bg-white text-[#FF6B00] hover:bg-gray-100 px-8 py-4 text-xl font-bold rounded-lg shadow-xl hover:scale-105 transition-all duration-300"
              >
                Оплатить курс
              </Button>
              <Button 
                onClick={handleTelegram}
                variant="outline"
                size="lg"
                className="border-white text-white hover:bg-white hover:text-[#FF6B00] px-8 py-4 text-xl font-semibold rounded-lg transition-all duration-300"
              >
                Подписаться на Telegram для родителей
              </Button>
            </div>

            <p className="mt-8 text-lg opacity-80">
              🚀 Старт уже 10 июня — не опоздайте!
            </p>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};
