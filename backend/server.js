const mongoose = require("mongoose");
const dotenv = require("dotenv");
const app = require("./app");


dotenv.config({ path : './dev.env'})

const DATABASE_ENDPOINT = process.env.DATA_LOCAL_ENDPOINT;

mongoose
    .connect(DATABASE_ENDPOINT)
    .then((connected) => console.log('connected to DB'))
    .catch((err) => console.log('err cant connect to DB'));

    const port = process.env.PORT;
    
app.listen(port , () => console.log(`Runing on port*: ${port}`));