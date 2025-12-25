//in this controller we will upload the file inside the local storage

import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

async function localupload(req,res){

    try{
    
    let uploadPhoto = req.files.myfile;
    
    console.log(uploadPhoto)

    let tempfilePath = uploadPhoto.tempFilePath

    

    let targetFolder = __dirname

    const extension = uploadPhoto.name.split('.')[1].toLowerCase();
    
    targetFolder = __dirname + '/uploads/' + Date.now() + `.${extension}`;

    await uploadPhoto.mv(targetFolder)

    
    return res.status(200).json({
        'message':'file upload done'
    })

    }
    catch(error){
        console.log('something went wrong while uploading ');
        res.status(400).json(
            {
                message:'something went wrong'
            }
        )
    }
}


export default localupload;