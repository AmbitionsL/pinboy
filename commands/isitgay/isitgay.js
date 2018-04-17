const { Command } = require('discord.js-commando');

class IsItGayCommand extends Command
{
    constructor(client)
    {
        super(client, {
            name: 'isitgay',
            group: 'isitgay',
            memberName: 'isitgay',
            description: 'Tells you whether it is, in fact, gay.',
            examples: [ '!isitgay @user' ],
            args: [
                {
                    key: 'thing',
                    prompt: '',
                    type: 'string',
                    default: ''
                }
            ]
        });
    }

    async run(message, { thing })
    {
        if (!thing)
        {
            message.say('It is, in fact, gay.' || 'It is not, in fact, gay.')
        } else {
            message.say(thing + ' is, in fact, gay.' || thing + ' is not, in fact, gay.');
        }
    }
}

module.exports = IsItGayCommand;
