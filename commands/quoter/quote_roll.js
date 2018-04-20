const { Command } = require('discord.js-commando');
const Sticky_Note = require('../quotesave/people.js');
const Flashfigure = require('../quotesave/people.js');
//const people = require('../quotesave/people.js');

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
        var pplSel = Math.floor(Math.random()*2+1);
        var userName = name.username;
        var arrayName = userName.replace(' ', '_');
        var rand = Math.floor(Math.random() * process[people].length - 1);
        var arrayAccess = process[arrayName][rand];

        if (!name) {
            if (pplSel == 1) {
                //message.reply('"' + Sticky_Note[Math.floor(Math.random() * Sticky_Note.length)] + '" -Jamey')
            } else if (pplSel == 2) {
                //message.reply('"' + Flashfigure[Math.floor(Math.random() * Flashfigure.length)] + '" -Brandon')
            }
        } else {
            message.say('"' + process[arrayName][rand] + '" -' + process[arrayName][arrayName.length]);
        }
    }
}

module.exports = QuoteRollCommand;
