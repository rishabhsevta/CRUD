const jwt = require('jsonwebtoken');
const constants = require('../constants/constants');
const dbServices = require('../services/dbServices');
const userModel = require('../models/userModel');

const decryptToken = async(req,res,next)=>{
        jwt.verify(req.headers.authorization, process.env.SECRET_KEY, async(error,decoded)=>{
            if(error){
                res.send(constants.Response_Messages.UNAUTHORIZED_USER).status(401);
            }
            else{
                const user = await dbServices.findOne(userModel,{_id: decoded._id});
                if(!user){
                    res.send(constants.Response_Messages.UNAUTHORIZED_USER).status(401);
                } 
                else{
                    req.user= user;
                    next();
                }
            }
        })
   }


module.exports = decryptToken;