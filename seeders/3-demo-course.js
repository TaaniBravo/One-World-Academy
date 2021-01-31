"use strict";

// Insert some samples of course to database
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert("Courses", [
      {
        id: 1,
        title: "HTML Entry Level",
        courseImage:
          "https://cdn0.iconfinder.com/data/icons/long-shadow-web-icons/512/html-512.png",
        courseDescription: "This is a beginners course for HTML.",
        createdAt: new Date(),
        updatedAt: new Date(),
        UserId: 1,
        CategoryId: 3
      },

      {
        id: 2,
        title: "CSS Entry Level",
        courseImage:
          "https://cdn0.iconfinder.com/data/icons/long-shadow-web-icons/512/css-512.png",
        courseDescription: "This is a beginners course for CSS.",
        createdAt: new Date(),
        updatedAt: new Date(),
        UserId: 1,
        CategoryId: 2
      },
      {
        id: 3,
        title: "JavaScript Entry Level",
        courseImage:
          "https://cdn0.iconfinder.com/data/icons/long-shadow-web-icons/512/javascript-512.png",
        courseDescription: "This is a beginners course for JavaScript.",
        createdAt: new Date(),
        updatedAt: new Date(),
        UserId: 1,
        CategoryId: 3
      },

      {
        id: 4,
        title: "Node JS Entry Level",
        courseImage:
          "https://cdn0.iconfinder.com/data/icons/long-shadow-web-icons/512/nodejs-512.png",
        courseDescription: "This is a beginners course for Node jS.",
        createdAt: new Date(),
        updatedAt: new Date(),
        UserId: 1,
        CategoryId: 3
      }
    ]);
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("Courses", null, {});
  }
};
