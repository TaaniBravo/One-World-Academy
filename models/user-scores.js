// Creating the user scores model, to be used in future development
module.exports = function(sequelize, DataTypes) {
  const UserScores = sequelize.define("UserScores", {
    score: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  });

  return UserScores;
};
