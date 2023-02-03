const mongoose = require('mongoose');

const quizSchema = new mongoose.Schema({
    quizTitle: String,
    questions: Object
})

const QuizModel = mongoose.model('quizes', quizSchema);

module.exports = QuizModel;