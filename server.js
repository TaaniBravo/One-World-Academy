// Require dotenv so that we can securely use our own DB passwords.
require("dotenv").config();
// Declare the packages we are going to need for our server to run.
const express = require("express");
const exphbs = require("express-handlebars");
const session = require("express-session");

const passport = require("passport");
require("./config/passport");
// Defining our PORT our server will be connecting to as well as the models folder.
const PORT = process.env.PORT || 3000;
const db = require("./models");
// Declaring our app variable in which we are going to apply all our middlewares and routing.
const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));
// Set the engine the server is going to run on as handlebars.
app.engine("handlebars", exphbs());
app.set("view engine", "handlebars");

app.use(
  session({
    secret: "keyboard cat",
    resave: true,
    saveUninitialized: true
  })
);
app.use(passport.initialize());
app.use(passport.session());
// Require all of the routes that we have created.
require("./routes/userApiRoutes")(app);
require("./routes/courseApiRoutes")(app);
require("./routes/lessonApiRoutes")(app);
require("./routes/quizApiRoutes")(app);
require("./routes/htmlRoutes")(app);
// Sync our database and models THEN listen to the app on PORT.
db.sequelize.sync().then(() => {
  app.listen(PORT, () => {
    console.log(
      "==> 🌎  Listening on port %s. Visit http://localhost:%s/ in your browser.",
      PORT,
      PORT
    );
  });
});
