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
            args: [
                {
                    key: 'quote',
                    prompt: 'Please provide a quote.',
                    type: 'string'
                },
                {
                    key: 'name',
                    prompt: 'Please provide a name.',
                    type: 'user',
                    validate: text => {
                        if (text.mentions.users) {
                            return true
                        }
                        else if (text.content = "anonymous") {
                            return true;
                        }
                        else {
                            return 'Please provide a valid name.';
                        }
                    }
                }
            ]
        });
    }

    async run(message, { quote })
    {
        message.reply('"' + quote + '" saved. :thumbup:');
    }
}

module.exports = QuoteRollCommand;
