module.exports = async function ready(client) 
{
  console.log(`Logged in as ${client.user.tag}!`);
  
  client.user.setActivity("with Fire");
}