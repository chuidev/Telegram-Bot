const TelegramBot = require('node-telegram-bot-api')

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

bot.on('message', (msg) => {
    const { id } = msg.chat

    bot.sendMessage(id, debug(msg))
        .then(() => {
            console.log('Message has been send')
        })
        .catch((error) => {
            console.error(error)
        })

})

function debug(obj = {}) {
    return JSON.stringify(obj, null, 4)
}