const Discord = require('discord.js');
const client = new Discord.Client();
console.log("Scrpit By Dream");


client.on("ready", () => {
let channel =     client.channels.get("534437251644653590")
setInterval(function() {
channel.send(`osama osama osama osama  `);
}, 30)
})

client.login(process.env.BOT_TOKEN);
