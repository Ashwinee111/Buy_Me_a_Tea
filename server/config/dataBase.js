const mongoose = require('mongoose');

function dataBase () {
    try {
        mongoose.connect(process.env.MONGODB_URL)
        .then(()=> console.log("DataBase Connected Successfully"))
    } 
    catch (error) {
        console.log("Database Connected Failed: " + error.message);
        process.exit(1);
    }
}

module.exports = dataBase;