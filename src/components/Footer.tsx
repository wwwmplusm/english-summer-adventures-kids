
import React from 'react';
import { Button } from '@/components/ui/button';

export const Footer = () => {
  const handleDiagnostic = () => {
    const utmParams = new URLSearchParams(window.location.search).toString();
    const waMessage = `Хочу на диагностику!${utmParams ? `?${utmParams}` : ''}`;
    window.open(`https://wa.me/79XXXXXXXXX?text=${encodeURIComponent(waMessage)}`, '_blank');
    
    // Analytics
    if (typeof window !== 'undefined') {
      (window as any).ym?.(88888888, 'reachGoal', 'Lead_Diagnosis');
      (window as any).VK?.Retargeting?.Event('diagnosis_footer_click');
    }
  };

  return (
    <footer className="bg-[#1C1C1E] text-white py-12">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <Button 
            onClick={handleDiagnostic}
            className="btn-primary bg-[#FF6B00] hover:bg-[#FF6B00]/90 text-white px-8 py-4 text-lg font-bold rounded-lg shadow-xl"
            size="lg"
          >
            Записать ребёнка
          </Button>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="font-bold text-lg mb-4 text-[#FF6B00]">Документы</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="/public-offer.pdf" target="_blank" className="hover:text-[#FF6B00] transition-colors">
                  Публичная оферта (PDF)
                </a>
              </li>
              <li>
                <a href="/privacy-policy.pdf" target="_blank" className="hover:text-[#FF6B00] transition-colors">
                  Политика конфиденциальности
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4 text-[#FF6B00]">Контакты</h3>
            <ul className="space-y-2 text-sm">
              <li>WhatsApp: +7 (999) 123-45-67</li>
              <li>Email: info@english-intensive.ru</li>
              <li>Пн-Вс: 9:00 - 21:00 МСК</li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4 text-[#FF6B00]">Социальные сети</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="https://t.me/english_kids_summer" target="_blank" className="hover:text-[#FF6B00] transition-colors">
                  Telegram-канал для родителей
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 pt-8 text-center">
          <div className="mb-4">
            <h4 className="font-bold text-xl text-[#FF6B00] mb-2">
              Летний интенсив английского для детей
            </h4>
            <p className="text-gray-400">
              Онлайн-обучение английскому языку детей 8-11 лет в малых группах
            </p>
          </div>
          
          <div className="text-xs text-gray-500 leading-relaxed">
            <p className="mb-2">© 2025 Летний интенсив английского. Все права защищены.</p>
            <p>
              WhatsApp является продуктом компании Meta, которая признана экстремистской организацией и запрещена в Российской Федерации.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};
