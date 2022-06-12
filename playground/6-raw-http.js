// const { request } = require('https')
const http=require('http')
const url='http://api.weatherstack.com/current?access_key=78fbeff011e0ba4706c3ec022b131041&query=45,-75&units=f'
 
const request=http.request(url,(response)=>{
    let data=''
    response.on('data',(chunk) => {
       data=data+chunk.toString()
    })

    response.on('end',() => {
       const body=JSON.parse(data)
       console.log(body)
    })
})

request.on('error',(error) => {
    console.log('An error',error)
})
request.end()
