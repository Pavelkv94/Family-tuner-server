import TelegramBot from "node-telegram-bot-api";
import { userService } from "../features/users/users.service.mjs";
import { helloMessage } from "../contants/constants.mjs";

const token = process.env.TG_BOT_TOKEN;

if (!token) {
  throw new Error("Telegram Bot Token not provided");
}
const bot = new TelegramBot(token, { polling: true });

const handleStartCommand = async (chatId, first_name, username) => {
  const isUserExist = await userService.findUser(chatId);

  const webAppUrl = `${process.env.WEB_APP_URL}/${chatId}`;

  if (!isUserExist) {
    await userService.addUser({
      chatId,
      first_name,
      username,
    });
  }

  await bot.sendMessage(chatId, helloMessage, {
    reply_markup: {
      keyboard: [[{ text: "🔥 Listen radio", web_app: { url: webAppUrl } }, { text: "🔄 Reload bot" }]],
      resize_keyboard: true,
    },
  });
};

export const runBot = () => {
  bot.on("message", async (msg) => {
    const text = msg.text;
    const chatId = msg.chat.id;
    const first_name = msg.from.first_name;
    const username = msg.from.username;

    try {
      if (text === "/start") {
        await handleStartCommand(chatId, first_name, username);
      } else if (text === "🔄 Reload bot") {
        await handleStartCommand(chatId, first_name, username);
      }
    } catch (e) {
      console.log(e);
      return bot.sendMessage(chatId, "Something was wrong");
    }
  });
};
