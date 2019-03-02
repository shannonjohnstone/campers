const campersController = service => {
  const { getCampers, sortHighToLow, limitCampers, rankCampers } = service;

  return {
    getHighestTotal: async (req, res) => {
      const campers = await getCampers();

      const resolvedCampers = rankCampers(
        limitCampers(sortHighToLow(campers, 'total'), req.query.limit),
      );

      return res.json(resolvedCampers);
    },
    getHighestTotalMonthly: async (req, res) => {
      const campers = await getCampers();

      const resolvedCampers = rankCampers(
        limitCampers(sortHighToLow(campers, 'monthly_total'), req.query.limit),
      );

      return res.json(resolvedCampers);
    },
  };
};

module.exports = campersController;
