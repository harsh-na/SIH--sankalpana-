const request=require('request')
const geocode=require('./utils/geocode')
const forecast=require('./utils/forecast')



// const url='http://api.weatherstack.com/current?access_key=78fbeff011e0ba4706c3ec022b131041&query=&units=f'


// request({url:url,json:true},(error,response)=>{
//     if(error){
//         console.log('Unable to connect')
//     }else if(response.body.error){
//         console.log('unable to find location')
//     }
    
//     else{
//     console.log(response.body.current.weather_descriptions[0]+". It is curerntly "+ response.body.current.temperature+" degrees out. It feels like "+response.body.current.feelslike+" degrees out")
//     }
// })

// const geocodeurl='https://api.mapbox.com/geocoding/v5/mapbox.places/'+ encodeURIComponent(address) +'.json?access_token=pk.eyJ1IjoiaGFyc2hpdHNheGVuYSIsImEiOiJjbDNvZWI5OHIwNngzM2NwMTQ1M281ejMyIn0.XDiq1NU029HJzZ9KxZCqOg&limit=1'

// request({url:geocodeurl,json:true},(error,response)=>{
//     if(error){
//         console.log('unable to connect')
//     }
//     else if(response.body.features.length===0){
//         console.log('Unable to find location')

//     }
//     else{
//     const latitude=response.body.features[0].center[0]
//     const longitude=response.body.features[0].center[1]
//     console.log(latitude ,longitude)
//     }
// })

const address=process.argv[2]

if(!address){
  console.log("plz provide address")
}else{
  geocode(address,(error,{latitude,longitude,location}={}) => {
    if(error){
      return console.log(error)
    }
      forecast(latitude, longitude, (error, forecastdata) => {
        if(error){
          return console.log(error)
        }
        console.log(location)
        console.log(forecastdata)
      })
  })
}


console.log(process.argv)





