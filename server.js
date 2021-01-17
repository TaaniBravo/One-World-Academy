const express = require("express");
const session = require("express-session");

const passport = require("./config/passport");

const PORT = process.env.PORT || 3000;
const db = require("./models");

const app = express();
app.use(expres.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));

app.use(
  session({ secret: "keyboard cat", resave: true, saveUninitialized: true })
);
app.use(passport.initialize());
app.use(passport.session());

const apiRoutes = require("./routes/apiRoutes")(app);
const htmlRoutes = require("./routes/htmlRoutes")(app);

app.use(apiRoutes, authRoutes, htmlRoutes);

db.sequelize.sync().then(() => {
  app.listen(PORT, () => {
    console.log(
      "==> 🌎  Listening on port %s. Visit http://localhost:%s/ in your browser.",
      PORT,
      PORT
    );
  });
});
