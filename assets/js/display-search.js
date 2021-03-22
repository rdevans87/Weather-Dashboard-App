var resultContentEl = document.querySelector('#result-content');
var searchFormEl = document.querySelector('#search-form');
var resultText = document.querySelector('#city-name-text')
var savedSearchEl= document.getElementById("#list-group-item")
var citySearchList = document.getElementById("#saved-search-list")


// function getParams() {

// var searchParamsArr = document.location.search.split('&');
// var query = searchParamsArr[0].split('=').pop();
// vart  = searchParamsArr[1].split('=').pop();

//   getCityWeather(query);

// }
// function displayWeatherResults(resultObj) {
//  console.log(resultObj);
    
// }
//  weatherElement.innerHTML= '<img src="assets/images/weatherAppimgSml.png"/>'

//  var cityNameText = document.createElement("div");
//  cityNameText.textContent = "This is some weather data";

// }

function getWeatherForecast () {

var cityInputVal = document.querySelector("#city-input").value;
var appidKey = "097dc737a3f579f2c4a7d1902160dc4e"
var openWeatherUrl = "https://api.openweathermap.org/data/2.5/forecast?q=" + cityInputVal + "&appid=" + appidKey ;

    fetch(openWeatherUrl)
    .then(function (response) {
      if (!response.ok) {
        throw response.json();
      }
      return response.json();
    })
    .then(function (locRes) {

    var  resultTextEl.textContent = locRes.search.query;

      console.log(locRes);

      if (!locRes.results.length) {
        console.log('No results found!');
        resultContentEl.innerHTML = '<h3>No results found, search again!</h3>';
      } else {
        resultContentEl.textContent = '';
        for (var i = 0; i < locRes.results.length; i++) {
          displayWeatherResults(locRes.results[i]);
        }
      }
    })
    .catch(function (error) {
      console.error(error);
    });
}


function findCityOnSubmit(event) {
  event.preventDefault();

  var appidKey = "097dc737a3f579f2c4a7d1902160dc4e"
  var cityInputVal = document.querySelector('#cityInputVal').value;
  

  if (cityInputVal) {
    console.log("city input successful")
  } else {
    console.error('You need a search input value');
    return;
  }

  getWeather(cityInputVal)
}
  
 searchFormEl.addEventListener('submit', findCityOnSubmit);
  
getWeatherForecast();