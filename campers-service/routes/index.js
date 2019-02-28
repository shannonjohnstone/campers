const { readdirSync, lstatSync } = require('fs');
const path = require('path');

const isDirectory = item => lstatSync(item).isDirectory();

const getRouteDirectory = source =>
  readdirSync(source)
    .map(name => path.join(source, name))
    .filter(isDirectory);

/**
 * generateRoutes
 * util for generating route from individual route index.js files
 * each file contains a `router` an a `path`
 * these are used to build out `app.use` for each route
 * @param {Function} app
 */
function generateRoutes(app) {
  getRouteDirectory(__dirname).forEach(c => {
    const config = require(c);
    app.use(config.path, config.router);
  });
}

module.exports = generateRoutes;
