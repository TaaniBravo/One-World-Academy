const db = require("../models");
const passport = require("../config/passport");

module.exports = app => {
  app.post("/api/login", passport.authenticate("local"), (req, res) => {
    res.json({
      email: req.user.email,
      id: req.user.id
    });
  });

  // Route for signing up a user. Passwords will be auto hashed and stored securely.
  app.post("/api/signup", async (req, res) => {
    await db.User.create({
      email: req.body.email,
      password: req.body.password
    });

    try {
      res.redirect(307, "/api/login");
    } catch (error) {
      res.status(401).json(error);
    }
  });

  // Route for logging user out.
  app.get("/logout", (req, res) => {
    req.logout();
    res.redirect("/login");
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
};
