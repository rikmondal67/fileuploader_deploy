import localupload from "../controllers/localUpload.js";
import cloudupload from "../controllers/cloudUpload.js";

import express from 'express';

const router = express.Router();


router.post('/upload',localupload);

router.post('/cloudupload',cloudupload);

router.get('/',(req,res)=>{
    res.send('this is local route');
});

export default router;