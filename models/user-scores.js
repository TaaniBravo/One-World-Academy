module.exports = function(sequelize, DataTypes) {
  const UserScores = sequelize.define("UserScores", {
    score: {
      type: DataTypes.INTEGER,
      allowNull: false
    }

    // userID: {
    //   type: DataTypes.INTEGER,
    //   references: {
    //     model: User,
    //     key: "id"
    //   }
    // },

    // quizID: {
    //   type: DataTypes.INTEGER,
    //   references: {
    //     model: Quiz,
    //     key: "id"
    //   }
    // }
  });

  // UserScores.associate = function(models) {
  //   UserScores.belongsTo(models.User, { as: "User", foreignKey: "userID" });
  //   UserScores.belongsTo(models.Quiz, { as: "Quiz", foreignKey: "quizID" });
  // };

  return UserScores;
};
