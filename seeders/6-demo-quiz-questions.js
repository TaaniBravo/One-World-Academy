"use strict";

// Insert the samples of quiz questions to database
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert("QuizQuestions", [
      {
        id: 1,
        question: "Question 1",
        choiceOne: "answer 1",
        choiceTwo: "answer 2",
        choiceThree: "answer 3",
        choiceFour: "answer 4",
        answer: "answer 1",
        createdAt: new Date(),
        updatedAt: new Date(),
        UserId: 1,
        QuizId: 1
      },

      {
        id: 2,
        question: "Question 2",
        choiceOne: "test 1",
        choiceTwo: "test 2",
        choiceThree: "test 3",
        choiceFour: "test 4",
        answer: "test 2",
        createdAt: new Date(),
        updatedAt: new Date(),
        UserId: 1,
        QuizId: 1
      },

      {
        id: 3,
        question: "Question 3",
        choiceOne: "selection 1",
        choiceTwo: "selection 2",
        choiceThree: "selection 3",
        choiceFour: "selection 4",
        answer: "selection 3",
        createdAt: new Date(),
        updatedAt: new Date(),
        UserId: 1,
        QuizId: 1
      },

      {
        id: 4,
        question: "Question 4",
        choiceOne: "choice 1",
        choiceTwo: "choice 2",
        choiceThree: "choice 3",
        choiceFour: "choice 4",
        answer: "choice 4",
        createdAt: new Date(),
        updatedAt: new Date(),
        UserId: 1,
        QuizId: 2
      },

      {
        id: 5,
        question: "Question 5",
        choiceOne: "answer 1",
        choiceTwo: "answer 2",
        choiceThree: "answer 3",
        choiceFour: "answer 4",
        answer: "answer 1",
        createdAt: new Date(),
        updatedAt: new Date(),
        UserId: 1,
        QuizId: 2
      }
    ]);
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("QuizQuestions", null, {});
  }
};
