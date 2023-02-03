const router = require("express").Router();
const QuizController = require('../controllers')

//GET
router.get("/", QuizController.getHome);
router.get("/register-quiz", QuizController.getRegisterQuiz);

//POST
router.post('/register-quiz', QuizController.postQuiz)



module.exports = router