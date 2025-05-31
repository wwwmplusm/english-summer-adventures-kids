
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Progress } from '@/components/ui/progress';

export const DiagnosticForm = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    childName: '',
    age: '',
    phone: ''
  });

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const formatPhone = (value: string) => {
    const numbers = value.replace(/\D/g, '');
    const match = numbers.match(/^(\d{1})(\d{0,3})(\d{0,3})(\d{0,2})(\d{0,2})$/);
    if (match) {
      let formatted = '+7';
      if (match[2]) formatted += ` (${match[2]}`;
      if (match[3]) formatted += `) ${match[3]}`;
      if (match[4]) formatted += `-${match[4]}`;
      if (match[5]) formatted += `-${match[5]}`;
      return formatted;
    }
    return value;
  };

  const handlePhoneChange = (value: string) => {
    const formatted = formatPhone(value);
    handleInputChange('phone', formatted);
  };

  const nextStep = () => {
    if (step < 3) setStep(step + 1);
  };

  const prevStep = () => {
    if (step > 1) setStep(step - 1);
  };

  const handleSubmit = () => {
    const utmParams = new URLSearchParams(window.location.search).toString();
    const waMessage = `Диагностика ${formData.childName}, ${formData.age} лет${utmParams ? `?${utmParams}` : ''}`;
    window.open(`https://wa.me/79XXXXXXXXX?text=${encodeURIComponent(waMessage)}`, '_blank');
    
    // Analytics
    if (typeof window !== 'undefined') {
      (window as any).ym?.(88888888, 'reachGoal', 'Lead_Diagnosis');
      (window as any).VK?.Retargeting?.Event('diagnosis_form_submit');
    }
  };

  const canProceed = () => {
    switch (step) {
      case 1: return formData.childName.length > 0;
      case 2: return formData.age.length > 0;
      case 3: return formData.phone.length >= 18;
      default: return false;
    }
  };

  const progress = (step / 3) * 100;

  return (
    <section className="py-20 bg-gradient-to-br from-blue-50 to-purple-50" id="diagnostic">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-800">
            Быстрая диагностика
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
              <CardTitle className="text-2xl font-bold">Шаг {step} из 3</CardTitle>
              <Progress value={progress} className="mt-4 bg-white/20" />
            </CardHeader>
            <CardContent className="p-8">
              {step === 1 && (
                <div className="space-y-6">
                  <div className="text-center mb-6">
                    <h3 className="text-xl font-semibold mb-2">Как зовут вашего ребёнка?</h3>
                    <p className="text-gray-600">Это поможет нам персонализировать диагностику</p>
                  </div>
                  <div>
                    <Label htmlFor="childName" className="text-base font-medium">Имя ребёнка</Label>
                    <Input
                      id="childName"
                      type="text"
                      placeholder="Например: Анна"
                      value={formData.childName}
                      onChange={(e) => handleInputChange('childName', e.target.value)}
                      className="mt-2 text-lg p-4"
                    />
                  </div>
                </div>
              )}

              {step === 2 && (
                <div className="space-y-6">
                  <div className="text-center mb-6">
                    <h3 className="text-xl font-semibold mb-2">Сколько лет {formData.childName}?</h3>
                    <p className="text-gray-600">Это поможет подобрать подходящую группу</p>
                  </div>
                  <div>
                    <Label htmlFor="age" className="text-base font-medium">Возраст</Label>
                    <Input
                      id="age"
                      type="number"
                      min="7"
                      max="11"
                      placeholder="Например: 8"
                      value={formData.age}
                      onChange={(e) => handleInputChange('age', e.target.value)}
                      className="mt-2 text-lg p-4"
                    />
                  </div>
                </div>
              )}

              {step === 3 && (
                <div className="space-y-6">
                  <div className="text-center mb-6">
                    <h3 className="text-xl font-semibold mb-2">Ваш WhatsApp для связи</h3>
                    <p className="text-gray-600">Мы свяжемся с вами для назначения диагностики</p>
                  </div>
                  <div>
                    <Label htmlFor="phone" className="text-base font-medium">Номер телефона</Label>
                    <Input
                      id="phone"
                      type="tel"
                      placeholder="+7 (999) 123-45-67"
                      value={formData.phone}
                      onChange={(e) => handlePhoneChange(e.target.value)}
                      className="mt-2 text-lg p-4"
                    />
                  </div>
                </div>
              )}

              <div className="flex gap-3 mt-8">
                {step > 1 && (
                  <Button
                    onClick={prevStep}
                    variant="outline"
                    className="flex-1 py-3 text-lg"
                  >
                    Назад
                  </Button>
                )}
                {step < 3 ? (
                  <Button
                    onClick={nextStep}
                    disabled={!canProceed()}
                    className="flex-1 bg-[#FF6B00] hover:bg-[#FF6B00]/90 text-white py-3 text-lg font-semibold"
                  >
                    Далее
                  </Button>
                ) : (
                  <Button
                    onClick={handleSubmit}
                    disabled={!canProceed()}
                    className="flex-1 btn-primary bg-[#FF6B00] hover:bg-[#FF6B00]/90 text-white py-3 text-lg font-bold"
                  >
                    Да, хочу узнать уровень бесплатно!
                  </Button>
                )}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};
