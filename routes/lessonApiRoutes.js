const db = require("../models");

module.exports = app => {
  // GET Route for viewing all of the users lessons.
  app.get("/api/lessons", async (req, res) => {
    const lessons = await db.Lesson.findAll({
      where: { UserId: req.user.id }
    });

    try {
      res.json(lessons);
    } catch (error) {
      res.status(401).json(error);
    }
  });

  // POST Route for create a user's lesson.
  app.post("/api/lessons", async (req, res) => {
    const { CourseId, lessonTitle, lecture } = req.body;
    const newLesson = await db.Lesson.create({
      CourseId,
      lessonTitle,
      lecture,
      UserId: req.user.id
    });

    try {
      res.send(newLesson);
    } catch (error) {
      res.status(401).json(error);
    }
  });

  // PUT Route for updating the user's lesson.
  app.put("/api/lessons/:id", async (req, res) => {
    const { CourseId, lessonTitle, lecture } = req.body;
    const updatedInfo = {
      CourseId,
      lessonTitle,
      lecture
    };
    const updatedLesson = await db.Lesson.create(updatedInfo, {
      where: { id: req.params.id }
    });

    try {
      res.json(updatedLesson);
    } catch (error) {
      res.status(401).json(error);
    }
  });

  // DELETE Route for deleting a user's lesson.
  app.delete("/api/lessons/:id", async (req, res) => {
    const deleteLesson = await db.Lesson.destroy({
      where: { id: req.params.id }
    });

    try {
      res.json(deleteLesson);
    } catch (error) {
      res.status(401).json(error);
    }
  });
};
