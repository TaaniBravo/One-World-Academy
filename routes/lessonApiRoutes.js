const db = require("../models");

module.exports = app => {
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
};
