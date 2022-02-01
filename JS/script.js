// Api variables from https://openweathermap.org/
var apiKey = '&appid=ec3531a4604c1c9d7f8f0e0ac90c2251'
var apiCityToday = 'api.openweathermap.org/data/2.5/weather?q='

// Global variables
var city = 'London';
var apiRequest = `${apiCityToday}${city}${apiKey}`

console.log(apiRequest);

var todaysWeather = fetch('api.openweathermap.org/data/2.5/weather?q=London&appid=ec3531a4604c1c9d7f8f0e0ac90c2251').then(function(response){
        console.log(response.json());
    }).catch(function(error){
        console.log('there was an error:', error);
    })
    
// todaysWeather();