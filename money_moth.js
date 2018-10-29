const commando = require('discord.js-commando');

class FunMirrorCommand extends commando.Command
{
    constructor(client)
    {
        super(client,{
            name: 'pls',
            group: 'simple',
            memberName: 'pls',
            description: 'Makes you lots of money (must have dank memer bot on server)'
        });
    }

    async run(message, args)
    {
        message.reply(message.author.avatarURL);
    }
}

module.exports = FunMirrorCommand;