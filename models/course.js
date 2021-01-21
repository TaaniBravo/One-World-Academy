module.exports = function(sequelize, DataTypes) {
    var Course = sequelize.define("Course", {
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

      banner: {
          type: DataTypes.STRING,
          allowNull: false
      }

    //   courseBio: {
    //     type: DataTypes.STRING,
    //     allowNull: false
    //   }
    });
  
    Course.associate = function(models) {
      Course.hasMany(models.Lesson, {
        onDelete: "cascade"
      });
    };
  
    return Course;
  };