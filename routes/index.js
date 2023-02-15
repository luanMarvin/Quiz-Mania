const router = require("express").Router();
const QuizController = require('../controllers')

//GET
router.get("/", QuizController.getHome);
router.get("/register-quiz", QuizController.getRegisterQuiz);
router.get("/quiz-play/:id?", QuizController.getQuiz)

//POST
router.post('/register-quiz', QuizController.postQuiz)



module.exports = router