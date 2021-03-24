var resultContentEl = document.querySelector('#result-content');
var searchFormEl = document.querySelector('#search-form');
var savedSearchEl = document.getElementById("#list-group-item");
var citySearchList = document.getElementById("#saved-search-list");
var resultListEl = document.getElementById("#result-list");
var resultTextEl = document.querySelector("#result-text");


function getWeatherOnSubmit(event) {
  event.preventDefault()
  var cityInputVal = document.querySelector('#city-input').value;

  var openWeatherApi = "https://api.openweathermap.org/data/2.5/forecast?q=" + cityInputVal + "&appid=" + "74a15e51334b346d7b36d2511a654776";

  fetch(openWeatherApi)  
    .then(function (response) {
      if (!response.ok) {
        throw response.json();
      }
      return response.json();
   })
     .then(function (resultsData) {
      displayWeatherResults (resultsData)
     });
      
} 

      function displayWeatherResults (resultsData) {
      console.log(resultsData);
      resultTextEl.textContent = '<h2>City:</h2>'

        var bodyContentEl = document.createElement('p');
        bodyContentEl.innerHTML =
        '<strong>Date:</strong> ' + resultObj.date + '<br/>';


        resultTextEl.textContent = '<h2>City:</h2>'
}

searchFormEl.addEventListener('submit', getWeatherOnSubmit);
