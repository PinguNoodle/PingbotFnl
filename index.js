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
  console.log('Pingbot is ready to kill');
});
   client.on('message', message => {
    if (message.content === '!pingu') {
    message.reply('pingu is my jesus');
  }
});
   client.on('message', message => {
    if (message.content === '!black') {
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
    message.channel.sendMessage("**October 8th - Civil War | October 9th - Ruro's Birthday**");
  }
});
  client.on('message', message => {
    if (message.content === '!roster') {
    message.channel.sendMessage('No CB scheduled yet');
  }
});
client.on('message', message => {
    if (message.content === '!gn') {
    message.reply('Good night!');
  }
});
client.on('message', message => {
    if (message.content === '!gm') {
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
    if (message.content.startsWith('!gay')) {
    message.reply("<https://www.youtube.com/watch?v=sWS0GVOQPs0>")
    };
});
  client.on('message', message => {
    if (message.content.startsWith('!Gay')) {
    message.reply("<https://www.youtube.com/watch?v=sWS0GVOQPs0>")
    };
});
  client.on('message', message => {
     if (message.content.startsWith('!Im ')) {
     message.reply(message.content. replace('!Im ','Hello ' ) + ' im Pingbot')
      
     };
 });
   client.on('message', message => {
     if (message.content.startsWith("!I'm ")) {
     message.reply(message.content. replace("!I'm ",'Hello ' ) + ' im Pingbot')
      
     };
 });
    client.on('message', message => {
     if (message.content.startsWith("!i'm ")) {
     message.reply(message.content. replace("!i'm ",'Hello ' ) + ' im Pingbot')
      
     };
 });
  client.on('message', message => {
     if (message.content.startsWith("!im ")) { 
     message.reply(message.content. replace("!im ",'Hello ' ) + ' im Pingbot')
      };
});
 
   client.on('message', message => {
    if (message.content === ("!good-song")) {
    message.reply('<https://www.youtube.com/watch?v=vdjPnlAJmAY>')
      
    };
}); 
  client.on('message', message => {
    if (message.content === '!guests') {
    message.channel.sendMessage('Guests more like not pingu');
  }
});
  client.on('message', message => {
    if (message.content === '!send-nuke') {
    message.channel.sendMessage('Nuke launched successfully');
  }
});
     client.on('message', message => { {
      if (message.content === ("Fuck"))
       message.channel.sendMessage('i fucked your mom last night')
      
    };
});
       client.on('message', message => { {
      if (message.content === ("fuck"))
       message.channel.sendMessage('i fucked your mom last night')
    };
});
         client.on('message', message => { {
      if (message.content === ("shit"))
       message.channel.sendMessage('thats what your mom called you after you were born')
    };
});
           client.on('message', message => { {
      if (message.content === ("Shit"))
       message.channel.sendMessage('thats what your mom called you after you were born')
    };
});
             client.on('message', message => { {
      if (message.content === ("bitch"))
       message.channel.sendMessage('thats what your mom called you after you were born')
    };
});
         client.on('message', message => { {
      if (message.author.id === ("177222984157757440"))
       message.channel.sendMessage('weeb')     
    };
});
client.on('message', message => { 
  if (message.content === ("122"))
    console.log("user has registered for cb")
})
client.on('message', message => { 
  if (message.content === ("12342"))
    message.channel.sendMessage("hey kids want some candy")
})
client.on('message', message => { 
  if (message.content === ("!cfl"))
    message.channel.sendMessage("cfl baybeh")
})
client.on('message', message => { 
  if (message.content === ("!Cfl"))
    message.channel.sendMessage("cfl baybeh")
})
client.on('message', message => { 
  if (message.content === ("!servericon"))
    message.channel.sendMessage("https://cdn.discordapp.com/attachments/289577995780358145/364137057351893002/CivilWarLogo.png")
})
client.on('message', message => { 
  if (message.content === ("!understandable"))
    message.channel.sendMessage("Thats *highly understandable*")
})
client.on('message', message => { 
  if (message.content === ("!youwin"))
    message.channel.sendMessage("https://cdn.discordapp.com/attachments/351046592150896641/365214460656484363/you_win.png")
})
client.on('message', message => { 
  if (message.content === ("!whyamistillgettinghate"))
    message.channel.sendMessage("<https://www.youtube.com/watch?v=n38Qxi7TVWo>")
})
client.on('message', message => { 
  if (message.content === ("!4ply"))
    message.channel.sendMessage("<https://youtu.be/OcohEgpJc6I?t=8>")
})
client.on('message', message => { 
  if (message.content === ("000918000"))
    message.channel.sendMessage("https://cdn.discordapp.com/attachments/278324736985923584/372159552147161098/swatstika.jpg")
})
client.on('message', message => { 
  if (message.content === ("https://cdn.discordapp.com/attachments/278324736985923584/372159552147161098/swatstika.jpg"))
    message.channel.sendMessage("https://cdn.discordapp.com/attachments/278324736985923584/372159552147161098/swatstika.jpg")
})
client.on('message', message => { 
  if (message.content === ("000123000"))
    console.log(message.author.username + " has signed up")
})
client.login('MzQ4ODk4Mzk0ODU4NTg2MTEz.DIOYJg.V6dl4rzsCowyKfNzyMCoy2bf6D4',)