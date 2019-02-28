const assert = require('assert');

const campersRepository = db => {
  assert(db, 'campersRepository: database instance required');

  return {
    findAll: async () => await db.campers.findAll(),
  };
};

module.exports = campersRepository;
