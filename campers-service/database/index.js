// in memory implementation of database
// await databaseDelay(data.campers, 2000),
const db = (() => {
  function databaseDelay(ms, data) {
    return new Promise(resolve => setTimeout(() => resolve(data), ms));
  }

  const instance = {
    campers: (() => {
      const data = require('../mock-data/campers.json');
      return {
        findAll: async () => await databaseDelay(1000, data.campers),
      };
    })(),
  };

  return instance;
})();

module.exports = db;
