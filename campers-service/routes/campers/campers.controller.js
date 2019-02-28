const { bubbleSort } = require('../../lib/utils/array');

// TODO: Move to utils
const sortHighToLow = (arr, key) => bubbleSort(arr, 'high', key);

const getCampersByLimit = (campers, queryLimit) => {
  const limit = isNaN(queryLimit) ? 0 : Number(queryLimit);
  return limit ? campers.slice(0, limit) : campers;
};

// TODO: maybe move logic to service ??
const campersController = service => {
  return {
    getHighestTotal: async (req, res) => {
      const campers = await service.getCampers();

      const result = sortHighToLow(campers, 'total');

      return res.json(getCampersByLimit(result, req.query.limit));
    },
    getHighestTotalMonthly: async (req, res) => {
      const campers = await service.getCampers();

      const result = sortHighToLow(campers, 'monthly_total');

      return res.json(getCampersByLimit(result, req.query.limit));
    },
  };
};

module.exports = campersController;
