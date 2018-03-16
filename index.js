const Commando = require('discord.js-commando');
const bot = new Commando.Client(
  {
    owner: '167516561328832512'
  });

bot.registry
    .registerGroups([
        ['random', 'Random'],
        ['quote', 'Quote']
    ])
    .registerDefaults()
    .registerCommandsIn(__dirname + "/commands");

bot.login(process.env.BOT_TOKEN);
