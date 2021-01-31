// Creating the Lesson model
module.exports = function(sequelize, DataTypes) {
  const Lesson = sequelize.define("Lesson", {
    lessonTitle: {
      type: DataTypes.STRING,
      allowNull: false
    },

    lecture: {
      type: DataTypes.TEXT,
      allowNull: false
    }
  });

  Lesson.associate = function(models) {
    // A lesson to have many quizzes
    Lesson.hasMany(models.Quiz, {
      onDelete: "cascade"
    });

    // A course can include many lessons
    Lesson.belongsTo(models.Course, {
      foreignKey: {
        allowNull: false
      }
    });

    // A user can create many lessons
    Lesson.belongsTo(models.User, {
      foreignKey: {
        allowNull: false
      }
    });
  };

  return Lesson;
};
