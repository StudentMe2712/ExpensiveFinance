const TelegramBot = require('node-telegram-bot-api');
const axios = require('axios');

// Конфигурация
const BOT_TOKEN = process.env.TELEGRAM_BOT_TOKEN || '8275935313:AAEJ6O8HN_6r6X-XRzzRpuWwb8jC883yn8o';
const WEBSITE_URL = process.env.WEBSITE_URL || 'https://expensive-finance.vercel.app';

// Создание бота
const bot = new TelegramBot(BOT_TOKEN, { polling: true });

// Состояния пользователей
const userStates = new Map();

// Главное меню
const mainMenu = {
  reply_markup: {
    keyboard: [
      ['💰 Кредиты', '🏦 Депозиты'],
      ['📊 Калькулятор', '📞 Контакты'],
      ['ℹ️ О компании', '🌐 Наш сайт']
    ],
    resize_keyboard: true,
    one_time_keyboard: false
  }
};

// Кредитное меню
const creditMenu = {
  reply_markup: {
    keyboard: [
      ['🚀 Экспресс кредит', '🏠 Ипотека'],
      ['🚗 Автокредит', '💼 Бизнес кредит'],
      ['🔙 Назад в меню']
    ],
    resize_keyboard: true,
    one_time_keyboard: false
  }
};

// Депозитное меню
const depositMenu = {
  reply_markup: {
    keyboard: [
      ['📈 Рахмет депозит', '💎 Премиум депозит'],
      ['📅 Срочный депозит', '🔄 Пополняемый'],
      ['🔙 Назад в меню']
    ],
    resize_keyboard: true,
    one_time_keyboard: false
  }
};

// Обработка команды /start
bot.onText(/\/start/, (msg) => {
  const chatId = msg.chat.id;
  const firstName = msg.from.first_name;
  
  const welcomeMessage = `
👋 Привет, ${firstName}!

Добро пожаловать в Expensive Finance! 
Я помогу вам с финансовыми вопросами.

Выберите интересующий вас раздел:
  `;
  
  bot.sendMessage(chatId, welcomeMessage, mainMenu);
});

