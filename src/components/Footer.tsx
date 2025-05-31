
import React from 'react';
import { Button } from '@/components/ui/button';
import { Phone, Mail, MapPin } from 'lucide-react';

export const Footer = () => {
  const handleDiagnostic = () => {
    const utmParams = new URLSearchParams(window.location.search).toString();
    const waMessage = `Диагностика${utmParams ? `?${utmParams}` : ''}`;
    window.open(`https://wa.me/79XXXXXXXXX?text=${encodeURIComponent(waMessage)}`, '_blank');
    
    // Analytics
    if (typeof window !== 'undefined') {
      (window as any).ym?.(88888888, 'reachGoal', 'diagnostic_click_footer');
      (window as any).VK?.Retargeting?.Event('diagnostic_click');
    }
  };

  return (
    <footer className="bg-[#1C1C1E] text-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          {/* CTA Section */}
          <div className="md:col-span-2">
            <h3 className="text-2xl font-bold mb-4 text-[#FF6B00]">
              Летний English Intensive
            </h3>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Не упустите возможность подарить ребенку увлекательное и полезное лето! 
              24 занятия, которые изменят отношение к английскому языку навсегда.
            </p>
            <Button 
              onClick={handleDiagnostic}
              className="btn-primary bg-[#FF6B00] hover:bg-[#FF6B00]/90 text-white px-6 py-3 font-semibold rounded-lg"
            >
              Записаться сейчас
            </Button>
          </div>

          {/* Contacts */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Контакты</h4>
            <div className="space-y-3 text-gray-300">
              <div className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-[#FF6B00]" />
                <span>+7 (999) 123-45-67</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-[#FF6B00]" />
                <span>hello@english-intensive.ru</span>
              </div>
              <div className="flex items-center gap-3">
                <MapPin className="w-4 h-4 text-[#FF6B00]" />
                <span>Онлайн формат</span>
              </div>
            </div>
          </div>

          {/* QR Code & Payment */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Быстрая оплата</h4>
            <div className="bg-white p-4 rounded-lg mb-4">
              <div className="w-24 h-24 bg-gray-200 rounded flex items-center justify-center text-gray-500 text-xs text-center">
                QR-код СБП
              </div>
            </div>
            <p className="text-xs text-gray-400">
              Сканируйте для быстрой оплаты через СБП
            </p>
          </div>
        </div>

        {/* Documents & Legal */}
        <div className="border-t border-gray-700 pt-8">
          <div className="flex flex-wrap gap-6 mb-6 text-sm text-gray-400">
            <a href="/public-offer.pdf" target="_blank" className="hover:text-[#FF6B00] transition-colors">
              Публичная оферта (PDF)
            </a>
            <a href="/privacy-policy.pdf" target="_blank" className="hover:text-[#FF6B00] transition-colors">
              Политика конфиденциальности
            </a>
            <a href="/license.pdf" target="_blank" className="hover:text-[#FF6B00] transition-colors">
              Образовательная лицензия
            </a>
          </div>

          <div className="flex flex-col md:flex-row justify-between items-center text-sm text-gray-400">
            <div>
              <p className="mb-2">© 2024 English Intensive. Все права защищены.</p>
              <p className="text-xs">
                WhatsApp является продуктом Meta, признанной в России экстремистской организацией. 
                Используется исключительно для образовательных целей.
              </p>
            </div>
            <div className="mt-4 md:mt-0">
              <p>ИП Иванов И.И.</p>
              <p>ИНН: 123456789012</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
