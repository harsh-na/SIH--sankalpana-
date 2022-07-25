const mongoose=require ('mongoose')
// const bcrypt=require('bcryptjs')
// const User = require('./user')

// const validator=require('validator')
const taskSchema=new mongoose.Schema({
    description:{
        type:String,
        trim:true,
        required:true
    },
    completed:{
        type:Boolean,
        default:false
    },
    owner:{
        type: mongoose.Schema.Types.ObjectId,
        required:true,
        ref:'User'//connecting user with the task
    }
},{
    timestamps:true
})

const Task=mongoose.model('Task',taskSchema)



// taskSchema.pre('save',async function(next){
//     const task=this
//     if(task.isModified('password')){
//         Task.password=await bcrypt.hash(Task.password,8)
//     }
//     next()
// })

// const Task=mongoose.model('Task',taskSchema)

module.exports=Task