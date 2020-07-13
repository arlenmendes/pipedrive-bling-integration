const { dealsService } = require('../services');

module.exports = {
  index: async (req, res) => {
    try {
      const deals = await dealsService.list();
      res.status(200).json(deals);
    } catch (e) {
      console.error(e);
      res.status(500).json(e);
    }
  },
};
