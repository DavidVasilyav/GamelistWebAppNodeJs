const Game = require("../models/GameSchema");
const AppError = require("../utils/AppError");
const ErrorHandler = require('../utils/AppError');


exports.allGames = async (req, res, next) => {
    try {
        const games = await Game.find({}).sort( { type: 1 } );
        res.status(200).json({
            success: true,
            data: games
        });
    } catch (err) {
        console.log(err);
    }
};

exports.addGame = async (req, res, next) => {
    try {
        const newGame = await Game.create(req.body);
        console.log(newGame);
        res.status(200).json({
            success: true,
            data: newGame 
        })
    } catch (error) {
        next(new AppError('Failed to add game'));
    }
}


exports.removeGame = async (req, res, next) => {
    try {
        const { id } = await req.body;
        console.log(id);
        const game = await Game.findByIdAndRemove(id, {
            $pull: { _id: id }
        });
        res.status(200).json({
            success: true,
            data: game
        })
    } catch (error) {
        next(new AppError(`${error.message}`));
    }
}
       

