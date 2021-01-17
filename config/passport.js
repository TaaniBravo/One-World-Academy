// Require our passport packages.
const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;

const db = require("../models");

// Local Stategy is going to allow us to use a local login rather than eg. Google or Facebook.
passport.use(
  new LocalStrategy(
    {
      usernameField: "email"
    },
    async (email, password, done) => {
      // AWAIT a response from database to see if the user's inputted email matches one in db.
      const dbUser = await db.User.findOne({
        where: {
          email: email
        }
      });
      //   IF there's no user with the given email...
      if (!dbUser) {
        return done(null, false, {
          message: "Incorrect email."
        });
      }
      // IF ther is a user with the given email, but the password the user gives us is incorrect.
      else if (!dbUser.validPassword(password)) {
        return done(null, false, {
          message: "Incorrect password."
        });
      }
      //   IF none of the above, return the user.
      return done(null, dbUser);
    }
  )
);
