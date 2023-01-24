const mongoose = require('mongoose');

mongoose.set("strictQuery", false);

mongoose.connect("mongodb://localhost:27017/authentication").then(
    () => {
        console.log("Connected to MongoDb");
    }
).catch((err) => {
    console.log(err);
})