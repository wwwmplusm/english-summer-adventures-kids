import React from 'react';
import { Button } from '@/components/ui/button';
import { trackEvent } from "@/lib/analytics";

export const BottomBar = () => {
  const handleDiagnostic = () => {
    // Плавный скролл к форме заявки
    document.getElementById('diagnostic')?.scrollIntoView({ behavior: 'smooth' });
    
    // Analytics
    trackEvent.ym(88888888, 'Scroll_To_Form_Bottom');
    trackEvent.vk('scroll_to_form_bottom');
  };

  return (
    <div className="md:hidden fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 p-4 z-40 shadow-lg">
      <Button 
        onClick={handleDiagnostic}
        className="btn-primary w-full bg-[#FF6B00] hover:bg-[#FF6B00]/90 text-white py-3 rounded-lg font-semibold text-lg"
      >
        Получить бесплатный урок и план
      </Button>
    </div>
  );
};
