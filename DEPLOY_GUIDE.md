# 🚀 Руководство по деплою сайта

## Подготовка к деплою

Перед деплоем убедитесь, что:
1. Все изменения сохранены и загружены в Git
2. Проект собирается локально без ошибок:
```bash
npm run build
```

## 1. 🟢 Vercel (Рекомендуется)

**Самый простой способ!**

### Автодеплой из GitHub:
1. Зайдите на [vercel.com](https://vercel.com)
2. Нажмите "Continue with GitHub"
3. Выберите репозиторий `english-summer-adventures-kids`
4. Нажмите "Deploy"
5. ✅ Готово! Сайт будет доступен по адресу `https://ваш-проект.vercel.app`

### Ручной деплой:
1. Установите Vercel CLI: `npm i -g vercel`
2. В папке проекта выполните: `vercel`
3. Следуйте инструкциям

**Настройки Vercel:**
- Build Command: `npm run build`
- Output Directory: `dist`
- Install Command: `npm ci`

---

## 2. 🟡 Netlify

### Способ 1: Drag & Drop
1. Соберите проект: `npm run build`
2. Зайдите на [netlify.com](https://netlify.com)
3. Перетащите папку `dist` на страницу деплоя
4. ✅ Готово!

### Способ 2: Автодеплой из Git
1. Подключите GitHub репозиторий
2. Настройки:
   - Build command: `npm run build`
   - Publish directory: `dist`

---

## 3. 🔵 GitHub Pages (Бесплатно)

### Настройка:
1. Зайдите в Settings репозитория на GitHub
2. Pages → Source → GitHub Actions
3. Коммитите файл `.github/workflows/deploy.yml` (уже создан)
4. ✅ Сайт будет доступен по адресу: `https://username.github.io/english-summer-adventures-kids/`

### Для кастомного домена:
1. В Settings → Pages → Custom domain введите ваш домен
2. Создайте файл `public/CNAME` с содержимым:
```
yourdomain.com
```

---

## 4. 🟠 Российские хостинги (Timeweb, Reg.ru, Beget)

### Подготовка файлов:
1. Соберите проект:
```bash
npm run build
```

2. Скачайте содержимое папки `dist`

### Загрузка на хостинг:
1. Подключитесь к хостингу через FTP/файловый менеджер
2. Загрузите все файлы из папки `dist` в корень сайта (обычно `public_html` или `www`)
3. Убедитесь, что файл `index.html` находится в корне

### Настройка Apache (.htaccess):
Создайте файл `.htaccess` в корне сайта:
```apache
<IfModule mod_rewrite.c>
  RewriteEngine On
  
  # Handle Angular and Vue.js client-side routing
  RewriteBase /
  RewriteRule ^index\.html$ - [L]
  RewriteCond %{REQUEST_FILENAME} !-f
  RewriteCond %{REQUEST_FILENAME} !-d
  RewriteRule . /index.html [L]
</IfModule>

# Gzip compression
<IfModule mod_deflate.c>
  AddOutputFilterByType DEFLATE text/plain
  AddOutputFilterByType DEFLATE text/html
  AddOutputFilterByType DEFLATE text/xml
  AddOutputFilterByType DEFLATE text/css
  AddOutputFilterByType DEFLATE application/xml
  AddOutputFilterByType DEFLATE application/xhtml+xml
  AddOutputFilterByType DEFLATE application/rss+xml
  AddOutputFilterByType DEFLATE application/javascript
  AddOutputFilterByType DEFLATE application/x-javascript
</IfModule>

# Cache static assets
<IfModule mod_expires.c>
  ExpiresActive on
  ExpiresByType text/css "access plus 1 year"
  ExpiresByType application/javascript "access plus 1 year"
  ExpiresByType image/png "access plus 1 year"
  ExpiresByType image/jpg "access plus 1 year"
  ExpiresByType image/jpeg "access plus 1 year"
  ExpiresByType image/gif "access plus 1 year"
  ExpiresByType image/svg+xml "access plus 1 year"
</IfModule>
```

### Настройка Nginx:
Если у вас Nginx, добавьте в конфигурацию:
```nginx
location / {
  try_files $uri $uri/ /index.html;
}
```

---

## 5. 🎯 Проверка после деплоя

После деплоя проверьте:
- [ ] Главная страница загружается
- [ ] Формы работают (отправка в Google Sheets)
- [ ] Переходы по страницам работают
- [ ] Страница оплаты `/payment` доступна
- [ ] Мобильная версия корректно отображается

## 🐛 Возможные проблемы

### 404 на внутренних страницах:
- Убедитесь, что настроен routing для SPA
- Проверьте `.htaccess` или конфигурацию Nginx

### Белый экран:
- Проверьте консоль браузера на ошибки
- Убедитесь, что путь `base` в vite.config.ts правильный

### Формы не работают:
- Проверьте CORS настройки в Google Apps Script
- Убедитесь, что URL Google Script правильный

## 📞 Поддержка

Если возникли проблемы:
1. Проверьте логи билда
2. Откройте консоль браузера
3. Проверьте Network tab для ошибок API

## 🔄 Автоматические обновления

### Vercel/Netlify:
Автоматически обновляются при пуше в main ветку

### GitHub Pages:
Обновляются через GitHub Actions при пуше

### Обычный хостинг:
Нужно вручную пересобирать и загружать файлы 