const Discord = require("discord.js")
require("dotenv").config()

const TOKEN = "OTUxNzc3OTczNzM5MDYxMjU4.YisaUA.KkurA23NcFn45_wUYdeINhdDv6g"

const client = new Discord.Client({
    intents: [
        "GUILDS",
        "GUILD_MESSAGES",
        "GUILD_MEMBERS"
    ]
})

client.on("ready", () => {
    console.log(`Logged in as ${client.user.tag}`)
})

client.on("messageCreate",(message) => {
    if (message.content === "hi"){
        message.reply("hello")
    }
})

const welcomeChannelId = "951787419596910594"

client.on("guildMemberAdd", (member) => {
    member.guild.channels.cache.get(welcomeChannelId).send(`<@${member.id}>Welcome to the server!`)

})

client.login(process.env.TOKEN)