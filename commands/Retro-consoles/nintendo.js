const Discord = require("discord.js");

module.exports = {
  name: "snes",
    description: "Get some info about Opal",
    category: "info",
    usage: "about",
  run: async(client, message, args) => {

    const bot = new Discord.MessageEmbed()
    .setTitle("SNES")
    .setColor("#c0c0c0")
    .setDescription("Released June 23, 1996, the Nintendo 64, commonly called the N64, and codenamed Ultra 64, was Nintendo's third home video game console for the international market. It was released with three launch games in Japan (Super Mario 64, Pilotwings 64 and Saikyo Habu Shogi) and two in North America (Super Mario 64 and Pilotwings 64). PAL regions also had three launch titles (Super Mario 64, Shadows of the Empire and Pilotwings 64) with Turok: Dinosaur Hunter delayed until three days after launch.")
    .setTimestamp()
    .setFooter(message.guild.name, message.guild.iconURL())
    message.channel.send(bot);
  }
}
