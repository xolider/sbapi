'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkInsert('People', [{
        name: 'John Doe',
        isBetaMember: false
      }], {});
    */
     return queryInterface.bulkInsert('Customers', [{
      name: 'CESI',
      phone: 666741326,
      address: 'Arras',
      mail: 'cesi@cesi.fr',
      password: '$2y$10$TJfrVI0z3TnD5oh1OssRg.QfAzeLCgBM9TCZ6o1moYnIjQplySnhq',
      icon: 'none',
      id_usertype: 1
    }, {
      name: 'Clément',
      phone: 666741326,
      address: 'Ribemont-sur-Ancre',
      mail: 'clement.vicart@viacesi.fr',
      password: '$2y$10$jkFidtDa6O4oTr6CyGaJjuo3TIVL5cAEScQOZjCX.y4d.Ojcx.0j6',
      icon: 'none',
      id_usertype: 2
    }], {})
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */
    return queryInterface.bulkDelete('Customers', {}, null)
  }
};
