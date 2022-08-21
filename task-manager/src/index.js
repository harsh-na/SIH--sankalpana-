const express=require('express')
require('./db/mongoose')
const User=require('./models/user')
const Task=require('./models/task')
const userRouter =require('./routers/user')
const taskRouter=require('./routers/task')
// const { findByIdAndDelete } = require('./models/user')

const app=express()
const port=process.env.PORT||3000

app.use(function(req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
    res.setHeader('Access-Control-Allow-Credentials', true);
    next();
});



// app.use((req,res,next)=>{
//     if(req.method==='GET'){
//         res.send('GET requests are disabled')
//     }else{
//         next()
//     }
//     // console.log(req.method,req.path)
//     // next()
// })


// app.use((req,res,next)=>{
//     res.status(503).send('site is currently down. check back soon')
// })

app.use(express.json())
app.use(userRouter)
app.use(taskRouter)

app.listen(port,()=>{
    console.log('Server is on Port '+port)
})

// const Task=require('./models/task')
// const User=require('./models/user')

const main=async()=>{
    // const task=await Task.findById('62dce8b76c5368fad7a16e9c')
    // await task.populate('owner').execPopulate()
    // console.log(task.owner)
const user=await User.findById('62dce04da52af4a45ad10110')
await user.populate('tasks')
console.log(user.tasks)

}

main()