module.exports = function (sequelize, DataTypes) {
  var UserScores = sequelize.define("UserScores", {
    score: {
      type: DataTypes.INT,
      allowNull: false,
    },
  });

  UserScores.associate = function (models) {
    UserScores.belongsTo(models.Quiz, {
      foreignKey: {
        allowNull: true
      }
    });
  };

  return UserScores;
}