const health = require('./health');
const users = require('./campers');

function generateRoutes(app) {
  [users, health].forEach(config => {
    app.use(config.path, config.router);
  });
}

module.exports = generateRoutes;
