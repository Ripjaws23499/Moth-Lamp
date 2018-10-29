const commando = require('discord.js-commando');

class LampChanceCommand extends commando.Command
{
    constructor(client)
    {
        super(client,{
            name: 'lamp',
            group: 'simple',
            memberName: 'lamp',
            description: 'Moth bot loves lamps and sometimes he loves them too much'
        });
    }

    async run(message, args)
    {
        var chance = Math.floor(Math.random() * 3);
        if(chance == 0)
        {
            message.reply("BUZZ BUZZZZZ");
        }    
        if(chance == 1)
        {
            message.reply("YES PAPA");
        }
        if(chance == 2)
        {
            message.reply("Can I get a S P O O K Y Lamp please")
        }
    }
}

module.exports = LampChanceCommand;