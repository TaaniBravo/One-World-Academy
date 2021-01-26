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
    QuizQuestions.belongsTo(models.Quiz, {
      foreignKey: {
        allowNull: false
      }
    });

    QuizQuestions.belongsTo(models.User, {
      foreignKey: {
        allowNull: false
      }
    });
  };

  return QuizQuestions;
};
