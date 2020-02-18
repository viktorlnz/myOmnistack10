const { Router } = require('express');
const routes = Router();
const DevController = require('./controller/DevController');
const SearchController = require('./controller/SearchController');

routes.get('/devs', DevController.index);
routes.post('/devs', DevController.store);

routes.get('/search', SearchController.index);

module.exports = routes;

