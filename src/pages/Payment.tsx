import React, { useEffect, useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { ArrowLeft, Check, CreditCard, Smartphone } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export const Payment = () => {
  const navigate = useNavigate();
  const [planType, setPlanType] = useState<string>('');
  const [formData, setFormData] = useState({
    email: '',
    name: '',
    phone: ''
  });

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const plan = urlParams.get('plan') || 'full';
    setPlanType(plan);
  }, []);

  const getPlanInfo = () => {
    switch (planType) {
      case 'weekly':
        return {
          title: 'Оплата по неделям',
          price: '3 990 ₽',
          description: '2 урока в неделю',
          features: ['Гибкость оплаты', 'Возможность паузы', 'Платите только за посещения']
        };
      default:
        return {
          title: 'Весь курс',
          price: '23 990 ₽',
          description: '16 уроков (8 недель)',
          features: ['Экономия 8 000 ₽', 'Гарантия результата', 'Сертификат об окончании']
        };
    }
  };

  const planInfo = getPlanInfo();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Временная заглушка - в будущем здесь будет интеграция с платежной системой
    alert('Функция оплаты будет добавлена в ближайшее время. Пожалуйста, свяжитесь с нами для оформления оплаты.');
    
    // Перенаправляем на главную страницу к форме диагностики
    navigate('/#diagnostic');
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50 py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Кнопка назад */}
          <Button
            onClick={() => navigate('/')}
            variant="outline"
            className="mb-8 border-[#FF6B00] text-[#FF6B00] hover:bg-[#FF6B00] hover:text-white"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Вернуться на главную
          </Button>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* Информация о курсе */}
            <Card className="border-0 shadow-xl">
              <CardHeader className="bg-gradient-to-r from-[#FF6B00] to-orange-500 text-white">
                <CardTitle className="text-2xl font-bold">{planInfo.title}</CardTitle>
                <p className="text-white/90">{planInfo.description}</p>
              </CardHeader>
              <CardContent className="p-6">
                <div className="text-center mb-6">
                  <div className="text-4xl font-bold text-[#FF6B00] mb-2">
                    {planInfo.price}
                  </div>
                  {planType === 'full' && (
                    <Badge className="bg-green-500 text-white">
                      Экономия 8 000 ₽
                    </Badge>
                  )}
                </div>

                <div className="space-y-3 mb-6">
                  {planInfo.features.map((feature, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <Check className="w-5 h-5 text-green-500" />
                      <span className="text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>

                <div className="bg-blue-50 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-800 mb-2">Что входит:</h4>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• Интерактивные уроки английского</li>
                    <li>• Игровой формат обучения</li>
                    <li>• Домашние задания и проверка</li>
                    <li>• Сертификат об окончании</li>
                    <li>• Поддержка преподавателя</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            {/* Форма оплаты */}
            <Card className="border-0 shadow-xl">
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-gray-800">
                  Оформление оплаты
                </CardTitle>
                <p className="text-gray-600">
                  Заполните данные для связи с вами
                </p>
              </CardHeader>
              <CardContent className="p-6">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Ваше имя *
                    </label>
                    <Input
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="Введите ваше имя"
                      required
                      className="border-gray-300"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Email *
                    </label>
                    <Input
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="your@email.com"
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
                      type="tel"
                      value={formData.phone}
                      onChange={handleInputChange}
                      placeholder="+7 (999) 123-45-67"
                      required
                      className="border-gray-300"
                    />
                  </div>

                  <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
                    <h4 className="font-semibold text-yellow-800 mb-2">
                      Способы оплаты:
                    </h4>
                    <div className="space-y-2 text-sm text-yellow-700">
                      <div className="flex items-center gap-2">
                        <CreditCard className="w-4 h-4" />
                        <span>Банковская карта</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Smartphone className="w-4 h-4" />
                        <span>СБП (Система быстрых платежей)</span>
                      </div>
                    </div>
                  </div>

                  <Button
                    type="submit"
                    className="w-full bg-[#FF6B00] hover:bg-[#FF6B00]/90 text-white py-3 text-lg font-bold rounded-lg"
                  >
                    Перейти к оплате {planInfo.price}
                  </Button>

                  <p className="text-xs text-gray-500 text-center">
                    Нажимая кнопку, вы соглашаетесь с{' '}
                    <a href="#" className="text-[#FF6B00] hover:underline">
                      договором оферты
                    </a>{' '}
                    и{' '}
                    <a href="#" className="text-[#FF6B00] hover:underline">
                      политикой конфиденциальности
                    </a>
                  </p>
                </form>
              </CardContent>
            </Card>
          </div>

          {/* Преимущества */}
          <Card className="mt-8 border-0 shadow-lg bg-gradient-to-r from-green-50 to-blue-50">
            <CardContent className="p-6">
              <div className="text-center">
                <h3 className="text-2xl font-bold text-gray-800 mb-4">
                  🛡️ Гарантия качества
                </h3>
                <p className="text-gray-600 mb-4">
                  Мы уверены в качестве наших уроков! Если вас что-то не устроит, 
                  мы вернем деньги за неиспользованные занятия.
                </p>
                <div className="flex justify-center items-center gap-8 text-sm text-gray-600">
                  <div className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-green-500" />
                    <span>Возврат в течение 14 дней</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-green-500" />
                    <span>Безопасная оплата</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-green-500" />
                    <span>Поддержка 24/7</span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}; 