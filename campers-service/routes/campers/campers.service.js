const assert = require('assert');
const { bubbleSort } = require('../../lib/utils/array');

const campersServices = repository => {
  assert(repository, 'campersServices: repository required');

  return {
    getCampers: async () => repository.findAll(),
    sortHighToLow: (campers, key) => {
      assert(key, 'getCampersSortHighToLow: sorting key required');

      return bubbleSort(campers, 'high', key);
    },
    rankCampers: campers =>
      campers.map((camper, index) => ({ ...camper, rank: index + 1 })),
    limitCampers: (campers, queryLimit = 0) => {
      assert(campers, 'limitCampers: campers array required');

      const limit = isNaN(queryLimit) ? 0 : Number(queryLimit);
      return limit ? campers.slice(0, limit) : campers;
    },
  };
};

module.exports = campersServices;
