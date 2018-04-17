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
        var pplSel = Math.floor(Math.random()*2+1)

        if (!name) {
            if (pplSel == 1) {
                message.reply('"' + jamey[Math.floor(Math.random() * jamey.length)] + '" -Jamey')
            } else if (pplSel == 2) {
                message.reply('"' + brandon[Math.floor(Math.random() * brandon.length)] + '" -Brandon')
            }
        } else {
            if (name.id = 167516561328832512) {
                message.reply('"' + jamey[Math.floor(Math.random() * jamey.length)] + '" -Jamey')
            } else if (name.id = 167775955035750402) {
                message.reply('"' + brandon[Math.floor(Math.random() * brandon.length)] + '" -Brandon')
            }
        }
    }
}

module.exports = QuoteRollCommand;
