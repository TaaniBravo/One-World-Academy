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
    Lesson.hasMany(models.quiz, {
      onDelete: "cascade"
    });

    Lesson.belongsTo(models.Course, {
      foreignKey: {
        allowNull: false
      }
    });
  };

  return Lesson;
};
