const User = require('../models/User');
const AppError = require('../utils/AppError');

const jwt = require("jsonwebtoken");
const express = require("express");
const { json } = require('body-parser');


function generateToken({ _id }) {
    return jwt.sign({ id: _id }, process.env.JWT_SECRET);
  };


  exports.allUsers = async (req, res, next) => {
    try {
        const users = await User.find().sort( { userName: 1 } );
        res.status(200).json({
            success: true,
            data: users
        });
    } catch (err) {
        next(new AppError("cant get users"))
    }
};


exports.login = async (req, res, next) => {
    try {
        const { userName, password } = req.body;
        if(!userName || !password) 
         next(new AppError("please provied username and paswword!", 400));
        
        const user = await User.findOne({ userName });

        if(!user) return next(new AppError("User does not exist", 403))

        if(!(await user.checkPass(password)))
            return next(new AppError("Worng password try again!", 403))
            
        const token = generateToken(user);
        res.status(200).json({
            token, 
            userName: user.firstName,
            userId: user._id,
            })

    } catch (error) {
        next(new AppError(`${error.message}`));
    };
}

