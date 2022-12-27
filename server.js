const TelegramBot = require("node-telegram-bot-api");
const dotenv = require("dotenv");
dotenv.config({ path: `${__dirname}/config.env` });

const bot = new TelegramBot(process.env.Token, { polling: true });

bot.onText(/\/echo (.+)/, (msg, match) => {
  const id = msg.chat.id;
  const resp = match[1];
  bot.sendMessage(id, resp);
});

bot.onText(/\/start/, (msg) => {
  bot.sendMessage(msg.chat.id, "بوی گل محمدی به ربات ما خوش امدی", {
    reply_markup: {
      keyboard: [
        ["وضعیت", "افزودن حجم", "تمدید اشتراک"],
        ["ساخت اکانت جدید"],
        ["خرید"],
      ],
    },
  });
});

bot.onText(/وضعیت/, (msg) => {
  bot.sendMessage(msg.chat.id, "لطفا ایدی خودتان را وارد کنید");
  let id = "1234";
  if (msg.text.toString().toLowerCase().indexOf(id) === 0) {
    bot.sendMessage(
      msg.chat.id,
      "شما تا الان ۵۰ درصد بسته خودرا مصرف کرده اید"
    );
  }
});

bot.on("message", (msg) => {
  const id = msg.chat.id;
});
