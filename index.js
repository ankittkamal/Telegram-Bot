const { Telegraf } = require("telegraf");
const { message } = require("telegraf/filters");
require("dotenv").config();
const bot = new Telegraf(process.env.BOT_TOKEN);
try {
  bot.start((ctx) => ctx.reply("Welcome to Ankit Bot")); // start
  bot.help((ctx) => ctx.reply("Send me a sticker"));
  bot.on(message("sticker"), (ctx) => ctx.reply("🚀"));
  bot.hears("hi", (ctx) => ctx.reply("Heya human"));
  //   bot.command("quit", async (ctx) => {
  //     // Explicit usage
  //     await ctx.telegram.leaveChat(ctx.message.chat.id);

  //     // Using context shortcut
  //     await ctx.leaveChat();
  //   });
  bot.on(message("text"), (ctx) => ctx.reply(`I don't know you`));
  bot.launch();
} catch {
  console.log(`unexpeted command`);
}
