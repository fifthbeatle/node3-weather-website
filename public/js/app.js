const weatherForm = document.querySelector('form')
const search = document.querySelector('input')
const error = document.querySelector('p#error')
const weather = document.querySelector('p#weather')

weatherForm.addEventListener('submit', (e) => {
    e.preventDefault()
    
    var location = search.value
    var queryString = '/weather?address='+location 

    error.textContent = 'Fetching the data...'
    weather.textContent = ''

    fetch(queryString).then((response) => {
        response.json().then((jString) => {
            if(jString.error) {
                error.textContent = jString.error
                weather.textContent = ''
            } else {
                error.textContent = jString.location
                weather.textContent = jString.forecast
            }
            
        })
    })
})

