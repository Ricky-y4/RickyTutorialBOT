const Discord = require("discord.js");
const bot = new Discord.Client();

bot.login("your token");




bot.on("message", message => {
    if (message.content == "!embed"){
        var embed = new Discord.MessageEmbed()
        .setTitle("TEST")
        .setDescription("This is a test")

        message.channel.send(embed)
    }
})

bot.on("message", message => {
    if (message.content == "!time"){
        var data = new Date();
        var hour = data.getHours();
        var minute = data.getMinutes();
        message.channel.send(hour + ":" + minute);
    }
})

bot.on("message", message => {
    if (message.content == "!test"){
        var channel_id = bot.channels.cache.get("866654553394905118");
        channel_id.send("TEST");
    }
})



bot.on("message", message => {
    if (message.content.startsWith("!kick")){

        var Kick = message.mentions.members.first();

        if (!message.member.hasPermission("KICK_MEMBERS")) {
            message.channel.send("Non hai il permesso di espellere!");
            return;

        }

        if (!Kick){
            message.channel.send("Non hai menzionato nessuno!");
            return;

        }

        if (!Kick.kickable){
            message.channel.send("Non ho il permesso di espellere!");
            return;

        }

        Kick.kick()
         .then(() => message.channel.send ("<@" + Kick + "> è stato espulso!"))
    }
})







bot.on("message", message => {
    if (message.content == "!test 2"){
        message.channel.send("Scegli tra queste reazioni")
          .then(messaggio => {
              messaggio.react("👍");
              messaggio.react("👎");

              var filtro = (reaction, user) => ["👍", "👎"].includes(reaction.emoji.name) && user.id == message.author.id;

              messaggio.awaitReactions(filtro, { max: 1, time: 50000 })
                .then(collected => {
                    var reazione = collected.first().emoji.name;
                    if (reazione == "👍") {
                        message.channel.send("👍");

                    }

                    if (reazione == "👎") {
                        message.channel.send("👎");
                    }
                }).catch(collected => {
                    return message.channel.send("è finito il tempo");
                })

          })
    }
})



                                    
bot.on("message", message => {
    if (message.content.startsWith("!clear")) {
        if (!message.member.hasPermission("MANAGE_MESSAGES")) {
            return;
        }
        if (!message.guild.me.hasPermission("MANAGE_MESSAGES")) {
            return;
        }

        var count = message.content.slice(7);
        count = parseInt(count);

        if (!count) {
            message.channel.send("Invalid Number")
            return;
        }

        message.channel.bulkDelete(count, true)
    }
})

bot.on("message", (message) => {
    if (message.content.startsWith("!say")) {
        var args = message.content.split(/\s+/);
        var testo;
        testo = args.slice(1).join(" ");

        if (!testo) {
            message.channel.send("Inserire un messaggio");
            return
        }

        message.delete()
        message.channel.send(testo)
    }
})
