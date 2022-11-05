const { Schema, model } = require('mongoose');
const bcrypt = require("bcrypt");
const validateEmail = require('../utils/EmailVladiate');
const { correctPassword }  = require('../utils/passwordVladiate')

const MIN_AGE = 8;
const MAX_AGE = 120;

const newUserSchema = new Schema ({
    userName: {
        type: String,
        required: [true, "Please provide UserName"],
        unique: [true, "UserName allready exists"],
    
      },
    password: {
        type: String,
        required: [true, "Please provide a password"],
    
      },
    email: {
        type: String,
        required: [true, "Please provide an Email"],
        unique: [true, "Email is already exists"],
        validate: {
          validator: validateEmail,
          message: "Email is invalid",
    
        },
      },
    firstName: { type: String,
        required: [true, 'Please provied Name']
    
      },
    lastName: { type: String,
        required: [true, 'Please provied last name']
    
      },
    age: {
        type: Number,
        min: [MIN_AGE, `The age must be bigger then ${MIN_AGE}`],
        max: [MAX_AGE, `The age cant be above ${MAX_AGE}`],
    
      },
      game : {
        type: Schema.Types.Mixed,
        ref: 'Game',
        unique: [true, 'cant be same games'],
      },
    },
);


 newUserSchema.pre('save', async function (next) {
    this.password = await bcrypt.hash(this.password.toString(), 12);
    next();
  });

newUserSchema.methods.checkPass = async function (userPassword)  {
  return await bcrypt.compare(userPassword, this.password);
};

module.exports = model("UserWeb", newUserSchema);
