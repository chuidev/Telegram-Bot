const TelegramBot = require('node-telegram-bot-api')
// const debug = require('./helper')

const TOKEN = '6461428063:AAGbMVgofSto6gK3KuV3Lk-d5XFD_cPvpDs'

console.log('Бот запущен')

const bot = new TelegramBot(TOKEN, {
    polling: {
        interval: 300,
        autoStart: true,
        params: {
            timeout: 10
        }
    }
})

/* Обработка сообщений */
// bot.on('message', (msg) => {
//     const { id } = msg.chat

//     bot.sendMessage(id, debug(msg))
//         .then(() => {
//             console.log('Message has been send')
//         })
//         .catch((error) => {
//             console.error(error)
//         })

// }) 

/* Обработка команд 
bot.onText(/\/start/, msg => {
    const { id } = msg.chat

    bot.sendMessage(id, debug(msg))
})

bot.onText(/\/help (.+)/, (msg, [source, match]) => {
    const { id } = msg.chat

    bot.sendMessage(id, debug(match))
}) */

// bot.on('message', msg => {

//     const html = '<b>Hello</b><i> test message</i> <code>hello</code>'
    
//     bot.sendMessage(msg.chat.id, html, {
//         parse_mode: 'HTML'
//     })

// })

// bot.on('message', msg => {

//     // const markdown = '*Hello, ' + msg.from.first_name + '*_italic text_'
    
//     bot.sendMessage(msg.chat.id, 'https://www.youtube.com/watch?v=sCE9CpJLpo8&list=PLhgRAQ8BwWFaxlkNNtO0NDPmaVO9txRg8&index=12', {
//         // disable_web_page_preview: true
//     })

// })

// bot.on('message', msg => {
    
//     const chatID = msg.chat.id

//     if (msg.text === 'Закрыть') {

//         bot.sendMessage(chatID, 'Закрываю клавиатуру', {
//             reply_markup: {
//                 remove_keyboard: true
//             }
//         })

//     } else if (msg.text === 'Ответить') {

//         bot.sendMessage(chatID, 'Отвечаю', {
//             reply_markup: {
//                 force_reply: true
//             }
//         })
        
//     } else {
//         bot.sendMessage(chatID, 'Клавиатура', {
//             reply_markup: {
//                 keyboard: [
//                     [{
//                         text: 'Отправить местоположение',
//                         request_location: true
//                     }],
//                     ['Ответить', 'Закрыть'],
//                     [{
//                         text: 'Отправить контакт',
//                         request_contact: true
//                     }]
//                 ],
//                 one_time_keyboard: true
//             }
//         })
//     }
    
    

// })

bot.on('message', msg => {

    const chatID = msg.chat.id

    bot.sendMessage(chatID, 'Inline keyboard', {
        reply_markup: {
            inline_keyboard: [
                [
                    {
                        text: 'Google',
                        url: 'https://www.google.ru/?hl=ru'
                    }
                ],
                [
                    {
                        text: 'Reply',
                        callback_data: 'reply'
                    },
                    {
                        text: 'Forward',
                        callback_data: 'forward'
                    }
                ]
            ]
        }
    })
})

bot.on('callback_query', query => {
    // bot.sendMessage(query.message.chat.id, debug(query))
    bot.answerCallbackQuery(query.id, '$(query.data)')
})

function debug(obj = {}) {
    return JSON.stringify(obj, null, 4)
}