module.exports = function(sequelize, DataTypes) {
  const UserScores = sequelize.define("UserScores", {
    score: {
      type: DataTypes.INT,
      allowNull: false
    },

    userID: {
      type: DataTypes.INTEGER,
      references: {
        model: User,
        key: "id"
      }
    },

    quizID: {
      type: DataTypes.INTEGER,
      references: {
        model: Quiz,
        key: "id"
      }
    }
  });

  UserScores.associate = function(models) {
    UserScores.belongsTo(models.Quiz, {
      foreignKey: {
        allowNull: true
      }
    });
  };

  return UserScores;
};
