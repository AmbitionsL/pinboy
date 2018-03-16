const Commando = require('Commando');
const bot = new Commando.Client(
  {
    owner: '167516561328832512'
  });

bot.registry.registerGroup('random', 'Random');
bot.registry.registerDefaults();
bot.registry.registerCommandsIn(__dirname + "/commands");

bot.login(process.env.BOT_TOKEN);
