const Joi = require('joi');

const joiSchema = {
    register:Joi.object().keys({
        name:Joi.string().min(5).required(),
        email:Joi.string().required(),
        password:Joi.string().min(6).required()
    })
};

const joiValidation = (schema,data)=>{
    return(req,res,next)=>{
        const {error} = schema.validate(req.body);
        if(!error){
            next();
        }
        else{
            const errorMessage = error.details[0].message;
            res.send(errorMessage);
        }
    }
}

module.exports = {joiSchema,joiValidation};