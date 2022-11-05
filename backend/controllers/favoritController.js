const { Schema, model } = require('mongoose');
const ErrorHandler = require('../utils/AppError');


const User = require('../models/User');
const AppError = require('../utils/AppError');



exports.addToFavorit = async (req, res, next) => {
    try {
        const { id, name, genere, rate, gameImg } = req.body;
        
        const userId = await User.findByIdAndUpdate(req.params.id, {
            $push: {
                game : {
                    id: id, 
                    name: name, 
                    type: genere, 
                    rating: rate, 
                    img: gameImg
                }
            }
        }).exec();
        
        res.status(200).json({
            success: true,
            data: userId,
        });
    } catch (error) {
        console.log(error);
    }
}

exports.userFavorit = async (req, res, next) => {
    try {
       const userId = await User.findById(req.body.id);
       if (!userId) {
        return next(new ErrorHandler("user isnt logged in", 401));
    }
        res.status(200).json({
            success: true,
            data: userId
        });
    } catch (error) {
        return next(new ErrorHandler("Cannot find user", 400));
    }
}


exports.removeFromFavorit = async (req, res, next) => {
    try {
        const { id } = await req.body;
        console.log(id);
        const user = await User.findByIdAndUpdate(req.params.id, {
            $pull: { 
                game:{
                     id: id, 
                }
            }
        });
        res.status(200).json({
            success: true,
            data: user
        })
    } catch (error) {
        next(new AppError(`${error.message}`));
    }
}
       