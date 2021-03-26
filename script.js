var resultContent = document.querySelector('#result-content');
var searchFormEl = document.querySelector('#search-form');
var savedSearchEl = document.getElementById("#list-group-item");
var citySearchList = document.getElementById("#saved-search-list");
var resultListEl = document.getElementById("#result-list");
var resultTextEl = document.querySelector("#result-text");
var backButtonEl = document.getElementById("back-button");


function getWeatherOnSubmit(event) {
  event.preventDefault();
  
  var cityInputVal = document.querySelector('#city-input').value;

  var openWeatherApi = "https://api.openweathermap.org/data/2.5/forecast?q=" + cityInputVal + "&units=imperial" + "&appid=" + "b0ff6d197a40a5f8e42c9a3871298d52";

  openWeatherApi = openWeatherApi + '&q=' + cityInputVal;

  fetch(openWeatherApi)  
    .then(function (response) {
      console.log(response)
      return response.json();
    })
     .then(function (data) { 
       console.log(data)
        var title = cityInputVal;
        var humidity = data.list[0].main.humidity;
        var temp = data.list[0].main.temp;
        var wind =  data.list[0].wind.speed;
        console.log(temp, humidity, wind)
        resultContent = document.querySelector('#result-content');
        resultContent.innerHTML = "<h2>City: " + cityInputVal.toUpperCase(title) + "</h2>" + "<br>" + "<li>Temperature: " + 
        temp + "&#8457" + "</li>" + "<br>" + "<li>Humidity: " + humidity + "</li>" + "<br>" + "<li>Wind Speed: " + wind + "</li>";
    })
}



searchFormEl.addEventListener('submit', getWeatherOnSubmit);
