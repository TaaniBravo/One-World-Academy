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
      res.status(404).json(error);
    }
  });

  app.get("/api/courses/:id", async (req, res) => {
    const course = await db.Course.findOne({
      where: {
        id: req.params.id
      },
      raw: true
    });

    try {
      res.status(200).json(course);
    } catch (error) {
      res.status(404).json(error);
    }
  });

  // POST Route for creating a user's course
  app.post("/api/courses", async (req, res) => {
    const { title, CategoryId, courseDescription } = req.body;
    let { courseImage } = req.body;
    if (courseImage === "") {
      courseImage =
        "https://w7.pngwing.com/pngs/639/339/png-transparent-apprendimento-online-computer-icons-course-educational-technology-learning-learning-text-orange-logo.png";
    }

    const newCourse = await db.Course.create({
      title,
      courseImage,
      courseDescription,
      UserId: req.user.id,
      CategoryId
    });

    try {
      res.status(201).send(newCourse);
    } catch (error) {
      res.status(400).json(error);
    }
  });

  // PUT Route for updating the user's course.
  app.put("/api/courses", async (req, res) => {
    const { id, title, category, courseImage, courseDescription } = req.body;

    const updatedInfo = {
      title,
      category,
      courseImage,
      courseDescription
    };

    if (courseImage === "") {
      delete updatedInfo.courseImage;
    }

    const updatedCourse = await db.Course.update(updatedInfo, {
      where: { id }
    });

    try {
      res.status(200).json(updatedCourse);
    } catch (error) {
      res.status(400).json(error);
    }
  });

  // DELETE Route for deleting a user's course.
  app.delete("/api/courses/:id", async (req, res) => {
    const deleteCourse = await db.Course.destroy({
      where: { id: req.body.id }
    });

    try {
      res.status(200).json(deleteCourse);
    } catch (error) {
      res.status(400).json(error);
    }
  });
};
