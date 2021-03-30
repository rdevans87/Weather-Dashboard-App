var resultContent = document.querySelector('#result-content');
var searchFormEl = document.querySelector('#search-form');
var resultListEl = document.getElementById("#result-list");
var resultTextEl = document.querySelector("#result-text");
var backButtonEl = document.getElementById("#back-button");
var forecastResults = document.querySelector("#forecast-results")
var weatherIcon = document.querySelector("#weather-icon")

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
        for (var i = 0; i < city.length; i++) {
          city[i] = localStorage.getItem;
          var citySearchList = document.querySelector(".list-group-item")
          citySearchList.textContent = city;
          
        }
        // resultContent = document.querySelector('#result-content');
        // resultContent.innerHTML = "<h2>City: " + cityInputVal.toUpperCase(city) + "</h2>" + "<br>" + "<li>Temperature: " + 
        // temp + "&#8457" + "</li>" + "<br>" + "<li>Humidity: " + humidity + "%" + "</li>" + "<br>" + "<li>Wind Speed: " + wind + " MPH" + "</li>" ;
          
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
            var temp = data.current.temp;
            var wind_speed = data.current.wind_speed;
            var currentWeather = data.current.weather[0].description;
            console.log(uvi, temp, humidity, wind_speed, currentWeather);
            resultContent = document.querySelector('#result-content');
            resultContent.innerHTML = "<h2>City: " + cityInputVal.toUpperCase(city) + "</h2>" + "<br>" + "<p>Forecast: " + "<strong>" + currentWeather + "</strong>" + "</p>" + "<li>Temperature: " + "<strong>" +
            temp + "&#8457" + "</strong>" +"</li>" + "<br>" + "<li>Humidity: " + "<strong>" + humidity + "%" + "</strong>" + "</li>" + "<br>" + "<li>Wind Speed: " + "<strong>" + wind_speed + " MPH" + "</strong>" + "</li>" + "<br>" + "<li>UV Index: " + "<strong>" + uvi + "</strong>" + "</li>" ;
            
        // current = apiOneCall;
      //  var humidity = data.daily[0].main.humidity;
      //   var temp = data.list[0].main.temp;
      //   var uvi = data.current. 
      //   var wind =  data.list[0].wind.speed;
      //   console.log(temp, humidity, wind, uvi);
      //   resultContent = document.querySelector('#result-content');
      //   resultContent.innerHTML = "<h2>City: " + cityInputVal.toUpperCase(city) + "</h2>" + "<br>" + "<li>Temperature: " + 
      //   temp + "&#8457" + "</li>" + "<br>" + "<li>Humidity: " + humidity + "%" + "</li>" + "<br>" + "<li>Wind Speed: " + wind + " MPH" + "</li>" ;
        
          

        
      
      })
   
      });


  
}




searchFormEl.addEventListener('submit', getWeatherOnSubmit);
