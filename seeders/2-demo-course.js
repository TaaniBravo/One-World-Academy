"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert("Courses", [
      {
        id: 1,
        title: "JS Entry Level",
        category: "JS",
        courseImage: "Free Course",
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
        banner: "Free Course",
        courseBio: "This is a course for the beginners with CSS language.",
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
