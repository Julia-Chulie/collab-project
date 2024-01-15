import mongoose from "mongoose";
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    lastname: {
        type: String,
         required: true,
          minLength: 1 ,
          validate: value => {
        if(value ==="" || value.length <= 1){
            throw  new Error('Nom trop court')
        }
    }},
    firstname: {
        type: String,
        required: true,
        minLength: 1,
        validate: value => {
        if(value ==="" || value.length <= 1){
            throw  new Error('Prénom trop court')
        }
    }},
    email:{
        type: String,
        required: true ,
        trim:true ,
        unique:true
        },
    password: {
        type: String,
        required: true
    },
    gender: {
        required: true,
        type: String,
    },
    phone: {
        required: true,
        type: String,
    },
    birthdate   : {
        required: true,
        type: Date,
    },
    isAdmin: {
        required: true,
        type: Boolean,
        default: false
    },
    city: {
        type: String,
        required: true ,
    },
    country: {
        type: String,
        required: true ,
    },
    category: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now,
        required: true
    },
},{
    timestamps: true
    });

const UserModel = mongoose.model('user', UserSchema);

export default UserModel;   