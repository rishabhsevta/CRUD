let dbService = {};

//create new Entry
dbService.create = async(model,payload)=>{
    return await model.create(payload);
};

//finding the data
dbService.findOne = async(model,payload)=>{
    return await model.findOne(payload).lean();
}

//Update data
dbService.findOneAndUpdate = async(model,criteria,payload)=>{
    return await model.findOneAndUpdate(criteria, payload,{new:true}).lean();
}


module.exports = dbService;