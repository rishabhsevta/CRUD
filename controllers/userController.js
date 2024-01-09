const bcrypt = require('bcrypt');
const userModel = require('../models/userModel');
const dbService = require('../services/dbServices');
const Constants = require('../constants/constants');
const utils = require('../utils/utils');
const { model } = require('mongoose');

const userController = {};


//user register
userController.register = async(req,res)=>{
    try{
    req.body.password = bcrypt.hashSync(req.body.password, 10);
    const user = await dbService.findOne(userModel, { email:req.body.email });
    if(user){
        res.send(Constants.Response_Messages.USER_ALREADY_EXISTS).status(409);
    }
    else{
        await dbService.create(userModel,req.body);
        // await utils.sendMail({email:'rishabhsevta@gmail.com',subject:"aise hii",text:"mze lene k liye"})
        res.send(Constants.Response_Messages.USER_REGISTERED_SUCCESSFULLY).status(200);
    }
    }
    catch(err){
        res.send(err.message)
    }
}

//user login

userController.login = async(req,res)=>{
    try{
       const user = await dbService.findOne(userModel,{email:req.body.email});
        if(user){
            let checkPassword = bcrypt.compareSync(req.body.password,user.password);
            if(checkPassword){
                const token = await utils.generateToken({_id:user._id,name:user.name});
                res.send({token}).status(200);
            }
        }
        else{
            res.send(Constants.Response_Messages.USER_NOT_FOUND).status(404);
        }
    }
    catch(error){
        res.send(error.message);
    }
}


//Update Profile

userController.update = async(req,res)=>{
    try{
        req.password = bcrypt.hashSync(req.body.password,10);
        await dbService.findOneAndUpdate(userModel,{_id:req.user._id},req.body);
        res.send(Constants.Response_Messages.UPDATED_SUCCESSFULLY).status(200);
    }
    catch(error){
        res.send(error.message);
    }
}

module.exports = userController;