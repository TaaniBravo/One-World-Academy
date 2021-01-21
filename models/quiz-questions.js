module.exports = function (sequelize, DataTypes) {
  var QuizQuestions = sequelize.define("QuizQuestions", {
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

  Quiz.associate = function (models) {
    QuizQuestions.belongsTo(models.Quiz, {
      foreignKey: {
        allowNull: false
      }
    });
  }

  return QuizQuestions;
}