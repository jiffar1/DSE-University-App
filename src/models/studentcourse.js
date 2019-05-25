'use strict';
module.exports = (sequelize, DataTypes) => {
  const StudentCourse = sequelize.define(
    'StudetCourse',
    {
      userId: DataTypes.INTEGER,
      courseId: DataTypes.INTEGER
    },
    {},
  );
  StudentCourse.associate = function(models) {
    // associations can be defined here
  };
  return StudentCourse;
};
