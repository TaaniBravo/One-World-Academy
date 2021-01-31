"use strict";

// Insert some samples of quiz to database
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert("Quizzes", [
      {
        id: 1,
        quizTitle: "HTML Quiz",
        createdAt: new Date(),
        updatedAt: new Date(),
        UserId: 1,
        LessonId: 1
      },

      {
        id: 2,
        quizTitle: "CSS Quiz",
        createdAt: new Date(),
        updatedAt: new Date(),
        UserId: 1,
        LessonId: 2
      },

      {
        id: 3,
        quizTitle: "Javascript Quiz",
        createdAt: new Date(),
        updatedAt: new Date(),
        UserId: 1,
        LessonId: 3
      },

      {
        id: 4,
        quizTitle: "JQuery Quiz",
        createdAt: new Date(),
        updatedAt: new Date(),
        UserId: 2,
        LessonId: 4
      },

      {
        id: 5,
        quizTitle: "Node.JS Quiz",
        createdAt: new Date(),
        updatedAt: new Date(),
        UserId: 2,
        LessonId: 5
      }
    ]);
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("Quizzes", null, {});
  }
};
