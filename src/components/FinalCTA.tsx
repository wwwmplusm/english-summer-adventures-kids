
import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Users, Calendar, Trophy } from 'lucide-react';

export const FinalCTA = () => {
  const handlePayment = () => {
    const utmParams = new URLSearchParams(window.location.search).toString();
    window.open(`/payment?plan=full${utmParams ? `&${utmParams}` : ''}`, '_blank');
    
    // Analytics
    if (typeof window !== 'undefined') {
      (window as any).ym?.(88888888, 'reachGoal', 'payment_click_final');
      (window as any).VK?.Retargeting?.Event('payment_click');
    }
  };

  const handleTelegram = () => {
    window.open('https://t.me/english_intensive_kids', '_blank');
    
    // Analytics
    if (typeof window !== 'undefined') {
      (window as any).ym?.(88888888, 'reachGoal', 'telegram_click');
      (window as any).VK?.Retargeting?.Event('telegram_click');
    }
  };

  return (
    <section className="py-20 bg-gradient-to-br from-blue-600 via-purple-600 to-pink-500 text-white">
      <div className="container mx-auto px-4">
        <Card className="max-w-4xl mx-auto border-0 bg-white/10 backdrop-blur-sm">
          <CardContent className="p-8 md:p-12 text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Готовы присоединиться?
            </h2>
            <p className="text-xl md:text-2xl mb-8 opacity-90">
              Забронируйте место — группы заполняются быстро!
            </p>

            <div className="grid md:grid-cols-3 gap-6 mb-12">
              <div className="flex flex-col items-center">
                <div className="bg-white/20 rounded-full p-4 mb-4">
                  <Users className="w-8 h-8" />
                </div>
                <div className="text-2xl font-bold">7 из 30</div>
                <div className="text-sm opacity-80">мест осталось</div>
              </div>
              <div className="flex flex-col items-center">
                <div className="bg-white/20 rounded-full p-4 mb-4">
                  <Calendar className="w-8 h-8" />
                </div>
                <div className="text-2xl font-bold">10 июня</div>
                <div className="text-sm opacity-80">старт курса</div>
              </div>
              <div className="flex flex-col items-center">
                <div className="bg-white/20 rounded-full p-4 mb-4">
                  <Trophy className="w-8 h-8" />
                </div>
                <div className="text-2xl font-bold">+2 уровня</div>
                <div className="text-sm opacity-80">гарантированный результат</div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button 
                onClick={handlePayment}
                size="lg"
                className="btn-secondary bg-[#FF6B00] hover:bg-[#FF6B00]/90 text-white px-8 py-4 text-xl font-bold rounded-lg shadow-xl hover:scale-105 transition-all duration-300"
              >
                Оплатить курс
              </Button>
              <Button 
                onClick={handleTelegram}
                variant="outline"
                size="lg"
                className="border-white text-white hover:bg-white hover:text-gray-800 px-8 py-4 text-xl font-semibold rounded-lg transition-all duration-300"
              >
                Подписаться на Telegram
              </Button>
            </div>

            <p className="mt-6 text-sm opacity-70">
              🔥 Раннее бронирование до 1 июня — скидка 10%
            </p>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};
