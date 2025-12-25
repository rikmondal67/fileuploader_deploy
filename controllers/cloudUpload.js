import cloudinary from 'cloudinary'
import storeData from './dbstore.js';




async function cloudupload(req,res){
    try {

        const {name,password,email} = req.body;

        let uploadPhoto = req.files.myfile;
    
        // console.log(uploadPhoto)

        let tempfilePath = uploadPhoto.tempFilePath

        console.log(tempfilePath)


        const result = await cloudinary.uploader.upload(
            tempfilePath,
            {
                
                resource_type: "auto",
            }
        );
        const url = result.secure_url

       

        

     

        storeData(name,password,email,url)

        return res.status(200).json({
            message: "file upload done",
            url: url
        });

    } catch (error) {
        console.error(error);
        return res.status(500).json({
            message: "cloudinary upload failed"
        });
    }
}

export default cloudupload;
