var resultContent = document.querySelector('#result-content');
var searchFormEl = document.querySelector('#search-form');
var resultListEl = document.getElementById("#result-list");
var resultTextEl = document.querySelector("#result-text");
var backButtonEl = document.getElementById("#back-button");
var forecastResults = document.querySelector("#forecast-results")

function getWeatherOnSubmit(event) {
  event.preventDefault();

  for (var i = 0; i < localStorage.length; i++) {
    citySearchList = cityInputVal.localStorage.getItem(i);
    citySearchList.append("<button class='list-group-item'>" + cityInputVal + "</button>");
    citySearchList.innerHTML = "<button class='list-group-item'>" + cityInputVal + "</button>";
  }

    
  
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
        // var humidity = data.list[0].main.humidity;
        // var temp = data.list[0].main.temp;
        // var wind =  data.list[0].wind.speed;
        // // var icon  = data.list[0].weather.main.icon;
        console.log(city);
        // resultContent = document.querySelector('#result-content');
        // resultContent.innerHTML = "<h2>City: " + cityInputVal.toUpperCase(city) + "</h2>" + "<br>" + "<li>Temperature: " + 
        // temp + "&#8457" + "</li>" + "<br>" + "<li>Humidity: " + humidity + "%" + "</li>" + "<br>" + "<li>Wind Speed: " + wind + " MPH" + "</li>" ;
          
        //use cityInput coordinates from forecast to apply Onecall Api for current weather and UV index. UV Index API deprecates on 04/01/2020.
        var apiOneCall = "https://api.openweathermap.org/data/2.5/onecall?" + "lat=" + data.city.coord.lat + "&lon=" + data.city.coord.lon + "&units=imperial" + "&appid=" + "b0ff6d197a40a5f8e42c9a3871298d52";

        fetch(apiOneCall)
        .then(function (response) {
          console.log(response)
          return response.json();
        })
         .then(function (data) { 
           console.log(data)
           current = apiOneCall;
            coord = city;
            var uvi = data.current.uvi;
            var humidity = data.current.humidity;
            var temp = data.current.temp;
            var wind_speed = data.current.wind_speed;
        //     weather = 
        // // var icon  = data.list[0].weather.main.icon;
            console.log(uvi, temp, humidity, wind_speed);
            resultContent = document.querySelector('#result-content');
            resultContent.innerHTML = "<h2>City: " + cityInputVal.toUpperCase(city) + "</h2>" + "<br>" + "<p>" + "</p>" + "<br>" + "<li>Temperature: " + 
            temp + "&#8457" + "</li>" + "<br>" + "<li>Humidity: " + humidity + "%" + "</li>" + "<br>" + "<li>Wind Speed: " + wind_speed + " MPH" + "UV Index: " + uvi + "</li>";
          
           
      //  var humidity = data.list[0].main.humidity;
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
