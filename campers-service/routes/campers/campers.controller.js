const campersController = service => {
  return {
    getHighestTotal: async (req, res) => {
      const campers = await service.getCampersSortHighToLow(
        req.query.limit,
        'total',
      );
      return res.json(campers);
    },
    getHighestTotalMonthly: async (req, res) => {
      const campers = await service.getCampersSortHighToLow(
        req.query.limit,
        'monthly_total',
      );
      return res.json(campers);
    },
  };
};

module.exports = campersController;
