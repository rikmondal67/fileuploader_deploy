import nodemailer from 'nodemailer'

let transporter;

function configureMailer(){
    
    const usermail = process.env.GMAIL_ADRESS
    const userpassword = process.env.APP_PASSWORD


    transporter = nodemailer.createTransport(
    
    {
        secure:true,
        host:'smtp.gmail.com',
        port:465,
        auth:{
            user:usermail,
            pass:userpassword,
        }
    }
)
    console.log('Configuration of mail is  done');
    // console.log(usermail);
    // console.log(userpassword);
}   

export  {configureMailer,transporter};