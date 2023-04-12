const { collection } = require('../models');
const QuizModel = require('../models');
const MongoClient = require('mongodb').MongoClient;
const mongoUrl = "mongodb://127.0.0.1:27017/";

async function getHome(req, res){
    MongoClient.connect(mongoUrl, function(err, db){
        if(err){
            res.render("../views/index", {
                title: "Quiz Mania - Home",
                data: null
            });
        } else {
            let dbo = db.db("quiz-mania");
            dbo.collection("quizes").find({}).toArray(function(err, result) {
                db.close();
                res.render("../views/index", {
                    title: "Quiz Mania - Home",
                    data: result
                });
            });
        };
    });
};

async function getRegisterQuiz(req, res){
    res.render("../views/register-quiz", {
        title: "Quiz Mania - Novo Quiz"
    });
};

async function getQuiz(req, res){
    const id = req.params.id || null;

    try {
        result = await QuizModel.findById(id);
    } catch (error) {
        result = null;
    };
    if(result){
        res.render("../views/quiz-play",{
            title: `Quiz: ${result.quizTitle}`,
            data: result
        });
    } else {
        res.render("../views/quiz-play",{
            title: "Quiz Não encontrado",
            data: null
        });
    };
};

async function notFound(req, res){
    res.render("../views/not-found",{
        title: "Página não encontrada"
    });
};

module.exports = {
    getHome,
    getRegisterQuiz,
    getQuiz,
    notFound
};