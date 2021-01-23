const db = require("../models");
const passport = require("passport");
require("../config/passport");

module.exports = app => {
  app.post("/api/create-course", async (req, res) => {
    await db.Course.create({
      title: req.body.courseTitle,
      category: req.body.courseCategory,
      courseImage: req.body.courseImage,
      courseDescription: req.body.courseDescription,
      userId: req.user.id
    });

    try {
      res.json(newCourse);
    } catch (error) {
      res.status(401).json(error);
    }
  });

  app.post("/api/create-lesson", async (req, res) => {
    await db.Lesson.create({
      lessonTitle: req.body.lessonTitle,
      lecture: req.body.lecture,
      courseId: req.params.courseId
    });

    try {
      res.redirect(307, "/api/lessons");
    } catch (error) {
      res.status(401).json(error);
    }
  });

  app.post("/api/create-quiz", async (req, res) => {
    await db.Quiz.create({
      quizTitle: req.body.quizTitle,
      lessonId: req.params.lessonId
    });

    await db.QuizQuestions.create({
      question: req.body.question,
      choiceOne: req.body.choiceOne,
      choiceTwo: req.body.choiceTwo,
      choiceThree: req.body.choiceThree,
      choiceFour: req.body.choiceFour,
      answer: req.body.answer,
      quizId: req.params.quizId
    });

    try {
      res.redirect(307, "/api/quizzes");
    } catch (error) {
      res.status(401).json(error);
    }
  });
};
