// Requiring our middleware for checking if a user is logged in or not.
const isAuthenticated = require("../config/middleware/isAuthenticated");
const db = require("../models");

module.exports = app => {
  app.get("/", (req, res) => {
    res.render("index");
  });

  //For testing purposes

  const course = [
    {
      courseTitle: "Javascript",
      courseDescription:
        "A 2 Month course on Node JS and Server Side Programming",
      courseURL: "javascript",
      imageURL:
        "https://html5hive.org/wp-content/uploads/2014/06/js_800x800.jpg"
    },
    {
      courseTitle: "Node JS",
      courseDescription:
        "A 2 Month course on Node JS and Server Side Programming",
      courseURL: "nodejs",
      imageURL:
        "https://d2eip9sf3oo6c2.cloudfront.net/tags/images/000/000/256/full/nodejslogo.png"
    },
    {
      courseTitle: "React",
      courseDescription:
        "A 2 Month course on Node JS and Server Side Programming",
      courseURL: "react",
      imageURL: "https://cdn.auth0.com/blog/react-js/react.png"
    },
    {
      courseTitle: "Javascript",
      courseDescription:
        "A 2 Month course on Node JS and Server Side Programming",
      courseURL: "javascript",
      imageURL:
        "https://html5hive.org/wp-content/uploads/2014/06/js_800x800.jpg"
    },
    {
      courseTitle: "Node JS",
      courseDescription:
        "A 2 Month course on Node JS and Server Side Programming",
      courseURL: "nodejs",
      imageURL:
        "https://d2eip9sf3oo6c2.cloudfront.net/tags/images/000/000/256/full/nodejslogo.png"
    },
    {
      courseTitle: "React",
      courseDescription:
        "A 2 Month course on Node JS and Server Side Programming",
      courseURL: "react",
      imageURL: "https://cdn.auth0.com/blog/react-js/react.png"
    }
  ];
  app.get("/course-catalog", (req, res) => {
    res.render("course-catalog", { courseCatalog: course });
  });

  // Displays a single course, or returns false
  app.get("/courses/:course", (req, res) => {
    const singleCourse = req.params.course;

    console.log(singleCourse);

    for (let i = 0; i < course.length; i++) {
      if (singleCourse === course[i].courseURL) {
        return res.render("course-catalog", {
          courseCatalog: course[i]
        });
      }
    }

    return res.json(false);
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
  // Route for the user's profile.
  app.get("/user", isAuthenticated, async (req, res) => {
    const userData = await db.User.findOne({
      where: { id: req.user.id }
    });

    res.render("user", userData);
  });

  // Route for viewing a single course.
  app.get("/courses/:id", isAuthenticated, async (req, res) => {
    const courseData = await db.Course.findOne({
      where: { id: req.params.id }
    });

    res.render("courses/:id", courseData);
  });

  // Route for creating a course.
  app.get("/create-course", isAuthenticated, (req, res) => {
    res.render("create-course");
  });

  // Route for creating a lesson.
  app.get("/create-lesson", isAuthenticated, (req, res) => {
    res.render("create-lesson");
  });

  // Route for creating a lesson.
  app.get("/create-quiz", isAuthenticated, (req, res) => {
    res.render("create-quiz");
  });
};