// Обработка текстовых сообщений
bot.on('message', (msg) => {
  const chatId = msg.chat.id;
  const text = msg.text;
  const userId = msg.from.id;
  
  // Сохраняем состояние пользователя
  if (!userStates.has(userId)) {
    userStates.set(userId, 'main');
  }
  
  const userState = userStates.get(userId);
  
  switch (text) {
    case '💰 Кредиты':
      userStates.set(userId, 'credits');
      bot.sendMessage(chatId, '💳 Выберите тип кредита:', creditMenu);
      break;
      
    case '🏦 Депозиты':
      userStates.set(userId, 'deposits');
      bot.sendMessage(chatId, '🏦 Выберите тип депозита:', depositMenu);
      break;
      
    case '📊 Калькулятор':
      bot.sendMessage(chatId, 
        `🧮 Для расчета кредита перейдите на наш сайт:\n\n${WEBSITE_URL}/#credit-calculator\n\nТам вы найдете удобный калькулятор с интерактивными слайдерами!`,
        {
          reply_markup: {
            inline_keyboard: [[
              { text: '🌐 Открыть калькулятор', url: `${WEBSITE_URL}/#credit-calculator` }
            ]]
          }
        }
      );
      break;
      
    case '📞 Контакты':
      bot.sendMessage(chatId, 
        `📞 Наши контакты:\n\n📱 Телефон: +7 (777) 123-45-67\n📧 Email: info@expensive-finance.com\n💬 WhatsApp: +7 (777) 123-45-67\n📱 Telegram: @expensive_finance\n\n🕐 Работаем: 9:00 - 21:00 (ежедневно)`,
        {
          reply_markup: {
            inline_keyboard: [
              [{ text: '📞 Позвонить', url: 'tel:+77771234567' }],
              [{ text: '💬 WhatsApp', url: 'https://wa.me/77771234567' }],
              [{ text: '📧 Email', url: 'mailto:info@expensive-finance.com' }]
            ]
          }
        }
      );
      break;
      
    case 'ℹ️ О компании':
      bot.sendMessage(chatId, 
        `🏢 О компании Expensive Finance:\n\n✅ Лицензированная финансовая организация\n✅ Работаем с 2018 года\n✅ Более 10,000 довольных клиентов\n✅ Одобрение кредита за 24 часа\n✅ Индивидуальный подход к каждому клиенту\n\n🎯 Наша миссия - помочь каждому получить необходимые финансовые услуги!`,
        {
          reply_markup: {
            inline_keyboard: [[
              { text: '🌐 Подробнее на сайте', url: `${WEBSITE_URL}/about` }
            ]]
          }
        }
      );
      break;
      
    case '🌐 Наш сайт':
      bot.sendMessage(chatId, 
        `🌐 Добро пожаловать на наш сайт!\n\nТам вы найдете:\n• 📊 Кредитный калькулятор\n• 📋 Онлайн заявки\n• 📈 Актуальные ставки\n• 📞 Контактную информацию\n\nПереходите и изучайте наши услуги!`,
        {
          reply_markup: {
            inline_keyboard: [[
              { text: '🌐 Открыть сайт', url: WEBSITE_URL }
            ]]
          }
        }
      );
      break;
      
    // Кредитные продукты
    case '🚀 Экспресс кредит':
      bot.sendMessage(chatId, 
        `🚀 Экспресс кредит:\n\n💰 Сумма: до 3,000,000 ₸\n⏰ Срок: до 36 месяцев\n📊 Ставка: от 13,10% годовых\n⚡ Одобрение: за 24 часа\n\n✅ Без справок о доходах\n✅ Онлайн заявка\n✅ Быстрое решение\n\nХотите подать заявку?`,
        {
          reply_markup: {
            inline_keyboard: [
              [{ text: '📋 Подать заявку', url: `${WEBSITE_URL}/#application` }],
              [{ text: '🧮 Рассчитать платеж', url: `${WEBSITE_URL}/#credit-calculator` }]
            ]
          }
        }
      );
      break;
      
    case '🏠 Ипотека':
      bot.sendMessage(chatId, 
        `🏠 Ипотечный кредит:\n\n💰 Сумма: до 50,000,000 ₸\n⏰ Срок: до 25 лет\n📊 Ставка: от 8,50% годовых\n🏡 Первоначальный взнос: от 20%\n\n✅ Низкая ставка\n✅ Долгосрочный период\n✅ Государственная поддержка\n✅ Страхование в подарок\n\nИнтересует ипотека?`,
        {
          reply_markup: {
            inline_keyboard: [
              [{ text: '📋 Подать заявку', url: `${WEBSITE_URL}/#application` }],
              [{ text: '🧮 Рассчитать платеж', url: `${WEBSITE_URL}/#credit-calculator` }]
            ]
          }
        }
      );
      break;
      
    case '🚗 Автокредит':
      bot.sendMessage(chatId, 
        `🚗 Автокредит:\n\n💰 Сумма: до 15,000,000 ₸\n⏰ Срок: до 7 лет\n📊 Ставка: от 9,90% годовых\n🚙 Без первоначального взноса\n\n✅ Быстрое оформление\n✅ Страховка в подарок\n✅ Выгодные условия\n✅ Широкий выбор авто\n\nГотовы купить автомобиль?`,
        {
          reply_markup: {
            inline_keyboard: [
              [{ text: '📋 Подать заявку', url: `${WEBSITE_URL}/#application` }],
              [{ text: '🧮 Рассчитать платеж', url: `${WEBSITE_URL}/#credit-calculator` }]
            ]
          }
        }
      );
      break;
      
    case '💼 Бизнес кредит':
      bot.sendMessage(chatId, 
        `💼 Кредит для бизнеса:\n\n💰 Сумма: до 100,000,000 ₸\n⏰ Срок: до 5 лет\n📊 Ставка: от 12,50% годовых\n💼 Льготный период: до 6 месяцев\n\n✅ Без залога\n✅ Индивидуальный подход\n✅ Быстрое решение\n✅ Гибкие условия\n\nРазвивайте бизнес с нами!`,
        {
          reply_markup: {
            inline_keyboard: [
              [{ text: '📋 Подать заявку', url: `${WEBSITE_URL}/#application` }],
              [{ text: '🧮 Рассчитать платеж', url: `${WEBSITE_URL}/#credit-calculator` }]
            ]
          }
        }
      );
      break;
      
    // Депозитные продукты
    case '📈 Рахмет депозит':
      bot.sendMessage(chatId, 
        `📈 Рахмет депозит:\n\n💰 Минимальная сумма: 100,000 ₸\n⏰ Срок: 3, 6, 12 месяцев\n📊 Ставка: до 17,80% годовых\n💎 Пополняемый депозит\n\n✅ Высокий процент\n✅ Гибкие условия\n✅ Надежная защита\n✅ Ежемесячные выплаты\n\nНачните копить уже сегодня!`,
        {
          reply_markup: {
            inline_keyboard: [
              [{ text: '📋 Открыть депозит', url: `${WEBSITE_URL}/#application` }],
              [{ text: '🧮 Рассчитать доход', url: `${WEBSITE_URL}/#credit-calculator` }]
            ]
          }
        }
      );
      break;
      
    case '🔙 Назад в меню':
      userStates.set(userId, 'main');
      bot.sendMessage(chatId, '🏠 Главное меню:', mainMenu);
      break;
      
    default:
      // Если пользователь написал что-то неожиданное
      if (userState === 'credits') {
        bot.sendMessage(chatId, 'Выберите тип кредита из меню ниже:', creditMenu);
      } else if (userState === 'deposits') {
        bot.sendMessage(chatId, 'Выберите тип депозита из меню ниже:', depositMenu);
      } else {
        bot.sendMessage(chatId, 
          `🤔 Не понимаю ваш запрос. Используйте меню ниже или напишите /start для перезапуска.`,
          mainMenu
        );
      }
      break;
  }
});

// Обработка ошибок
bot.on('polling_error', (error) => {
  console.error('Polling error:', error);
});

bot.on('error', (error) => {
  console.error('Bot error:', error);
});

console.log('🤖 Telegram Bot запущен и готов к работе!');
console.log('📱 Бот: @ExpensiveFinanceBot');
console.log('🌐 Сайт:', WEBSITE_URL);

module.exports = bot;
