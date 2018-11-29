// Discord.js bot
const Discord = require('discord.js');
const client = new Discord.Client();
var prefix = "$"

client.on('ready', () => {
    client.user.setActivity('broadcast', {type: 'WATCHING'});
});

client.on('message', message => {
  let args = message.content.split(' ').slice(1).join(' ');
  if (message.content.startsWith('$bc')){ // البريفكس والامر
  if(!message.author.id === '') return;
  message.channel.sendMessage('جار ارسال الرسالة :white_check_mark:')
  client.users.forEach(m =>{
  m.sendMessage(args)
  })
  }
  });





client.login(process.env.TOKEN);
