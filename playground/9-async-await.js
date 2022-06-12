const add=(a,b)=>{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            if(a<b ||b<a){
                return reject('please enter +ve no.')
            }
            resolve(a+b)
        },2000)
    })
}

const doWork=async()=>{//async function always return promise
   const sum= await add(1,99)
   const sum2=await add(sum,-50)
   const sum3=await add(sum2,3)
   return sum3
}


doWork().then((result)=>{
    console.log('result',result)
}).catch((e)=>{
    console.log('e',e)
})