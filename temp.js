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

//Bcrypt
/*
const bcrypt = require('bcrypt');
const data= bcrypt.hashSync('rishabhsevta',10);
console.log(bcrypt.compareSync('rishabhsevta',encryptedPassword));
 */



 //database queries
 /*
 model.findOne({query},{projection});  returns that object if found otherwise returns null
 model.find({query},{projection}); returns array of objects if found otherwise returns empty array
 */



 const twilio = require('twilio');
 const client = new twilio('AC137ea60e55217ac51488579446d917d0','057f2aef40ca0e8d3519ef4b796d6628');
 client.messages.create({
    body:"927841",
    to:'+918239563000',
    from:'+17178446696'
 }).then((message)=>{
    console.log("message sent",message);
 }).catch((error)=>{
    console.log("error while sending",error);
 })





