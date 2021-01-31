// Require our models folder so that we can call them depending on the data that we need.
const db = require("../models");

module.exports = app => {
  // GET Route for finding all of user's courses.
  app.get("/api/courses", async (req, res) => {
    const courses = await db.Course.findAll({
      where: { UserId: req.user.id }
    });

    // TRY giving a response JSON of the course data pulled.
    try {
      res.status(200).json(courses);
    } catch (error) {
      // CATCH the error applying it to JSON and give status code of 404.
      res.status(404).json(error);
    }
  });

  // GET Route for find a single course.
  app.get("/api/courses/:id", async (req, res) => {
    const course = await db.Course.findOne({
      where: {
        id: req.params.id
      },
      raw: true
    });

    // TRY giving a response JSON of the course data pulled.
    try {
      res.status(200).json(course);
    } catch (error) {
      // CATCH the error applying it to JSON and give status code of 404.
      res.status(404).json(error);
    }
  });

  // POST Route for creating a user's course
  app.post("/api/courses", async (req, res) => {
    // Deconstructed from req.body so variable later declared is cleaner.
    const { title, CategoryId, courseDescription } = req.body;
    // LET courseImage, so it can be changed dynamically based on the user providing their own image or not.
    let { courseImage } = req.body;
    // IF courseImage is an empty string then we are replacing it with a defaultValue.
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

    // TRY giving a response JSON of the course created.
    try {
      res.status(201).send(newCourse);
    } catch (error) {
      // CATCH the error applying it to JSON and give status code of 400.
      res.status(400).json(error);
    }
  });

  // PUT Route for updating the user's course.
  app.put("/api/courses", async (req, res) => {
    // Deconstructed from req.body so variable later declared is cleaner.
    const { id, title, category, courseImage, courseDescription } = req.body;

    const updatedInfo = {
      title,
      category,
      courseImage,
      courseDescription
    };

    // IF courseImage is an empty string then we are removing it from the object so that the empty string doesn't override the user's already appended Course image.
    if (courseImage === "") {
      delete updatedInfo.courseImage;
    }

    const updatedCourse = await db.Course.update(updatedInfo, {
      where: { id }
    });

    // TRY giving a response JSON of the course data pulled.
    try {
      res.status(200).json(updatedCourse);
    } catch (error) {
      // CATCH the error applying it to JSON and give status code of 404.
      res.status(400).json(error);
    }
  });

  // DELETE Route for deleting a user's course.
  app.delete("/api/courses/:id", async (req, res) => {
    const deleteCourse = await db.Course.destroy({
      where: { id: req.body.id }
    });

    // TRY giving a response JSON of the course data pulled.
    try {
      res.status(200).json(deleteCourse);
    } catch (error) {
      // CATCH the error applying it to JSON and give status code of 404.
      res.status(400).json(error);
    }
  });
};
