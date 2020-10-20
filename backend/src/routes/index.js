const routes = require('express').Router();

const phoneController = require('./../app/controllers/PhoneController');

routes.get('/', phoneController.index);


module.exports = routes;