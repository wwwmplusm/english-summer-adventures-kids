@echo off
chcp 65001 >nul

echo 🚀 Начинаем деплой...

:: Проверяем, что мы в правильной директории
if not exist package.json (
    echo ❌ Ошибка: package.json не найден. Запустите скрипт из корня проекта.
    pause
    exit /b 1
)

:: Собираем проект
echo 📦 Собираем проект...
call npm run build

if %errorlevel% neq 0 (
    echo ❌ Ошибка сборки!
    pause
    exit /b 1
)

echo ✅ Проект собран успешно!
echo.
echo 📋 Следующие шаги:
echo 1. Откройте папку dist
echo 2. Выделите все файлы и создайте ZIP архив
echo 3. Загрузите содержимое архива на ваш хостинг в корневую папку
echo 4. Убедитесь, что файл .htaccess загружен
echo.
echo 📁 Путь к файлам: %cd%\dist
echo.

:: Открываем папку dist
start explorer dist

pause 