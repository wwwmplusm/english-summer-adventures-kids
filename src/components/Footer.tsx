import React from 'react';
import { Button } from '@/components/ui/button';
export const Footer = () => {
  const handleDiagnostic = () => {
    const utmParams = new URLSearchParams(window.location.search).toString();
    const waMessage = `Хочу на диагностику!${utmParams ? `?${utmParams}` : ''}`;
    window.open(`https://wa.me/79851837932?text=${encodeURIComponent(waMessage)}`, '_blank');

    // Analytics
    if (typeof window !== 'undefined') {
      (window as any).ym?.(88888888, 'reachGoal', 'Lead_Diagnosis');
      (window as any).VK?.Retargeting?.Event('diagnosis_footer_click');
    }
  };
  return <footer className="bg-[#1C1C1E] text-white py-12">
      <div className="container mx-auto px-4">

        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="font-bold text-lg mb-4 text-[#FF6B00]">Документы</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="https://docs.google.com/document/d/1pdPEYcjPuQLpQOwVRgE2QwAnn0ylgeYz4oBiwmVFgwo/edit?usp=sharing" target="_blank" rel="noopener noreferrer" className="hover:text-[#FF6B00] transition-colors">
                  Публичная оферта
                </a>
              </li>
              <li>
                <a href="https://docs.google.com/document/d/1vSm3Qa4KRj57nwiaGAovM57ltrvIZk46ywCoCTrnXok/edit?usp=sharing" target="_blank" rel="noopener noreferrer" className="hover:text-[#FF6B00] transition-colors">
                  Политика конфиденциальности
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4 text-[#FF6B00]">Реквизиты</h3>
            <div className="space-y-2 text-sm">
              <p className="font-semibold">Поздников Марк Денисович</p>
              <p>Самозанятый (НПД, ФЗ-422)</p>
              <p>Режим работы — с 08:00 до 21:00 (МСК)</p>
              <p>E-mail: ekidseng@yandex.com</p>
              <p>Тел.: +7 996 669 78 97</p>
            </div>
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
              Летний онлайн-курс английского для детей
            </h4>
            <p className="text-gray-400">
              Онлайн-обучение английскому языку детей 8-11 лет в малых группах
            </p>
          </div>
          
          <div className="text-xs text-gray-500 leading-relaxed">
            <p className="mb-2">© 2025 Летний курс английского. Все права защищены.</p>
            <p>
              WhatsApp является продуктом компании Meta, которая признана экстремистской организацией и запрещена в Российской Федерации.
            </p>
          </div>
        </div>
      </div>
    </footer>;
};