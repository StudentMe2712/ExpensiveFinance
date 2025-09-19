# 🚀 Деплой на Vercel

## ✅ Проект готов к деплою!

### 📋 Проверки пройдены:
- ✅ **Build успешен** - проект собирается без ошибок
- ✅ **TypeScript** - все типы корректны
- ✅ **Dependencies** - все зависимости установлены
- ✅ **API routes** - работают корректно
- ✅ **Database** - Neon PostgreSQL настроен
- ✅ **Images** - домены добавлены в next.config.js

## 🔧 Шаги для деплоя:

### 1. Подключение к Vercel
1. Зайдите на [vercel.com](https://vercel.com)
2. Войдите через GitHub
3. Нажмите "New Project"
4. Выберите репозиторий `StudentMe2712/ExpensiveFinance`

### 2. Настройка переменных окружения
В Vercel Dashboard → Settings → Environment Variables добавьте:

```bash
# Database
DATABASE_URL = postgresql://neondb_owner:npg_2NCTrVw3RPaj@ep-dark-tooth-adac7ukk-pooler.c-2.us-east-1.aws.neon.tech/neondb?sslmode=require&channel_binding=require

# Telegram Bot
TELEGRAM_BOT_TOKEN = 8275935313:AAEJ6O8HN_6r6X-XRzzRpuWwb8jC883yn8o
TELEGRAM_CHAT_ID = 549168650

# Next.js
NEXTAUTH_SECRET = expensive-finance-secret-key-2024
NEXTAUTH_URL = https://your-domain.vercel.app
```

### 3. Настройки проекта
- **Framework Preset**: Next.js
- **Build Command**: `npm run build` (автоматически)
- **Output Directory**: `.next` (автоматически)
- **Install Command**: `npm install` (автоматически)

### 4. Деплой
1. Нажмите "Deploy"
2. Дождитесь завершения сборки
3. Получите URL вашего сайта

## 🗄️ База данных

**Neon PostgreSQL уже настроена:**
- ✅ Connection string готов
- ✅ Миграции применены
- ✅ Prisma Client сгенерирован
- ✅ Таблицы созданы

## 🤖 Telegram Bot

**Бот уже настроен:**
- ✅ Токен: `8275935313:AAEJ6O8HN_6r6X-XRzzRpuWwb8jC883yn8o`
- ✅ Chat ID: `549168650`
- ✅ Уведомления работают

## 📱 Домены изображений

**Добавлены в next.config.js:**
- ✅ `localhost` - для разработки
- ✅ `images.unsplash.com` - для слайдера услуг

## 🔍 Проверка после деплоя

1. **Откройте сайт** по полученному URL
2. **Проверьте формы** - заполните тестовую заявку
3. **Проверьте Telegram** - должно прийти уведомление
4. **Проверьте анимации** - скролл эффекты должны работать

## 🚨 Возможные проблемы

### Build ошибки:
- Проверьте что все переменные окружения добавлены
- Убедитесь что DATABASE_URL корректный

### Telegram не работает:
- Проверьте TELEGRAM_BOT_TOKEN и TELEGRAM_CHAT_ID
- Убедитесь что бот активен

### База данных:
- Проверьте подключение к Neon
- Убедитесь что миграции применены

## 🎯 Результат

После успешного деплоя:
- ✅ Сайт доступен по HTTPS URL
- ✅ Заявки сохраняются в PostgreSQL
- ✅ Уведомления приходят в Telegram
- ✅ Все функции работают в production

## 📞 Поддержка

Если возникнут проблемы:
1. Проверьте логи в Vercel Dashboard
2. Убедитесь что все переменные окружения добавлены
3. Проверьте статус Neon базы данных
4. Проверьте активность Telegram бота
