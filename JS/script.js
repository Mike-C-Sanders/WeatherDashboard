// Api variables from https://openweathermap.org/
var apiKey = '&appid=ec3531a4604c1c9d7f8f0e0ac90c2251'
var apiCityToday = 'https://api.openweathermap.org/data/2.5/weather?q='
var apiCity5Day = 'https://api.openweathermap.org/data/2.5/forecast?q='

// Global variables
var searchBtn = document.querySelector('#search-button');
var searchCity = document.querySelector('#city-search');
var todayHeader = document.querySelector('#today-header');
var todaysTemp = document.querySelector('#todays-temp');
var todaysWind = document.querySelector('#todays-wind');
var todaysHumidity = document.querySelector('#todays-humidity');
var todaysPressure = document.querySelector('#todays-pressure');
var todayIcon =document.querySelector('#today-icon');

var city;
// var storedSearch = localStorage.getItem(JSON.stringify)


//Get 5-day forecast

//when a user searches for a city.
var searchForCity = function(){

    searchBtn.addEventListener('click', function(event){

        event.preventDefault();

        city = searchCity.value;

        var apiRequestToday = `${apiCityToday}${city}&units=imperial${apiKey}`;
        var apiRequest5Day = `${apiCity5Day}${city}&units=imperial${apiKey}`
        //Get today's weather
        fetch(apiRequestToday).then(function(response){
        
            return response.json();
            }).then(function(json){

                updateTodaysWeather(json);

            }).catch(function(error){
                console.log('there was an error:', error);
            })

        fetch(apiRequest5Day).then(function(response){
            return response.json();
        }).then(function(json){

        })
        
    })
}

var updateTodaysWeather = function(data){
    //Set text areas for today's weather
    todayHeader.textContent = `${data.name}`
    todayIcon.setAttribute('src',`http://openweathermap.org/img/wn/${data.weather[0].icon}.png`)
    
    todaysTemp.textContent = `Temp: ${data.main.temp} \xB0F`
    todaysWind.textContent = `Wind: ${data.wind.speed} MPH`
    todaysHumidity.textContent = `Humidity: ${data.main.humidity}%`
    todaysPressure.textContent = `Pressure: ${data.main.pressure} hPa`

    // localStorage.setItem(data.name);
}

var update5DayForecast = function(data){



}

var clearCardText = function(){
    var card = document.querySelectorAll('.card-text');
    card.forEach(function(i){
        i.textContent = '';
    })
}
searchForCity();

// clearCardText();