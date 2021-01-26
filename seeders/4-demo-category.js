"use strict";

module.exports = {
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
      }
    ]);
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("Categories", null, {});
  }
};
