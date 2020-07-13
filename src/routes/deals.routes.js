const router = require('express').Router();

const { dealsController } = require('../controllers');

router.get('/', dealsController.index);

module.exports.deals = router;
