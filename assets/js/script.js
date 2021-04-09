var resultContent = document.querySelector('#result-content');
var searchFormEl = document.querySelector('#search-form');
var resultListEl = document.getElementById("#result-list");
var resultTextEl = document.querySelector("#result-text");
var backButtonEl = document.getElementById("#back-button");
var forecastResults = document.querySelector("#forecast-results")
var weatherIcon = document.querySelector("#weather-icon")

// var citySearchList = [];
//   citySearchList = localStorage.getItem(".list-group-item")
// if (!savedCities) {
// citySearchList = localStorage.setItem(".list-group-item")
// for (var i = 0; i < city.length; i++) {
//   // city[i] = localStorage.setItem("city", city);
//   citySearchList = cityInputVal;
//   document.getElementById("city1").innerHTML = city.toString(i);
//   // citySearchList = localStorage.getItem(city);
//   if (cityInputVal !== null)
//   console.log(cityInputVal)
// }

function getWeatherOnSubmit(event) {
  event.preventDefault();

  var cityInputVal = document.querySelector('#city-input').value;
  // savedCities.push(cityInputVal);
  //check to see if input is more than want to have saved in resultList
  //saved cities.length? if this is over a certain length. take off value. remove the first/oldest searched. if over list then remove index 0



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
      citySearchList = localStorage.getItem(".list-group-item")
      
      for (var i = 0; i < city.length; i++) {
      // city[i] = localStorage.setItem("city", city);
      citySearchList = cityInputVal;

      if (!citySearchList) {
        citySearchList = localStorage.setItem(".list-group-item")
        } else {
          savedCities.push(cityInputVal);
        }
      // document.getElementById("city1").innerHTML = city.toString(i);
      // citySearchList = localStorage.getItem(city);
      if (citySearchList !== null){
      console.log(cityInputVal)
      } 
      // document.getElementById("city2").innerHTML = cityInputVal.push(city[1]);
      // cityInputVal.append(citySearchList) = city.toString(i);
      
      // if (citySearchList !== "city2")
      // document.getElementById("city3").append(citySearchList) = cityInputVal.toString(i);
     
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
          console.log(uvi, temp, humidity, wind_speed, currentWeather, weatherIcon);
         resultContent = document.querySelector('#result-content');
         resultContent.innerHTML = "<h2>City: " + city.toUpperCase(city) + "</h2>" + "<div>" + "<img src=" + "https://openweathermap.org/img/wn/" + weatherIcon + "@2x.png>" + "</div>" + "<br>" + "<p>Forecast: " + "<strong>" + currentWeather + "</strong>" + "</p>" + "<li>Temperature: " + "<strong>" +
          temp + "&#8457" + "</strong>" + "</li>" + "<br>" + "<li>Humidity: " + "<strong>" + humidity + "%" + "</strong>" + "</li>" + "<br>" + "<li>Wind Speed: " + "<strong>" + wind_speed + " MPH" + "</strong>" + "</li>" + "<br>" + "<li>UV Index: " + "<strong>" + uvi + "</strong>" + "</li>";
        

          dailyWeather = data.daily[0]; 
          tempOne = data.daily[0].temp.day;
          humidityOne= data.daily[0].humidity
          uviOne = data.daily[0].uvi 
          weatherOne = data.daily[0].weather[0].icon
          console.log(humidityOne, tempOne, uviOne, weatherOne)
          forecastResults = document.querySelector('#dayOne');
          forecastResults.innerHTML = "<h3>Day 1:" + "</h3>" + "<div>" + "<img src=" + "https://openweathermap.org/img/wn/" + weatherOne + "@2x.png>" + "</div>" + "<p>Temp: " + tempOne + "&#8457" + "</p>" + "<p>Humidity: " + humidityOne + "%" + "</p>" +  "<p>UV Index: " + uviOne + "</p>" ;                                 
        
          forecast = data.daily[1];
          tempTwo = data.daily[1].temp.day;
          humidityTwo = data.daily[1].humidity;
          uviTwo = data.daily[1].uvi;
          weatherTwo = data.daily[1].weather[0].icon
          console.log(humidityTwo, tempTwo, uviTwo)
          forecastResults = document.querySelector('#daytwo');
          dayTwo.innerHTML = "<h3>Day 2:" + "</h3>" + "<div>" + "<img src=" + "https://openweathermap.org/img/wn/" + weatherTwo + "@2x.png>" + "</div>" + "<p>Temp: " + tempTwo + "&#8457" + "</p>" + "<p>Humidity: " + humidityTwo + "%" + "</p>" + "<p>UV Index: " + uviTwo + "</p>" ;                                 
        
          forecastTwo = data.daily[2];
          tempThree = data.daily[2].temp.day;
          humidityThree = data.daily[2].humidity;
          uviThree = data.daily[2].uvi;
          weatherThree = data.daily[2].weather[0].icon
          console.log(humidityThree, tempThree, uviThree);
          forecastResults = document.querySelector('#dayThree');
          forecastResults.innerHTML = "<h3>Day 3:" + "</h3>" + "<div>" + "<img src=" + "https://openweathermap.org/img/wn/" + weatherThree + "@2x.png>" + "</div>"  + "<p>Temp: " + tempThree + "&#8457" + "</p>" + "<p>Humidity: " + humidityThree + "%" + "</p>" + "<p>UV Index: " + uviThree + "</p>" ;                                 
        
          forecastThree = data.daily[3];
          tempFour = data.daily[3].temp.day;
          humidityFour = data.daily[3].humidity;
          uviFour = data.daily[3].uvi; 
          weatherFour = data.daily[3].weather[0].icon
          console.log(humidityFour, tempFour, uviFour);
          forecastResults = document.querySelector('#dayFour');
          forecastResults.innerHTML =  forecastResults.innerHTML = "<h3>Day 4:" + "</h3>" + "<div>" + "<img src=" + "https://openweathermap.org/img/wn/" + weatherFour + "@2x.png>" + "</div>" + "<p>Temp: " + tempFour + "&#8457" + "</p>" + "<p>Humidity: " + humidityFour + "%" + "</p>" + "<p>UV Index: " + uviFour + "</p>" ;

          forecastFour = data.daily[4];
          tempFive = data.daily[4].temp.day;
          humidityFive = data.daily[4].humidity;
          uviFive = data.daily[4].uvi; 
          weatherFive = data.daily[4].weather[0].icon
          console.log (humidityFive, tempFive, uviFive);
          forecastResults = document.querySelector('#dayFive');
          forecastResults.innerHTML =  forecastResults.innerHTML = "<h3>Day 5: " + "</h3>" + "<div>" + "<img src=" + "https://openweathermap.org/img/wn/" + weatherFive + "@2x.png>" + "</div>" + "<p>Temp: " + tempFive + "&#8457" + "</p>" + "<p>Humidity: " + humidityFive + "%" + "</p>" + "<p>UV Index: " + uviFive + "</p>";
            
        });
            

    });

  //   function displayWeatherIconOnSubmit () {

  //   var cityInputVal = document.querySelector('#list-group-item').value;
  //     //connnect to open weather API five day forecast. cityInput as value.
  //   var openWeatherIcon = "api.openweathermap.org/data/2.5/weather?q=" + cityInputVal + "&units=imperial" + "&appid=" + "b0ff6d197a40a5f8e42c9a3871298d52";

  //       openWeatherIcon = "http://openweathermap.org/img/wn/10d@2x.png

  //   openWeatherApi = openWeatherApi + '&q=' + cityInputVal;

  //   fetch(openWeatherApi)
  //   .then(function (response) {
  //     console.log(response)
  //     return response.json();
  //   });
  //   

  // }

  //   weatherIcon.addEventListener('click', displayWeatherIconOnSubmit);            
}

searchFormEl.addEventListener('submit', getWeatherOnSubmit);