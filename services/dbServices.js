let dbService = {};

//create new Entry
dbService.create = async(model,payload)=>{
    return await model.create(payload);
};

//finding the data
dbService.findOne = async(model,payload)=>{
    return await model.findOne(payload);
}


module.exports = dbService;