// Creating the Course Model
module.exports = function(sequelize, DataTypes) {
  const Course = sequelize.define("Course", {
    title: {
      type: DataTypes.STRING,
      allowNull: false
    },

    category: {
      type: DataTypes.STRING,
      allowNull: false
    },

    courseImage: {
      type: DataTypes.STRING,
      allowNull: true
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
  };

  return Course;
};
