//Router

/*
    const app = require('express')();    app.use('')      in app.js
    const Router = require('express').Router(); Router.get('xyz',middleware,()=>{}) in another file

*/

//joi 
/*
const joi = require('joi');
const schema = joi.object.keys({name:'abc'});
const {error} = schema.validate(data_to_be_validated);
*/

//mongoose
/*
const mongoose = require('mongoose');
mongoose.connnect('mongodb://127.0.0.1:27017');//for connecting mongodb


const mongoose = require('mongoose');
const schema = mongoose.Schema;
const userSchema = new schema({
    name:{type:String,unique:true},
    email:{type:String}
})
const userModel = mongoose.model('collection_name',userSchema)

userModel.insertMany(payload);

*/


const bcrypt = require('bcrypt');
  const data= bcrypt.hashSync('rishabhsevta',10);
 console.log(bcrypt.compareSync('rishabhsevta',data));



 //database queries
 /*
 model.findOne({query},{projection});  returns that object if found otherwise returns null
 model.find({query},{projection}); returns array of objects if found otherwise returns empty array
 */








