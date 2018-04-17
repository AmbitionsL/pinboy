const { Command } = require('discord.js-commando');

var yesNo = Math.floor(Math.random()*2);

var gay = [
    'gay.',
    'super-gay.',
    'super-mega-gay.',
    'super-mega-ultra-gay.',
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
        if (yesNo == 1) {
            if (!thing)
            {
                message.say('It is, in fact, ' + gay)
            } else {
                message.say(thing + ' is, in fact, ' + gay);
            }
        }
        if (yesNo == 2) {
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

//var thingGay = [
    //' is, in fact, ',
    //' is not, in fact, '
//];

//var noThingGay = [
    //'It is, in fact, ',
    //'It is not, in fact, '
//];
