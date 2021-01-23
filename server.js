const express = require("express");
const exphbs = require("express-handlebars");
const session = require("express-session");

const passport = require("passport");
require("./config/passport");

const PORT = process.env.PORT || 3000;
const db = require("./models");

const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));

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

require("./routes/userApiRoutes")(app);
require("./routes/createApiRoutes")(app);
require("./routes/htmlRoutes")(app);

db.sequelize.sync().then(() => {
  app.listen(PORT, () => {
    console.log(
      "==> 🌎  Listening on port %s. Visit http://localhost:%s/ in your browser.",
      PORT,
      PORT
    );
  });
});
