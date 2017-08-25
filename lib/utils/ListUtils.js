var AmuletUtils = require("./AmuletUtils");
var Embed = require('embed-creator');
var Config = require("../Config.js");


module.exports = {
    listAmulets:function(message){

        var fields = []
        AmuletUtils.getAllAmulets().forEach(function(amulet){
            fields.push({
                "name":amulet.name + " [ "+ amulet.aliases + " ]",
                "value":amulet.description
            })
        })

        message.channel.send(Embed(
            Config.colors.listAmulets, //Embed Colour
            null,//amulet.embed.author, //Author
            "Amulet List", //Title
            null, //Description
            fields,//FIELDS
            null
        ))
        message.delete();//And remove the command message.
    },
    notListable:function(message){

    }
}
