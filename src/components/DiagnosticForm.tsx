
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';

export const DiagnosticForm = () => {
  const [formData, setFormData] = useState({
    parentName: '',
    childAge: '',
    grade: '',
    phone: '',
    contactMethod: ''
  });

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const formatPhone = (value: string) => {
    const numbers = value.replace(/\D/g, '');
    if (numbers.length <= 1) return '+7';
    if (numbers.length <= 4) return `+7 (${numbers.slice(1)}`;
    if (numbers.length <= 7) return `+7 (${numbers.slice(1, 4)}) ${numbers.slice(4)}`;
    if (numbers.length <= 9) return `+7 (${numbers.slice(1, 4)}) ${numbers.slice(4, 7)}-${numbers.slice(7)}`;
    return `+7 (${numbers.slice(1, 4)}) ${numbers.slice(4, 7)}-${numbers.slice(7, 9)}-${numbers.slice(9, 11)}`;
  };

  const handlePhoneChange = (value: string) => {
    const formatted = formatPhone(value);
    handleInputChange('phone', formatted);
  };

  const handleSubmit = () => {
    const utmParams = new URLSearchParams(window.location.search).toString();
    const waMessage = `Записаться на бесплатный урок: ${formData.parentName}, ребёнок ${formData.childAge} лет, ${formData.grade}${utmParams ? `?${utmParams}` : ''}`;
    window.open(`https://wa.me/79XXXXXXXXX?text=${encodeURIComponent(waMessage)}`, '_blank');
    
    // Analytics
    if (typeof window !== 'undefined') {
      (window as any).ym?.(88888888, 'reachGoal', 'Lead_Diagnosis');
      (window as any).VK?.Retargeting?.Event('diagnosis_form_submit');
    }
  };

  const isFormValid = () => {
    return formData.parentName && 
           formData.childAge && 
           formData.grade && 
           formData.phone.length >= 18 && 
           formData.contactMethod;
  };

  return (
    <section className="py-20 bg-gradient-to-br from-blue-50 to-purple-50" id="diagnostic">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-800">
            Записаться на бесплатный урок
          </h2>
          <p className="text-xl text-gray-600 mb-4">
            Узнайте уровень английского вашего ребёнка за 15 минут — бесплатно!
          </p>
          <p className="text-lg text-[#FF6B00] font-semibold">
            🎁 Диагностика + персональные рекомендации для обучения
          </p>
        </div>

        <div className="max-w-md mx-auto">
          <Card className="border-0 shadow-2xl">
            <CardHeader className="bg-gradient-to-r from-[#FF6B00] to-orange-500 text-white text-center">
              <CardTitle className="text-2xl font-bold">Заполните форму</CardTitle>
            </CardHeader>
            <CardContent className="p-8">
              <div className="space-y-6">
                <div>
                  <Label htmlFor="parentName" className="text-base font-medium">Имя родителя *</Label>
                  <Input
                    id="parentName"
                    type="text"
                    placeholder="Ваше имя"
                    value={formData.parentName}
                    onChange={(e) => handleInputChange('parentName', e.target.value)}
                    className="mt-2 text-lg p-4"
                    required
                  />
                </div>

                <div>
                  <Label htmlFor="childAge" className="text-base font-medium">Возраст ребёнка *</Label>
                  <Input
                    id="childAge"
                    type="number"
                    min="8"
                    max="11"
                    placeholder="Возраст (8-11 лет)"
                    value={formData.childAge}
                    onChange={(e) => handleInputChange('childAge', e.target.value)}
                    className="mt-2 text-lg p-4"
                    required
                  />
                </div>

                <div>
                  <Label className="text-base font-medium">Класс *</Label>
                  <Select onValueChange={(value) => handleInputChange('grade', value)} required>
                    <SelectTrigger className="mt-2 text-lg p-4">
                      <SelectValue placeholder="Выберите класс" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="2кл">2 кл.</SelectItem>
                      <SelectItem value="3кл">3 кл.</SelectItem>
                      <SelectItem value="4кл">4 кл.</SelectItem>
                      <SelectItem value="5кл">5 кл.</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <Label htmlFor="phone" className="text-base font-medium">Телефон *</Label>
                  <Input
                    id="phone"
                    type="tel"
                    placeholder="+7 (999) 123-45-67"
                    value={formData.phone}
                    onChange={(e) => handlePhoneChange(e.target.value)}
                    className="mt-2 text-lg p-4"
                    required
                  />
                </div>

                <div>
                  <Label className="text-base font-medium">Способ связи *</Label>
                  <RadioGroup 
                    value={formData.contactMethod} 
                    onValueChange={(value) => handleInputChange('contactMethod', value)}
                    className="mt-2"
                  >
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="whatsapp" id="whatsapp" />
                      <Label htmlFor="whatsapp">WhatsApp</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="telegram" id="telegram" />
                      <Label htmlFor="telegram">Telegram</Label>
                    </div>
                  </RadioGroup>
                </div>
              </div>

              <Button
                onClick={handleSubmit}
                disabled={!isFormValid()}
                className="w-full mt-8 btn-primary bg-[#FF6B00] hover:bg-[#FF6B00]/90 text-white py-3 text-lg font-bold"
              >
                Получить бесплатный урок и план
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};
