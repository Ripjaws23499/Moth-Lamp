const commando = require('discord.js-commando');
const discord = require('discord.js');

class InfoAboutMeCommand extends commando.Command
{
    constructor(client)
    {
        super(client,{
            name: 'info',
            group: 'simple',
            memberName: 'info',
            description: 'Learn a little about me'
        });
    }

    async run(message, args)
    {
        var myInfo = new discord.RichEmbed()
            .setTitle("All about me, a Moth!!")
            .addField("About me", "Hello, my name is moth and I love Lamps", true)
            .addField("Side text", "Why are you reading thid when you can be giving me spooky lamps", true)
            .setColor('0x00FFFF')
            .setThumbnail(message.author.avatarURL)
            .setURL("https://fsmedia.imgix.net/a2/3c/8f/b2/4be6/43c3/9253/1947936e421a/the-moth-meme-all-started-on-reddit.jpeg?auto=format%2Ccompress&w=800&h=450&crop=entropy&fit=crop")
            .setFooter("Thanks for SPOOKY Lamp")

        message.channel.sendEmbed(myInfo);
    }
}

module.exports = InfoAboutMeCommand;