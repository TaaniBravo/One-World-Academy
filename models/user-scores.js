module.exports = function(sequelize, DataTypes) {
  const UserScores = sequelize.define("UserScores", {
    score: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  });

  return UserScores;
};
