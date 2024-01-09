require('dotenv').config();
const express = require('express');
const app = express();
const {userRoutes} = require('./Routes/index');
const {mongoStartUp} = require('./startup/index')
mongoStartUp();

app.use(express.json());
app.use('/users',userRoutes);

app.listen(process.env.PORT ||3000,()=>{
    console.log(`port running at ${process.env.PORT || 3000}`);
})