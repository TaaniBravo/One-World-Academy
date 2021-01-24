"use strict";

const bcrypt = require("bcryptjs");

const password1 = "john";
const hash1 = bcrypt.hashSync(password1, 10);

const passwrod2 = "pack";
const hash2 = bcrypt.hashSync(passwrod2, 10);

const passwrod3 = "loss";
const hash3 = bcrypt.hashSync(passwrod3, 10);

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert("Users", [
      {
        id: 1,
        firstName: "John",
        lastName: "Doe",
        email: "johndoe@owa.com",
        password: hash1,
        createdAt: new Date(),
        updatedAt: new Date()
      },

      {
        id: 2,
        firstName: "Ethan",
        lastName: "Pack",
        email: "ethanpack@owa.com",
        password: hash2,
        createdAt: new Date(),
        updatedAt: new Date()
      },

      {
        id: 3,
        firstName: "Kevin",
        lastName: "Loss",
        email: "kevinloss@owa.com",
        password: hash3,
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ]);
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("Users", null, {});
  }
};
