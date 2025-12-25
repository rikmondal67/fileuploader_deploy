import {transporter} from "../config/nodemailerConfig.js";

// const transporter = configureMailer();


function sendMail(to,reciver_email,msg){
    try{

    
    const mailhtml = `<p>Hello ${to},</p>
    <p>Please find your uploaded image below:</p>
    <a href=${msg} target="_blank">Click here to view the image</a>
    <img src="${msg}" alt="Girl in a jacket" width="500" height="600">
    `

    

    transporter.sendMail(
        {
            to:reciver_email,
            subject:'File sucessfully uploaded to cloud service',
            html: mailhtml,
        }
    )
    }
    catch(error){
        console.log(error);
    }
}

export default sendMail;