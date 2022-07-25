const mongoose = require('mongoose')
const validator=require('validator')


mongoose.connect('mongodb://127.0.0.1:27017/task-manager-api', {
    useNewUrlParser: true
    // useCreateIndex: true
})



// const me = new User({
//    name:'Harshit',
// //    age:-1,
//    email:'www.harshit@gmail.com',
//    password:'11111111111111111'
// })

// me.save().then(() => {
//     console.log(me)
// }).catch((error) => {
//     console.log('Error!', error)
// })





// const task=new Task({
//     description:'harshit will learn API creation'
// })



// task.save().then(()=>{
//     console.log(task)
// }).catch((error)=>{
//     console.log('Error!',error)
// })

