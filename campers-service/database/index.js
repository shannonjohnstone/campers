// in memory implementation of database
const db = (() => {
  const instance = {
    campers: (() => {
      const data = require('../mock-data/campers.json');
      return {
        findAll: () => data.campers,
      };
    })(),
  };

  return instance;
})();

module.exports = db;
