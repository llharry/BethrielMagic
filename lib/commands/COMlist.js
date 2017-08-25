var Config = require('../Config.js');
var ListUtils = require('../utils/ListUtils.js');


module.exports= {
    "meta":{
        "commandName": "List Command",
        "description": "Used to prettyprint lists of various stuff such as amulets etc.",
        "format": Config.prefixes.list + "<amulets, spells, somethingelse>",
        "prefix": Config.prefixes.list
    },
    doCommand:function(message){
        var argString = message.content.split(module.exports.meta.prefix)[1] //remove prefix from start of command to get the args.
        switch (argString) {
            case "amulets":
                ListUtils.listAmulets(message);
                break;
            case "a":
                ListUtils.listAmulets(message);
                break;
            default:
                ListUtils.notListable(message);
        }
    }
}
