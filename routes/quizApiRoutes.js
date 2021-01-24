const db = require("../models");
const passport = require("passport");
require("../config/passport");

module.exports = app => {
  app.post("/api/quizzes", async (req, res) => {
    const newQuiz = await db.Quiz.create({
      quizTitle: req.body.quizTitle,
      lessonId: req.params.lessonId
    });

    const newQuestions = await db.QuizQuestions.create({
      question: req.body.question,
      choiceOne: req.body.choiceOne,
      choiceTwo: req.body.choiceTwo,
      choiceThree: req.body.choiceThree,
      choiceFour: req.body.choiceFour,
      answer: req.body.answer,
      quizId: req.params.quizId
    });

    try {
      res.json(newQuiz);
      res.json(newQuestions);
    } catch (error) {
      res.status(401).json(error);
    }
  });
};
