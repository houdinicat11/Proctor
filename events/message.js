const roll = require('../commands/roll');
const addplayer = require('../commands/addplayer');

module.exports = (client, message, prefix) => {
	
	if(message.author == client.user)
	{
		return;
	}

	if( message.content == 'ping')
	{
		message.reply('Pong!');
		return;
	}
	
	
	if(message.content.startsWith(`${prefix}roll`))
	{
		return roll(message);
	}
	if(message.content.startsWith(`${prefix}addplayer`))
	{
		return player(message);
	}

}