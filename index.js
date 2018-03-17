const Discord = require('discord.js');
const client = new Discord.Client();

  client.on('message', message => {
      if (message.member.id = '167516561328832512') {
          message.pin();
      }
  });

const Commando = require('discord.js-commando');
const bot = new Commando.Client(
  {
    owner: '167516561328832512'
  });

bot.registry
    .registerDefaultTypes()
    .registerGroups([
        ['random', 'Random'],
        ['quoter', 'Quoter']
    ])
    .registerDefaultGroups()
    .registerDefaultCommands()
    .registerCommandsIn(__dirname + "/commands");

bot.login(process.env.BOT_TOKEN);
