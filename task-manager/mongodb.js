//CRUD create read update delete

// const mongodb=require('mongodb')
// const MongoClient=mongodb.MongoClient//MongoClient here is just a nodejs library that handles connecting to and interacting with a mongoDB database
// const ObjectID=mongodb.objectID
const {MongoClient,ObjectID}=require('mongodb')


const connectionURL='mongodb://127.0.0.1:27017'
const databaseName='task-manager'

// const id =new ObjectID()//constructor function, working -: to create new ID's
// console.log(id.id.length)
// console.log(id.toHexString().length)

MongoClient.connect(connectionURL,{useNewUrlParser:true,useUnifiedTopology: true},(error,client)=>{
    if(error){
        return console.log('Unable to connect to database!')
    }
    const db=client.db(databaseName)

//use of update one
    db.collection('users').updateOne({
        _id: new ObjectID("629a64ff058e751da44bce21")
    },{
        $inc:{
            age:-5
        }
    }).then((result)=>{
        console.log(result)
    }).catch((error)=>{
        console.log(error)
    })
//update many
        // db.collection('tasks').updateMany({
        //    completed:true
        // },{
        //     $set:{
        //         completed:false
        //     }
        // }).then((result)=>{
        //     console.log(result.modifiedCount)
        // }).catch((error)=>{
        //     console.log(error)
        // })


        // db.collection('tasks').updateMany({
        //     completed:false
        // },{
        //     $set:{
        //         completed:true
        //     }
        // }).then((result)=>{
        //     console.log(result.modifiedCount)
        // }).catch((error)=>{
        //     console.log(error)
        // })



        // db.collection('users').deleteMany({
        //     age:21
        // }).then((result)=>{
        //     console.log(result)
        // }).catch((error)=>{
        //     console.log(error)
        // })


        

        // db.collection('tasks').deleteOne({
        //    description:"first"
        // }).then((result)=>{
        //     console.log(result)
        // }).catch((error)=>{
        //     console.log(error)
        // })

     








//find and findone demo    

// db.collection('users').findOne({_id:new ObjectID("629aeaee86bc932d64c8ec36")},(error,result)=>{
//     if(error){
//        return console.log('Unable to fetch') 
//     }
//     console.log(result)
// })





// db.collection('tasks').findOne({_id:new ObjectID("629aec9ce863c537c41d4a37")},(error,result)=>{
//     console.log(result)
// })

// db.collection('tasks').find({completed: "true"}).toArray((error,tasks)=>{
//     console.log(tasks)
// })









// db.collection('users').find({age:20}).toArray((error,result)=>{
//     console.log(result)
// })
// db.collection('users').find({age:20}).count((error,result)=>{
//     console.log(result)
// })

//insertOne and insertMany demo

    // db.collection('users').insertOne({
     
    //     name:'vikram',
    //     age:222
    // },(error,result)=>{
    //     if(error){
    //         return console.log('Unable to insert user')
    //     }
    //     console.log(result.ops)
    // })

        // db.collection('users').insertMany([
        //     {
        //         name:'sam',
        //         age:21
        //     },{
        //         name:'ram',
        //         age:45
        //     }
        // ],(error,result)=>{
        //     if(error){
        //         return console.log('Unable to insert document')
        //     }
        //     console.log(result.ops)
        // })


    // db.collection('tasks').insertMany([
    //     {
    //         description:'first',
    //         completed:'true'
    //     },
    //     {
    //         description:'second',
    //         completed:'true'
    //     },
    //     {
    //         description:'third',
    //         completed:'false'
    //     }
    // ],(error,result) =>{
    //     if(error){
    //         return console.log('Unable to insert document')
    //     }
    //     console.log(result.ops)
    // })

})



