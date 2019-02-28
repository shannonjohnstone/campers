const assert = require('assert');

const campersServices = repository => {
  assert(repository, 'campersServices: repository required');

  return {
    getCampers: async () => await repository.findAll(),
  };
};

module.exports = campersServices;
