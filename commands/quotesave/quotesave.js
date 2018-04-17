const commando = require('discord.js-commando');
const jamey = require('../quotesave/jamey.js');
const brandon = require('../quotesave/brandon.js');

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
        var namSpc = user.username
        var nam = namSpc.replace(' ', '_')
        nam.push('quote');

        message.say('"' + quote + '" saved as a quote from ' + user.username + '. :thumbup:');
    }
}

module
    .exports = QuoteSaveCommand;
