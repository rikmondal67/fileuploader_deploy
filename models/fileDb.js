import sendMail from "../controllers/sendMail.js";
import mongoose from "mongoose";

const filestore = new mongoose.Schema(
    {
        name:{
            type:String,
            require:true,
        },
        email_id:{
            type:String,
            require:true,
        },
        password:{
            type:String,
            require:true
        },
        image_url:{
            type:String,
            require:true,
        },
    }
)

filestore.post('save',async(doc,next)=>{
    sendMail(doc.name,doc.email_id,doc.image_url);
    next()
})

export default mongoose.model('fileDB',filestore);