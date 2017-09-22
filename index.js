const Discord = require('discord.js');
const client = new Discord.Client();
const emitter = setMaxListeners=(50)
const express = require('express');
const app = express();

// set the port of our application
// process.env.PORT lets the port be set by Heroku
const port = process.env.PORT || 5000;

// set the view engine to ejs
app.set('view engine', 'ejs');

// make express look in the `public` directory for assets (css/js/img)
app.use(express.static(__dirname + '/public'));

// set the home page route
app.get('/', (request, response) => {
    // ejs render automatically looks in the views folder
    response.render('index');
});

app.listen(port, () => {
    // will echo 'Our app is running on http://localhost:5000 when run locally'
    console.log('Our app is running on http://localhost:' + port);
});
  TOKEN=[Discord, "MzQ4ODk4Mzk0ODU4NTg2MTEz.DIOYJg.V6dl4rzsCowyKfNzyMCoy2bf6D4"]
CLIENT_ID=[Discord, "348898394858586113"]
OWNER_ID=[232647324780855296]

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
    if (message.content === '!schedule') {
    message.channel.sendMessage('September 23rd - Mock CB | September 30th 7 pm est - FC crew battle | October 8th - Civil War');
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
      setTimeout(function(){ message.reply("joxon is feg"); }, 60000);
  }
});

  client.on('message', message => {
    if (message.content.startsWith('gay')) {
    message.reply("<https://www.youtube.com/watch?v=sWS0GVOQPs0>")
    };
});
  client.on('message', message => {
    if (message.content.startsWith('Gay')) {
    message.reply("<https://www.youtube.com/watch?v=sWS0GVOQPs0>")
    };
});
  client.on('message', message => {
    if (message.content.startsWith('Thats gay')) {
    message.reply("<https://www.youtube.com/watch?v=sWS0GVOQPs0>")
    };
});
    client.on('message', message => {
     if (message.content.startsWith('Im ')) {
     message.reply(message.content. replace('Im ','Hello ' ) + ' im Pingbot')
      
     };
 });
   client.on('message', message => {
     if (message.content.startsWith("I'm ")) {
     message.reply(message.content. replace("I'm ",'Hello ' ) + ' im Pingbot')
      
     };
 });
    client.on('message', message => {
     if (message.content.startsWith("i'm ")) {
     message.reply(message.content. replace("i'm ",'Hello ' ) + ' im Pingbot')
      
     };
 });
  client.on('message', message => {
     if (message.content.startsWith("im ")) { 
     message.reply(message.content. replace("im ",'Hello ' ) + ' im Pingbot')
      };
});
 
   client.on('message', message => {
    if (message.content === ("!good-song")) {
    message.reply('<https://www.youtube.com/watch?v=vdjPnlAJmAY>')
      
    };
}); 

  client.on('author', message => {
  if(message.content.startsWith('!ban'))
       ((function(){})(guildMember.ban(options.days = 7)));
  }),
  client.on('message', message => {
    if (message.content === 'guests') {
    message.channel.sendMessage('Guests more like not pingu');
  }
});
  client.on('message', message => {
    if (message.content === '!send-nuke') {
    message.channel.sendMessage('Nuke launched successfully');
  }
});
     client.on('message', message => { {
      if (message.content === ("fuck"))
       message.channel.sendMessage('i fucked your mom last night')
      
    };
});
       client.on('message', message => { {
      if (message.content === ("Fuck"))
       message.channel.sendMessage('i fucked your mom last night')
      
    };
});

 





client.login('MzQ4ODk4Mzk0ODU4NTg2MTEz.DIOYJg.V6dl4rzsCowyKfNzyMCoy2bf6D4',)