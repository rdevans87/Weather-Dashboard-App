var resultContentEl = document.querySelector('#result-content');
var searchFormEl = document.querySelector('#search-form');
var savedSearchEl = document.getElementById("#list-group-item");
var citySearchList = document.getElementById("#saved-search-list");
var resultListEl = document.getElementById("#result-list");
var resultTextEl = document.querySelector("#result-text");


function getWeatherOnSubmit(event) {
  event.preventDefault();

  var cityInputVal = document.querySelector('#city-input').value;

  var openWeatherApi = "https://api.openweathermap.org/data/2.5/forecast?q=" + cityInputVal + "&appid=" + "74a15e51334b346d7b36d2511a654776";
  
  openWeatherApi = openWeatherApi + '&q=' + cityInputVal;
  fetch(openWeatherApi)  
    .then(function (response) {
        console.log(response)
        return response.json();
    })
     .then(function (data) { 
       console.log(data)

        var resultTextEl = document.querySelector('#result-content');
        resultTextEl.innerHTML = "<h2>City: " + data + "</h2>";
        cityName.textContent = "text content";
        resultTextEl.textContent = data.weather;
        resultContentEl.append(cityName);
        resultContentEl.append(weather);
        
    });
}
       
  //     function displayWeather(data) {
  //       var temp = document.querySelector("#result-list");
  //       temp.textContent = "This is the temp element"
  //       resultListEl.append(temp);
  //       resultTextEl = document.querySelector(".card card-rounded");
  //       resultTextEl.textContent = "<h2>City: " + (data.name) + "</h2>";
  //       resultTextEl.append(temp);
    
  // }     
      // var cityName = object[i].name;
      // var conditionsList = object[i].list.wind.speed

      // cityName = document.append('h2');
      // conditionsList = document.append('li');
       
      

searchFormEl.addEventListener('submit', getWeatherOnSubmit);
