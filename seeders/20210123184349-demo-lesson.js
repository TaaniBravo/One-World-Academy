"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert("Lessons", [
      {
        lessonTitle: "Variables",
        lecture: "Basic types of variable include string, int, and boolean.",
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("Lessons", null, {});
  }
};
