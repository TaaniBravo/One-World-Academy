const db = require("../models");

module.exports = app => {
  // GET Route for finding all of user's courses.
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

  // POST Route for creating a user's course
  app.post("/api/courses", async (req, res) => {
    const { title, category, courseImage, courseDescription } = req.body;
    const newCourse = await db.Course.create({
      title,
      category,
      courseImage,
      courseDescription,
      UserId: req.user.id
    });

    try {
      res.send(newCourse);
    } catch (error) {
      res.status(401).json(error);
    }
  });

  // PUT Route for updating the user's course.
  app.put("/api/courses/:id", async (req, res) => {
    const { title, category, courseImage, courseDescription } = req.body;
    const updatedInfo = {
      title,
      category,
      courseImage,
      courseDescription
    };
    const updatedCourse = await db.Course.update(updatedInfo, {
      where: { id: req.body.id }
    });

    try {
      res.json(updatedCourse);
    } catch (error) {
      res.status(401).json(error);
    }
  });

  // DELETE Route for deleting a user's course.
  app.delete("/api/courses/:id", async (req, res) => {
    const deleteCourse = await db.Course.destroy({
      where: { id: req.params.id }
    });

    try {
      res.json(deleteCourse);
    } catch (error) {
      res.status(401).json(error);
    }
  });
};
