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
            description: "Saves quotes.",
            //examples: ['remind me to do this later'],
            //args:
            //[
                //{
                    //key: 'quote',
                    //prompt: 'Please provide a quote.',
                    //type: 'string'
                //}
            //]
        });
    }

    async run(msg, args)
    {
        msg.reply(hi);
    }
}
