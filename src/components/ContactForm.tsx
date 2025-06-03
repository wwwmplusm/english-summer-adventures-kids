import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent } from '@/components/ui/card';
import { Gift, CheckCircle } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

export const ContactForm = () => {
  const [formData, setFormData] = useState({
    parentName: '',
    childName: '',
    childAge: '',
    phone: '',
    email: '',
    message: ''
  });
  const { toast } = useToast();

const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();
  
  // Используем правильный URL для Google Apps Script
  const googleSheetURL = 'https://script.google.com/macros/s/AKfycbwk9B4gDAtuQU9Az3qI28llG48ap4P1cYKd-xs11Y1PFriLBZOCSg37nW05hd2hOb4K/exec';

  console.log('Отправляем данные ContactForm:', formData);

  try {
    // Создаем FormData объект для лучшей совместимости с Google Apps Script
    const formDataToSend = new FormData();
    formDataToSend.append('parentName', formData.parentName);
    formDataToSend.append('childName', formData.childName);
    formDataToSend.append('childAge', formData.childAge);
    formDataToSend.append('phone', formData.phone);
    formDataToSend.append('email', formData.email);
    formDataToSend.append('message', formData.message);

    const response = await fetch(googleSheetURL, {
      method: 'POST',
      body: formDataToSend,
    });

    // Проверяем статус ответа
    console.log('Статус ответа:', response.status, response.statusText);
    
    if (response.ok) {
      const responseData = await response.text();
      console.log('Ответ от сервера:', responseData);
      
      toast({
        title: "Заявка отправлена!",
        description: "Мы свяжемся с вами в течение 24 часов.",
      });

      // Сброс формы после успешной отправки
      setFormData({
        parentName: '',
        childName: '',
        childAge: '',
        phone: '',
        email: '',
        message: ''
      });
    } else {
      throw new Error(`HTTP ${response.status}: ${response.statusText}`);
    }

  } catch (error) {
    console.error('Ошибка отправки формы:', error);
    
    // Попытка отправки с no-cors как запасной вариант
    try {
      console.log('Пробуем отправить с no-cors...');
      const formDataToSend = new FormData();
      formDataToSend.append('parentName', formData.parentName);
      formDataToSend.append('childName', formData.childName);
      formDataToSend.append('childAge', formData.childAge);
      formDataToSend.append('phone', formData.phone);
      formDataToSend.append('email', formData.email);
      formDataToSend.append('message', formData.message);

      await fetch(googleSheetURL, {
        method: 'POST',
        mode: 'no-cors',
        body: formDataToSend,
      });
      
      console.log('Отправка с no-cors выполнена');
      toast({
        title: "Заявка отправлена!",
        description: "Мы свяжемся с вами в течение 24 часов.",
      });

      // Сброс формы
      setFormData({
        parentName: '',
        childName: '',
        childAge: '',
        phone: '',
        email: '',
        message: ''
      });

    } catch (noCorsError) {
      console.error('Ошибка отправки с no-cors:', noCorsError);
      toast({
        title: "Ошибка отправки!",
        description: "Не удалось отправить заявку. Пожалуйста, попробуйте еще раз или свяжитесь с нами напрямую.",
        variant: "destructive",
      });
    }
  }
};

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact-form" className="py-20 bg-gradient-to-br from-blue-600 via-purple-600 to-pink-500">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
            Запишитесь на пробный урок!
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Первый урок - бесплатно! Проведем диагностику уровня и ответим на все вопросы!
          </p>
        </div>

        <div className="max-w-4xl mx-auto grid lg:grid-cols-2 gap-8">
          <Card className="border-0 shadow-2xl animate-fade-in">
            <CardContent className="p-8">
              <div className="flex items-center gap-3 mb-6">
                <Gift className="w-8 h-8 text-purple-600" />
                <h3 className="text-2xl font-bold text-gray-800">Бесплатный пробный урок</h3>
              </div>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Имя родителя *
                    </label>
                    <Input
                      name="parentName"
                      value={formData.parentName}
                      onChange={handleChange}
                      placeholder="Ваше имя"
                      required
                      className="border-gray-300"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Имя ребенка *
                    </label>
                    <Input
                      name="childName"
                      value={formData.childName}
                      onChange={handleChange}
                      placeholder="Имя ребенка"
                      required
                      className="border-gray-300"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Возраст ребенка *
                    </label>
                    <Input
                      name="childAge"
                      value={formData.childAge}
                      onChange={handleChange}
                      placeholder="Возраст (7-11 лет)"
                      required
                      className="border-gray-300"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Телефон *
                    </label>
                    <Input
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+7 (___) ___-__-__"
                      required
                      className="border-gray-300"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Email *
                  </label>
                  <Input
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="your@email.com"
                    required
                    className="border-gray-300"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Вопросы и пожелания
                  </label>
                  <Textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Расскажите об уровне английского ребенка, ваших вопросах или пожеланиях..."
                    rows={4}
                    className="border-gray-300"
                  />
                </div>

                <Button 
                  type="submit" 
                  className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-bold py-3 text-lg rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  Записаться на бесплатный пробный урок
                </Button>
              </form>
            </CardContent>
          </Card>

          <div className="space-y-6 animate-fade-in" style={{animationDelay: '0.3s'}}>
            <Card className="border-0 bg-white/10 backdrop-blur-md text-white">
              <CardContent className="p-6">
                <div className="flex items-center gap-4 mb-4">
                  <CheckCircle className="w-6 h-6" />
                  <h4 className="text-lg font-semibold">Что включает пробный урок</h4>
                </div>
                <ul className="text-white/90 space-y-2">
                  <li>• Диагностика уровня английского</li>
                  <li>• Знакомство с форматом занятий</li>
                  <li>• Ответы на все ваши вопросы</li>
                  <li>• Рекомендации по обучению</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-0 bg-white/10 backdrop-blur-md text-white">
              <CardContent className="p-6">
                <div className="flex items-center gap-4 mb-4">
                  <Gift className="w-6 h-6" />
                  <h4 className="text-lg font-semibold">Почему стоит попробовать</h4>
                </div>
                <ul className="text-white/90 space-y-2">
                  <li>• Убедитесь, что формат подходит</li>
                  <li>• Познакомьтесь с преподавателем</li>
                  <li>• Увидите реакцию ребенка</li>
                  <li>• Получите честную оценку уровня</li>
                </ul>
              </CardContent>
            </Card>

            <div className="bg-yellow-400 rounded-lg p-6 text-center">
              <h4 className="text-xl font-bold text-gray-800 mb-2">Специальное предложение!</h4>
              <p className="text-gray-800">
                При записи до 1 июня - скидка 15% на весь курс!
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
