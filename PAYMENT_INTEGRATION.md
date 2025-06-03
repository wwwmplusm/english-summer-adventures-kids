# Интеграция платежной системы

## Текущее состояние

Сейчас в проекте создана базовая страница оплаты (`/payment`), которая:
- Принимает параметры URL: `plan` (full/weekly) и UTM-метки
- Отображает информацию о выбранном тарифе
- Собирает контактные данные пользователя
- Показывает заглушку вместо реальной оплаты

## Следующие шаги для интеграции

### 1. Выбрать платежную систему

**Рекомендуемые варианты для России:**
- **ЮKassa** (Сбербанк) - самый популярный
- **CloudPayments** - хорошая альтернатива
- **Тинькофф Эквайринг** - если есть счет в Тинькофф

### 2. Интеграция с ЮKassa (пример)

1. Зарегистрируйтесь на [yookassa.ru](https://yookassa.ru)
2. Получите `shopId` и `secretKey`
3. Установите SDK:
```bash
npm install @yookassa/sdk
```

4. Создайте backend API для создания платежей:
```javascript
// backend/api/create-payment.js
const { YooCheckout } = require('@yookassa/sdk');

const checkout = new YooCheckout({
  shopId: 'ваш_shop_id',
  secretKey: 'ваш_secret_key'
});

exports.createPayment = async (req, res) => {
  const { amount, description, returnUrl } = req.body;
  
  const payment = await checkout.createPayment({
    amount: {
      value: amount,
      currency: 'RUB'
    },
    description,
    confirmation: {
      type: 'redirect',
      return_url: returnUrl
    }
  });
  
  res.json({ confirmationUrl: payment.confirmation.confirmation_url });
};
```

### 3. Обновить компонент Payment

Замените в файле `src/pages/Payment.tsx` функцию `handleSubmit`:

```typescript
const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();
  
  const planInfo = getPlanInfo();
  const amount = planType === 'weekly' ? '3990.00' : '23990.00';
  
  try {
    const response = await fetch('/api/create-payment', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        amount,
        description: `Оплата курса: ${planInfo.title}`,
        returnUrl: `${window.location.origin}/payment-success`
      })
    });
    
    const { confirmationUrl } = await response.json();
    window.location.href = confirmationUrl;
  } catch (error) {
    console.error('Ошибка создания платежа:', error);
    alert('Ошибка при создании платежа. Попробуйте еще раз.');
  }
};
```

### 4. Создать страницы успеха и ошибки

Создайте компоненты:
- `src/pages/PaymentSuccess.tsx` - успешная оплата
- `src/pages/PaymentError.tsx` - ошибка оплаты

### 5. Настроить webhook для подтверждения оплат

Создайте endpoint для обработки уведомлений от платежной системы:
```javascript
// backend/api/payment-webhook.js
exports.handleWebhook = async (req, res) => {
  const { event, object } = req.body;
  
  if (event === 'payment.succeeded') {
    // Обновить статус заказа в базе данных
    // Отправить письмо клиенту
    // Добавить в Google Sheets через ваш gas-script.js
  }
  
  res.status(200).json({ received: true });
};
```

## Переменные окружения

Добавьте в `.env`:
```
YOOKASSA_SHOP_ID=ваш_shop_id
YOOKASSA_SECRET_KEY=ваш_secret_key
```

## Тестирование

1. Используйте тестовые ключи для разработки
2. Проверьте все сценарии: успешная оплата, отмена, ошибка
3. Убедитесь, что webhook правильно обрабатывает уведомления

## Безопасность

- Никогда не храните секретные ключи в frontend коде
- Всегда проверяйте подпись webhook-уведомлений
- Используйте HTTPS для всех запросов 