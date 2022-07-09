const aoijs = require("aoi.js")
const app = require("express")();
const aoijs = require("aoi.js");
const Database = require("@replit/database");
const db = new Database();
app.get("/",(req,res) => {
  res.send("AtakhaNN")
}).listen(8080, () => {
  console.log("Bot, 7/24 için hazır.")
})

 const bot = new aoijs.Bot({
   token: process.env.token,
   prefix: "$getGlobalUserVar[prefix]",
   intents: "all"
 });
const loader = new aoijs.LoadCommands(bot)
 loader.load(bot.cmd,"./komutlar/")

bot.onMessage()

bot.command({
name: "ping",
code: `Pong! $pingms`
})

bot.readyCommand({
    channel: "",
    code: `$log[Bot Aktif Edildi! $userTag[$clientID]]`
})

bot.status({
  text: "AtakhaNN#9614",
  type: "PLAYING",
  time: 12
})

bot.variables({
   degisken:"deger",
   degisken2:"deger"
})
