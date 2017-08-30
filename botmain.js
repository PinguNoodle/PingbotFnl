const Discord = require('discord.js');
const client = new Discord.Client();
const emitter = setMaxListeners=(50)

client.on('ready', () => {
  console.log('I am ready!');
});
   client.on('message', message => {
    if (message.content === 'pingu') {
    message.reply('pingu is my jesus');
  }
});
   client.on('message', message => {
    if (message.content === 'black') {
    message.reply('pingu is not black');
  }
});
  client.on('message', message => {
    if (message.content === 'ayy') {
    message.channel.send('lmao');
  }
});
  client.on('message', message => {
    if (message.content === '!stream') {
    message.channel.sendMessage('<https://www.twitch.tv/joxondragmire/>');
  }
});
  client.on('message', message => {
    if (message.content === '!nnid') {
    message.channel.sendMessage('joxon10');
  }
});
  client.on('message', message => {
    if (message.content === '!cbschedule') {
    message.channel.sendMessage('No CB scheduled yet');
  }
});
  client.on('message', message => {
    if (message.content === '!roster') {
    message.channel.sendMessage('No CB scheduled yet');
  }
});
client.on('message', message => {
    if (message.content === 'gn') {
    message.reply('Good night!');
  }
});
client.on('message', message => {
    if (message.content === 'gm') {
    message.reply('Good morning!');
  }
});
client.on('message', message => {
    if (message.content === 'xD') {
    message.reply('Please do not do that');
  }
});

client.on('message', message => {
    if (message.content === 'XD') {
    message.reply('Please do not do that');
  }
});
client.on('message', message => {
    if (message.content === '!timer5') {
    message.reply('Timer set for 5 minutes');
      setTimeout(function(){ message.reply("5 minutes have passed"); }, 300000);
  }
});
client.on('message', message => {
    if (message.content === '!timer1') {
    message.reply('Timer set for 1 minute');
      setTimeout(function(){ message.reply("1 minute has passed"); }, 60000);
  }
});
client.on('message', message => {
    if (message.content.startsWith('im')) {
    message.reply(message.content. replace('im','Hello' ) + ' im Pingbot')
      
    };
});



client.login('MzQ4ODk4Mzk0ODU4NTg2MTEz.DIOYJg.V6dl4rzsCowyKfNzyMCoy2bf6D4',)