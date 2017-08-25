var fs = require('fs');
var jsonfile = require('jsonfile');8

var amuletList = []

var path = __dirname + '/amulets/';
console.log(path);
var res = [];
fs.readdir(path, function(err, amulets) { // Populate amuletList[] with all amulets.
    console.log('Loaded Amulets: '+ amulets);

    for (var i=0; i<amulets.length; i++) {
        amuletList.push(jsonfile.readFileSync(path + amulets[i]));
    }
});

module.exports = {
    isAmulet:function(name){
        if(module.exports.getAmuletIDByAlias(name)){
            return true;//it has an id therefore is an amulet.
        }else{
            return false;//No id, no amulet.
        }
    },
    getAmuletIDByAlias:function(name){
        name = name.toLowerCase()
        var id = false;
        amuletList.forEach(function(amulet){
            if(amulet.id == name){
                id = amulet.id;
            } else {
                amulet.aliases.forEach(function(alias){
                    if(name == alias){
                        id = amulet.id;
                    }
                })
            }
        })
        return id;
    },
    getAmuletByID:function(id){
        ammy = false;
        amuletList.forEach(function(amulet){
            if(amulet.id == id){
                ammy = amulet;
            }
        })
        return ammy;
    },
    getAllAmulets:function(){
        return amuletList;
    }
}
