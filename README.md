# 💰 Expensive Finance

Современный веб-сайт для кредитного брокера с автоматизированной системой обработки заявок.

## 🚀 Особенности

- **🎨 Современный дизайн** - сине-голубая цветовая схема в стиле крупных банков
- **📱 Responsive** - адаптивный дизайн для всех устройств
- **🎭 WOW анимации** - плавные эффекты при скролле страницы
- **🎠 Интерактивный слайдер** - с тематическими изображениями услуг
- **🧮 Кредитный калькулятор** - с интерактивными слайдерами
- **🤖 Telegram интеграция** - автоматические уведомления о новых заявках
- **🗄️ PostgreSQL база данных** - надежное хранение данных через Neon
- **📞 Казахстанские номера** - валидация для +7 (777/707) xxx-xx-xx
- **💰 Валюта в тенге** - все суммы в KZT

## 🛠️ Технологии

- **Frontend**: Next.js 15, React, TypeScript
- **Styling**: Tailwind CSS с кастомными анимациями
- **Database**: PostgreSQL (Neon)
- **ORM**: Prisma
- **Validation**: Zod + React Hook Form
- **Notifications**: Telegram Bot API
- **Deployment**: Ready for Vercel/Netlify

## 📋 Установка

1. **Клонируйте репозиторий:**
   ```bash
   git clone https://github.com/StudentMe2712/ExpensiveFinance.git
   cd ExpensiveFinance
   ```

2. **Установите зависимости:**
   ```bash
   npm install
   ```

3. **Настройте переменные окружения:**
   ```bash
   cp env.example .env
   ```
   
   Отредактируйте `.env` файл:
   ```bash
   # Database - PostgreSQL
   DATABASE_URL="your_postgresql_connection_string"
   
   # Telegram Bot Configuration
   TELEGRAM_BOT_TOKEN="your_bot_token"
   TELEGRAM_CHAT_ID="your_chat_id"
   
   # Next.js Configuration
   NEXTAUTH_SECRET="your_secret_key"
   NEXTAUTH_URL="http://localhost:3002"
   ```

4. **Настройте базу данных:**
   ```bash
   npx prisma migrate dev
   npx prisma generate
   ```

5. **Запустите сервер:**
   ```bash
   npm run dev -- -p 3002
   ```

## 🎯 Структура проекта

```
src/
├── app/                    # Next.js App Router
│   ├── api/               # API endpoints
│   │   └── applications/  # Заявки
│   ├── about/            # Страница "О компании"
│   ├── services/         # Страница "Услуги"
│   └── page.tsx          # Главная страница
├── components/           # React компоненты
│   ├── AnimatedSection.tsx
│   ├── ApplicationForm.tsx
│   ├── ChatbotButton.tsx
│   ├── CreditCalculator.tsx
│   ├── ServicesSlider.tsx
│   └── ...
├── hooks/                # Custom hooks
│   └── useScrollAnimation.ts
└── lib/                  # Утилиты
    └── validations.ts
```

## 🤖 Telegram Bot

Для получения уведомлений о новых заявках:

1. **Создайте бота** через @BotFather
2. **Получите токен** бота
3. **Получите ваш Chat ID** через @userinfobot
4. **Добавьте переменные** в `.env` файл

## 🗄️ База данных

Проект использует **Neon PostgreSQL** - serverless база данных с автоматическим масштабированием.

**Схема данных:**
- `Application` - заявки на кредит
- `Content` - контент страниц
- `News` - новости

## 🎨 Дизайн

- **Цветовая схема**: Сине-голубая палитра (primary/accent)
- **Анимации**: Fade-in, slide-up, scale-in эффекты
- **Hover эффекты**: Glow, scale, shadow анимации
- **Декоративные элементы**: Dots, grid, waves фоны

## 📱 Адаптивность

- **Mobile First** подход
- **Breakpoints**: sm, md, lg, xl
- **Touch-friendly** интерфейс
- **Оптимизированные изображения**

## 🚀 Деплой

### Vercel (рекомендуется)
1. Подключите GitHub репозиторий
2. Добавьте переменные окружения
3. Деплой автоматический

### Netlify
1. Подключите репозиторий
2. Настройте build команду: `npm run build`
3. Добавьте переменные окружения

## 📞 Поддержка

- **Email**: info@expensive-finance.com
- **Telegram**: @ExpensiveFinanceBot
- **Phone**: +7 (777) 123-45-67

## 📄 Лицензия

MIT License - см. файл [LICENSE](LICENSE)

---

**Создано с ❤️ для Expensive Finance**