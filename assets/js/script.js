var resultContent = document.querySelector('#result-content');
var searchFormEl = document.querySelector('#search-form');
var resultListEl = document.getElementById("#result-list");
var resultTextEl = document.querySelector("#result-text");
var backButtonEl = document.getElementById("#back-button");
var forecastResults = document.querySelector("#forecast-results");
var weatherIcon = document.querySelector("#weather-icon");
var citySearch = [];
var cities = [];


  function getWeatherOnSubmit(event) {
  event.preventDefault();
  
  var cityInputVal = document.querySelector('#city-input').value;
 
  //connnect to open weather API five day forecast. cityInput as value.
  var openWeatherApi = "https://api.openweathermap.org/data/2.5/forecast?q=" + cityInputVal + "&units=imperial" + "&appid=" + "b0ff6d197a40a5f8e42c9a3871298d52";

  openWeatherApi = openWeatherApi + '&q=' + cityInputVal;

  fetch(openWeatherApi)
    .then(function (response) {
      console.log(response)
      return response.json();
    })
    .then(function (data) {
      console.log(data)
      var city = cityInputVal;
      console.log(city);
      window.localStorage.setItem(city , JSON.stringify(city));
      for (var i = 0; i < city.length; i++) {
      // window.localStorage.getItem(city)
      document.getElementById("city1").innerHTML = city;
        if (city === i) {
        
        }



    } 
    
    
         //use cityInput coordinates from forecast to apply Onecall Api for current weather and UV index. UV Index API deprecated on 04/01/2020.
       var apiOneCall = "https://api.openweathermap.org/data/2.5/onecall?" + "lat=" + data.city.coord.lat + "&lon=" + data.city.coord.lon + "&units=imperial" + "&appid=" + "b0ff6d197a40a5f8e42c9a3871298d52";
          
       
        fetch(apiOneCall)
        .then(function (response) {
        console.log(response)
        return response.json();
       })
        .then(function (data) {
         console.log(data);
           var humidity = data.current.humidity;
           var uvi = data.current.uvi;
          //  uvi = querySelector('#back-ground')
          //  uvi.setAttribute("background-color", "red")
           var temp = data.current.temp;
          var wind_speed = data.current.wind_speed;
          var currentWeather = data.current.weather[0].description;
          weatherIcon = data.current.weather[0].icon;
          var currentDay =" (" + moment(data.current.dt.value).format("MMM D, YYYY") + ") ";
          console.log(uvi, temp, humidity, wind_speed, currentWeather, weatherIcon, currentDay);
         resultContent = document.querySelector('#result-content');
         resultContent.innerHTML = "<h2>" + cityInputVal.toUpperCase(city) + currentDay + "</h2>" + "<div>" + "<img src=" + "https://openweathermap.org/img/wn/" + weatherIcon + "@2x.png>" + "</div>" + "<br>" + "<p>Forecast: " + "<strong>" + currentWeather + "</strong>" + "</p>" + "<li>Temperature: " + "<strong>" +
          temp + "&#8457" + "</strong>" + "</li>" + "<br>" + "<li>Humidity: " + "<strong>" + humidity + "%" + "</strong>" + "</li>" + "<br>" + "<li>Wind Speed: " + "<strong>" + wind_speed + " MPH" + "</strong>" + "</li>" + "<br>" + "<li>UV Index: " + "<strong>" + uvi + "</strong>" + "</li>";
          
          //append data for 5 day forecast
          dailyWeather = data.daily[1]; 
          tempOne = data.daily[1].temp.day;
          humidityOne= data.daily[1].humidity
          uviOne = data.daily[1].uvi 
          weatherOne = data.daily[1].weather[0].icon
          var dailyOne = moment.unix(data.daily[1].dt).format("MMM D, YYYY");
          console.log(humidityOne, tempOne, uviOne, weatherOne, dailyOne)
          forecastResults = document.querySelector('#dayOne');
          forecastResults.innerHTML = "<h3>" + dailyOne + "</h3>" + "<div>" + "<img src=" + "https://openweathermap.org/img/wn/" + weatherOne + "@2x.png>" + "</div>" + "<p>Temp: " + tempOne + "&#8457" + "</p>" + "<p>Humidity: " + humidityOne + "%" + "</p>" +  "<p>UV Index: " + uviOne + "</p>" ;                                 
        
          forecastTwo = data.daily[2];
          tempTwo = data.daily[2].temp.day;
          humidityTwo = data.daily[2].humidity;
          uviTwo = data.daily[2].uvi;
          weatherTwo = data.daily[2].weather[0].icon
          var dailyTwo = moment.unix(data.daily[2].dt).format("MMM D, YYYY");
          console.log(humidityTwo, tempTwo, uviTwo, dailyTwo)
          forecastResults = document.querySelector('#daytwo');
          dayTwo.innerHTML = "<h3>" + dailyTwo + "</h3>" + "<div>" + "<img src=" + "https://openweathermap.org/img/wn/" + weatherTwo + "@2x.png>" + "</div>" + "<p>Temp: " + tempTwo + "&#8457" + "</p>" + "<p>Humidity: " + humidityTwo + "%" + "</p>" + "<p>UV Index: " + uviTwo + "</p>" ;                                 
        
          forecastThree = data.daily[3];
          tempThree = data.daily[3].temp.day;
          humidityThree = data.daily[3].humidity;
          uviThree = data.daily[3].uvi;
          weatherThree = data.daily[3].weather[0].icon
          var dailyThree = moment.unix(data.daily[3].dt).format("MMM D, YYYY");
          console.log(humidityThree, tempThree, uviThree, dailyThree);
          forecastResults = document.querySelector('#dayThree');
          forecastResults.innerHTML = "<h3>" + dailyThree + "</h3>" + "<div>" + "<img src=" + "https://openweathermap.org/img/wn/" + weatherThree + "@2x.png>" + "</div>"  + "<p>Temp: " + tempThree + "&#8457" + "</p>" + "<p>Humidity: " + humidityThree + "%" + "</p>" + "<p>UV Index: " + uviThree + "</p>" ;                                 
        
          forecastFour = data.daily[4];
          tempFour = data.daily[4].temp.day;
          humidityFour = data.daily[4].humidity;
          uviFour = data.daily[4].uvi; 
          weatherFour = data.daily[4].weather[0].icon
          var dailyFour = moment.unix(data.daily[4].dt).format("MMM D, YYYY");
          console.log(humidityFour, tempFour, uviFour, dailyFour);
          forecastResults = document.querySelector('#dayFour');
          forecastResults.innerHTML = "<h3>" + dailyFour + "</h3>" + "<div>" + "<img src=" + "https://openweathermap.org/img/wn/" + weatherFour + "@2x.png>" + "</div>" + "<p>Temp: " + tempFour + "&#8457" + "</p>" + "<p>Humidity: " + humidityFour + "%" + "</p>" + "<p>UV Index: " + uviFour + "</p>" ;

          forecastFive = data.daily[5];
          tempFive = data.daily[5].temp.day;
          humidityFive = data.daily[5].humidity;
          uviFive = data.daily[5].uvi; 
          weatherFive = data.daily[5].weather[0].icon
          var dailyFive = moment.unix(data.daily[5].dt).format("MMM D, YYYY");
          console.log (humidityFive, tempFive, uviFive, dailyFive);
          forecastResults = document.querySelector('#dayFive');
          forecastResults.innerHTML =  "<h3>" + dailyFive + "</h3>" + "<div>" + "<img src=" + "https://openweathermap.org/img/wn/" + weatherFive + "@2x.png>" + "</div>" + "<p>Temp: " + tempFive + "&#8457" + "</p>" + "<p>Humidity: " + humidityFive + "%" + "</p>" + "<p>UV Index: " + uviFive + "</p>";
            
        });
            
       
        



    });

   
    
    
              
}

searchFormEl.addEventListener('submit', getWeatherOnSubmit);