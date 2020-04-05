module.exports = message => {
	var splitMess = message.content.toLowerCase().slice(6).split(' ');
	var substring;
	var die = 1;
	var numDie = 0;
	var modifier = 0;
	var i = 0;
	//var sMessage = `Your rolls were:`;
	var eMessage = ``;
	var total = 0;
	
	
	while(splitMess[i])
	{
		substring = splitMess[i].split('d');
		die = parseInt(substring[1].slice(1),10);
		numDie = parseInt(substring[0],10);
		if(splitMess[i+1].startsWith('+'))
		{
			modifier = parseInt(splitMess[i+1].slice(1),10);
			i += 1;
		}
			
		i += 1;
	}
	//console.log(`Die: ${die} \nnumDie: ${numDie}`)
	
	for(i=0;i<numDie;i++)
	{
		var roll = Math.ceil(Math.random() * die);
		total += roll;
		//sMessage += ` ${roll}`;
		eMessage += `${roll} `;
	}
	
	//sMessage += ` \nTotal Damage: ${total}`;
	//message.channel.send(sMessage);
	
	message.channel.send({embed: {
		color: 0x00AE86,
		title: `Total Damage: ${total + modifier}`,
		description: (`Rolls: ${eMessage} +${modifier}`),
		timestamp: new Date(),
		footer: {
			icon_url: message.guild.client.user.avatarURL,
			text: `Proctor`
		}
	}
	});
	

}