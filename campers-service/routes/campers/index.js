const express = require('express');
const router = express.Router();
const database = require('../../database');
const asyncMiddleware = require('../../middleware/async');
const campersRepository = require('./campers.repository');
const campersService = require('./campers.service');
const campersController = require('./campers.controller');

const service = campersService(campersRepository(database));
const controller = campersController(service);

/* GET users listing. */
router.get('/points/total', asyncMiddleware(controller.getHighestTotal));
router.get(
  '/points/total/month',
  asyncMiddleware(controller.getHighestTotalMonthly),
);

module.exports = {
  path: '/campers',
  router,
};
