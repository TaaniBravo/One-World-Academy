const db = require("../models");
const isAuthenticated = require("../config/middleware/isAuthenticated");
const passport = require("passport");
require("../config/passport");

module.exports = app => {
  app.get("/api/quizzes", isAuthenticated, async (req, res) => {
    const quizzes = await db.Quiz.findAll({
      include: {
        model: db.QuizQuestions
      }
    });

    try {
      res.json(quizzes);
    } catch (error) {
      res.status(401).json(error);
    }
  });

  app.post("/api/quizzes", async (req, res) => {
    const { quizTitle, lessonId } = req.body;
    const newQuiz = await db.Quiz.create({
      quizTitle,
      lessonId
    });

    const {
      question,
      choiceOne,
      choiceTwo,
      choiceThree,
      choiceFour,
      answer,
      QuizId
    } = req.body;

    const newQuestions = await db.QuizQuestions.create({
      question,
      choiceOne,
      choiceTwo,
      choiceThree,
      choiceFour,
      answer,
      QuizId
    });

    try {
      res.json(newQuiz);
      res.json(newQuestions);
    } catch (error) {
      res.status(401).json(error);
    }
  });
};
