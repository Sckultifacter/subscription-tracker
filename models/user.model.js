import mongoose from 'mongoose';

const userSchema= new mongoose.Schema({
    name:{
        type:String,
        required:[true,'user name required'],
        trim:true,
        minLength:2,
        maxLength:50,
    },
    email:{
        type:String,
        required:[true,'User email required'],
        unique:true,
        trim:true,
        lowercase:true,
        match:[/\S+@\S+\.\S+/,'Please fill a valid address'],
    },
    password:{
        type:String,
        required:[true,'user password is required'],
        minLength:6,
    }
},{timestamps:true});

const User=mongoose.model("User",userSchema);

export default User;