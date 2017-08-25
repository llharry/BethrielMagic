var Config = require('../Config.js');
var ListUtils = require('../utils/ListUtils.js');
var Commands = require('../Commands.js');
var Embed = require('embed-creator');

module.exports= {
    "meta":{
        "commandName": "Help Command",
        "description": "Lists all commands and gives some help with them.",
        "format": Config.prefixes.help + "",
        "prefix": Config.prefixes.help
    },
    doCommand:function(message){
        var argString = message.content.split(module.exports.meta.prefix)[1] //remove prefix from start of command to get the args.

        fields = []
        Commands.getAllCommands().forEach(function(command){
            fields.push({
                "name":command.meta.commandName + " [ "+ command.meta.format + " ]",
                "value":command.meta.description
            })
        })

        message.channel.send(Embed(
            Config.colors.help, //Embed Colour
            null,//amulet.embed.author, //Author
            "Command List", //Title
            null, //Description
            fields,//FIELDS
            null
        ))
        message.delete();//And remove the command message.

    }
}
