let dbService = {};

dbService.create = async(model,payload)=>{
    console.log(model);
    return await model.insertMany(payload);
};

module.exports = dbService;