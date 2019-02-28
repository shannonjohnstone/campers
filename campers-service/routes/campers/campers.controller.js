const { bubbleSort } = require('../../lib/utils/array');

// TODO: Move to utils
const sortHighToLow = (arr, key) => bubbleSort(arr, 'high', key);

const getCampersByLimit = (campers, queryLimit) => {
  const limit = isNaN(queryLimit) ? 0 : Number(queryLimit);
  return limit ? campers.slice(0, limit) : campers;
};

const campersController = service => {
  return {
    getHighestTotal: (req, res) => {
      const result = sortHighToLow(service.getCampers(), 'total');

      return res.json(getCampersByLimit(result, req.query.limit));
    },
    getHighestTotalMonthly: (req, res) => {
      const result = sortHighToLow(service.getCampers(), 'monthly_total');

      return res.json(getCampersByLimit(result, req.query.limit));
    },
  };
};

module.exports = campersController;
