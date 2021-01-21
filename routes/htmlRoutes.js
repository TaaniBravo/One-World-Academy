// Requiring our middleware for checking if a user is logged in or not.
const isAuthenticated = require("../config/middleware/isAuthenticated");

module.exports = app => {
  app.get("/", (req, res) => {
    res.render("index");
  });

  app.get("/course-catalog", (req, res) => {
    res.render("course-catalog");
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
  app.get("/user", isAuthenticated, (req, res) => {
    res.render("sign-in");
  });
  app.get("/cms", isAuthenticated, (req, res) => {
    res.render("sign-in");
  });
  app.get("/create-course", isAuthenticated, (req, res) => {
    res.render("sign-in");
  });
  app.get("/create-lesson", isAuthenticated, (req, res) => {
    res.render("sign-in");
  });
};
