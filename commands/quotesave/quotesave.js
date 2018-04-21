const commando = require('discord.js-commando');
const fs = require('fs');
const jamey = require('../quotesave/people/jamey.js');
const jameyId = require('../quotesave/people/jamey.js');
const brandon = require('../quotesave/people/brandon.js');
const brandonId = require('../quotesave/people/brandon.js')

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
            examples: ['!quotesave @user Something someone said.']
                ['!quotesave @user "Something someone said."'],
            args: [
                {
                    key: 'name',
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

    async run(message, { name, quote })
    {
        var userId = name.id;

        if (name.id == jameyId) {
            fs.open('../quotesave/peoplejamey.js', 'w', function(err, fd) {
                if (err) {
                    message.say('Could not open ' + jamey + '.js: ' + err);
                } else if (!err) {
                    message.say('Successfully opened jamey.js.');
                }
                fs.write(fd, '\''+ quote.replace('"', '').replace("'", "\\'").replace('.', '') + '.\', '
                    [13[undefined]], function(err) {
                        if (err) {
                            message.say('error writing ' + quote + ' in ' + jamey + '.js: ' + err);
                        } else if (!err) {
                            message.say('Successfully wrote to jamey.js.');
                        }
                        fs.close(fd, function() {
                            message.say('"' + quote + '" saved as a quote from Jamey.  :thumbup:');
                        });
                    });
                });
            }
    }
}

module.exports = QuoteSaveCommand;
