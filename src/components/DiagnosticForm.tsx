import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Checkbox } from '@/components/ui/checkbox';
import { useToast } from "@/hooks/use-toast";
import { trackEvent } from "@/lib/analytics";


export const DiagnosticForm = () => {
  const [formData, setFormData] = useState({
    parentName: '',
    childAge: '',
    grade: '',
    phone: '',
    contactMethod: '',
    privacyAgreement: false
  });

  const [currentStep, setCurrentStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const TOTAL_STEPS = 6;

  const { toast } = useToast();

  const handleInputChange = (field: string, value: string | boolean) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  // Проверка валидности поля для конкретного шага
  const isStepFieldValid = (step: number) => {
    switch (step) {
      case 1: return formData.parentName.trim().length > 0;
      case 2: {
        const age = parseInt(formData.childAge);
        return formData.childAge !== '' && age >= 8 && age <= 11;
      }
      case 3: return formData.grade !== '';
      case 4: return formData.phone.length >= 18; // +7 (999) 999-99-99
      case 5: return formData.contactMethod !== '';
      case 6: return formData.privacyAgreement === true;
      default: return false;
    }
  };

  // Проверка всей формы для кнопки отправки
  const isFormValid = () => {
    return [1, 2, 3, 4, 5, 6].every(step => isStepFieldValid(step));
  };

  // Автоматический переход к следующему шагу
  const advanceToNextStep = (fromStep: number) => {
    if (isStepFieldValid(fromStep) && currentStep === fromStep && currentStep < TOTAL_STEPS) {
      const nextStep = currentStep + 1;
      setCurrentStep(nextStep);
      
      // Автофокус на следующее поле
      setTimeout(() => {
        focusNextField(nextStep);
      }, 100);
    }
  };

  // Автофокус на поле нового шага
  const focusNextField = (step: number) => {
    const fieldIds = {
      1: 'parentName',
      2: 'childAge', 
      4: 'phone',
      6: 'privacy'
    };
    
    const fieldId = fieldIds[step as keyof typeof fieldIds];
    if (fieldId) {
      const element = document.getElementById(fieldId);
      if (element && !element.hasAttribute('readonly')) {
        element.focus();
      }
    }
  };

  // Переход к конкретному шагу (для редактирования)
  const goToStep = (targetStep: number) => {
    if (targetStep <= TOTAL_STEPS && targetStep >= 1) {
      setCurrentStep(targetStep);
      setTimeout(() => {
        focusNextField(targetStep);
      }, 100);
    }
  };

  // Обработчики для текстовых полей
  const handleTextInput = (field: string, value: string, step: number) => {
    handleInputChange(field, value);
  };

  const handleTextBlur = (step: number) => {
    // Проверяем валидность после потери фокуса
    if (currentStep === step && isStepFieldValid(step)) {
      advanceToNextStep(step);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent, step: number) => {
    if (e.key === 'Enter' && currentStep === step && isStepFieldValid(step)) {
      e.preventDefault();
      advanceToNextStep(step);
    }
  };

  // Обработчики для Select и RadioGroup
  const handleSelectChange = (field: string, value: string, step: number) => {
    handleInputChange(field, value);
    // Для селектов сразу переходим к следующему шагу
    if (currentStep === step) {
      setTimeout(() => {
        advanceToNextStep(step);
      }, 100);
    }
  };

  const handleRadioChange = (field: string, value: string, step: number) => {
    handleInputChange(field, value);
    // Для радио-кнопок сразу переходим к следующему шагу
    if (currentStep === step) {
      setTimeout(() => {
        advanceToNextStep(step);
      }, 100);
    }
  };

  // Форматирование телефона
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

  const handlePhoneBlur = () => {
    if (currentStep === 4 && isStepFieldValid(4)) {
      advanceToNextStep(4);
    }
  };

  // Обработчик чекбокса
  const handleCheckboxChange = (checked: boolean | string) => {
    const booleanValue = typeof checked === 'boolean' ? checked : checked === 'true';
    handleInputChange('privacyAgreement', booleanValue);
    
    // Если чекбокс отмечен и мы на 6 шаге, переходим к финальному состоянию
    if (currentStep === 6 && booleanValue) {
      // Небольшая задержка для визуального эффекта
      setTimeout(() => {
        // Форма готова к отправке
      }, 200);
    }
  };

  const getProgressWidth = () => {
    return `${(currentStep / TOTAL_STEPS) * 100}%`;
  };

  // Определяем, должно ли поле быть видимым и доступным
  const shouldShowField = (step: number) => currentStep >= step;
  const isFieldCompleted = (step: number) => isStepFieldValid(step) && currentStep > step;
  const isFieldEditable = (step: number) => currentStep >= step;

const handleSubmit = async () => {
  if (isSubmitting) {
    console.log('⏳ Уже идет отправка, игнорируем повторный клик');
    return;
  }

  setIsSubmitting(true);
  
  // URL веб-приложения Google Apps Script
  const googleSheetURL = 'https://script.google.com/macros/s/AKfycbwk9B4gDAtuQU9Az3qI28llG48ap4P1cYKd-xs11Y1PFriLBZOCSg37nW05hd2hOb4K/exec';

  try {
    // Детальная проверка каждого поля
    console.log('=== ПРОВЕРКА ФОРМЫ ПЕРЕД ОТПРАВКОЙ ===');
    console.log('Текущие данные формы:', formData);
    console.log('Текущий шаг:', currentStep);
    
    // Проверяем каждое поле отдельно
    const validationResults = {
      step1: isStepFieldValid(1),
      step2: isStepFieldValid(2), 
      step3: isStepFieldValid(3),
      step4: isStepFieldValid(4),
      step5: isStepFieldValid(5),
      step6: isStepFieldValid(6)
    };
    
    console.log('Валидность по шагам:', validationResults);
    
    // Детальная проверка полей
    const fieldChecks = {
      parentName: formData.parentName && formData.parentName.trim().length > 0,
      childAge: formData.childAge && parseInt(formData.childAge) >= 8 && parseInt(formData.childAge) <= 11,
      grade: formData.grade && formData.grade.length > 0,
      phone: formData.phone && formData.phone.length >= 18,
      contactMethod: formData.contactMethod && formData.contactMethod.length > 0,
      privacyAgreement: formData.privacyAgreement === true
    };
    
    console.log('Проверка полей:', fieldChecks);
    
    // Проверяем, что все поля заполнены
    const isValid = Object.values(fieldChecks).every(check => check === true);
    console.log('Форма валидна:', isValid);
    
    if (!isValid) {
      console.log('❌ Форма не валидна!');
      toast({
        title: "Заполните все поля!",
        description: "Пожалуйста, убедитесь, что все поля заполнены корректно.",
        variant: "destructive",
      });
      return;
    }

    console.log('✅ Форма валидна, отправляем данные DiagnosticForm:', formData);
    
    // Создаем FormData объект для лучшей совместимости с Google Apps Script
    console.log('📤 Отправляем запрос на:', googleSheetURL);
    console.log('📤 Данные для отправки:', JSON.stringify(formData, null, 2));
    
    const formDataToSend = new FormData();
    formDataToSend.append('parentName', formData.parentName);
    formDataToSend.append('childAge', formData.childAge);
    formDataToSend.append('grade', formData.grade);
    formDataToSend.append('phone', formData.phone);
    formDataToSend.append('contactMethod', formData.contactMethod);
    formDataToSend.append('privacyAgreement', formData.privacyAgreement.toString());
    
    const response = await fetch(googleSheetURL, {
      method: 'POST',
      body: formDataToSend,
    });

    console.log('📥 Статус ответа:', response.status, response.statusText);
    
    if (response.ok) {
      const responseData = await response.text();
      console.log('📥 Ответ от сервера:', responseData);

      // Успешная отправка
      toast({
        title: "Заявка успешно отправлена!",
        description: `Спасибо, ${formData.parentName}! Мы свяжемся с вами в ближайшее время по ${formData.contactMethod === 'whatsapp' ? 'WhatsApp' : 'Telegram'} для записи на бесплатный урок.`,
        duration: 9000,
      });

      // Аналитика
      if (typeof window !== 'undefined') {
        const utmParamsForAnalytics = new URLSearchParams(window.location.search).toString();
        trackEvent.ym(88888888, 'Lead_Diagnosis', { utm: utmParamsForAnalytics, ...formData });
        trackEvent.vk('diagnosis_form_submit');
      }

      // Сброс формы
      setFormData({
        parentName: '',
        childAge: '',
        grade: '',
        phone: '',
        contactMethod: '',
        privacyAgreement: false
      });
      setCurrentStep(1);
    } else {
      throw new Error(`HTTP ${response.status}: ${response.statusText}`);
    }

  } catch (error) {
    console.error('❌ Ошибка отправки формы:', error);
    
    // Попытка отправки с no-cors как запасной вариант (ТОЛЬКО ОДНА попытка)
    try {
      console.log('🔄 Пробуем отправить с no-cors...');
      const formDataToSend = new FormData();
      formDataToSend.append('parentName', formData.parentName);
      formDataToSend.append('childAge', formData.childAge);
      formDataToSend.append('grade', formData.grade);
      formDataToSend.append('phone', formData.phone);
      formDataToSend.append('contactMethod', formData.contactMethod);
      formDataToSend.append('privacyAgreement', formData.privacyAgreement.toString());

      await fetch(googleSheetURL, {
        method: 'POST',
        mode: 'no-cors',
        body: formDataToSend,
      });
      
      console.log('✅ Отправка с no-cors выполнена');
      toast({
        title: "Заявка отправлена!",
        description: `Спасибо, ${formData.parentName}! Мы свяжемся с вами в ближайшее время по ${formData.contactMethod === 'whatsapp' ? 'WhatsApp' : 'Telegram'} для записи на бесплатный урок.`,
        duration: 9000,
      });

      // Сброс формы
      setFormData({
        parentName: '',
        childAge: '',
        grade: '',
        phone: '',
        contactMethod: '',
        privacyAgreement: false
      });
      setCurrentStep(1);

    } catch (noCorsError) {
      console.error('❌ Ошибка отправки с no-cors:', noCorsError);
      toast({
        title: "Ошибка отправки!",
        description: "Не удалось отправить заявку. Пожалуйста, попробуйте еще раз или свяжитесь с нами напрямую.",
        variant: "destructive",
      });
    }
  } finally {
    setIsSubmitting(false);
  }
};

  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-blue-50 to-purple-50" id="diagnostic">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8 sm:mb-12 lg:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 text-gray-800 leading-tight">
            Записаться на бесплатный урок
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-gray-600 mb-3 sm:mb-4 px-2">
            Узнайте уровень английского вашего ребёнка за 30 минут — бесплатно!
          </p>
          <p className="text-sm sm:text-base lg:text-lg text-[#FF6B00] font-semibold px-2">
            🎁 Диагностика + персональные рекомендации для обучения
          </p>
        </div>

        <div className="max-w-md mx-auto">
          <Card className="border-0 shadow-2xl">
            <CardHeader className="bg-gradient-to-r from-[#FF6B00] to-orange-500 text-white text-center p-4 sm:p-6">
              <CardTitle className="text-lg sm:text-xl lg:text-2xl font-bold">Заполните форму</CardTitle>
              
              {/* Progress Bar */}
              <div className="mt-3 sm:mt-4">
                <div className="w-full bg-[#E0E0E0] rounded-full h-2">
                  <div 
                    className="bg-[#FFBD69] h-2 rounded-full transition-all duration-300 ease-out"
                    style={{ width: getProgressWidth() }}
                  ></div>
                </div>
                <p className="text-white/80 text-xs sm:text-sm mt-2">Шаг {currentStep} из {TOTAL_STEPS}</p>
              </div>
            </CardHeader>
            <CardContent className="p-4 sm:p-6 lg:p-8">
              <div className="space-y-4 sm:space-y-6">
                {/* Шаг 1: Имя родителя */}
                {shouldShowField(1) && (
                  <div className={`transition-all duration-500 ${currentStep === 1 ? 'animate-fade-in' : ''}`}>
                    <Label 
                      htmlFor="parentName" 
                      className={`text-sm sm:text-base font-medium cursor-pointer ${currentStep > 1 ? 'hover:text-[#FF6B00]' : ''}`}
                      onClick={() => goToStep(1)}
                    >
                      Имя родителя * {isFieldCompleted(1) && (
                        <span className="text-green-500 ml-2">✓</span>
                      )}
                    </Label>
                    <Input
                      id="parentName"
                      type="text"
                      placeholder="Ваше имя"
                      value={formData.parentName}
                      onChange={(e) => handleTextInput('parentName', e.target.value, 1)}
                      onBlur={() => handleTextBlur(1)}
                      onKeyPress={(e) => handleKeyPress(e, 1)}
                      onFocus={() => goToStep(1)}
                      className="mt-2 text-sm sm:text-base lg:text-lg p-3 sm:p-4"
                      readOnly={!isFieldEditable(1)}
                      required
                    />
                  </div>
                )}

                {/* Шаг 2: Возраст ребёнка */}
                {shouldShowField(2) && (
                  <div className={`transition-all duration-500 ${currentStep === 2 ? 'animate-fade-in' : ''}`}>
                    <Label 
                      htmlFor="childAge" 
                      className={`text-sm sm:text-base font-medium cursor-pointer ${currentStep > 2 ? 'hover:text-[#FF6B00]' : ''}`}
                      onClick={() => goToStep(2)}
                    >
                      Возраст ребёнка * {isFieldCompleted(2) && (
                        <span className="text-green-500 ml-2">✓</span>
                      )}
                    </Label>
                    <Input
                      id="childAge"
                      type="number"
                      min="8"
                      max="11"
                      placeholder="Возраст (8-11 лет)"
                      value={formData.childAge}
                      onChange={(e) => handleTextInput('childAge', e.target.value, 2)}
                      onBlur={() => handleTextBlur(2)}
                      onKeyPress={(e) => handleKeyPress(e, 2)}
                      onFocus={() => goToStep(2)}
                      className="mt-2 text-sm sm:text-base lg:text-lg p-3 sm:p-4"
                      readOnly={!isFieldEditable(2)}
                      required
                    />
                  </div>
                )}

                {/* Шаг 3: Класс */}
                {shouldShowField(3) && (
                  <div className={`transition-all duration-500 ${currentStep === 3 ? 'animate-fade-in' : ''}`}>
                    <Label 
                      className={`text-sm sm:text-base font-medium cursor-pointer ${currentStep > 3 ? 'hover:text-[#FF6B00]' : ''}`}
                      onClick={() => goToStep(3)}
                    >
                      Класс * {isFieldCompleted(3) && (
                        <span className="text-green-500 ml-2">✓</span>
                      )}
                    </Label>
                    <Select 
                      onValueChange={(value) => handleSelectChange('grade', value, 3)} 
                      value={formData.grade}
                      disabled={!isFieldEditable(3)}
                      required
                      onOpenChange={(open) => {
                        if (open) {
                          goToStep(3);
                        }
                      }}
                    >
                      <SelectTrigger 
                        className="mt-2 text-sm sm:text-base lg:text-lg p-3 sm:p-4"
                        onClick={() => {
                          goToStep(3);
                          // Дополнительная проверка: если уже есть значение, но мы на 3 шаге
                          if (formData.grade && currentStep === 3) {
                            setTimeout(() => {
                              advanceToNextStep(3);
                            }, 500);
                          }
                        }}
                      >
                        <SelectValue placeholder="Выберите класс" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem 
                          value="2кл"
                          onClick={() => {
                            handleInputChange('grade', '2кл');
                            setTimeout(() => advanceToNextStep(3), 100);
                          }}
                        >
                          2 кл.
                        </SelectItem>
                        <SelectItem 
                          value="3кл"
                          onClick={() => {
                            handleInputChange('grade', '3кл');
                            setTimeout(() => advanceToNextStep(3), 100);
                          }}
                        >
                          3 кл.
                        </SelectItem>
                        <SelectItem 
                          value="4кл"
                          onClick={() => {
                            handleInputChange('grade', '4кл');
                            setTimeout(() => advanceToNextStep(3), 100);
                          }}
                        >
                          4 кл.
                        </SelectItem>
                        <SelectItem 
                          value="5кл"
                          onClick={() => {
                            handleInputChange('grade', '5кл');
                            setTimeout(() => advanceToNextStep(3), 100);
                          }}
                        >
                          5 кл.
                        </SelectItem>
                      </SelectContent>
                    </Select>
                    
                    {/* Дополнительная кнопка продолжения для шага 3, если пользователь выбрал класс */}
                    {currentStep === 3 && formData.grade && (
                      <Button
                        onClick={() => advanceToNextStep(3)}
                        className="mt-3 w-full bg-[#FF6B00] hover:bg-[#FF6B00]/90 text-white"
                        size="sm"
                      >
                        Продолжить ▶
                      </Button>
                    )}
                  </div>
                )}

                {/* Шаг 4: Телефон */}
                {shouldShowField(4) && (
                  <div className={`transition-all duration-500 ${currentStep === 4 ? 'animate-fade-in' : ''}`}>
                    <Label 
                      htmlFor="phone" 
                      className={`text-sm sm:text-base font-medium cursor-pointer ${currentStep > 4 ? 'hover:text-[#FF6B00]' : ''}`}
                      onClick={() => goToStep(4)}
                    >
                      Телефон * {isFieldCompleted(4) && (
                        <span className="text-green-500 ml-2">✓</span>
                      )}
                    </Label>
                    <Input
                      id="phone"
                      type="tel"
                      placeholder="+7 (999) 123-45-67"
                      value={formData.phone}
                      onChange={(e) => handlePhoneChange(e.target.value)}
                      onBlur={handlePhoneBlur}
                      onKeyPress={(e) => handleKeyPress(e, 4)}
                      onFocus={() => goToStep(4)}
                      className="mt-2 text-sm sm:text-base lg:text-lg p-3 sm:p-4"
                      readOnly={!isFieldEditable(4)}
                      required
                    />
                  </div>
                )}

                {/* Шаг 5: Способ связи */}
                {shouldShowField(5) && (
                  <div className={`transition-all duration-500 ${currentStep === 5 ? 'animate-fade-in' : ''}`}>
                    <Label 
                      className={`text-sm sm:text-base font-medium cursor-pointer ${currentStep > 5 ? 'hover:text-[#FF6B00]' : ''}`}
                      onClick={() => goToStep(5)}
                    >
                      Способ связи * {isFieldCompleted(5) && (
                        <span className="text-green-500 ml-2">✓</span>
                      )}
                    </Label>
                    <RadioGroup 
                      value={formData.contactMethod} 
                      onValueChange={(value) => handleRadioChange('contactMethod', value, 5)}
                      className="mt-2"
                      disabled={!isFieldEditable(5)}
                    >
                      <div 
                        className="flex items-center space-x-2 cursor-pointer"
                        onClick={() => {
                          if (isFieldEditable(5)) {
                            goToStep(5);
                            handleRadioChange('contactMethod', 'whatsapp', 5);
                          }
                        }}
                      >
                        <RadioGroupItem value="whatsapp" id="whatsapp" disabled={!isFieldEditable(5)} />
                        <Label htmlFor="whatsapp" className="cursor-pointer">WhatsApp</Label>
                      </div>
                      <div 
                        className="flex items-center space-x-2 cursor-pointer"
                        onClick={() => {
                          if (isFieldEditable(5)) {
                            goToStep(5);
                            handleRadioChange('contactMethod', 'telegram', 5);
                          }
                        }}
                      >
                        <RadioGroupItem value="telegram" id="telegram" disabled={!isFieldEditable(5)} />
                        <Label htmlFor="telegram" className="cursor-pointer">Telegram</Label>
                      </div>
                    </RadioGroup>
                    
                    {/* Дополнительная кнопка продолжения для шага 5, если пользователь выбрал способ связи */}
                    {currentStep === 5 && formData.contactMethod && (
                      <Button
                        onClick={() => advanceToNextStep(5)}
                        className="mt-3 w-full bg-[#FF6B00] hover:bg-[#FF6B00]/90 text-white"
                        size="sm"
                      >
                        Продолжить ▶
                      </Button>
                    )}
                  </div>
                )}

                {/* Шаг 6: Соглашение на обработку данных */}
                {shouldShowField(6) && (
                  <div className={`transition-all duration-500 ${currentStep === 6 ? 'animate-fade-in' : ''}`}>
                    <div className="flex items-start space-x-2">
                      <Checkbox 
                        id="privacy"
                        checked={formData.privacyAgreement}
                        onCheckedChange={(checked) => handleCheckboxChange(checked)}
                        className="mt-1"
                        disabled={!isFieldEditable(6)}
                      />
                      <Label htmlFor="privacy" className="text-sm leading-relaxed cursor-pointer">
                        Я прочитал(а){' '}
                        <a 
                          href="https://docs.google.com/document/d/1vSm3Qa4KRj57nwiaGAovM57ltrvIZk46ywCoCTrnXok/edit?usp=sharing"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-[#FF6B00] hover:underline"
                        >
                          Политику конфиденциальности
                        </a>
                        {' '}и даю согласие на обработку персональных данных *
                      </Label>
                    </div>
                  </div>
                )}
              </div>

              {/* Кнопка отправки показывается только когда все шаги пройдены */}
              {currentStep >= TOTAL_STEPS && (
                <Button
                  onClick={handleSubmit}
                  disabled={!isFormValid() || isSubmitting}
                  className="w-full mt-8 btn-primary bg-[#FF6B00] hover:bg-[#FF6B00]/90 text-white py-3 text-lg font-bold transition-all duration-500 animate-fade-in disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? 'Отправляем...' : 'Получить бесплатный урок и план'}
                </Button>
              )}
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};
