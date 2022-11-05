const User = require('../models/User');
const jwt = require("jsonwebtoken");
const { Schema, model } = require('mongoose');


function generateToken({ _id }) {
    return jwt.sign({ id: _id }, process.env.JWT_SECRET);
  };


exports.register = async (req, res, next) => {
    try {
        const newUser = await User.create(req.body);
        newUser.password = undefined;
        const token = generateToken(newUser);
        res.status(201).json({ token });
        console.log(newUser);
    } catch (error) {
        next(console.log(error,'failed to crate'));
    }
};