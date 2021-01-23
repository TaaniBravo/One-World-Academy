// Requiring our middleware for checking if a user is logged in or not.
const isAuthenticated = require("../config/middleware/isAuthenticated");

module.exports = app => {
  app.get("/", (req, res) => {
    res.render("index");
  });

  app.get("/course-catalog", (req, res) => {
    //For testing purposes

    const course = [
      {
        courseTitle: "Javascript",
        courseDescription:
          "A 2 Month course on Node JS and Server Side Programming",
        courseURL: "course/javascript",
        imageURL:
          "https://html5hive.org/wp-content/uploads/2014/06/js_800x800.jpg"
      },
      {
        courseTitle: "Node JS",
        courseDescription:
          "A 2 Month course on Node JS and Server Side Programming",
        courseURL: "course/nodejs",
        imageURL:
          "https://d2eip9sf3oo6c2.cloudfront.net/tags/images/000/000/256/full/nodejslogo.png"
      },
      {
        courseTitle: "React",
        courseDescription:
          "A 2 Month course on Node JS and Server Side Programming",
        courseURL: "course/react",
        imageURL: "https://cdn.auth0.com/blog/react-js/react.png"
      },
      {
        courseTitle: "Javascript",
        courseDescription:
          "A 2 Month course on Node JS and Server Side Programming",
        courseURL: "course/javascript",
        imageURL:
          "https://html5hive.org/wp-content/uploads/2014/06/js_800x800.jpg"
      },
      {
        courseTitle: "Node JS",
        courseDescription:
          "A 2 Month course on Node JS and Server Side Programming",
        courseURL: "course/nodejs",
        imageURL:
          "https://d2eip9sf3oo6c2.cloudfront.net/tags/images/000/000/256/full/nodejslogo.png"
      },
      {
        courseTitle: "React",
        courseDescription:
          "A 2 Month course on Node JS and Server Side Programming",
        courseURL: "course/react",
        imageURL: "https://cdn.auth0.com/blog/react-js/react.png"
      }
    ];
    res.render("course-catalog", { courseCatalog: course });
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
