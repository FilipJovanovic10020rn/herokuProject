'use strict';
const bcrypt = require('bcrypt');

module.exports = {
  up: async (queryInterface, Sequelize) => {
     await queryInterface.bulkInsert('Users', [
       {
        id: 2, 
        name: 'John',
        password: 'john123',
        lastname: 'john',
        email: 'pera@pera.net',
        username: 'jovan'

       },
      //  {
      //   id: 5, 
      //   name: 'Ken',
      //   password: bcrypt.hashSync('ken123', 10),
      //   admin: false,
      //   email: 'ken@pera.net'
      //  },
      //  {
      //  id: 3, 
      //  name: 'Ben',
      //  password: bcrypt.hashSync('ben123', 10),
      //  admin: false,
      //  email: 'Ben@pera.net'
      // }
      ], {});

  },

  down: async (queryInterface, Sequelize) => {

     //return queryInterface.bulkDelete('Users', null, {});
  }
};