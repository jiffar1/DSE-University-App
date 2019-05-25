"use strict";
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "User",
      [
        {
          firstName: "tamer",
          lastName: "the best",
          email: 'tamer@gmail.com',
          role: 'Student',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          firstName: "jiffar",
          lastName: "the only",
          email: 'jiffar@gmail.com',
          role: 'Student',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          firstName: "stephanie",
          lastName: "the greatest",
          email: 'steph@gmail.com', 
          role: 'Student',
          createdAt: new Date(),
          updatedAt: new Date()
        }
      ],
      {}
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("User", null, {});
  }
};
