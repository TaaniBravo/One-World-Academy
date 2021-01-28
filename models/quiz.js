// Creating the quiz model
module.exports = function(sequelize, DataTypes) {
  const Quiz = sequelize.define("Quiz", {
    quizTitle: {
      type: DataTypes.STRING,
      allowNull: false
    }
  });

  Quiz.associate = function(models) {
    // A quiz can have many lessons
    Quiz.belongsTo(models.Lesson, {
      foreignKey: {
        allowNull: false
      }
    });

    // A quiz can have many questions
    Quiz.hasMany(models.QuizQuestions, {
      onDelete: "cascade"
    });

    // Users can access many quizzes and have the scores
    Quiz.belongsToMany(models.User, {
      through: models.UserScores
    });

    // A user can have many quizzes
    Quiz.belongsTo(models.User, {
      foreignKey: {
        allowNull: false
      }
    });
  };

  return Quiz;
};
