const request = require('request')

const geocode = (address, callback) => {
    const url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/'+address+'.json?access_token=pk.eyJ1IjoiZmlmdGhiZWF0bGUiLCJhIjoiY2s0ODQwMG94MGhrMDNrcGFydXF3bmx0bSJ9.SRTo6Vovm4ZHj6Z35Gq7lA&limit=1'
    
    request({ url, json: true}, (error, { body }) => {
        if(error) { 
            callback('Unable to connect to location services', {})
        } else if(body.features.length === 0) {
            callback('Location could not be found. Please try another search', {})
        } else {
            callback(undefined, {
                location: body.features[0].place_name,
                longitude: body.features[0].center[0],
                latitude: body.features[0].center[1],
            })
        }
    })
}

module.exports = geocode