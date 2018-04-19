const commando = require('discord.js-commando');

class GodCommand extends commando.Command
{
    constructor(client)
    {
        super(client,
        {
            name: 'god',
            group: 'god',
            memberName: 'god',
            description: 'This is God.',
            examples: ['!god']
        }) ;
    }

    async run(message, args)
    {
        message.say('The face of God.', {
            file: 'https://cdn.discordapp.com/attachments/399779153240522754/436380708471177226/74add15a1abfd57533d52cd85d911830.png'
        });
    }
}

module.exports = GodCommand
