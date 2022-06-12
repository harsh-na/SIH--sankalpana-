require ('../src/db/mongoose')
const User=require('../src/models/user')

//629f9733799bf4b0f815f1a6

// User.findByIdAndUpdate('62a0180ceeecef63ed3796d3',{age:1}).then((user)=>{
//     console.log(user)
//     return User.countDocuments({age:1})
// }).then((result)=>{
//     console.log(result)
// }).catch((e)=>{
//     console.log(e)
// })

const updateAgeAndCount=async(id,age)=>{
      const user=await User.findByIdAndUpdate(id,{age})
      const count=await User.countDocuments({age})
      return count
}
 updateAgeAndCount('629f9733799bf4b0f815f1a6',6).then((count)=>{
     console.log(count)
 }).catch((e)=>{
     console.log(e)
 })
