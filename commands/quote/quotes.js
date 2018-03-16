const commando = require('discord.js-commando');

class QuotesCommand extends commando.Command
{
    constructor(client)
    {
        super(client,
            {
            name: 'quotes',
            group: 'quoter',
            memberName: 'quotes',
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

    run(msg, { thequote })
    {
        return msg.reply(thequote)
    }
}
