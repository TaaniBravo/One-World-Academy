// Requiring our middleware for checking if a user is logged in or not.
const isAuthenticated = require("../config/middleware/isAuthenticated");

module.exports = app => {
  app.get("/", (req, res) => {
    // IF the user already has an account send them to the ____ page.
    if (req.user) {
      res.redirect("/courses");
    }
    res.redirect("/signup");
  });

  app.get("/login", (req, res) => {
    if (req.user) {
      res.redirect("/courses");
    }
    res.redirect("/login");
  });

  //   IF a user who's not logged in tries to access any of these routes they will be redirected to the signup page.
  app.get("/:user", isAuthenticated, (req, res) => {
    res.redirect("/login");
  });
  app.get("/cms", isAuthenticated, (req, res) => {
    res.redirect("/login");
  });
  app.get("/create-course", isAuthenticated, (req, res) => {
    res.redirect("/login");
  });
  app.get("/create-lesson", isAuthenticated, (req, res) => {
    res.redirect("/login");
  });
};
