const { Command } = require('discord.js-commando');
const Sticky_Note = require('../quotesave/jamey.js');
const Flashfigure = require('../quotesave/brandon.js');

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
                    key: 'user',
                    prompt: 'Please provide a user.',
                    type: 'user',
                    default: ''
                }
            ]
        });
    }

    async run(message, { user })
    {
        var pplSel = Math.floor(Math.random()*2+1);
        var rand = Math.floor(Math.random() * userScore.length);
        var userName = user.username;
        var userScore = userName.replace(' ', '_');

        if (!user) {
            if (pplSel == 1) {
                message.reply('"' + Sticky_Note[Math.floor(Math.random() * Sticky_Note.length)] + '" -Jamey')
            } else if (pplSel == 2) {
                message.reply('"' + Flashfigure[Math.floor(Math.random() * Flashfigure.length)] + '" -Brandon')
            }
        } else {
            message.say('"' + userScore[rand] + '" -' + userName);
        }
    }
}

module.exports = QuoteRollCommand;
