const Mongoose = require('mongoose');
const schema = Mongoose.Schema;

const userSchema = new schema({
    name:{type:String},
    email:{type:String},
    password:{type:String}
});

module.exports = Mongoose.model('users',userSchema);