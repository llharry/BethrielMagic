var Config = require('../Config.js');
var AmuletUtils = require('../utils/AmuletUtils');
var Embed = require('embed-creator');

module.exports= {
    "meta":{
        "commandName": "Amulet Info",
        "description": "Pretty prints info about requested amulet",
        "format": Config.prefixes.amulet + "<amulet alias>",
        "prefix": Config.prefixes.amulet
    },
    doCommand:function(message){
        var argString = message.content.split(module.exports.meta.prefix)[1]//remove prefix from start of command to get the args.
        var amuletID = AmuletUtils.getAmuletIDByAlias(argString); //get id. We'll check if it's valid later.
        var amulet = AmuletUtils.getAmuletByID(amuletID);//will be null if arg was not an amulet.
        if(amulet){//if it was a valid amulet...
            message.channel.send(Embed(//Pretty print the amulet in chat
                amulet.embed.color, //Embed Colour
                null,//amulet.embed.author, //Author
                amulet.name, //Title
                amulet.description, //Description
                [//FIELDS
                    {
                        "name":"Function",
                        "value":amulet.function
                    },
                    {
                        "name":"Amulet ID",
                        "value":amulet.id
                    }
                ],
                {//FOOTER TEXT
                    "text" : "Amulet ID: " + amulet.id + " | " + "Author(s): " + amulet.embed.author
                }
            ))
            message.delete();//And remove the command message.
        }
    }
}
