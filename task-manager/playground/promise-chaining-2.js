require('../src/db/mongoose')
const Task=require('../src/models/task')
// const User = require('../src/models/user')

// Task.findByIdAndDelete('62a01a7e1b80c38dc733cfa7').then((task)=>{
//     console.log(task)
//     return Task.countDocuments({ comleted:false})
// }).then((result)=>{
//     console.log(result)
// }).catch((e)=>{
//     console.log(e)
// })


// const updateAgeAndCount=async(id,age)=>{
//     const user=await User.findByIdAndUpdate(id,{age})
//     const count=await User.countDocuments({age})
//     return count
// }
// updateAgeAndCount('629f9733799bf4b0f815f1a6',6).then((count)=>{
//    console.log(count)
// }).catch((e)=>{
//    console.log(e)
// })


const deleteTaskAndCount=async(id)=>{
    const task=await Task.findByIdAndDelete(id)
    const count=await Task.countDocuments({completed:false})
    return count
}

deleteTaskAndCount('62a0dd22cb4c7645585f59b9').then((count)=>{
    console.log(count)
}).catch((e)=>{
    console.log(e)
})

