module.exports = message => {
	var splitMess = message.content.toLowerCase().split(' ');
	var die = 1;
	var numDie = 0;
	var i = 0;
	//var sMessage = `Your rolls were:`;
	var eMessage = ``;
	var total = 0;
	
	
	while(splitMess[i])
	{
		if(splitMess[i].startsWith('d'))
		{
			die = parseInt(splitMess[i].slice(1),10);
		}
		else
		{
			numDie = parseInt(splitMess[i],10);
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
		title: `Total Damage: ${total}`,
		description: (`Rolls: ${eMessage}`),
		timestamp: new Date(),
		footer: {
			icon_url: message.guild.client.user.avatarURL,
			text: `Proctor`
		}
	}
	});
	

}