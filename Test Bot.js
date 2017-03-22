const Discord = require('discord.js');

// create an instance of a Discord Client, and call it bot
const bot = new Discord.Client();

// the token of your bot - https://discordapp.com/developers/applications/me
const token = 'MjkzMjczMjk4NTA1MTcwOTQ0.C7ELnA.elKqkvsOwdkHqRgbhbAb0RCgV2E';

// the ready event is vital, it means that your bot will only start reacting to information
// from Discord _after_ ready is emitted.
bot.on('ready', () => {
  console.log('I am ready!');
});

bot.on('message', message =>{
	if (message.startWith === 'http'){
		if (channel.guild === 'general'){
			message.delete()
			message.reply('Salut, ${msg.author} Envoie ton message dans la section lien merci')
		}
		else{}
	}
	else{}
});