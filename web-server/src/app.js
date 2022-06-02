const path=require('path')

const express = require('express')
const hbs=require('hbs')
const geocode=require('./utils/geocode')
const forecast =require('./utils/forecast')

// console.log(__dirname)
// console.log(path.join(__dirname,'../public'))

const app=express()


//define paths for Express config
const publicDirectoryPath=path.join(__dirname,'../public')
const viewsPath=path.join(__dirname,'../templates/views')
const partialsPath=path.join(__dirname,'../templates/partials')


//setup handlebars engine and views location
app.set('view engine','hbs')//changing the default view engine
app.set('views',viewsPath)
hbs.registerPartials(partialsPath)

//setup statric directory to serve
app.use(express.static(publicDirectoryPath))

app.get('',(req,res) => {
    res.render('index',{
        title:'Weather',
        name:'Harshit saxena'
    })
})

app.get('/about',(req,res)=>{
    res.render('about',{
        title:'about me',
        name:'harshit saxena'
    })
})

app.get('/help',(req,res)=>{
    res.render('help',{
        title:'help all needy ones',
        name:'Harshit saxena'
    })
})


// app.get('/help',(req,res)=>{
//     res.send({
//         name:'harshit',
//         age:20
//     })
// })



// app.get('/about',(req,res) => {
//     res.send('title page')
// })

app.get('/weather',(req,res) =>{

    if(!req.query.address){
        return res.send({
            error:'You must log in'
        })
    }

    geocode(req.query.address ,(error,{latitude,longitude,location}={} )=>{
        if(error){
            return res.send({error})
        }
        forecast(latitude,longitude,(error,forecastData)=>{
            if(error){
                return res.send({error})
            }
            res.send({
                forecast:forecastData,
                location,
                address:req.query.address
            })
        })

    })
    // else{
        
    //     console.log(req.query.search)
    //     res.send({
    //         forecast:'It is humid',
    //         location:'Ghaziabad'
    //     })
    // }
})

app.get('/products',(req,res)=>{

    if(!req.query.search){
        return res.send({
            error:'You must log in'
        })
    }else{

        console.log(req.query.search)
        res.send({
            products:[]
        })
    }
})

app.get('/help/*',(req,res)=>{
    res.render('404',{
        title:'404',
        name:'ram'
    })
})
app.get('*',(req,res)=>{
    res.render('404',{
        title:'404',
        name:'harshit saxena',
        errorMessage:'page not found'
    })
})

app.listen(3000,() => {
console.log('Server is on port 3000')
})



