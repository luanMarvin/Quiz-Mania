const router = require("express").Router();
const GetControllers = require('../controllers/get');
const PostControllers = require('../controllers/post');

//GET
router.get("/", GetControllers.getHome);
router.get("/register-quiz", GetControllers.getRegisterQuiz);
router.get("/quiz-play/:id?", GetControllers.getQuiz);

//POST
router.post('/register-quiz', PostControllers.postQuiz);



module.exports = router