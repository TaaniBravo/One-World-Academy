"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert("Users", [
      {
        id: 1,
        firstName: "John",
        lastName: "Doe",
        email: "johndoe@owa.com",
        password: "john",
        createdAt: new Date(),
        updatedAt: new Date()
      },

      {
        id: 2,
        firstName: "Ethan",
        lastName: "Pack",
        email: "ethanpack@owa.com",
        password: "pack",
        createdAt: new Date(),
        updatedAt: new Date()
      },

      {
        id: 3,
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
