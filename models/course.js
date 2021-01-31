// Creating the Course Model
module.exports = function(sequelize, DataTypes) {
  const Course = sequelize.define("Course", {
    title: {
      type: DataTypes.STRING,
      allowNull: false
    },

    courseImage: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue:
        "https://w7.pngwing.com/pngs/639/339/png-transparent-apprendimento-online-computer-icons-course-educational-technology-learning-learning-text-orange-logo.png"
    },

    courseDescription: {
      type: DataTypes.TEXT,
      allowNull: false
    }
  });

  Course.associate = function(models) {
    // A course to have many lesson
    Course.hasMany(models.Lesson, {
      onDelete: "cascade"
    });

    // A user can create many courses
    Course.belongsTo(models.User, {
      foreignKey: {
        allowNull: false
      }
    });

    // A category can have many courses
    Course.belongsTo(models.Category, {
      foreignKey: {
        allowNull: false
      }
    });
  };

  return Course;
};
