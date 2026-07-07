import mongoose from 'mongoose';

import { DB_URI,NODE_ENV } from '../config/env.js';

if(!DB_URI){
    throw new Error('DB URI not defined');
}

const connectToDatabase= async()=>{
try{
await mongoose.connect(DB_URI);
console.log(`Connected to Database in ${NODE_ENV}`);
}
catch(error){
    console.error('Error connecting to Database',error);
    process.exit(1);
}
};

export default connectToDatabase;