const { Schema, model } = require('mongoose');


const newGameSchema = new Schema ({
    gameName: {
        type: String,
        required: [true , "Please provide UserName"],
        unique: [true, "Game allready exists"],
    
    },
    type: {
        type: String,
        required: [true, "please provied type of game"],
    
    },
    rating: {
        type: Number,
        min: [0],
        max: [10]
    },
    img: {
        type: String,
    },

});

module.exports = model("Game", newGameSchema);