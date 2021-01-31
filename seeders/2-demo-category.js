"use strict";

module.exports = {
  // Insert the conurse types to database as category
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert("Categories", [
      {
        id: 1,
        category: "HTML",
        createdAt: new Date(),
        updatedAt: new Date()
      },

      {
        id: 2,
        category: "CSS",
        createdAt: new Date(),
        updatedAt: new Date()
      },

      {
        id: 3,
        category: "Javascript",
        createdAt: new Date(),
        updatedAt: new Date()
      },

      {
        id: 4,
        category: "JQuery",
        createdAt: new Date(),
        updatedAt: new Date()
      },

      {
        id: 5,
        category: "Node.JS",
        createdAt: new Date(),
        updatedAt: new Date()
      },

      {
        id: 6,
        category: "English",
        createdAt: new Date(),
        updatedAt: new Date()
      },

      {
        id: 7,
        category: "Science",
        createdAt: new Date(),
        updatedAt: new Date()
      },

      {
        id: 8,
        category: "Math",
        createdAt: new Date(),
        updatedAt: new Date()
      },

      {
        id: 9,
        category: "Art",
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ]);
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("Categories", null, {});
  }
};
