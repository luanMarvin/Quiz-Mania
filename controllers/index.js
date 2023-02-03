const QuizModel = require('../models');
const mongoose = require('mongoose');


//GET
async function getHome(req, res){
    res.render("../views/index", {
        title: "Quiz Mania - Home"
    })
};

async function getRegisterQuiz(req, res){
    res.render("../views/register-quiz", {
        title: "Quiz Mania - Novo Quiz"
    })
}

//POST
async function postQuiz(req, res){
    const {
        quizTitle,
        questions
    } = req.body;

    const registerQuiz = new QuizModel({
        quizTitle,
        questions
    })

    registerQuiz.save();
    res.send(registerQuiz)
}

module.exports = {
    getHome,
    getRegisterQuiz,
    postQuiz
};