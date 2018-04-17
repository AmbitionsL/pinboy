const { Command } = require('discord.js-commando');

//function yesNo() {
    //Math.floor(Math.random()*2+1);
//}

var gay = [
    'gay.',
    'super gay.',
    'super mega gay.',
    'super mega ultra gay.',
    'double gay.',
    'triple gay.',
    'quadruple gay.',
    'pretty gay.',
    'a little gay.',
    'sorta gay.',
    'kinda gay.',
    'a full on faggot.'
];

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
        var yesNo = Math.floor(Math.random()*2+1);

        if (yesNo == 1) {
            if (!thing)
            {
                message.say('It is, in fact, ' + gay[Math.floor(Math.random() * gay.length)])
            } else {
                message.say(thing + ' is, in fact, ' + gay[Math.floor(Math.random() * gay.length)]);
            }
        } else {
            if (!thing)
            {
                message.say('It is not, in fact, gay.')
            } else {
                message.say(thing + ' is not, in fact, gay.');
            }
        }
    }
}

module.exports = IsItGayCommand;
