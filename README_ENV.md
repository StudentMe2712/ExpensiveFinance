# 🔧 Настройка переменных окружения

## Создание .env файла

Создайте файл `.env` в корне проекта со следующим содержимым:

```bash
# Database - Neon PostgreSQL
DATABASE_URL="postgresql://neondb_owner:npg_2NCTrVw3RPaj@ep-dark-tooth-adac7ukk-pooler.c-2.us-east-1.aws.neon.tech/neondb?sslmode=require&channel_binding=require"

# Telegram Bot Configuration  
TELEGRAM_BOT_TOKEN="8275935313:AAEJ6O8HN_6r6X-XRzzRpuWwb8jC883yn8o"
TELEGRAM_CHAT_ID="YOUR_CHAT_ID_HERE"

# Next.js Configuration
NEXTAUTH_SECRET="expensive-finance-secret-key-2024"
NEXTAUTH_URL="http://localhost:3002"

# Email Configuration (optional)
EMAIL_HOST=""
EMAIL_PORT=""
EMAIL_USER=""
EMAIL_PASS=""
ADMIN_EMAIL=""
```

## 🤖 Получение Telegram Chat ID

Для работы уведомлений нужно получить ваш Chat ID:

### Способ 1: Через бота
1. Напишите боту `@userinfobot` команду `/start`
2. Скопируйте ваш `Id` (например: `123456789`)
3. Замените `YOUR_CHAT_ID_HERE` на ваш ID

### Способ 2: Через группу/канал
1. Добавьте бота в группу/канал
2. Дайте боту права администратора
3. Получите ID группы через `@userinfobot`
4. ID группы будет начинаться с `-` (например: `-1001234567890`)

### Способ 3: Через API
Отправьте сообщение боту, затем откройте:
```
https://api.telegram.org/bot8275935313:AAEJ6O8HN_6r6X-XRzzRpuWwb8jC883yn8o/getUpdates
```

## 🚀 Запуск проекта

После создания .env файла:

```bash
npm run dev -- -p 3002
```

Проект будет доступен на: http://localhost:3002

## 🗄️ База данных

Проект настроен на работу с **Neon PostgreSQL** - serverless PostgreSQL база данных с автоматическим масштабированием.

Преимущества Neon:
- ✅ Serverless архитектура
- ✅ Автоматическое масштабирование  
- ✅ Branching для тестирования
- ✅ Бесплатный tier до 0.5GB
- ✅ Совместимость с Prisma ORM
