const router = require("express").Router();

router.get("/", (req, res) => {
    res.render("../views/index", {
        title: "Quiz Mania - Home"
    })
})

router.get("/register-quiz", (req, res) => {
    res.render("../views/register-quiz", {
        title: "Quiz Mania - Novo Quiz"
    })
})



module.exports = router