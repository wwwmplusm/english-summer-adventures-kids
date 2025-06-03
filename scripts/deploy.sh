#!/bin/bash

# Скрипт для деплоя на обычный хостинг

echo "🚀 Начинаем деплой..."

# Проверяем, что мы в правильной директории
if [ ! -f "package.json" ]; then
    echo "❌ Ошибка: package.json не найден. Запустите скрипт из корня проекта."
    exit 1
fi

# Собираем проект
echo "📦 Собираем проект..."
npm run build

if [ $? -ne 0 ]; then
    echo "❌ Ошибка сборки!"
    exit 1
fi

# Создаем архив для загрузки
echo "📁 Создаем архив..."
cd dist
zip -r ../website.zip .
cd ..

echo "✅ Готово!"
echo ""
echo "📋 Следующие шаги:"
echo "1. Скачайте файл website.zip"
echo "2. Распакуйте его на вашем хостинге в корневую папку (public_html или www)"
echo "3. Убедитесь, что файл .htaccess загружен"
echo ""
echo "🌐 Адрес архива: $(pwd)/website.zip" 