module.exports = function(sequelize, DataTypes) {
  const Quiz = sequelize.define("Quiz", {
    quizTitle: {
      type: DataTypes.STRING,
      allowNull: false
    }
  });

  Quiz.associate = function(models) {
    Quiz.belongsTo(models.Lesson, {
      foreignKey: {
        allowNull: false
      }
    });

    Quiz.hasMany(models.QuizQuestions, {
      onDelete: "cascade"
    });

    Quiz.hasMany(models.UserScores, {
      onDelete: "cascade"
    });
  };

  return Quiz;
};
