import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Check, Clock, Users, Trophy, Star } from 'lucide-react';
import { trackEvent } from "@/lib/analytics";

export const FinalCTA = () => {
  const handleDiagnostic = () => {
    // Плавный скролл к форме заявки
    document.getElementById('diagnostic')?.scrollIntoView({ behavior: 'smooth' });
    
    // Analytics
    trackEvent.ym(88888888, 'Scroll_To_Form_Final');
    trackEvent.vk('scroll_to_form_final');
  };

  const handlePayment = () => {
    const utmParams = new URLSearchParams(window.location.search).toString();
    window.open(`/payment?plan=full${utmParams ? `&${utmParams}` : ''}`, '_blank');
    
    // Analytics
    trackEvent.ym(88888888, 'Purchase');
    trackEvent.vk('payment_final_click');
  };

  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-[#FF6B00] via-orange-500 to-red-500 relative overflow-hidden" id="final-cta">
      {/* Декоративные элементы */}
      <div className="absolute inset-0 bg-black/10"></div>
      <div className="absolute top-0 left-0 w-64 h-64 bg-white/5 rounded-full -translate-x-32 -translate-y-32"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-white/5 rounded-full translate-x-48 translate-y-48"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          
          {/* Основной заголовок */}
          <div className="text-center mb-8 sm:mb-12">
            <Badge className="bg-white/20 text-white border-white/30 mb-4 px-4 py-2 text-sm font-semibold">
              ПОСЛЕДНИЙ ШАНС НА ЛЕТО 2024
            </Badge>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-4 sm:mb-6 text-white leading-tight px-2">
              Пока другие тратят лето впустую,
              <br className="hidden sm:block" />
              <span className="sm:hidden"> </span>
              <span className="text-yellow-200">ваш ребёнок начинает говорить по-английски</span>
            </h2>
            
            <p className="text-lg sm:text-xl lg:text-2xl text-white/90 mb-6 sm:mb-8 px-2 max-w-4xl mx-auto">
              Подарите своим детям <strong>полезные каникулы</strong> с гарантированным результатом
            </p>
          </div>

          {/* Статистика и преимущества */}
          <div className="grid md:grid-cols-3 gap-4 sm:gap-6 mb-8 sm:mb-12">
            <Card className="bg-white/10 backdrop-blur-sm border-white/20 text-white">
              <CardContent className="p-4 sm:p-6 text-center">
                <Users className="w-8 h-8 sm:w-12 sm:h-12 mx-auto mb-3 text-yellow-200" />
                <div className="text-2xl sm:text-3xl font-bold mb-2">500+</div>
                <p className="text-white/90 text-sm sm:text-base">Детей уже заговорили по-английски</p>
              </CardContent>
            </Card>
            
            <Card className="bg-white/10 backdrop-blur-sm border-white/20 text-white">
              <CardContent className="p-4 sm:p-6 text-center">
                <Clock className="w-8 h-8 sm:w-12 sm:h-12 mx-auto mb-3 text-yellow-200" />
                <div className="text-2xl sm:text-3xl font-bold mb-2">8 недель</div>
                <p className="text-white/90 text-sm sm:text-base">До уверенного общения на английском</p>
              </CardContent>
            </Card>
            
            <Card className="bg-white/10 backdrop-blur-sm border-white/20 text-white">
              <CardContent className="p-4 sm:p-6 text-center">
                <Trophy className="w-8 h-8 sm:w-12 sm:h-12 mx-auto mb-3 text-yellow-200" />
                <div className="text-2xl sm:text-3xl font-bold mb-2">97%</div>
                <p className="text-white/90 text-sm sm:text-base">Родителей рекомендуют нас друзьям</p>
              </CardContent>
            </Card>
          </div>

          {/* Что получит ребенок */}
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 sm:p-8 mb-8 sm:mb-12 border border-white/20">
            <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-white mb-6 text-center">
              Что получит ваш ребёнок за эти 8 недель:
            </h3>
            
            <div className="grid sm:grid-cols-2 gap-4 sm:gap-6">
              <div className="space-y-3 sm:space-y-4">
                <div className="flex items-start gap-3">
                  <Check className="w-5 h-5 sm:w-6 sm:h-6 text-yellow-200 flex-shrink-0 mt-0.5" />
                  <span className="text-white text-sm sm:text-base">
                    <strong>Уверенное общение</strong> на английском языке
                  </span>
                </div>
                <div className="flex items-start gap-3">
                  <Check className="w-5 h-5 sm:w-6 sm:h-6 text-yellow-200 flex-shrink-0 mt-0.5" />
                  <span className="text-white text-sm sm:text-base">
                    <strong>Словарный запас</strong> 300+ новых слов
                  </span>
                </div>
                <div className="flex items-start gap-3">
                  <Check className="w-5 h-5 sm:w-6 sm:h-6 text-yellow-200 flex-shrink-0 mt-0.5" />
                  <span className="text-white text-sm sm:text-base">
                    <strong>Правильное произношение</strong> без акцента
                  </span>
                </div>
                <div className="flex items-start gap-3">
                  <Check className="w-5 h-5 sm:w-6 sm:h-6 text-yellow-200 flex-shrink-0 mt-0.5" />
                  <span className="text-white text-sm sm:text-base">
                    <strong>Любовь к английскому</strong> на всю жизнь
                  </span>
                </div>
              </div>
              
              <div className="space-y-3 sm:space-y-4">
                <div className="flex items-start gap-3">
                  <Check className="w-5 h-5 sm:w-6 sm:h-6 text-yellow-200 flex-shrink-0 mt-0.5" />
                  <span className="text-white text-sm sm:text-base">
                    <strong>Уверенность в себе</strong> и мотивацию к учёбе
                  </span>
                </div>
                <div className="flex items-start gap-3">
                  <Check className="w-5 h-5 sm:w-6 sm:h-6 text-yellow-200 flex-shrink-0 mt-0.5" />
                  <span className="text-white text-sm sm:text-base">
                    <strong>Новых друзей</strong> из разных стран
                  </span>
                </div>
                <div className="flex items-start gap-3">
                  <Check className="w-5 h-5 sm:w-6 sm:h-6 text-yellow-200 flex-shrink-0 mt-0.5" />
                  <span className="text-white text-sm sm:text-base">
                    <strong>Сертификат</strong> о прохождении курса
                  </span>
                </div>
                <div className="flex items-start gap-3">
                  <Check className="w-5 h-5 sm:w-6 sm:h-6 text-yellow-200 flex-shrink-0 mt-0.5" />
                  <span className="text-white text-sm sm:text-base">
                    <strong>Персональный план</strong> дальнейшего обучения
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Ограниченное предложение */}
          <div className="bg-gradient-to-r from-red-600 to-red-500 rounded-2xl p-6 sm:p-8 mb-8 sm:mb-12 border-2 border-yellow-200">
            <div className="text-center">
              <div className="flex items-center justify-center gap-2 mb-4">
                <Star className="w-6 h-6 text-yellow-200" />
                <Badge className="bg-yellow-200 text-red-600 font-bold px-3 py-1">
                  ОГРАНИЧЕННОЕ ПРЕДЛОЖЕНИЕ
                </Badge>
                <Star className="w-6 h-6 text-yellow-200" />
              </div>
              
              <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-white mb-4">
                Только до 15 июня - скидка 8 000 ₽!
              </h3>
              
              <div className="flex items-center justify-center gap-4 mb-4">
                <div className="text-center">
                  <div className="text-lg sm:text-xl text-white/70 line-through">31 990 ₽</div>
                  <div className="text-xs sm:text-sm text-white/60">обычная цена</div>
                </div>
                <div className="text-4xl sm:text-5xl font-bold text-yellow-200">→</div>
                <div className="text-center">
                  <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-yellow-200">23 990 ₽</div>
                  <div className="text-xs sm:text-sm text-white/80">со скидкой</div>
                </div>
              </div>
              
              <p className="text-white/90 text-sm sm:text-base">
                Всего <strong>1 500 ₽ за урок</strong> вместо 2 000 ₽
              </p>
            </div>
          </div>

          {/* Кнопки действий */}
          <div className="text-center">
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center max-w-2xl mx-auto">
              <Button 
                onClick={handlePayment}
                className="btn-secondary bg-white hover:bg-gray-100 text-[#FF6B00] px-8 sm:px-10 py-4 sm:py-5 text-base sm:text-lg lg:text-xl font-bold rounded-2xl shadow-2xl hover:scale-105 transition-all duration-300 w-full sm:w-auto border-2 border-white"
                size="lg"
              >
                🎯 Записать ребёнка на курс
                <div className="text-sm font-normal mt-1">23 990 ₽ (экономия 8 000 ₽)</div>
              </Button>
              
              <div className="text-white/70 text-sm sm:text-base font-medium">или</div>
              
              <Button 
                onClick={handleDiagnostic}
                variant="outline"
                className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-[#FF6B00] px-8 sm:px-10 py-4 sm:py-5 text-base sm:text-lg lg:text-xl font-bold rounded-2xl shadow-2xl hover:scale-105 transition-all duration-300 w-full sm:w-auto"
                size="lg"
              >
                🎁 Получить бесплатный урок
                <div className="text-sm font-normal mt-1">и персональный план обучения</div>
              </Button>
            </div>
            
            <p className="text-white/80 text-xs sm:text-sm mt-6 max-w-2xl mx-auto">
              💯 <strong>Гарантия возврата денег</strong> за неиспользованные уроки
              <br />
              🔒 <strong>Безопасная оплата</strong> через проверенные платёжные системы
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
