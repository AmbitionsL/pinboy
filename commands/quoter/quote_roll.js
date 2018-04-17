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
        var pplSel = Math.floor(Math.random()*2+1)

        if (!name) {
            if (pplSel == 1) {
                message.reply('"' + Sticky_Note[Math.floor(Math.random() * Sticky_Note.length)] + '" -Jamey')
            } else if (pplSel == 2) {
                message.reply('"' + Flashfigure[Math.floor(Math.random() * Flashfigure.length)] + '" -Brandon')
            }
        } else {
            if (name.id == 167516561328832512) {
                message.reply('"' + Sticky_Note[Math.floor(Math.random() * Sticky_Note.length)] + '" -Jamey')
            } else if (name.id == 167775955035750402) {
                message.reply('"' + Flashfigure[Math.floor(Math.random() * Flashfigure.length)] + '" -Brandon')
            }
        }
        message.say(Sticky_Note.length + Flashfigure.length);
    }
}

module.exports = QuoteRollCommand;
