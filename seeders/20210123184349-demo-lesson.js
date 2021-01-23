"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert("Lessons", [
      {
        lessonTitle: "Variables",
        lecture: "Basic types of variable include string, int, and boolean.",
        createdAt: new Date(),
        updatedAt: new Date(),
        CourseId: 1
      },

      {
        lessonTitle: "Array",
        lecture:
          "An array is a data structure that contains a group of elements. Typically these elements are all of the same data type, such as an integer or string.",
        createdAt: new Date(),
        updatedAt: new Date(),
        CourseId: 1
      }
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("Lessons", null, {});
  }
};
