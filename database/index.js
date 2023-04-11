const mongoose = require('mongoose');

const databasePort = '27017';
const collection = 'quiz-mania';

const databaseConnect = () => {
    mongoose.connect(`mongodb://127.0.0.1:${databasePort}/${collection}`);
    const database = mongoose.connection;
};

module.exports =  {
    databaseConnect
};