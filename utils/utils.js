const nodemailer = require('nodemailer');

const utils ={};

//nodemailer config
const transporter = nodemailer.createTransport({
    service:'gmail',
    auth:{
        user: process.env.EMAIL,
        pass: process.env.PASSWORD
    }
});



//send mail via nodemailer
/*
**  @payload consists of email,subject,text
*/
utils.sendMail = async(payload)=>{
    const mailOptions = {
        from:'Rishbh',
        to: payload.email,
        subject: payload.subject,
        text: payload.data
    }

    transporter.sendMail(mailOptions,(error,info)=>{
        if(error){
            console.log('Error sending email',error);
        }
        else{
            console.log('Email sent',info.response);
        }
    })
}



module.exports = utils;
