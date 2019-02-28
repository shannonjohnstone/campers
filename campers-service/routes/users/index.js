var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/points/total', function(req, res) {
  res.send('respond with a resource');
});

router.get('/points/total/month', function(req, res) {
  res.send('respond with a resource');
});

module.exports = {
  path: '/campers',
  router,
};
