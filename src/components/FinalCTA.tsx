import React from 'react';
import { Button } from '@/components/ui/button';
import { trackEvent } from "@/lib/analytics";

export const FinalCTA = () => {
  const handleDiagnostic = () => {
    // Плавный скролл к форме заявки
    document.getElementById('diagnostic')?.scrollIntoView({ behavior: 'smooth' });
    
    // Analytics
    trackEvent.ym(88888888, 'Scroll_To_Form_Final');
    trackEvent.vk('scroll_to_form_final');
  };

  const handlePayment = () => {
    const utmParams = new URLSearchParams(window.location.search).toString();
    window.open(`/payment?plan=full${utmParams ? `&${utmParams}` : ''}`, '_blank');
    
    // Analytics
    trackEvent.ym(88888888, 'Purchase');
    trackEvent.vk('payment_final_click');
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
            Подарите своим детям полезные каникулы
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              onClick={handlePayment}
              className="btn-secondary bg-white hover:bg-gray-100 px-8 py-4 text-lg font-bold rounded-xl shadow-2xl hover:scale-105 transition-all duration-300"
              style={{ color: '#FF6B00', fontWeight: 600 }}
              size="lg"
            >
              Оплатить курс
            </Button>
            <Button 
              onClick={handleDiagnostic}
              variant="outline"
              className="border-2 border-white text-white hover:bg-white hover:text-[#FF6B00] px-8 py-4 text-lg font-semibold rounded-xl transition-all duration-300"
              style={{ color: '#FF6B00', fontWeight: 600 }}
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
