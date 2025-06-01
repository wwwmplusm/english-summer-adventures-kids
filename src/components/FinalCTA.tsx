
import React from 'react';
import { Button } from '@/components/ui/button';

export const FinalCTA = () => {
  const handleDiagnostic = () => {
    const utmParams = new URLSearchParams(window.location.search).toString();
    const waMessage = `Хочу на диагностику!${utmParams ? `?${utmParams}` : ''}`;
    window.open(`https://wa.me/79XXXXXXXXX?text=${encodeURIComponent(waMessage)}`, '_blank');
    
    // Analytics
    if (typeof window !== 'undefined') {
      (window as any).ym?.(88888888, 'reachGoal', 'Lead_Diagnosis');
      (window as any).VK?.Retargeting?.Event('diagnosis_final_click');
    }
  };

  const handlePayment = () => {
    const utmParams = new URLSearchParams(window.location.search).toString();
    window.open(`/payment?plan=full${utmParams ? `&${utmParams}` : ''}`, '_blank');
    
    // Analytics
    if (typeof window !== 'undefined') {
      (window as any).ym?.(88888888, 'reachGoal', 'Purchase');
      (window as any).VK?.Retargeting?.Event('payment_final_click');
    }
  };

  return (
    <section className="py-20 bg-gradient-to-r from-[#FF6B00] to-orange-500" id="final-cta">
      <div className="container mx-auto px-4 text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white leading-tight">
            Пока другие тратят лето впустую,
            <br />
            ваш ребёнок начинает говорить по-английски
          </h2>
          
          <p className="text-xl text-white/90 mb-8">
            Вступите в ряды родителей, которые дарят детям полезные каникулы
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              onClick={handlePayment}
              className="btn-secondary bg-white text-[#FF6B00] hover:bg-gray-100 px-8 py-4 text-lg font-bold rounded-xl shadow-2xl hover:scale-105 transition-all duration-300"
              size="lg"
            >
              Оплатить курс
            </Button>
            <Button 
              onClick={handleDiagnostic}
              variant="outline"
              className="border-2 border-white text-white hover:bg-white hover:text-[#FF6B00] px-8 py-4 text-lg font-semibold rounded-xl transition-all duration-300"
              size="lg"
            >
              Получить бесплатный урок и план
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
