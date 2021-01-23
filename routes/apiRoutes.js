const db = require("../models");
const passport = require("passport");
require("../config/passport");

module.exports = app => {
  app.post("/api/sign-in", passport.authenticate("local"), (req, res) => {
    res.json({
      email: req.user.email,
      id: req.user.id
    });
  });

  // Route for signing up a user. Passwords will be auto hashed and stored securely.
  app.post("/api/sign-up", async (req, res) => {
    await db.User.create({
      email: req.body.email,
      password: req.body.password,
      firstName: req.body.firstName,
      lastName: req.body.lastName
    });

    try {
      res.redirect(307, "/api/sign-in");
    } catch (error) {
      res.status(401).json(error);
    }
  });

  // Route for logging user out.
  app.get("/logout", (req, res) => {
    req.logout();
    res.redirect("/sign-in");
  });

  // Route for getting some data about our user to be used client side.
  app.get("/api/user_data", (req, res) => {
    if (!req.user) {
      // The user is not logged in, send back an empty object
      res.json({});
    } else {
      // Otherwise send back the user's email and id
      res.json({
        email: req.user.email,
        id: req.user.id
      });
    }
  });

  app.post("/api/create-course", async (req, res) => {
    await db.Course.create({
      title: req.body.title,
      category: req.body.category,
      banner: req.body.banner,
      courseBio: req.body.courseBio
    });

    try {
      res.redirect(307, "/api/courses");
    } catch (error) {
      res.status(401).json(error);
    }
  });

  app.post("/api/create-lesson", async (req, res) => {
    await db.Lesson.create({
      lessonTitle: req.body.lessonTitle,
      lecture: req.body.lecture
    });

    try {
      res.redirect(307, "/api/lessons");
    } catch (error) {
      res.status(401).json(error);
    }
  });

  app.post("/api/create-quiz", async (req, res) => {
    await db.Quiz.create({
      quizTitle: req.body.quizTitle
    });

    try {
      res.redirect(307, "/api/quizzes");
    } catch (error) {
      res.status(401).json(error);
    }
  });
};
