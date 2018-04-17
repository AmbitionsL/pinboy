const commando = require('discord.js-commando');

var jamey = [
    'I masturbate in public, I\'m exercising my freedom of speech.',
    'Their anuses are too small.  I don\'t want to talk about this anymore.'
]
var brandon = [
    'Let\'s play Toon Town Online.',
    'You are mustard to me.'
]

class QuoteSaveCommand extends commando.Command
{
    constructor(client)
    {
        super(client,
        {
            name: 'quotesave',
            group: 'quotesave',
            memberName: 'quotesave',
            description: 'Saves quotes to later be rolled using the !quoteroll command.',
            examples: ['!quotesave @user And then he put his dick in me. -User']
                ['!quotesave @user "And then he put his dick in me." -User'],
            args: [
                {
                    key: 'user',
                    prompt: 'Please specify a user.',
                    type: 'user'
                },
                {
                    key: 'quote',
                    prompt: 'Please provide a quote to save.',
                    type: 'string'
                }
            ]
        }) ;
    }

    async run(message, { user, quote })
    {
        message.reply('"' + quote + '" saved as a quote from ' + user + '. :thumbup:');
    }
}

module
    .exports = QuoteSaveCommand
    .exports = jamey
    .exports = brandon;
