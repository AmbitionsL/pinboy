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
                    prompt: '',
                    type: 'integer',
                    default: ''
                },
                {
                    key: 'diceNumber',
                    prompt: '',
                    type: 'integer',
                    default: '1'
                }
            ]
        }) ;
    }

    async run(message, args)
    {
        if ((!rollNumber) && (diceNumber == 1)) {
            roll = Math.floor(Math.random() * 20) + 1;
            message.reply("you rolled " + roll + ".");
        } else {
            roll = Math.floor(Math.random() * rollNumber) + 1;
            amountOfDie = 0;

            while (amountOfDie < diceNumber) {
                message.reply("you rolled " + roll + ".");
                amountOfDie += 1;
            }
        }
    }
}

module.exports = DiceRollCommand
