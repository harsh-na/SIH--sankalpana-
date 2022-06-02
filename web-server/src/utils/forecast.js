const request=require('request')

const forecast=(latitude,longitude,callback) => {
    const url='http://api.weatherstack.com/current?access_key=78fbeff011e0ba4706c3ec022b131041&query=' + latitude + ',' + longitude + '&units=f'
    request({url,json:true},(error,{ body })=> {
        if(error){
            callback('unable to connect to weather service',undefined)
        }else if(body.error){
            callback('Unable to find location',undefined)
        }else{
                callback(undefined,body.current.weather_descriptions[0]+". It is curerntly "+ body.current.temperature+" degrees out. It feels like "+body.current.feelslike+" degrees out")
        }
    })
}

module.exports = forecast