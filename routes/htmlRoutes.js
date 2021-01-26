// Requiring our middleware for checking if a user is logged in or not.
const isAuthenticated = require("../config/middleware/isAuthenticated");
const db = require("../models");

module.exports = app => {
  app.get("/", (req, res) => {
    res.render("index");
  });

  app.get("/course-catalog", async (req, res) => {
    const course = await db.Course.findAll({
      raw: true
    });

    res.render("course-catalog", { course: course });
  });

  app.get("/about-us", (req, res) => {
    res.render("about-us");
  });

  app.get("/sign-in", (req, res) => {
    if (req.user) {
      res.render("user");
    }
    res.render("sign-in");
  });

  app.get("/sign-up", (req, res) => {
    if (req.user) {
      res.render("user");
    }
    res.render("sign-up");
  });

  //   IF a user who's not logged in tries to access any of these routes they will be rendered to the signup page.
  // Route for the user's profile.
  app.get("/user", isAuthenticated, async (req, res) => {
    const userData = await db.User.findOne({
      where: { id: req.user.id }
    });

    const courseArray = await db.Course.findAll({
      where: { userId: req.user.id },
      raw: true
    });

    const lessonArray = await db.Lesson.findAll({
      where: { userId: req.user.id },
      raw: true
    });

    res.render("user", {
      user: userData.dataValues,
      course: courseArray,
      lesson: lessonArray
    });
  });

  // Route for viewing a single course.
  app.get("/courses/:id", async (req, res) => {
    const courseData = await db.Course.findOne({
      where: { id: req.params.id },
      raw: true
    });

    const lessonData = await db.Lesson.findAll({
      where: { CourseId: req.params.id },
      raw: true
    });

    res.render("course", {
      course: courseData,
      lesson: lessonData
    });
  });

  // Route for creating a course.
  app.get("/create-course", isAuthenticated, (req, res) => {
    res.render("create-course");
  });

  // Route for creating a lesson.
  app.get("/create-lesson", isAuthenticated, async (req, res) => {
    const courseArray = await db.Course.findAll({
      where: { userId: req.user.id },
      raw: true
    });

    console.log(courseArray);

    if (courseArray.length < 1 || courseArray === undefined) {
      res.render("create-course");
    } else {
      res.render("create-lesson", {
        course: courseArray
      });
    }
  });

  // Route for creating a quiz.
  // app.get("/create-quiz", isAuthenticated, (req, res) => {
  //   res.render("create-quiz");
  // });

  // Route for updating a course.
  app.get("/update-course/:id", isAuthenticated, async (req, res) => {
    const { id } = req.params;
    const courseData = await db.Course.findOne({
      where: {
        id,
        UserId: req.user.id
      },
      raw: true
    });

    if (!courseData) {
      res.status(400);
      res.render("user");
    } else {
      res.render("update-course", { course: courseData });
    }
  });

  // Route for updating a lesson.
  app.get("/update-lesson/:id", isAuthenticated, async (req, res) => {
    const { id } = req.params;
    const courseArray = await db.Course.findAll({
      where: { userId: req.user.id },
      raw: true
    });
    const lessonData = await db.Lesson.findOne({
      where: {
        id,
        UserId: req.user.id
      },
      raw: true
    });

    res.render("update-lesson", {
      course: courseArray,
      lesson: lessonData
    });
  });
};
