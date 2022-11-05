const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");


const userRoute = require('./routes/routerUser');
const favRoute = require('./routes/routerFavorit');
const GameRoute = require('./routes/routerGames');
const AppError = require('./utils/AppError');
const globalErrorHandler = require('./utils/golbalErrorHandler');

const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.text());

app.use("/user", userRoute);
app.use("/user", favRoute);
app.use('/game', GameRoute);

app.all("*", (req, res, next) => {
    next(AppError("page not found", 404))
});

app.use(globalErrorHandler);


module.exports = app;