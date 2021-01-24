const db = require("../models");

module.exports = app => {
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
};
