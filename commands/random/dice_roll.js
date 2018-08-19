const commando = require('discord.js-commando');

var amountOfDie;

class DiceRollCommand extends commando.Command
{
    constructor(client)
    {
        super(client,
        {
            name: 'roll',
            group: 'random',
            memberName: 'roll',
            description: 'Rolls a die.',
            args: [
                {
                    key: 'rollNumber',
                    prompt: 'i',
                    type: 'integer',
                    default: '6'
                },
                {
                    key: 'diceNumber',
                    prompt: 'i',
                    type: 'integer',
                    default: '1'
                }
            ]
        });
    }

    async run(message, { rollNumber, diceNumber })
    {
        amountOfDie = 0;
        while (amountOfDie < diceNumber) {
            roll = Math.floor(Math.random() * rollNumber) + 1;
            message.reply(roll);
            amountOfDie += 1;
        }
    }
}

module.exports = DiceRollCommand
