const { Command } = require('discord.js-commando');

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
            args: [ {
                key: 'quote',
                prompt: 'Please provide a quote.',
                type: 'string'
            } ]
        });
    }

    async run(message, { quote })
    {
        message.reply('"' + quote + '" saved. :thumbup:');
    }
}

module.exports = QuoteRollCommand;
