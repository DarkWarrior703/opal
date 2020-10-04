const Discord = require("discord.js");

module.exports = {
  name: "xbox",
    description: "Get some info about Opal",
    category: "info",
    usage: "about",
  run: async(client, message, args) => {

    const bot = new Discord.MessageEmbed()
    .setTitle("Xbox")
    .setColor("#c0c0c0")
    .setDescription("Xbox is a video game console manufactured by Microsoft. It was released on November 15, 2001 in North America, February 22, 2002 in Japan, and March 14, 2002 in Australia and Europe. It was Microsoft's first foray into the gaming console market. As part of the sixth-generation of gaming, the Xbox competed with Sony's PlayStation 2, Sega's Dreamcast (which stopped American sales before the Xbox went on sale), and Nintendo's GameCube.")
    .setTimestamp()
    .setFooter(message.guild.name, message.guild.iconURL())
    message.channel.send(bot);
  }
}
