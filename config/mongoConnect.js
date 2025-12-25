import mongoose, { connect } from 'mongoose'

async function connectMongodb(){
    mongoose.connect(process.env.MONGODB_URI).then(
        ()=>{
            console.log('connection to db sucessful');
        }
    ).catch(
        ()=>{
            console.log('db connection failed');
        }
    )
}


export default connectMongodb;