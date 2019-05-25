"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert("StudentCourse", [
      {
        createdAt: new Date(),
        updatedAt: new Date(),
        userId: 2,
        courseId: 1
      },
      {
        createdAt: new Date(),
        updatedAt: new Date(),
        userId: 3,
        courseId: 2
      },
      {
        createdAt: new Date(),
        updatedAt: new Date(),
        userId: 2,
        courseId: 3
      },
      {
        createdAt: new Date(),
        updatedAt: new Date(),
        userId: 4,
        courseId: 3
      }
    ]);
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('Person', null, {});
    */
  }
};
