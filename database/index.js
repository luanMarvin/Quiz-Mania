const mongoose = require('mongoose');

const databaseConnect = () => {
    mongoose.connect('mongodb://localhost:27017/quiz-mania');
    const database = mongoose.connection;
};

module.exports =  {databaseConnect}