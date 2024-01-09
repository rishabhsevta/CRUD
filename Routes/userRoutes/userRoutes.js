const userRoutes = require('express').Router();
const {joiSchema,joiValidation} = require('../../middlewares/joi/joi');
const userModel = require('../../models/userModel');
const dbService = require('../../services/dbServices');
userRoutes.post('/register',joiValidation(joiSchema.register),(req,res)=>{
    dbService.create(userModel,req.body);
    res.send("hello from signup")
});

module.exports = userRoutes;
