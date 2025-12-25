import mongoose from 'mongoose'
import bcrypt from 'bcrypt'
import fileDb from '../models/fileDb.js';

async function storeData(name,password,email,url){
    try{

        console.log('db saving..')

        console.log(name,password,email,url)
    const hashpassword =await bcrypt.hash(password,10);

    const newdata = new fileDb(
        {
            name:name,
            password:hashpassword,
            email_id:email,
            image_url:url
        }

    )

    
    const result = await newdata.save();
    console.log(result);

    }
    catch(error){
        console.log(error);
    }
}


export default storeData;