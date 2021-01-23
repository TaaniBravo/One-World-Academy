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
        updatedAt: new Date()
      }
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("Courses", null, {});
  }
};
