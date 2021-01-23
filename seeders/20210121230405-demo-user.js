"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert("Users", [
      {
        firstName: "John",
        lastName: "Doe",
        email: "johndoe@owa.com",
        password: "john",
        createdAt: new Date(),
        updatedAt: new Date()
      },

      {
        firstName: "Ethan",
        lastName: "Pack",
        email: "ethanpack@owa.com",
        password: "pack",
        createdAt: new Date(),
        updatedAt: new Date()
      },

      {
        firstName: "Kevin",
        lastName: "Loss",
        email: "kevinloss@owa.com",
        password: "loss",
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ]);
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("Users", null, {});
  }
};
