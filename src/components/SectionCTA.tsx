
import React from 'react';
import { Button } from '@/components/ui/button';

export const SectionCTA = () => {
  const scrollToForm = () => {
    document.getElementById('diagnostic')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="text-center py-8">
      <Button 
        onClick={scrollToForm}
        variant="outline"
        className="border-2 border-[#FF6B00] text-[#FF6B00] hover:bg-[#FF6B00] hover:text-white px-8 py-3 text-lg font-semibold rounded-xl transition-all duration-300"
        size="lg"
      >
        ЗАПИСАТЬСЯ НА КУРС
      </Button>
    </div>
  );
};
