const commando = require('discord.js-commando');

class QuoteCommand extends commando.Command
{
    constructor(client)
    {
        super(client,
            {
            name: 'quote',
            group: 'quoter',
            memberName: 'quote',
            description: "Quotes things.",
            examples: ['remind me to do this later'],
            args:
            [
                {
                    key: 'thequote',
                    prompt: 'Please provide a quote.',
                    type: 'string'
                }
            ]
        });
    }

    async run(msg, { thequote })
    {
        msg.reply("'" + quote + "' saved as a quote.'")
    }
}
