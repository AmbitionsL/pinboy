const commando = require('discord.js-commando');
const fs = require('fs');

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
                    type: 'string'
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
        message.reply('Quote saved. :thumbup:');
    }
}

module.exports = QuoteSaveCommand
