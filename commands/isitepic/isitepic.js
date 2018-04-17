const commando = require('discord.js-commando');

class EpicCommand extends commando.Command
{
    constructor(client)
    {
        super(client,
        {
            name: 'isitepic',
            group: 'isitepic',
            memberName: 'isitepic',
            description: 'Is it epic?'
        }) ;
    }

    async run(message, args)
    {
        message.say('Shut up, Brandon.');
    }
}

module.exports = EpicCommand
