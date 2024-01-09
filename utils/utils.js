const nodemailer = require('nodemailer');
const twilio = require('twilio');
const jwt = require('jsonwebtoken');

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


//send message using twilio
/*
** payload consists of message and receiver number
*/

utils.sendMessage = async(payload)=>{
    const client = new twilio(process.env.TWILIO_ID,process.env.TWILIO_SECRET_KEY);
    client.messages.create({
       body:"927841",
       to:'+918559078830',
       from: process.env.TWILIO_NUMBER
    }).then((message)=>{
       console.log("message sent",message);
    }).catch((error)=>{
       console.log("error while sending",error);
    }) 
}

// Generate jwt token

utils.generateToken = async(payload)=>{
    return jwt.sign(payload, process.env.SECRET_KEY, {expiresIn:'1h', algorithm:'HS256'});
}

// Verify jwt token

utils.verifyToken = async(payload)=>{
  return jwt.verify(payload, process.env.SECRET_KEY)
}

module.exports = utils;
