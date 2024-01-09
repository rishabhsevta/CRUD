const userRoutes = require('express').Router();
const {joiSchema,joiValidation} = require('../../middlewares/joi/joi');
const userController = require('../../controllers/userController');


userRoutes.post('/register',joiValidation(joiSchema.register),userController.register);

module.exports = userRoutes;
