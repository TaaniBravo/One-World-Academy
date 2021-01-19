module.exports = function(sequelize, DataTypes) {
    var Lesson = sequelize.define("Lesson", {
      lessonTitle: {
        type: DataTypes.STRING,
        allowNull: false,
      },

      description: {
        type: DataTypes.TEXT,
        allowNull: false,
      }
    });
  
    Lesson.associate = function(models) {
      Lesson.belongsTo(models.Course, {
        foreignKey: {
          allowNull: false
        }
      });
    };
  
    return Lesson;
}