const mongoose = require('mongoose');
require('dotenv').config()

const MongodbURL = process.env.MongodbURL

const databaseConnect = () => {
    mongoose.connect(`${MongodbURL}`);
    console.log('Connected to DB');
};

module.exports =  {
    databaseConnect
};