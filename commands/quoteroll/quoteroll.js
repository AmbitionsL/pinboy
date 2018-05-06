const { Command } = require('discord.js-commando');
const jamey = require('../quotesave/people/jamey.js');
const jameyId = require('../quotesave/people/jamey.js');
const brandon = require('../quotesave/people/brandon.js');
const brandonId = require('../quotesave/people/brandon.js');
const aidanb = require('../quotesave/people/aidanb.js');
const aidanbId = require('../quotesave/people/aidanb.js');

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
        var pplSel = Math.floor(Math.random()*3);
        var userId = name.id;
        var jameyRand = Math.floor(Math.random() * jamey.length);
        var brandonRand = Math.floor(Math.random() * brandon.length);
        var aidanbRand = Math.floor(Math.random() * brandon.length);
        var jameyRoll = '"' + jamey[jameyRand] + '" -Jamey';
        var brandonRoll = '"' + brandon[brandonRand] + '" -Brandon';
        var aidanbRoll = '"' + aidanb[aidanbRand] + '" -Aidan B.';

        if (!name) {
            if (pplSel == 1) {
                message.say(jameyRoll);
            } else if (pplSel == 2) {
                message.say(brandonRoll);
            } else if (pplSel == 0) {
                message.say(aidanbRoll);
            }
        } else if (userId == 167516561328832512) {
            message.say(jameyRoll);
        } else if (userId == 167775955035750402) {
            message.say(brandonRoll);
        } else if (userId == 297885249382252544) {
            message.say(aidanbRoll);
        }
    }
}

module.exports = QuoteRollCommand;
