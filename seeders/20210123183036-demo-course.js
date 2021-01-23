"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert("Courses", [
      {
        title: "JS Entry Level",
        category: "JS",
        banner: "Free Course",
        courseBio: "This is a course for the beginners with JS language.",
        createdAt: new Date(),
        updatedAt: new Date(),
        UserId: 1
      },

      {
        title: "CSS Entry Level",
        category: "CSS",
        banner: "Free Course",
        courseBio: "This is a course for the beginners with CSS language.",
        createdAt: new Date(),
        updatedAt: new Date(),
        UserId: 2
      }
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("Courses", null, {});
  }
};
