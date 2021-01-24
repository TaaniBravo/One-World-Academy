"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert("Courses", [
      {
        id: 1,
        title: "JS Entry Level",
        category: "JS",
        courseImage:
          "https://html5hive.org/wp-content/uploads/2014/06/js_800x800.jpg",
        courseDescription:
          "This is a course for the beginners with JS language.",
        createdAt: new Date(),
        updatedAt: new Date(),
        UserId: 1
      },

      {
        id: 2,
        title: "CSS Entry Level",
        category: "CSS",
        courseImage:
          "https://d2eip9sf3oo6c2.cloudfront.net/tags/images/000/000/256/full/nodejslogo.png",
        courseDescription:
          "This is a course for the beginners with CSS language.",
        createdAt: new Date(),
        updatedAt: new Date(),
        UserId: 1
      }
    ]);
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("Courses", null, {});
  }
};
