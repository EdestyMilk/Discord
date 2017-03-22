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
		if (message.content.startsWith('http')){
		message.startTyping
		if (message.channel.name === 'general'){
			message.delete()
			message.channel.sendMessage('Salut, '+ message.author + ' Envoie ton message dans la section lien merci')
		}
		else{}
	}
	else{}
		if (message.content == 'Golf With Your Friends Crack'){
			if(message.channel.name === 'jeux'){
			message.channel.sendMessage('http://www.crackedg.com/golf-friends/')
			message.delete()
		}
		}
				if (message.content == 'G.W.Y.F.Crack'){
			if(message.channel.name === 'jeux'){
			message.channel.sendMessage('http://www.crackedg.com/golf-friends/')
			message.delete()
		}
		}
						if (message.content == 'Deceit 2.0 Crack'){
			if(message.channel.name === 'jeux'){
			message.channel.sendMessage('http://igg-games.com/deceit-free-download.html')
			message.delete()
		}
		}
								if (message.content == 'Scrap Mechanic'){
			if(message.channel.name === 'jeux'){
			message.channel.sendMessage('http://www.crackedg.com/scrap-mechanic/')
			message.delete()
		}
		}
					if (message.content == 'Party Panic'){
					if(message.channel.name === 'jeux'){
			message.channel.sendMessage('http://www.crackedg.com/party-panic/')
			message.delete()
		}
		}
							if (message.content == 'Nidhogg'){
					if(message.channel.name === 'jeux'){
			message.channel.sendMessage('http://igg-games.com/nidhogg-free-download.html')
			message.delete()
		}
		}
									if (message.content == 'Slap The Fly'){
					if(message.channel.name === 'jeux'){
			message.channel.sendMessage('http://igg-games.com/slap-the-fly-free-download.html')
			message.delete()
		}
		}
			if(message.content === 'Salut Paul'){
				message.channel.sendMessage("Pourquoi tu m'insulte Fdp, je sais j'ai des tampons dans mes orifices mais me traite pas de paul stp.")
			}
});
bot.login('MjkzMjczMjk4NTA1MTcwOTQ0.C7ELnA.elKqkvsOwdkHqRgbhbAb0RCgV2E');