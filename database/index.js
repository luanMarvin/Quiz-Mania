const mongoose = require('mongoose');

const databasePort = '27017'
const collection = 'quiz-mania'

const databaseConnect = () => {
    mongoose.connect(`mongodb://localhost:${databasePort}/${collection}`);
    const database = mongoose.connection;
};

module.exports =  {databaseConnect}