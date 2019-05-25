'use strict';
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define(
    'User',
    {
      firstName: DataTypes.STRING,
      lastName: DataTypes.STRING,
      email: DataTypes.STRING,
      role: DataTypes.STRING
    },
    {},
  );
  User.associate = function(models) {
    // associations can be defined here
    User.belongsToMany(models.Course, {
      through: "StudentCourse",
      foreignKey: 'userId',
    });
  };
  return User;
};
