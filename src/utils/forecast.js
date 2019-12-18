const request = require('request')

const forecast = (latitude, longitude, callback) => {
    const url = 'https://api.darksky.net/forecast/8ce18223078c3f6d4aeedc839906aabe/'+latitude+','+longitude+'?units=si'

    request({ url, json: true }, (error, { body }) => {
        if(error) {
            callback('Unable to connect to the weather service!')
        } else if(body.error) {
            callback('Unable to find the weather for the location. Please try again!')
        } else {
            const t = body.currently.temperature
            const p = body.currently.precipProbability
            const summary = body.daily.data[0].summary
            callback(undefined, summary + ' It is currently ' + t + ' degrees out. There is ' + p + '% chance of rain')
        }
    })
}

module.exports = forecast