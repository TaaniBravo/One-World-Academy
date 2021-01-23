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
      id: 1,
      imageURL:
        "https://html5hive.org/wp-content/uploads/2014/06/js_800x800.jpg"
    },
    {
      courseTitle: "Node JS",
      courseDescription:
        "A 2 Month course on Node JS and Server Side Programming",
      id: 2,
      imageURL:
        "https://d2eip9sf3oo6c2.cloudfront.net/tags/images/000/000/256/full/nodejslogo.png"
    },
    {
      courseTitle: "React",
      courseDescription:
        "A 2 Month course on Node JS and Server Side Programming",
      id: 3,
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

  const lessonObj = [
    {
      lessonTitle: "Node JS",
      lecture:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
    },
    {
      lessonTitle: "Node JS",
      lecture:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
    }
  ];

  app.get("/course-catalog", (req, res) => {
    res.render("course-catalog", { courseCatalog: course });
  });

  // Displays a single course, or returns false
  // app.get("/courses/:course", (req, res) => {
  //   const singleCourse = req.params.course;

  //   console.log(singleCourse);

  //   for (let i = 0; i < course.length; i++) {
  //     if (singleCourse === course[i].courseURL) {
  //       return res.render("course-catalog", {
  //         courseCatalog: course[i]
  //       });
  //     }
  //   }

  //   return res.json(false);
  // });

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
      where: { id: req.user.id },
      include: [
        {
          model: db.Course
        }
      ]
    });
    res.render("user", userData.dataValues);
  });

  // app.get("/edit-user", isAuthenticated, async (req, res) => {
  //   const userData = await db.User.findOne({
  //     where: { id: req.user.id }
  //   });
  //   res.render("user", userData.dataValues);
  // });

  // Route for viewing a single course.
<<<<<<< HEAD
  // app.get("/courses/:id", isAuthenticated, async (req, res) => {
  //   const courseData = await db.Course.findOne({
  //     where: { id: req.params.id }
  //   });

  //   res.render("courses/:id", courseData);
  // });
=======
  app.get("/courses/:id", async (req, res) => {
    const courseData = await db.Course.findOne({
      where: { id: req.params.id }
    });
    console.log(lessonObj);
    res.render("course", { lesson: lessonObj });
  });
>>>>>>> 7f2ec1266b1c5c08ea2bc14f42824bcda7dccdb3

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
