// Безопасная отправка аналитики
export const trackEvent = {
  // Yandex Metrika
  ym: (counterId: number, goal: string, params?: any) => {
    try {
      if (typeof window !== 'undefined' && typeof (window as any).ym === 'function') {
        (window as any).ym(counterId, 'reachGoal', goal, params);
        console.log(`YM событие отправлено: ${goal}`, params);
      } else {
        console.log(`YM недоступна для события: ${goal}`);
      }
    } catch (error) {
      console.warn('Ошибка YM аналитики:', error);
    }
  },

  // VK Retargeting
  vk: (eventName: string) => {
    try {
      if (typeof window !== 'undefined' && 
          typeof (window as any).VK !== 'undefined' && 
          (window as any).VK.Retargeting && 
          typeof (window as any).VK.Retargeting.Event === 'function') {
        (window as any).VK.Retargeting.Event(eventName);
        console.log(`VK событие отправлено: ${eventName}`);
      } else {
        console.log(`VK Retargeting недоступен для события: ${eventName}`);
      }
    } catch (error) {
      console.warn('Ошибка VK аналитики:', error);
    }
  }
}; 