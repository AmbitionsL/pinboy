const commando = require('discord.js-commando');

class BedTimeCommand extends commando.Command {
    constructor(client) {
        super(client, {
            name: 'bedtime',
            group: 'bedtime',
            memberName: 'bedtime',
            description: "It's bed time.",
            args: [
                {
                    key: 'name',
                    type: 'user',
                    default: ''
                }
            ]
        });
    }

    async run(message, args) {
        if (!user) {
            message.say({
                file: 'https://cdn.discordapp.com/attachments/206481430665101312/443260144328114176/image.jpg'
            });
        } else {
            message.say('It\'s time for bed, ' + user, {
                file: 'https://cdn.discordapp.com/attachments/206481430665101312/443260144328114176/image.jpg'
            });
        }
    }
}

module.exports = BedTimeCommand
