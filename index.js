const aoijs = require("aoi.js")

const bot = new aoijs.Bot({
token: "token",
prefix: "prefix",
intents: ["GUILDS", "GUILD_MESSAGES"]
})

bot.onMessage()

bot.command({
name: "ping",
code: `Pong! $pingms`
})

bot.readyCommand({
    channel: "",
    code: `$log[Bot Aktif Edildi! $userTag[$clientID]]`
})
