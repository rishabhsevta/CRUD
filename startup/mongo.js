const mongoose = require('mongoose');

module.exports = async()=>{
    try{
        await mongoose.connect(process.env.DB_URL)
        console.log(`MongoDb connected at ${process.env.DB_URL}`);
    }
    catch(err){
        console.log(err);
    }
}