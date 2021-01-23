const db = require("../models");
const passport = require("passport");
require("../config/passport");

module.exports = app => {
  app.post("/api/courses", async (req, res) => {
    const newCourse = await db.Course.create({
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

  app.post("/api/lessons", async (req, res) => {
    const newLesson = await db.Lesson.create({
      lessonTitle: req.body.lessonTitle,
      lecture: req.body.lecture,
      courseId: req.params.courseId
    });

    try {
      res.json(newLesson);
    } catch (error) {
      res.status(401).json(error);
    }
  });

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
