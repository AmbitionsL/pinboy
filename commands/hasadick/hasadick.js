const { Command } = require('discord.js-commando');

var dick = [
    'have a dick.',
    'have a long dick',
    'have a super long dick.',
    'have a super mega long dick.',
    'have a super mega ultra long dick.',
    'have two dicks.',
    'have three dicks.',
    'have four dicks.',
    'have a pretty big dick.',
    'have a little dick.',
    'sorta have a dick.',
    'kinda have a dick.',
    'have a full on long schlong.'
];

class HasADickCommand extends Command
{
    constructor(client)
    {
        super(client, {
            name: 'hasadick',
            group: 'hasadick',
            memberName: 'hasadick',
            description: 'Tells you whether it, in fact, has a dick.',
            examples: [ '!hasadick @user' ],
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
        var yesNo = Math.floor(Math.random()*2+1);

        if (yesNo == 1) {
            if (!thing)
            {
                message.say('It does, in fact, ' + dick[Math.floor(Math.random() * dick.length)])
            } else {
                message.say(thing + ' does, in fact, ' + dick[Math.floor(Math.random() * dick.length)]);
            }
        } else {
            if (!thing)
            {
                message.say('It does not, in fact, have a dick.')
            } else {
                message.say(thing + ' does not, in fact, have a dick.');
            }
        }
    }
}

module.exports = HasADickCommand;
