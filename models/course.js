module.exports = function(sequelize, DataTypes) {
  const Course = sequelize.define("Course", {
    title: {
      type: DataTypes.STRING,
      allowNull: false
    },

    //   author: {
    //     type: DataTypes.STRING,
    //     allowNull: false
    //   },

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
    Course.hasMany(models.Lesson, {
      onDelete: "cascade"
    });

    Course.belongsTo(models.User, {
      foreignKey: {
        allowNull: false
      }
    });
  };

  return Course;
};
