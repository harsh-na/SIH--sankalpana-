const mongoose=require('mongoose')
const validator=require('validator')


const User = mongoose.model('User', {
    name: {
        type: String,
        required:true,trim:true
    },
    email:{
        type:String,
        required:true,
        trim:true,
        lowercase:true,
        validate(value){
            if(!validator.isEmail(value)){
                throw new Error('Email is not valid')
            }
        }
    },
    age: {
        type: Number,
        default:0,
        validate(value){
            if(value<0){
                throw new Error('Age must be pos')
            }
        }
    },
    password:{
        type:String,
        trim:true,
        required:true,
        minLength:7,
        validate(value){
            if(value.toLowerCase().includes('password')){
                throw new Error('Password does not contain "password"')
            }
        }
    }
})

module.exports=User