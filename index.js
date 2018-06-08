const Discord = require("discord.js")
const TOKEN = "NDQwMTU5OTE5NjgxOTYxOTg0.Dcdqag.QqK9udbyM5PUHTVRv6tRxMMcY7g"
const PREFIX = "-"
const msg = 'message'
const { version } = require("discord.js")

const client = new Discord.Client();



client.on("ready", function() {
  console.log(`Dutch Roleplay Clan bot is online!`)

  client.user.setStatus(`Online`);
  client.user.setActivity('Dutch Roleplay Clan', {  type: 'WATCHING'});

})


client.on("message", async message => {
      if (message.author.bot) return;
      if (message.content === 'ReactionTest') {
        message.channel.send('Succesfully!');

}

if(message.content.indexOf(PREFIX) !== 0) return;
const args = message.content.slice(PREFIX.length).trim().split(/ +/g);
const command = args.shift().toLowerCase();

if(command === 'help') {
  const helpEmbed = new Discord.RichEmbed()
  .setDescription("__**Bot Commands:**__")
  .addField(":gear: -help", "==========")
  .addField(":clipboard: -botinfo", "==========")
  .addField("🎥 -youtube", "==========")
  .addField(":desktop: -website", "==========")
  .addField(":open_file_folder: -clanpack", "==========")
  .addField(":pager: -fivem", "==========")
  .addField(":inbox_tray: -inmelden", "==========")
  .addField(":outbox_tray: -uitmelden", "==========")
  .addField(":calendar: -training", "==========")
  return message.channel.send(helpEmbed)
};

if(command === 'botinfo') {

  const embed = new Discord.RichEmbed()
  .setDescription("__**Bot Informatie**__")
  .setColor("#c90000")
  .addField("Bot naam:", "Dutch Roleplay Clan")
  .addField("Gemaakt op:", "29-04-2018")
  .addField("Gemaakt door:", "@Melvin#7592")
  .addField("Prefix:", "-")
  return message.channel.send(embed)

};

if(command === 'youtube') {
  const msg = message.channel.send("https://www.youtube.com/channel/UCOnhAL3_rIQ43-utmr9pzIA")
}

if(command === 'website') {
  const msg = message.channel.send("http://dutchroleplayclan.ga/?i=1")
}
  
if(command === 'clanpack') {
  const msg = message.channel.send("Download hier onze clanpack! http://www.mediafire.com/file/cl310dvcwaee08e/Dutch-Roleplay-Clan.ClanPack-2.0.rar")
}

if(command === 'fivem') {
  const msg = message.channel.send("Het IP van onze FiveM server is: drc-clan.tk")
}

if(command === 'say') {
    if (!message.member.roles.find("name", "BotPerms"))
      return message.reply(':no_entry: Je hebt geen toegang tot dit commando! :no_entry:');
    const sayMessage = args.join("  ");
    const sayEmbed = new Discord.RichEmbed()
    .setColor(0x0B97DE)
    .addField("Nieuwe Melding!", sayMessage)
    .addField("\n\nGeschreven door:", `${message.author.username}`)     .setTimestamp()
    message.delete().catch(O_o=>{});
    message.channel.send(sayEmbed)
}

if(command === 'survie') {
  if (!message.member.roles.find("name", "BotPerms"))
    return message.reply(':no_entry: Je hebt geen toegang tot dit commando! :no_entry:');
    const sayMessage = args.join("  ");
    const msg = message.channel.send("@everyone Er zal zo een survie zijn, zorg dat je erbij bent!")
    message.delete()
}

if(command === 'inmelden') {
    const msg = message.reply(`je bent nu ingemeld voor de Rolelay!`)
}

if(command === 'uitmelden') {
    const msg = message.reply(`je bent nu uitgemeld voor de Rolelay!`)
}

if(command === 'training') {
  let rUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
  if(!rUser) return message.channel.send(":warning: Geen geldig aanvraag! @Voorbeeld, Categorie, Datum.");
  let wreason = args.join("  ").slice(22);

  let reportEmbed = new Discord.RichEmbed()
  .setColor("#ff0800")
  .addField("__**Theorie Training**__", `**Training aanvraag door:** ${rUser}\n\n**Aanvraag ingestuurd in:** ${message.channel}\n\n**Categorie | Datum:** ${wreason}\n\n`)
  .addField("Copyright\n", "Dutch Roleplay Clan© Copyright 2018 - 2019")
  let logs = message.guild.channels.find(`name`, "trainingen");
  if(!logs) return message.channel.send("Ik kan dit kanaal niet vinden.");

  message.delete().catch(O_o=>{});
  const msg = message.channel.send("Je aanvraag in ingediend, een van onze IBT instructeurs zullen jou een training geven! (Zorg dat je aanwezig bent!)")
  console.log(`========================\nAlert!\n========================\nEr is een nieuw report binnengekomen!\nReported door: ${message.author.username}\n========================\n`)
  logs.send(reportEmbed);

  return;

}

if(command === 'ptraining') {0
  if (!message.member.roles.find("name", "BotPerms"))
    return message.reply(':no_entry: Je hebt geen toegang tot dit commando! :no_entry:');
    let wreason = args.join("  ").slice(22);
  let rUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
  if(!rUser) return message.channel.send(":warning: Geen geldig aanvraag! @Voorbeeld, Categorie, Datum.");


  let reportEmbed = new Discord.RichEmbed()
  .setColor("#ff0800")
  .addField("__**Praktijk Training**__", `**Training aanvraag door:** ${rUser}\n\n**Aanvrag ingestuurd in:** ${message.channel}\n\n**Categorie | Datum:** ${wreason}\n\n`)
  .addField("Copyright\n", "Dutch Roleplay Clan© Copyright 2018 - 2019")
  let logs = message.guild.channels.find(`name`, "trainingen");
  if(!logs) return message.channel.send("Ik kan de logs channel niet vinden.");

  message.delete().catch(O_o=>{});
  const msg = message.channel.send("Je aanvraag in ingediend, een van onze IBT instructeurs zullen jou een training geven! (Zorg dat je aanwezig bent!)")
  console.log(`========================\nAlert!\n========================\nEr is een nieuw report binnengekomen!\nReported door: ${message.author.username}\n========================\n`)
  logs.send(reportEmbed);

  return;

}

if(command === 'bug') {
  let wreason = args.join("  ").slice(22);
  if(!rUser) return message.channel.send(":warning: Vul een bug in!");

  let bugEmbed = new Discord.RichEmbed()
  .setColor("#ff0800")
  .addField("__**Nieuwe Bug**__", `**Bug**: ${wreason}\n\n Door: ${rUser}`)
  let logs = message.guild.channels.find(`name`, "bugs");
  if(!logs) return message.channel.send("Ik kan de logs channel niet vinden.");

  message.delete().catch(O_o=>{});
  const msg = message.channel.send("Bedank, je bug is gemeld!")
  logs.send(bugEmbed);

  return;
}
  
});
client.login(TOKEN);
