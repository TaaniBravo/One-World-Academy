const db = require("../models");
const passport = require("passport");
require("../config/passport");

module.exports = app => {
  // GET route for all courses.
  app.get("/api/courses", async (req, res) => {
    const courses = await db.Course.findAll({
      where: { UserId: req.user.id }
    });

    try {
      res.json(courses);
    } catch (error) {
      res.status(401).json(error);
    }
  });

  app.post("/api/courses", async (req, res) => {
    const { title, category, courseImage, courseDescription } = req.body;
    const newCourse = await db.Course.create({
      title,
      category,
      courseImage,
      courseDescription,
      UserId: req.user.id
    });

    console.log(newCourse);

    try {
      res.send(newCourse);
    } catch (error) {
      res.status(401).json(error);
    }
  });

  app.get("/api/lessons", async (req, res) => {
    const lessons = await db.Lesson.findAll({});

    try {
      res.json(lessons);
    } catch (error) {
      res.status(401).json(error);
    }
  });

  app.post("/api/lessons", async (req, res) => {
    const { CourseId, lessonTitle, lecture } = req.body;
    const newLesson = await db.Lesson.create({
      CourseId,
      lessonTitle,
      lecture
    });

    // console.log(newCourse);

    try {
      res.send(newLesson);
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
