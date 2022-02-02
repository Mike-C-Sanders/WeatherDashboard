// Api variables from https://openweathermap.org/
var apiKey = '&appid=ec3531a4604c1c9d7f8f0e0ac90c2251'
var apiCityToday = 'https://api.openweathermap.org/data/2.5/weather?q='

// Global variables
var searchBtn = document.querySelector('#search-button');
var searchCity = document.querySelector('#city-search');
var todayHeader = document.querySelector('#today-header');
var todaysTemp = document.querySelector('#todays-temp');
var todaysWind = document.querySelector('#todays-wind');
var todaysHumidity = document.querySelector('#todays-humidity');
var todaysUVI = document.querySelector('#todays-uvi');
var city;

//Get today's weather
//Get 5-day forecast

//when a user searches for a city.
var searchForCity = function(){

    searchBtn.addEventListener('click', function(event){

        event.preventDefault();

        city = searchCity.value;

        var apiRequest = `${apiCityToday}${city}&units=imperial${apiKey}`;

        fetch(apiRequest).then(function(response){
        
                return response.json();
            }).then(function(json){
                updateTodaysWeather(json);
            }).catch(function(error){
                console.log('there was an error:', error);
            })
            
    })
}

var updateTodaysWeather = function(data){
    todayHeader.textContent = `${data.name} `



}

searchForCity();