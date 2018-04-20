const { Command } = require('discord.js-commando');
const jamey = require('../quotesave/jamey.js');
const brandon = require('../quotesave/brandon.js');

class QuoteRollCommand extends Command
{
    constructor(client)
    {
        super(client, {
            name: 'quoteroll',
            group: 'quoteroll',
            memberName: 'quoteroll',
            description: "Rolls quotes saved with the !quotesave command.",
            examples: [ "remind me to do this later" ],
            args: [
                {
                    key: 'name',
                    prompt: 'Please provide a user.',
                    type: 'user',
                    default: ''
                }
            ]
        });
    }

    async run(message, { name })
    {
        function roll(credit){
            credit[Math.floor(Math.random() * credit.length)]
        }

        var pplSel = Math.floor(Math.random()*3);
        var userName = name.username;
        var jameyRoll = '"' + roll(brandon) + '" -Jamey';
        var brandonRoll = '"' + roll(brandon) + '" -Brandon';

        if (!name) {
            if (pplSel == 1) {
                message.say(jameyRoll);
            } else if (pplSel == 2) {
                message.say(brandonRoll);
            }
        } else if (userName = jamey) {
            message.say(jameyRoll);
        } else if (userName = brandon) {
            message.say(brandonRoll)
        }
    }
}

module.exports = QuoteRollCommand;
