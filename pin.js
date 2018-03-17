const Discord = require('discord.js');
const bot = new Discord.Client();

  bot.on('message', message => {
      if (message.member.id = '167516561328832512') {
          message.pin();
      }
  });
