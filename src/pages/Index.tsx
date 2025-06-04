import React, { useEffect } from 'react';
import { Hero } from '@/components/Hero';
import { ComparisonTable } from '@/components/ComparisonTable';
import { ProgramTimeline } from '@/components/ProgramTimeline';
import { Testimonials } from '@/components/Testimonials';
import { Pricing } from '@/components/Pricing';
import { FAQ } from '@/components/FAQ';
import { DiagnosticForm } from '@/components/DiagnosticForm';
import { FinalCTA } from '@/components/FinalCTA';
import { Footer } from '@/components/Footer';
import { StickyHeader } from '@/components/StickyHeader';
import { BottomBar } from '@/components/BottomBar';
import { SectionCTA } from '@/components/SectionCTA';

// Новая секция с ключевой информацией
const KeyInfoSection = () => {
  const handleDiagnostic = () => {
    document.getElementById('diagnostic')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="py-12 sm:py-16 bg-gradient-to-br from-blue-50 to-orange-50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-6 sm:gap-8">
            <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-lg">
              <h3 className="text-xl sm:text-2xl font-bold mb-4 text-gray-800">
                🎯 Что получит ваш ребенок?
              </h3>
              <p className="text-gray-700 mb-6 leading-relaxed">
                Запишитесь на первое бесплатное занятие и получите персональный план обучения — без обязательств. Узнайте текущий уровень и индивидуальные потребности.
              </p>
              <button 
                onClick={handleDiagnostic}
                className="bg-[#FF6B00] hover:bg-[#FF6B00]/90 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 hover:scale-105"
              >
                Получить план обучения
              </button>
            </div>

            <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-lg">
              <h3 className="text-xl sm:text-2xl font-bold mb-4 text-gray-800">
                📅 Как проходят занятия
              </h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-[#FF6B00] rounded-full mt-2 flex-shrink-0"></div>
                  <span>Живые онлайн-уроки по 55 минут</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-[#FF6B00] rounded-full mt-2 flex-shrink-0"></div>
                  <span>Мини-группы до 4 детей для активного общения</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-[#FF6B00] rounded-full mt-2 flex-shrink-0"></div>
                  <span>Интерактивные игры и современные технологии</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-[#FF6B00] rounded-full mt-2 flex-shrink-0"></div>
                  <span>Короткие домашние задания 15-20 минут</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Index = () => {
  useEffect(() => {
    // Принудительно прокручиваем к верху страницы при загрузке
    window.scrollTo(0, 0);
    
    // VK Retarget pixel - with proper error handling
    try {
      (window as any).VK = (window as any).VK || {};
      (window as any).VK.Retargeting = (window as any).VK.Retargeting || {};
      
      // Check if Init function exists before calling it
      if (typeof (window as any).VK.Retargeting.Init === 'function') {
        (window as any).VK.Retargeting.Init("VK-RTRG-XXXXXX-XXXXX");
        (window as any).VK.Retargeting.Hit();
      } else {
        console.log('VK Retargeting not yet available');
      }
    } catch (error) {
      console.log('VK Retargeting initialization error:', error);
    }

    // Yandex Metrica - with proper error handling
    try {
      (window as any).ym = (window as any).ym || function(a: any, b: any, c: any, d: any) {
        ((window as any).ym.a = (window as any).ym.a || []).push(arguments);
      };
      (window as any).ym.l = 1 * new Date().getTime();
      const script = document.createElement('script');
      script.async = true;
      script.src = 'https://mc.yandex.ru/metrika/tag.js';
      document.head.appendChild(script);
      
      // Initialize Yandex Metrica
      (window as any).ym(88888888, 'init', {
        clickmap: true,
        trackLinks: true,
        accurateTrackBounce: true,
        webvisor: true
      });

      // Track page view
      (window as any).ym(88888888, 'hit', window.location.href);

      // Track View50 event after page load
      setTimeout(() => {
        (window as any).ym?.(88888888, 'reachGoal', 'View50');
      }, 30000); // 30 seconds
    } catch (error) {
      console.log('Yandex Metrica initialization error:', error);
    }

    // Add smooth scroll behavior
    document.documentElement.style.scrollBehavior = 'smooth';
  }, []);

  return (
    <div className="min-h-screen overflow-x-hidden">
      <StickyHeader />
      <Hero />
      <KeyInfoSection />
      <ComparisonTable />
      <ProgramTimeline />
      <Testimonials />
      <Pricing />
      <FAQ />
      <DiagnosticForm />
      <SectionCTA />
      <FinalCTA />
      <Footer />
      <BottomBar />
    </div>
  );
};

export default Index;
