"use strict";
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "Course",
      [
        {
          name: "Killer Data Engineering",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Impossible Data Engineering ",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Exhausting Data Engineering",
          createdAt: new Date(),
          updatedAt: new Date()
        }
      ],
      {}
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("Course", null, {});
  }
};
