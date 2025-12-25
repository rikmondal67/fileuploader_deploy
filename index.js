import express from 'express';
import dotenv from 'dotenv'
import router from './routes/localRoute.js';
import fileUpload from 'express-fileupload';
import cloudinaryConfig from './config/cloudinaryCofig.js';
import connectMongodb from './config/mongoConnect.js';
import {configureMailer} from './config/nodemailerConfig.js'


dotenv.config();
connectMongodb();
cloudinaryConfig();
configureMailer();


const app = express();
const PORT = process.env.PORT;

app.use(express.json());
app.use(fileUpload({
    useTempFiles : true,
    tempFileDir : '/tmp/'
}));
app.use(router);


app.listen(PORT,()=>{
    console.log(`server is listening on ${PORT}`)
})