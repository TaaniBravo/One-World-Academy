// Requiring bcrypt for password hashing. Using the bcryptjs version as the regular bcrypt module sometimes causes errors on Windows machines
const bcrypt = require("bcryptjs");
// Creating our User model
module.exports = function(sequelize, DataTypes) {
  const User = sequelize.define("User", {
    // The email cannot be null, and must be a proper email before creation
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        isEmail: true
      }
    },

    // The password cannot be null
    password: {
      type: DataTypes.STRING,
      allowNull: false
    },

    firstName: {
      type: DataTypes.STRING,
      allowNull: false
    },

    lastName: {
      type: DataTypes.STRING,
      allowNull: false
    },

    bio: {
      type: DataTypes.TEXT,
      allowNull: true
    },

    profilePic: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue:
        "https://www.pinclipart.com/picdir/big/164-1640714_user-symbol-interface-contact-phone-set-add-sign.png",
      validate: {
        isUrl: true
      }
    },

    // Social media url can be null
    twitterURL: {
      type: DataTypes.STRING,
      allowNull: true,
      validate: {
        isUrl: true,
        contains: "twitter.com/"
      }
    },

    linkedinURL: {
      type: DataTypes.STRING,
      allowNull: true,
      validate: {
        isUrl: true,
        contains: "linkedin.com/"
      }
    },

    githubURL: {
      type: DataTypes.STRING,
      allowNull: true,
      validate: {
        isUrl: true,
        contains: "github.com/"
      }
    }
  });

  User.associate = function(models) {
    // A user can create many courses
    User.hasMany(models.Course, {
      onDelete: "cascade"
    });

    // A user can create many lessons
    User.hasMany(models.Lesson, {
      onDelete: "cascade"
    });

    // A user can create many quiz questions
    User.hasMany(models.QuizQuestions, {
      onDelete: "cascade"
    });

    // A user can create many quizzes
    User.hasMany(models.Quiz, {
      onDelete: "cascade"
    });

    // A quiz can be accessed by many users
    User.belongsToMany(models.Quiz, {
      through: models.UserScores
    });
  };

  // Creating a custom method for our User model. This will check if an unhashed password entered by the user can be compared to the hashed password stored in our database
  User.prototype.validPassword = function(password) {
    return bcrypt.compareSync(password, this.password);
  };
  // Hooks are automatic methods that run during various phases of the User Model lifecycle
  // In this case, before a User is created, we will automatically hash their password
  User.addHook("beforeCreate", user => {
    user.password = bcrypt.hashSync(
      user.password,
      bcrypt.genSaltSync(10),
      null
    );
  });
  return User;
};
