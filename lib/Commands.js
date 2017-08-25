var Config = require('./Config.js');
var fs = require('fs');
var jsonfile = require('jsonfile');

//command:function(message,prefix){
//    var msg = message.content;
//    var command =  msg.split(prefix)[1];
//    switch(command){
//        case "listammys":
//            COMListAmmys(message);
//
//    }
//}

var path = __dirname + '/commands/';
var commandList = [];
fs.readdir(path, function(err, commands) {
    console.log('Loaded Commands: '+ commands);

    for (var i=0; i<commands.length; i++) {
        commandList.push(require(path + commands[i]));
    }
}); //LOAD ALL COMMANDS into commandList array

module.exports = {
    isCommand:function(message){
        var msg = message.content;
        var isCommand = false
        commandList.forEach(function(command){
            if(msg.startsWith(command.meta.prefix)){
                isCommand = true;
            }
        })
        return isCommand;
    },
    doCommand:function(message){
        var msg = message.content;
        var commandPrefix = false;
        commandList.forEach(function(command){
            if(msg.startsWith(command.meta.prefix)){
                command.doCommand(message);
            }
        })
    },
    getAllCommands:function(){
        return commandList;
    }
}
