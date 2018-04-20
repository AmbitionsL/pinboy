const commando = require('discord.js-commando');
const fs = require('fs');
const jamey = require('../quotesave/people/jamey.js');
const brandon = require('../quotesave/people/brandon.js');

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
        var userName = user.username
        var userScore = userName.replace(' ', '_');

        //fs.open('../quotesave/' + userScore + '.js', 'w', function(err, fd) {
            //if (err) {
                //message.say('Could not open ' + userScore + '.js: ' + err);
            //}
            //fs.write(fd, '\'' + quote
                //.replace('"', '')
                //.replace("'", "\\'")
                //.replace('.', '') + '.\', '
                //[20[undefined]], function(err) {
                //if (err) message.say('error writing ' + quote + ' in ' + userScore + '.js: ' + err);
                //fs.close(fd, function() {
                    //message.say('"' + quote + '" saved as a quote from ' + userName + '.  :thumbup:');
                //});
            //});
        //});
    }
}

module.exports = QuoteSaveCommand;
