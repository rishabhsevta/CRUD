const userRoutes = require('express').Router();
const {joiSchema,joiValidation} = require('../../middlewares/joi/joi');
const decryptToken = require('../../middlewares/jwt');
const userController = require('../../controllers/userController');


userRoutes.post('/register',joiValidation(joiSchema.register),userController.register);
userRoutes.post('/login',joiValidation(joiSchema.login),userController.login);
userRoutes.put('/update',joiValidation(joiSchema.update),decryptToken,userController.update);

module.exports = userRoutes;
