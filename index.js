const Discord = require('discord.js');
const client = new Discord.Client();

client.on('message', (message) => {
    if (message.author.id = '167516561328832512') {
        message.reply("ok")
        message.author.lastMessageId.pin();
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
        ['quoter', 'Quoter'],
        ['isitgay', 'Isitgay'],
        ['hasadick', 'Hasadick']
    ])
    .registerDefaultGroups()
    .registerDefaultCommands()
    .registerCommandsIn(__dirname + "/commands");

bot.login(process.env.BOT_TOKEN);
