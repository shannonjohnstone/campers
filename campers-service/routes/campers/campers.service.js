const assert = require('assert');
const { bubbleSort } = require('../../lib/utils/array');

// TODO: Move to utils
const sortHighToLow = (arr, key) => bubbleSort(arr, 'high', key);

const getCampersByLimit = (campers, queryLimit) => {
  const limit = isNaN(queryLimit) ? 0 : Number(queryLimit);
  return limit ? campers.slice(0, limit) : campers;
};

const campersServices = repository => {
  assert(repository, 'campersServices: repository required');

  return {
    getCampers: async () => repository.findAll(),
    getCampersSortHighToLow: async (limit = 0, key) => {
      assert(key, 'getCampersSortHighToLow: sorting key required');

      const campers = await repository.findAll();
      const sorted = sortHighToLow(campers, key);

      return getCampersByLimit(sorted, limit);
    },
  };
};

module.exports = campersServices;
