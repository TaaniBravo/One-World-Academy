const db = require("../models");

module.exports = app => {
  // GET Route for viewing all of the users lessons.
  app.get("/api/lessons", async (req, res) => {
    const lessons = await db.Lesson.findAll({
      where: { UserId: req.user.id }
    });

    // TRY giving a response JSON of the lesson data pulled.
    try {
      res.status(200).json(lessons);
    } catch (error) {
      // CATCH the error applying it to JSON and give status code of 404.
      res.status(404).json(error);
    }
  });

  // GET Route for viewing a single lesson.
  app.get("/api/lessons/:id", async (req, res) => {
    const { id } = req.params;
    const lessons = await db.Lesson.findOne({
      where: { id }
    });

    // TRY giving a response JSON of the lesson data pulled.
    try {
      res.status(200).json(lessons);
    } catch (error) {
      // CATCH the error applying it to JSON and give status code of 404.
      res.status(404).json(error);
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

    // TRY giving a response JSON of the lesson data created.
    try {
      res.status(201).send(newLesson);
    } catch (error) {
      // CATCH the error applying it to JSON and give status code of 404.
      res.status(400).json(error);
    }
  });

  // PUT Route for updating the user's lesson.
  app.put("/api/lessons", async (req, res) => {
    const { id, CourseId, lessonTitle, lecture } = req.body;
    const updatedInfo = {
      CourseId,
      lessonTitle,
      lecture
    };
    const updatedLesson = await db.Lesson.update(updatedInfo, {
      where: { id }
    });

    // TRY giving a response JSON of the lesson data updated.
    try {
      res.status(200).json(updatedLesson);
    } catch (error) {
      // CATCH the error applying it to JSON and give status code of 404.
      res.status(400).json(error);
    }
  });

  // DELETE Route for deleting a user's lesson.
  app.delete("/api/lessons/:id", async (req, res) => {
    const deleteLesson = await db.Lesson.destroy({
      where: { id: req.body.id }
    });

    // TRY giving a response JSON of the lesson data deleted.
    try {
      res.status(200).json(deleteLesson);
    } catch (error) {
      // CATCH the error applying it to JSON and give status code of 404.
      res.status(400).json(error);
    }
  });
};
