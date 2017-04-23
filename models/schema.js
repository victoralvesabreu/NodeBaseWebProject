var mongoose = require("mongoose");

module.exports = function(){
    
    var schema = mongoose.Schema({
        nomeDoAtributo: {
            type: String,
            require: true
        }
    });

    return mongoose.model("Schema", schema);
}