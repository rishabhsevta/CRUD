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



const express = require('express');
const session = require('express-session');

const app = express();

// Use the express-session middleware
app.use(session({
  secret: 'your_secret_key', // Secret used to sign the session ID cookie
  resave: false,
  saveUninitialized: true
}));

// Example route using sessions
app.get('/', (req, res) => {
  // Access session data
  console.log(req.session);
  if (req.session.views) {
    req.session.views++;
  } else {
    req.session.views = 1;
  }

  res.send(`Views: ${req.session.views}`);
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});










