const bcrypt = require('bcrypt');
const userModel = require('../models/userModel');
const dbService = require('../services/dbServices');
const Constants = require('../constants/constants');
const utils = require('../utils/utils');

const userController = {};

userController.register = async(req,res)=>{
    try{
    req.body.password = bcrypt.hashSync(req.body.password, 10);
    const user = await dbService.findOne(userModel, { email:req.body.email });
    if(user){
        res.send(Constants.Response_Messages.USER_ALREADY_EXISTS).status(409);
    }
    else{
        await dbService.create(userModel,req.body);
        await utils.sendMail({email:'rishabhsevta@gmail.com',subject:"aise hii",text:"mze lene k liye"})
        res.send(Constants.Response_Messages.SUCCESS).status(200);
    }
    }
    catch(err){
        res.send(err.message)
    }
}


module.exports = userController;