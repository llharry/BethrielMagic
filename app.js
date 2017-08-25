const Discord = require('discord.js');
const client = new Discord.Client();
const token = 'MzUwMzU1MjczNDA5NjI2MTIz.DIC4Bw.FqcoRqs9SBzcYuo1edy72TIBuhM'


//const Embed = require('embed-creator');
//var Amulets = require('./lib/Amulets.js');
//var Admin = require('./lib/Admin.js');
//var Config = require("./lib/Config.js");
var Commands = require('./lib/Commands.js')


//APP
client.on('ready', () => {
  console.log('Bot Ready!');
});

client.on('message', message => {
    if(Commands.isCommand(message)){//if its a command
        Commands.doCommand(message); // run the command code.
    }
});

client.login(token);
//FIN APP
