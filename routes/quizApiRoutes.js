// TODO... implement quizzes into the site. All back-end routing is essentially done (though not tested). Although currently there is no plan to flesh this idea out.

const db = require("../models");
const isAuthenticated = require("../config/middleware/isAuthenticated");
const passport = require("passport");
require("../config/passport");

module.exports = app => {
  // GET Routes for the quizzes themselves.
  app.get("/api/quizzes", isAuthenticated, async (req, res) => {
    const quizzes = await db.Quiz.findAll({
      raw: true,
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

  // POST Route for creating a quiz.
  app.post("/api/quizzes", async (req, res) => {
    const { quizTitle, lessonId } = req.body;
    const newQuiz = await db.Quiz.create({
      quizTitle,
      lessonId,
      UserId: req.user.id
    });

    try {
      res.send(newQuiz);
    } catch (error) {
      res.status(401).json(error);
    }
  });

  // GET Route for the questions.
  app.get("/api/questions", isAuthenticated, async (req, res) => {
    const questions = await db.Quiz.findAll({
      raw: true,
      include: {
        model: db.QuizQuestions
      }
    });

    try {
      res.send(questions);
    } catch (error) {
      res.status(401).json(error);
    }
  });

  // POST Route for creating questions.
  app.post("/api/questions", async (req, res) => {
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
      QuizId,
      UserId: req.user.id
    });

    try {
      res.send(newQuestions);
    } catch (error) {
      res.status(401).json(error);
    }
  });
};
