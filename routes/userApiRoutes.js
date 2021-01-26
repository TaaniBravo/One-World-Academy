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
    const {
      email,
      password,
      firstName,
      lastName,
      twitterURL,
      linkedinURL,
      githubURL
    } = req.body;

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
  app.get("/api/user_data", async (req, res) => {
    if (!req.user) {
      // The user is not logged in, send back an empty object
      res.json({});
    } else {
      // Otherwise send back the user's email and id
      const userData = await db.User.findOne({
        where: { id: req.user.id },
        attributes: { exclude: ["password"] }
      });

      res.json(userData);
    }
  });

  // app.get("/api/user", async (req, res) => {
  //   const userData = await db.User.findOne({
  //     where: { id: req.user.id }
  //   });
  // });
};
