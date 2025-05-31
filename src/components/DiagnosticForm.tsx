
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

export const DiagnosticForm = () => {
  const [formData, setFormData] = useState({
    childName: '',
    childAge: '',
    phone: ''
  });
  const [progress, setProgress] = useState(0);

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    
    // Update progress
    const filledFields = Object.values({ ...formData, [field]: value }).filter(val => val.trim() !== '').length;
    setProgress((filledFields / 3) * 100);
  };

  const formatPhone = (value: string) => {
    const digits = value.replace(/\D/g, '');
    const match = digits.match(/^7?(\d{0,3})(\d{0,3})(\d{0,2})(\d{0,2})$/);
    if (match) {
      const formatted = [
        '+7',
        match[1] ? ` (${match[1]}` : '',
        match[2] ? `) ${match[2]}` : match[1] ? ')' : '',
        match[3] ? `-${match[3]}` : '',
        match[4] ? `-${match[4]}` : ''
      ].join('');
      return formatted;
    }
    return value;
  };

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const formatted = formatPhone(e.target.value);
    handleInputChange('phone', formatted);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const utmParams = new URLSearchParams(window.location.search).toString();
    const waMessage = `Диагностика ${formData.childName}, ${formData.childAge} лет${utmParams ? `?${utmParams}` : ''}`;
    
    window.open(`https://wa.me/79XXXXXXXXX?text=${encodeURIComponent(waMessage)}`, '_blank');
    
    // Analytics
    if (typeof window !== 'undefined') {
      (window as any).ym?.(88888888, 'reachGoal', 'diagnostic_form_submit');
      (window as any).VK?.Retargeting?.Event('diagnostic_form_submit');
    }
  };

  const isFormValid = formData.childName.trim() && formData.childAge.trim() && formData.phone.length >= 18;

  return (
    <section className="py-20 bg-gradient-to-br from-orange-50 to-red-50" id="diagnostic">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto">
          <Card className="border-0 shadow-2xl">
            <CardHeader className="text-center pb-6">
              <CardTitle className="text-3xl font-bold text-gray-800 mb-4">
                Бесплатная диагностика — 15 минут
              </CardTitle>
              <p className="text-lg text-gray-600">
                Определим уровень английского вашего ребенка и подберем оптимальную программу
              </p>
              
              {/* Progress bar */}
              <div className="mt-6">
                <div className="flex justify-between text-sm text-gray-500 mb-2">
                  <span>Заполните форму</span>
                  <span>{Math.round(progress)}%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div 
                    className="bg-[#FF6B00] h-2 rounded-full transition-all duration-300"
                    style={{ width: `${progress}%` }}
                  />
                </div>
              </div>
            </CardHeader>
            
            <CardContent className="p-6">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <Label htmlFor="childName" className="text-base font-semibold text-gray-700 mb-2 block">
                    Имя ребенка
                  </Label>
                  <Input
                    id="childName"
                    type="text"
                    value={formData.childName}
                    onChange={(e) => handleInputChange('childName', e.target.value)}
                    placeholder="Введите имя ребенка"
                    className="h-12 text-base border-2 border-gray-200 focus:border-[#FF6B00] rounded-lg"
                    required
                  />
                </div>

                <div>
                  <Label htmlFor="childAge" className="text-base font-semibold text-gray-700 mb-2 block">
                    Возраст ребенка
                  </Label>
                  <Input
                    id="childAge"
                    type="number"
                    min="7"
                    max="11"
                    value={formData.childAge}
                    onChange={(e) => handleInputChange('childAge', e.target.value)}
                    placeholder="Возраст (7-11 лет)"
                    className="h-12 text-base border-2 border-gray-200 focus:border-[#FF6B00] rounded-lg"
                    required
                  />
                </div>

                <div>
                  <Label htmlFor="phone" className="text-base font-semibold text-gray-700 mb-2 block">
                    Телефон родителя
                  </Label>
                  <Input
                    id="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={handlePhoneChange}
                    placeholder="+7 (___) ___-__-__"
                    className="h-12 text-base border-2 border-gray-200 focus:border-[#FF6B00] rounded-lg"
                    required
                  />
                </div>

                <Button
                  type="submit"
                  disabled={!isFormValid}
                  className={`btn-primary w-full h-12 text-lg font-semibold rounded-lg transition-all duration-300 ${
                    isFormValid 
                      ? 'bg-[#FF6B00] hover:bg-[#FF6B00]/90 text-white' 
                      : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                  }`}
                >
                  Записаться на диагностику
                </Button>

                <p className="text-sm text-gray-500 text-center">
                  После отправки формы мы свяжемся с вами в WhatsApp для согласования времени диагностики
                </p>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};
