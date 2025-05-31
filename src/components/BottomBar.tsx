
import React from 'react';
import { Button } from '@/components/ui/button';

export const BottomBar = () => {
  const handleDiagnostic = () => {
    const utmParams = new URLSearchParams(window.location.search).toString();
    const waMessage = `Диагностика${utmParams ? `?${utmParams}` : ''}`;
    window.open(`https://wa.me/79XXXXXXXXX?text=${encodeURIComponent(waMessage)}`, '_blank');
    
    // Analytics
    if (typeof window !== 'undefined') {
      (window as any).ym?.(88888888, 'reachGoal', 'diagnostic_click_bottom');
      (window as any).VK?.Retargeting?.Event('diagnostic_click');
    }
  };

  return (
    <div className="md:hidden fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 p-4 z-40">
      <Button 
        onClick={handleDiagnostic}
        className="btn-primary w-full bg-[#FF6B00] hover:bg-[#FF6B00]/90 text-white py-3 rounded-lg font-semibold text-lg"
      >
        Записаться на диагностику
      </Button>
    </div>
  );
};
