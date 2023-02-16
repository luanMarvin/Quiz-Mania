const QuizModel = require('../models');

async function postQuiz(req, res){
    const {
        quizTitle,
        tags,
        questions,
    } = req.body;

    const registerQuiz = new QuizModel({
        quizTitle,
        tags,
        questions
    });

    registerQuiz.save();
    res.send(registerQuiz);
}

module.exports = { 
    postQuiz
};