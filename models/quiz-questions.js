// Creating the quiz questions model
module.exports = function(sequelize, DataTypes) {
  const QuizQuestions = sequelize.define("QuizQuestions", {
    question: {
      type: DataTypes.STRING,
      allowNull: false
    },

    choiceOne: {
      type: DataTypes.STRING,
      allowNull: false
    },

    choiceTwo: {
      type: DataTypes.STRING,
      allowNull: false
    },

    choiceThree: {
      type: DataTypes.STRING,
      allowNull: false
    },

    choiceFour: {
      type: DataTypes.STRING,
      allowNull: false
    },

    answer: {
      type: DataTypes.STRING,
      allowNull: false
    }
  });

  QuizQuestions.associate = function(models) {
    // A quiz has multiple questions
    QuizQuestions.belongsTo(models.Quiz, {
      foreignKey: {
        allowNull: false
      }
    });

    // A user can create many questions
    QuizQuestions.belongsTo(models.User, {
      foreignKey: {
        allowNull: false
      }
    });
  };

  return QuizQuestions;
};
