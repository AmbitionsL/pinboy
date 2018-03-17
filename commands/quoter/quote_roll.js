const { Command } = require('discord.js-commando');
//const fs = require('fs');

class QuoteRollCommand extends Command
{
    constructor(client)
    {
        super(client, {
            name: 'quote',
            group: 'quoter',
            memberName: 'quote',
            description: "Saves quotes.",
            examples: [ "remind me to do this later" ],
            args: [
                {
                    key: 'arg1',
                    prompt: 'Please choose to roll or save a quote.',
                    type: 'string'
                },
                {
                    key: 'name',
                    prompt: 'Please provide a user.',
                    type: 'user',
                    default: ''
                },
                {
                    key: 'quote',
                    prompt: 'Please provide a quote.',
                    type: 'string',
                    default: ''
                }
            ]
        });
    }

    async run(message, { arg1, name, quote })
    {
        //fs.write()
        if (arg1.text = 'roll') {
            if (!quote) {
                if (!name) {
                    message.reply('This feature isn\'t fully implemented yet. You should be able to roll saved quotes sometime soon, though!')
                } else {
                    message.reply('This feature isn\'t fully implemented yet. You should be able to roll saved quotes from ' + name + ' sometime soon, though!');
                }
            } else {
                message.reply('You\'re not supposed to use a quote alongside the roll argument, dumb dumb.');
            }
        } else if (arg1.text = 'save') {
            if (!name) {
                message.reply('You have to provide a name when saving a quote.')
            } else {
                if (!quote) {
                    message.reply('You have to provide a quote when saving a quote. Dumbass.')
                } else {
                    message.reply('"' + quote + '" from ' + name + ' saved. :thumbup:');
                }
            }
        }
    }
}

module.exports = QuoteRollCommand;
