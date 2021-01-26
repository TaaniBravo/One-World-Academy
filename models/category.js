// Creating the course category model
module.exports = function(sequelize, DataTypes) {
  const Category = sequelize.define("Category", {
    category: {
      type: DataTypes.STRING,
      allowNull: false
    }
  });

  Category.associate = function(models) {
    // A category to have many courses
    Category.hasMany(models.Course, {
      onDelete: "cascade"
    });
  };

  return Category;
};
